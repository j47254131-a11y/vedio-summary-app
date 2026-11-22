export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST 요청만 허용됩니다." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "서버에 GEMINI_API_KEY 환경 변수가 설정되지 않았습니다. Vercel 설정을 확인해 주세요."
    });
  }

  try {
    const { youtubeUrl } = req.body || {};
    if (!youtubeUrl) {
      return res.status(400).json({ error: "유튜브 링크(youtubeUrl)가 필요합니다." });
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

    const promptText = `
이 유튜브 영상의 내용을 꼼꼼히 분석해서 한국어로 다음 항목을 JSON 형식으로 작성해 줘.
1. easySummary: 영상의 핵심 내용을 비전공자나 학생도 쉽게 이해할 수 있도록 친절하고 명확하게 정리한 설명 (3~4문단 내외)
2. analogy: 초등학생도 한 번에 이해할 수 있도록 일상생활 속 사물이나 상황에 빗댄 쉬운 비유 및 예시 (2~3문장)
3. takeaways: 영상에서 꼭 기억해야 할 핵심 포인트 3줄 요약 (정확히 3개의 문장 배열)
4. cardNews: 인스타그램/SNS에 바로 올릴 수 있도록 영상 내용을 잘 보여주는 4장짜리 카드뉴스 구성안 (정확히 4개의 슬라이드 객체 배열)
   - slideNumber: 1부터 4까지의 숫자
   - title: 시선을 사로잡는 카드뉴스 헤드라인 (15자 내외)
   - body: 카드뉴스 본문에 들어갈 핵심 문구 (2~3문장, 간결하고 읽기 쉽게)
   - visualIdea: 해당 장에 어울리는 배경 이미지, 일러스트, 아이콘 등 추천 시각 아이디어
    `.trim();

    const requestBody = {
      contents: [
        {
          parts: [
            {
              fileData: {
                fileUri: youtubeUrl
              }
            },
            {
              text: promptText
            }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            easySummary: { type: "STRING" },
            analogy: { type: "STRING" },
            takeaways: {
              type: "ARRAY",
              items: { type: "STRING" }
            },
            cardNews: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  slideNumber: { type: "INTEGER" },
                  title: { type: "STRING" },
                  body: { type: "STRING" },
                  visualIdea: { type: "STRING" }
                },
                required: ["slideNumber", "title", "body", "visualIdea"]
              }
            }
          },
          required: ["easySummary", "analogy", "takeaways", "cardNews"]
        }
      }
    };

    const geminiResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      return res.status(geminiResponse.status).json({
        error: data?.error?.message || "Gemini API 호출 중 오류가 발생했습니다."
      });
    }

    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      return res.status(502).json({
        error: "Gemini로부터 유효한 분석 결과를 받지 못했습니다. 공개 영상인지 확인해 주세요."
      });
    }

    const cleanedJson = rawText.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
    const parsedResult = JSON.parse(cleanedJson);

    return res.status(200).json(parsedResult);
  } catch (err) {
    return res.status(500).json({
      error: err?.message || "서버 처리 중 알 수 없는 오류가 발생했습니다."
    });
  }
}
