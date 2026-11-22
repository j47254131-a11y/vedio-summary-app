<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>유튜브 AI 요약 & 카드뉴스 생성기</title>
  <style>
    :root {
      --bg: #f4f6fb;
      --surface: #ffffff;
      --text-main: #1e2433;
      --text-sub: #5c657d;
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --primary-light: #eef2ff;
      --accent-red: #ef4444;
      --border: #e2e8f0;
      --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.05);
      --shadow-md: 0 10px 25px rgba(15, 23, 42, 0.08);
      --radius-lg: 18px;
      --radius-md: 12px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.65;
      padding: 24px 16px 64px;
    }

    .container {
      max-width: 920px;
      margin: 0 auto;
    }

    /* 헤더 */
    header {
      text-align: center;
      margin-bottom: 28px;
    }

    .badge {
      display: inline-block;
      background: var(--primary-light);
      color: var(--primary);
      font-size: 0.82rem;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 999px;
      margin-bottom: 10px;
    }

    header h1 {
      font-size: 1.85rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
    }

    header p {
      color: var(--text-sub);
      font-size: 0.98rem;
    }

    /* 입력 패널 */
    .panel {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 24px;
      box-shadow: var(--shadow-md);
      margin-bottom: 24px;
    }

    .form-group {
      margin-bottom: 18px;
    }

    .form-group:last-child {
      margin-bottom: 0;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.92rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--text-main);
    }

    label span.hint {
      font-weight: 400;
      font-size: 0.82rem;
      color: var(--text-sub);
    }

    .input-row {
      display: flex;
      gap: 10px;
    }

    input[type="password"],
    input[type="text"],
    input[type="url"] {
      width: 100%;
      padding: 13px 16px;
      font-size: 0.96rem;
      border: 1.5px solid var(--border);
      border-radius: var(--radius-md);
      background: #fafbfe;
      color: var(--text-main);
      transition: all 0.2s ease;
    }

    input:focus {
      outline: none;
      border-color: var(--primary);
      background: #ffffff;
      box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
    }

    .toggle-key-btn {
      flex-shrink: 0;
      padding: 0 14px;
      border: 1.5px solid var(--border);
      border-radius: var(--radius-md);
      background: #ffffff;
      color: var(--text-sub);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .toggle-key-btn:hover {
      background: #f8fafc;
      color: var(--text-main);
    }

    /* 유튜브 썸네일 미리보기 */
    .preview-box {
      display: none;
      margin-top: 14px;
      padding: 14px;
      border-radius: var(--radius-md);
      background: #f8fafc;
      border: 1px solid var(--border);
      align-items: center;
      gap: 16px;
      animation: fadeIn 0.25s ease;
    }

    .preview-box.active {
      display: flex;
    }

    .preview-box img {
      width: 150px;
      height: 86px;
      object-fit: cover;
      border-radius: 8px;
      background: #e2e8f0;
      flex-shrink: 0;
    }

    .preview-info {
      overflow: hidden;
    }

    .preview-status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.82rem;
      font-weight: 700;
      color: #059669;
      background: #ecfdf5;
      padding: 3px 10px;
      border-radius: 999px;
      margin-bottom: 6px;
    }

    .preview-url {
      font-size: 0.86rem;
      color: var(--text-sub);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .url-error-text {
      display: none;
      margin-top: 8px;
      font-size: 0.85rem;
      color: var(--accent-red);
      font-weight: 500;
    }

    .url-error-text.active {
      display: block;
    }

    /* 실행 버튼 */
    .submit-btn {
      width: 100%;
      margin-top: 18px;
      padding: 15px 20px;
      font-size: 1.02rem;
      font-weight: 700;
      color: #ffffff;
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      border: none;
      border-radius: var(--radius-md);
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(79, 70, 229, 0.28);
      transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.2s ease;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 8px 22px rgba(79, 70, 229, 0.36);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    /* 로딩 상태 */
    .loading-box {
      display: none;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 36px 20px;
      text-align: center;
      box-shadow: var(--shadow-sm);
      margin-bottom: 24px;
    }

    .loading-box.active {
      display: block;
      animation: fadeIn 0.25s ease;
    }

    .spinner {
      width: 42px;
      height: 42px;
      border: 4px solid var(--primary-light);
      border-top-color: var(--primary);
      border-radius: 50%;
      margin: 0 auto 14px;
      animation: spin 0.85s linear infinite;
    }

    .loading-box p {
      font-weight: 700;
      color: var(--text-main);
      font-size: 1.02rem;
    }

    .loading-box span {
      display: block;
      margin-top: 4px;
      font-size: 0.86rem;
      color: var(--text-sub);
    }

    /* 에러 알림 박스 */
    .alert-box {
      display: none;
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #991b1b;
      border-radius: var(--radius-md);
      padding: 16px 18px;
      margin-bottom: 24px;
      font-size: 0.94rem;
    }

    .alert-box.active {
      display: block;
      animation: fadeIn 0.25s ease;
    }

    .alert-box strong {
      display: block;
      margin-bottom: 4px;
    }

    /* 결과 영역 */
    .results-section {
      display: none;
      flex-direction: column;
      gap: 20px;
    }

    .results-section.active {
      display: flex;
      animation: fadeIn 0.35s ease;
    }

    .result-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 24px;
      box-shadow: var(--shadow-md);
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }

    .card-title {
      font-size: 1.18rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .copy-btn {
      padding: 6px 12px;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--primary);
      background: var(--primary-light);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .copy-btn:hover {
      background: #e0e7ff;
    }

    /* 카드 1: 쉬운 말 해설 */
    .easy-summary-text {
      font-size: 1rem;
      color: var(--text-main);
      white-space: pre-line;
    }

    .analogy-box {
      margin-top: 14px;
      padding: 14px 16px;
      border-radius: var(--radius-md);
      background: #fffbeb;
      border: 1px solid #fde68a;
      color: #78350f;
      font-size: 0.94rem;
    }

    .analogy-box strong {
      display: block;
      margin-bottom: 4px;
      color: #92400e;
    }

    /* 카드 2: 핵심 3줄 요약 */
    .takeaway-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .takeaway-list li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: #f8fafc;
      padding: 13px 16px;
      border-radius: var(--radius-md);
      border: 1px solid var(--border);
      font-size: 0.97rem;
      font-weight: 500;
    }

    .takeaway-num {
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: var(--primary);
      color: #ffffff;
      font-size: 0.82rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
    }

    /* 카드 3: SNS 카드뉴스 4장 그리드 */
    .cardnews-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .slide-card {
      position: relative;
      border-radius: 16px;
      padding: 22px 20px;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 250px;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
      overflow: hidden;
    }

    .slide-card:nth-child(1) {
      background: linear-gradient(145deg, #312e81, #4f46e5);
    }
    .slide-card:nth-child(2) {
      background: linear-gradient(145deg, #0f766e, #0d9488);
    }
    .slide-card:nth-child(3) {
      background: linear-gradient(145deg, #1e3a8a, #2563eb);
    }
    .slide-card:nth-child(4) {
      background: linear-gradient(145deg, #7c2d12, #ea580c);
    }

    .slide-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .slide-badge {
      background: rgba(255, 255, 255, 0.22);
      backdrop-filter: blur(4px);
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    .slide-title {
      font-size: 1.15rem;
      font-weight: 800;
      line-height: 1.38;
      margin-bottom: 10px;
      word-break: keep-all;
    }

    .slide-body {
      font-size: 0.93rem;
      line-height: 1.55;
      color: rgba(255, 255, 255, 0.93);
      margin-bottom: 16px;
      word-break: keep-all;
    }

    .slide-visual-tip {
      background: rgba(0, 0, 0, 0.22);
      border-radius: 10px;
      padding: 10px 12px;
      font-size: 0.82rem;
      line-height: 1.45;
      color: rgba(255, 255, 255, 0.9);
    }

    .slide-visual-tip strong {
      display: block;
      font-size: 0.76rem;
      text-transform: uppercase;
      opacity: 0.85;
      margin-bottom: 2px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 700px) {
      header h1 {
        font-size: 1.48rem;
      }
      .cardnews-grid {
        grid-template-columns: 1fr;
      }
      .preview-box {
        flex-direction: column;
        align-items: flex-start;
      }
      .preview-box img {
        width: 100%;
        height: 170px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <span class="badge">Gemini AI Video Analyzer</span>
      <h1>유튜브 AI 쉬운 요약 & 카드뉴스 생성기</h1>
      <p>유튜브 링크만 붙여넣으면 영상을 분석해 이해하기 쉬운 요약과 4장짜리 카드뉴스를 만들어 드립니다.</p>
    </header>

    <!-- 입력 영역 -->
    <section class="panel">
      <div class="form-group">
        <label for="apiKeyInput">
          <span>🔑 Google Gemini API Key</span>
          <span class="hint">브라우저에서만 사용되며 서버에 저장되지 않습니다</span>
        </label>
        <div class="input-row">
          <input
            type="password"
            id="apiKeyInput"
            placeholder="AIzaSy... 형태의 Gemini API 키를 입력하세요"
            autocomplete="off"
          />
          <button type="button" class="toggle-key-btn" id="toggleKeyBtn">보기</button>
        </div>
      </div>

      <div class="form-group">
        <label for="youtubeUrlInput">
          <span>🎬 유튜브 링크 (URL)</span>
          <span class="hint">일반 영상, 단축 링크(youtu.be), Shorts 지원</span>
        </label>
        <input
          type="url"
          id="youtubeUrlInput"
          placeholder="https://www.youtube.com/watch?v=... 또는 https://youtu.be/..."
        />
        <p class="url-error-text" id="urlErrorText">올바른 유튜브 영상 주소를 입력해 주세요.</p>

        <!-- 썸네일 미리보기 -->
        <div class="preview-box" id="previewBox">
          <img id="thumbnailImg" src="" alt="유튜브 영상 썸네일 미리보기" />
          <div class="preview-info">
            <div class="preview-status">✓ 유효한 유튜브 링크가 확인되었습니다</div>
            <div class="preview-url" id="previewUrlText"></div>
          </div>
        </div>
      </div>

      <button type="button" class="submit-btn" id="analyzeBtn">
        ✨ 유튜브 분석 & 카드뉴스 생성하기
      </button>
    </section>

    <!-- 로딩 표시 -->
    <div class="loading-box" id="loadingBox">
      <div class="spinner"></div>
      <p>Gemini가 유튜브 영상을 보고 내용을 분석 중입니다...</p>
      <span>영상 길이에 따라 10~30초 정도 걸릴 수 있습니다.</span>
    </div>

    <!-- 에러 메시지 -->
    <div class="alert-box" id="alertBox">
      <strong id="alertTitle">오류가 발생했습니다</strong>
      <span id="alertMessage"></span>
    </div>

    <!-- 결과 출력 영역 -->
    <section class="results-section" id="resultsSection">
      <!-- 카드 1: 이해하기 쉬운 내용 요약 -->
      <article class="result-card">
        <div class="card-header">
          <h2 class="card-title">💡 이해하기 쉬운 내용 요약</h2>
          <button type="button" class="copy-btn" data-copy="easy">텍스트 복사</button>
        </div>
        <div class="easy-summary-text" id="easySummaryContent"></div>
        <div class="analogy-box" id="analogyBox">
          <strong>🎈 초등학생도 이해하는 쉬운 비유</strong>
          <span id="analogyContent"></span>
        </div>
      </article>

      <!-- 카드 2: 핵심 포인트 3줄 요약 -->
      <article class="result-card">
        <div class="card-header">
          <h2 class="card-title">📌 핵심 포인트 3줄 요약</h2>
          <button type="button" class="copy-btn" data-copy="takeaways">텍스트 복사</button>
        </div>
        <ul class="takeaway-list" id="takeawayList"></ul>
      </article>

      <!-- 카드 3: SNS 카드뉴스용 콘텐츠 -->
      <article class="result-card">
        <div class="card-header">
          <h2 class="card-title">📱 유튜브 내용을 잘 보여주는 카드뉴스 (4장 구성)</h2>
          <button type="button" class="copy-btn" data-copy="cardnews">전체 구성 복사</button>
        </div>
        <div class="cardnews-grid" id="cardnewsGrid"></div>
      </article>
    </section>
  </div>

  <script>
    const apiKeyInput = document.getElementById("apiKeyInput");
    const toggleKeyBtn = document.getElementById("toggleKeyBtn");
    const youtubeUrlInput = document.getElementById("youtubeUrlInput");
    const urlErrorText = document.getElementById("urlErrorText");
    const previewBox = document.getElementById("previewBox");
    const thumbnailImg = document.getElementById("thumbnailImg");
    const previewUrlText = document.getElementById("previewUrlText");
    const analyzeBtn = document.getElementById("analyzeBtn");

    const loadingBox = document.getElementById("loadingBox");
    const alertBox = document.getElementById("alertBox");
    const alertTitle = document.getElementById("alertTitle");
    const alertMessage = document.getElementById("alertMessage");
    const resultsSection = document.getElementById("resultsSection");

    const easySummaryContent = document.getElementById("easySummaryContent");
    const analogyContent = document.getElementById("analogyContent");
    const takeawayList = document.getElementById("takeawayList");
    const cardnewsGrid = document.getElementById("cardnewsGrid");

    let latestResultData = null;

    // API Key 보기/숨기기 토글
    toggleKeyBtn.addEventListener("click", () => {
      const isPassword = apiKeyInput.type === "password";
      apiKeyInput.type = isPassword ? "text" : "password";
      toggleKeyBtn.textContent = isPassword ? "숨기기" : "보기";
    });

    // 유튜브 Video ID 추출 함수 (watch, youtu.be, shorts, embed 지원)
    function extractYouTubeVideoId(urlString) {
      if (!urlString) return null;
      const trimmed = urlString.trim();

      try {
        const parsed = new URL(trimmed);
        const host = parsed.hostname.replace(/^www\./, "").toLowerCase();

        // youtu.be/VIDEO_ID
        if (host === "youtu.be") {
          const id = parsed.pathname.split("/").filter(Boolean)[0];
          return isValidVideoId(id) ? id : null;
        }

        // youtube.com 또는 m.youtube.com
        if (host === "youtube.com" || host === "m.youtube.com") {
          // /watch?v=VIDEO_ID
          if (parsed.pathname === "/watch") {
            const id = parsed.searchParams.get("v");
            return isValidVideoId(id) ? id : null;
          }
          // /shorts/VIDEO_ID 또는 /embed/VIDEO_ID 또는 /live/VIDEO_ID
          const parts = parsed.pathname.split("/").filter(Boolean);
          if (parts.length >= 2 && ["shorts", "embed", "live", "v"].includes(parts[0])) {
            return isValidVideoId(parts[1]) ? parts[1] : null;
          }
        }
      } catch (e) {
        return null;
      }
      return null;
    }

    function isValidVideoId(id) {
      return typeof id === "string" && /^[a-zA-Z0-9_-]{11}$/.test(id);
    }

    // 표준 유튜브 URL로 정규화
    function getNormalizedYouTubeUrl(videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }

    // 입력 시 실시간 썸네일 미리보기 업데이트
    youtubeUrlInput.addEventListener("input", () => {
      const rawValue = youtubeUrlInput.value.trim();

      if (!rawValue) {
        previewBox.classList.remove("active");
        urlErrorText.classList.remove("active");
        return;
      }

      const videoId = extractYouTubeVideoId(rawValue);
      if (videoId) {
        const normalizedUrl = getNormalizedYouTubeUrl(videoId);
        thumbnailImg.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        previewUrlText.textContent = normalizedUrl;
        previewBox.classList.add("active");
        urlErrorText.classList.remove("active");
      } else {
        previewBox.classList.remove("active");
        urlErrorText.classList.add("active");
      }
    });

    // 알림 표시/숨김 도우미
    function showAlert(title, message) {
      alertTitle.textContent = title;
      alertMessage.textContent = message;
      alertBox.classList.add("active");
    }

    function hideAlert() {
      alertBox.classList.remove("active");
    }

    // API 오류 메시지를 사용자 친화적으로 변환
    function formatApiError(status, apiErrorObj) {
      const rawMsg = apiErrorObj?.error?.message || "";
      const lower = rawMsg.toLowerCase();

      if (status === 400 && (lower.includes("api key") || lower.includes("api_key_invalid"))) {
        return "입력하신 Gemini API Key가 올바르지 않습니다. 키 값을 다시 확인해 주세요.";
      }
      if (status === 403) {
        return "API Key 권한이 없거나 비공개/연령 제한 유튜브 영상이라 접근할 수 없습니다.";
      }
      if (status === 404) {
        return "요청한 Gemini 모델(gemini-3.8-flash) 또는 영상을 찾을 수 없습니다. API 키와 영상 공개 상태를 확인해 주세요.";
      }
      if (status === 429) {
        return "API 호출 한도(Quota)를 초과했습니다. 잠시 후 다시 시도하거나 API 사용량을 확인해 주세요.";
      }
      if (lower.includes("video") || lower.includes("file") || lower.includes("uri")) {
        return `유튜브 영상을 불러오는 중 문제가 발생했습니다. 공개된 영상인지 확인해 주세요. (${rawMsg})`;
      }
      return rawMsg || `요청 처리 중 오류가 발생했습니다. (HTTP 상태 코드: ${status})`;
    }

    // 분석 버튼 클릭 핸들러
    analyzeBtn.addEventListener("click", async () => {
      hideAlert();

      const apiKey = apiKeyInput.value.trim();
      const rawUrl = youtubeUrlInput.value.trim();
      const videoId = extractYouTubeVideoId(rawUrl);

      if (!apiKey) {
        showAlert("API Key가 필요합니다", "상단 입력창에 Google Gemini API Key를 먼저 입력해 주세요.");
        apiKeyInput.focus();
        return;
      }

      if (!videoId) {
        urlErrorText.classList.add("active");
        showAlert("유튜브 링크를 확인해 주세요", "올바른 유튜브 영상 URL(youtube.com/watch?v=..., youtu.be/..., shorts 등)을 입력해 주세요.");
        youtubeUrlInput.focus();
        return;
      }

      const youtubeUrl = getNormalizedYouTubeUrl(videoId);

      // UI 상태 전환
      analyzeBtn.disabled = true;
      resultsSection.classList.remove("active");
      loadingBox.classList.add("active");

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

      const promptText = `
이 유튜브 영상의 내용을 꼼꼼히 분석해서 한국어로 다음 3가지 항목을 JSON 형식으로 작성해 줘.
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

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(formatApiError(response.status, data));
        }

        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) {
          throw new Error("Gemini로부터 유효한 분석 결과를 받지 못했습니다. 영상이 비공개이거나 자막/음성 분석이 제한된 영상일 수 있습니다.");
        }

        // 혹시 코드블록(```json ... ```)이 섞여 나올 경우 대비해 정리 후 파싱
        const cleanedJson = rawText.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
        const parsedResult = JSON.parse(cleanedJson);

        latestResultData = parsedResult;
        renderResults(parsedResult);
      } catch (error) {
        if (error instanceof SyntaxError) {
          showAlert("결과 변환 오류", "AI 응답을 화면에 표시하는 중 데이터 형식 오류가 발생했습니다. 다시 한 번 시도해 주세요.");
        } else if (error.name === "TypeError" && error.message.includes("fetch")) {
          showAlert("네트워크 연결 오류", "인터넷 연결을 확인하거나 브라우저 보안 설정을 확인해 주세요.");
        } else {
          showAlert("영상 분석 실패", error.message);
        }
      } finally {
        loadingBox.classList.remove("active");
        analyzeBtn.disabled = false;
      }
    });

    // 결과 렌더링 함수
    function renderResults(result) {
      // 카드 1: 쉬운 말 해설 & 비유
      easySummaryContent.textContent = result.easySummary || "요약 내용이 없습니다.";
      analogyContent.textContent = result.analogy || "비유 설명이 없습니다.";

      // 카드 2: 핵심 3줄 요약
      takeawayList.innerHTML = "";
      const takeaways = Array.isArray(result.takeaways) ? result.takeaways.slice(0, 3) : [];
      takeaways.forEach((item, index) => {
        const li = document.createElement("li");
        const numBadge = document.createElement("span");
        numBadge.className = "takeaway-num";
        numBadge.textContent = index + 1;

        const textSpan = document.createElement("span");
        textSpan.textContent = item;

        li.appendChild(numBadge);
        li.appendChild(textSpan);
        takeawayList.appendChild(li);
      });

      // 카드 3: 4장 카드뉴스
      cardnewsGrid.innerHTML = "";
      const slides = Array.isArray(result.cardNews) ? result.cardNews.slice(0, 4) : [];
      slides.forEach((slide, idx) => {
        const slideEl = document.createElement("div");
        slideEl.className = "slide-card";

        const topDiv = document.createElement("div");
        topDiv.className = "slide-top";

        const badge = document.createElement("span");
        badge.className = "slide-badge";
        badge.textContent = `SLIDE ${slide.slideNumber || idx + 1} / 4`;
        topDiv.appendChild(badge);

        const contentDiv = document.createElement("div");
        const titleEl = document.createElement("h3");
        titleEl.className = "slide-title";
        titleEl.textContent = slide.title || "";

        const bodyEl = document.createElement("p");
        bodyEl.className = "slide-body";
        bodyEl.textContent = slide.body || "";

        contentDiv.appendChild(titleEl);
        contentDiv.appendChild(bodyEl);

        const visualDiv = document.createElement("div");
        visualDiv.className = "slide-visual-tip";

        const visualLabel = document.createElement("strong");
        visualLabel.textContent = "🎨 추천 시각·이미지 아이디어";

        const visualText = document.createElement("span");
        visualText.textContent = slide.visualIdea || "";

        visualDiv.appendChild(visualLabel);
        visualDiv.appendChild(visualText);

        slideEl.appendChild(topDiv);
        slideEl.appendChild(contentDiv);
        slideEl.appendChild(visualDiv);

        cardnewsGrid.appendChild(slideEl);
      });

      resultsSection.classList.add("active");
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // 카드별 텍스트 복사 기능
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!latestResultData) return;
        const type = btn.dataset.copy;
        let textToCopy = "";

        if (type === "easy") {
          textToCopy = `[이해하기 쉬운 내용 요약]\n${latestResultData.easySummary}\n\n[초등학생도 이해하는 쉬운 비유]\n${latestResultData.analogy}`;
        } else if (type === "takeaways") {
          textToCopy = `[핵심 포인트 3줄 요약]\n` + (latestResultData.takeaways || []).map((t, i) => `${i + 1}. ${t}`).join("\n");
        } else if (type === "cardnews") {
          textToCopy = `[SNS 카드뉴스 4장 구성안]\n\n` + (latestResultData.cardNews || [])
            .map((s, i) => `[슬라이드 ${s.slideNumber || i + 1}] ${s.title}\n- 본문: ${s.body}\n- 시각화 아이디어: ${s.visualIdea}`)
            .join("\n\n");
        }

        try {
          await navigator.clipboard.writeText(textToCopy);
          const originalText = btn.textContent;
          btn.textContent = "복사 완료!";
          setTimeout(() => {
            btn.textContent = originalText;
          }, 1500);
        } catch (err) {
          alert("클립보드 복사에 실패했습니다.");
        }
      });
    });
  </script>
</body>
</html>
