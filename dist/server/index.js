const STATIC_HTML="<!doctype html>\r\n<html lang=\"ko\">\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\r\n  <meta name=\"theme-color\" content=\"#123f4e\">\r\n  <meta name=\"description\" content=\"사진으로 분리배출 방법을 확인하고 광산구 배출 일정과 종량제봉투 판매소를 찾아보세요.\">\r\n  <title>광산 생활배출 길잡이</title>\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\">\r\n  <link rel=\"stylesheet\" href=\"/styles.css\">\r\n</head>\r\n<body>\r\n<div class=\"app-shell\">\r\n  <header class=\"topbar\">\r\n    <button class=\"brand\" type=\"button\" data-open=\"home\" aria-label=\"홈으로 이동\">\r\n      <span class=\"brand-mark\">✓</span><span><strong>광산 생활배출</strong><small>버릴 때 바로 보는 길잡이</small></span>\r\n    </button>\r\n    <a class=\"agency-link\" href=\"https://www.gsfmc.or.kr/html/03030100\" target=\"_blank\" rel=\"noopener\">공단 안내</a>\r\n  </header>\r\n\r\n  <main>\r\n    <section id=\"home\" class=\"view home-view\">\r\n      <div class=\"hero\">\r\n        <p class=\"eyebrow\">광산구 생활폐기물 안내</p>\r\n        <h1>이거 어떻게 버리지?<br><span>사진 한 장이면 돼요.</span></h1>\r\n        <p>사진 속 물건과 재질을 AI가 직접 살펴보고, 분리 순서까지 쉽게 설명해 드려요.</p>\r\n      </div>\r\n      <div class=\"feature-grid\">\r\n        <button class=\"feature-card photo-card\" type=\"button\" data-open=\"photo\">\r\n          <span class=\"feature-icon\">⌁</span><span class=\"feature-tag\">핵심 기능</span>\r\n          <strong>사진 찍고<br>분리배출 확인</strong>\r\n          <small>사진 속 물건·재질을 직접 분석해요</small><b>시작하기 →</b>\r\n        </button>\r\n        <button class=\"feature-card schedule-card\" type=\"button\" data-open=\"schedule\">\r\n          <span class=\"feature-icon\">▤</span><strong>오늘 우리동네<br>뭐 버리는 날?</strong>\r\n          <small>동네별 배출일을 확인해요</small><b>확인하기 →</b>\r\n        </button>\r\n        <button class=\"feature-card store-card\" type=\"button\" data-open=\"stores\">\r\n          <span class=\"feature-icon\">⌖</span><strong>가까운 종량제봉투<br>판매소</strong>\r\n          <small>공공데이터로 위치를 찾아요</small><b>찾아보기 →</b>\r\n        </button>\r\n      </div>\r\n    </section>\r\n\r\n    <section id=\"photo\" class=\"view workspace\" hidden>\r\n      <div class=\"view-head\">\r\n        <button class=\"back\" type=\"button\" data-open=\"home\" aria-label=\"홈으로 돌아가기\">‹</button>\r\n        <div><p class=\"eyebrow\">01 · AI 사진 안내</p><h2>사진 찍고 분리배출 확인</h2><p>한 물건이 화면에 크게 보이도록 찍어 주세요.</p></div>\r\n      </div>\r\n      <div class=\"photo-grid\">\r\n        <div class=\"panel upload-panel\">\r\n          <div id=\"drop-zone\" class=\"drop-zone\">\r\n            <div id=\"preview-wrap\" class=\"preview-wrap\" hidden><img id=\"preview-img\" alt=\"분석할 물건 사진\"><button id=\"remove-photo\" type=\"button\" aria-label=\"사진 지우기\">×</button></div>\r\n            <div id=\"upload-empty\" class=\"upload-empty\"><span>＋</span><strong>어떤 물건을 버리시나요?</strong><small>사진을 찍거나 앨범에서 골라 주세요.</small></div>\r\n          </div>\r\n          <div class=\"upload-actions\">\r\n            <label class=\"btn primary\" for=\"camera-input\">사진 찍기<input id=\"camera-input\" type=\"file\" accept=\"image/*\" capture=\"environment\" hidden></label>\r\n            <label class=\"btn secondary\" for=\"upload-input\">사진 올리기<input id=\"upload-input\" type=\"file\" accept=\"image/*\" hidden></label>\r\n          </div>\r\n          <p class=\"privacy-note\">선택한 사진은 분석을 위해 암호화된 연결로 AI 서비스에 전송됩니다. 이 앱은 사진을 따로 저장하지 않습니다.</p>\r\n          <div id=\"ai-status\" class=\"status\" role=\"status\" aria-live=\"polite\"></div>\r\n        </div>\r\n        <div class=\"panel help-panel\">\r\n          <div class=\"help-copy\"><span class=\"help-icon\">AI</span><div><strong>사진을 직접 이해해요</strong><p>미리 저장된 사진과 비교하지 않습니다. 물건, 보이는 재질과 부품을 함께 살펴 단계별로 안내합니다.</p></div></div>\r\n          <ol class=\"mini-steps\"><li><b>1</b><span>물건과 재질 확인</span></li><li><b>2</b><span>분리할 부분 찾기</span></li><li><b>3</b><span>처리·배출 순서 안내</span></li></ol>\r\n          <div class=\"manual-search\">\r\n            <label for=\"item-search\">사진 없이 품목 찾기</label>\r\n            <input id=\"item-search\" type=\"search\" placeholder=\"예: 우산, 보조배터리, 배달용기\">\r\n            <div id=\"search-results\" class=\"search-results\"></div>\r\n          </div>\r\n          <div><p class=\"label\">많이 찾는 품목</p><div id=\"popular-list\" class=\"chips\"></div></div>\r\n        </div>\r\n      </div>\r\n      <section id=\"result-panel\" class=\"result-panel\" hidden aria-live=\"polite\"></section>\r\n    </section>\r\n\r\n    <section id=\"schedule\" class=\"view workspace\" hidden>\r\n      <div class=\"view-head\"><button class=\"back\" type=\"button\" data-open=\"home\">‹</button><div><p class=\"eyebrow\">02 · 배출 일정</p><h2>오늘 우리동네 뭐 버리는 날?</h2><p>공단의 동별 수거 자료를 받으면 바로 연결할 예정입니다.</p></div></div>\r\n      <div class=\"panel empty-panel\"><span class=\"empty-glyph\">▤</span><strong>수거 일정 자료 연결 준비 중</strong><p>동별 생활쓰레기·음식물·재활용품 수거 자료를 받으면 오늘 배출 품목부터 보여드릴게요.</p></div>\r\n    </section>\r\n\r\n    <section id=\"stores\" class=\"view workspace\" hidden>\r\n      <div class=\"view-head\"><button class=\"back\" type=\"button\" data-open=\"home\">‹</button><div><p class=\"eyebrow\">03 · 공공데이터</p><h2>가까운 종량제봉투 판매소</h2><p>공공데이터포털의 표준데이터에서 광산구 판매소를 불러옵니다.</p></div></div>\r\n      <div class=\"store-grid\">\r\n        <div class=\"panel store-panel\">\r\n          <div class=\"location-controls\">\r\n            <button id=\"use-location\" class=\"btn primary\" type=\"button\">내 위치로 찾기</button>\r\n            <div><input id=\"address-input\" type=\"search\" placeholder=\"광산구 주소 또는 동 이름\"><button id=\"search-address\" class=\"btn secondary\" type=\"button\">주소로 찾기</button></div>\r\n          </div>\r\n          <div id=\"location-status\" class=\"status\" role=\"status\" aria-live=\"polite\">공식 판매소 자료를 불러오고 있어요…</div>\r\n          <div id=\"store-list\" class=\"store-list\"><div class=\"loading-card\"></div><div class=\"loading-card\"></div><div class=\"loading-card\"></div></div>\r\n          <p id=\"store-source\" class=\"source-note\"></p>\r\n        </div>\r\n        <div class=\"panel map-panel\">\r\n          <div class=\"map-head\"><strong id=\"map-store-name\">판매소를 선택해 주세요</strong><span id=\"map-address\">목록에서 판매소를 누르면 지도를 보여드려요.</span></div>\r\n          <iframe id=\"store-map\" title=\"판매소 지도\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n          <div id=\"map-placeholder\" class=\"map-placeholder\"><span>⌖</span><strong>판매소 위치</strong><small>목록에서 한 곳을 선택해 주세요.</small></div>\r\n          <a id=\"map-directions\" class=\"btn secondary directions\" target=\"_blank\" rel=\"noopener\" hidden>길찾기 열기</a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n  <nav class=\"bottom-nav\" aria-label=\"주요 메뉴\">\r\n    <button type=\"button\" data-open=\"home\" class=\"active\"><span>●</span>홈</button>\r\n    <button type=\"button\" data-open=\"photo\"><span>⌁</span>사진 안내</button>\r\n    <button type=\"button\" data-open=\"schedule\"><span>▤</span>배출 일정</button>\r\n    <button type=\"button\" data-open=\"stores\"><span>⌖</span>판매소</button>\r\n  </nav>\r\n</div>\r\n<script src=\"/app.js\" defer></script>\r\n</body>\r\n</html>";
const STATIC_CSS=":root{font-family:\"Noto Sans KR\",system-ui,sans-serif;color:#173b43;background:#f4f7f6;font-synthesis:none}*{box-sizing:border-box}html,body{margin:0;min-height:100%;overscroll-behavior:none}button,input{font:inherit}button{cursor:pointer}.app-shell{height:100dvh;display:grid;grid-template-rows:78px minmax(0,1fr) 0}.topbar{width:min(1120px,calc(100% - 36px));margin:auto;display:flex;align-items:center;justify-content:space-between}.brand{display:flex;align-items:center;gap:10px;border:0;background:transparent;color:inherit;text-align:left}.brand-mark{display:grid;place-items:center;width:40px;height:40px;border-radius:13px;background:#156473;color:#fff;font-weight:800}.brand strong,.brand small{display:block}.brand strong{font-size:1.04rem}.brand small{font-size:.72rem;color:#6a858a;margin-top:2px}.agency-link{padding:9px 13px;border-radius:999px;background:#fff;border:1px solid #d7e5e4;color:#176372;font-size:.78rem;font-weight:700;text-decoration:none}main{width:min(1120px,calc(100% - 36px));margin:auto;height:100%;min-height:0}.view{height:100%;overflow:auto;padding:28px 0 44px;scrollbar-width:thin}.view[hidden]{display:none!important}.home-view{display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:50px;overflow:hidden}.eyebrow{font-size:.73rem;font-weight:800;letter-spacing:.06em;color:#188675;margin:0 0 10px}.hero h1{font-size:clamp(2.1rem,4.5vw,3.7rem);line-height:1.25;letter-spacing:-.07em;color:#123f4e;margin:0}.hero h1 span{color:#168676}.hero>p:last-child{max-width:510px;font-size:.98rem;line-height:1.8;color:#617d82;margin:18px 0 0}.feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.feature-card{min-height:220px;border:0;border-radius:24px;padding:24px;text-align:left;display:flex;flex-direction:column;align-items:flex-start;position:relative;overflow:hidden;transition:.2s transform,.2s box-shadow}.feature-card:hover{transform:translateY(-3px);box-shadow:0 16px 35px #143f4e1a}.photo-card{grid-row:span 2;min-height:454px;background:#123f4e;color:#fff}.schedule-card{background:#dff1ec;color:#174f52}.store-card{background:#fbe7c9;color:#634624}.feature-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:16px;background:#ffffff9c;font-size:1.35rem}.photo-card .feature-icon{background:#285c6a;color:#bff5df}.feature-tag{margin-top:28px;font-size:.72rem;font-weight:800;color:#a8f0d6}.feature-card strong{margin-top:auto;font-size:1.38rem;line-height:1.4;letter-spacing:-.04em}.photo-card strong{font-size:1.8rem}.feature-card small{font-size:.8rem;margin-top:8px;opacity:.75}.feature-card b{font-size:.78rem;margin-top:18px}.workspace{padding-top:34px}.view-head{display:flex;align-items:flex-start;gap:16px;margin-bottom:20px}.view-head .back{flex:0 0 auto;width:42px;height:42px;border:1px solid #dce9e7;background:#fff;border-radius:13px;color:#245762;font-size:1.8rem;line-height:1}.view-head h2{font-size:clamp(1.5rem,3vw,2.1rem);letter-spacing:-.05em;margin:0}.view-head div>p:last-child{font-size:.86rem;color:#6b8589;margin:6px 0 0}.panel{background:#fff;border:1px solid #e0ebea;border-radius:22px;box-shadow:0 8px 28px #143f4b0b}.photo-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.upload-panel,.help-panel,.store-panel{padding:22px}.drop-zone{height:280px;border:2px dashed #bfd6d3;border-radius:17px;background:#f6faf9;display:grid;place-items:center;overflow:hidden;position:relative}.drop-zone.drag{border-color:#168676;background:#e8f7f1}.upload-empty{text-align:center;display:flex;flex-direction:column;align-items:center;gap:7px;color:#70878b}.upload-empty>span{display:grid;place-items:center;width:62px;height:62px;border-radius:20px;background:#def0ea;color:#147a6c;font-size:2.2rem;margin-bottom:4px}.upload-empty strong{color:#254b53}.upload-empty small{font-size:.82rem}.preview-wrap{position:absolute;inset:0}.preview-wrap img{width:100%;height:100%;object-fit:contain;background:#edf4f2}.preview-wrap button{position:absolute;right:10px;top:10px;width:36px;height:36px;border:0;border-radius:50%;background:#143e4bd9;color:white;font-size:1.45rem}.upload-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:14px}.btn{min-height:47px;border-radius:12px;padding:11px 15px;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-weight:800;font-size:.88rem}.primary{background:#157d6f;color:#fff}.primary:hover{background:#10685e}.secondary{background:#edf5f2;border-color:#d4e6df;color:#176b61}.privacy-note,.source-note{font-size:.73rem;line-height:1.55;color:#74898d;margin:12px 0 0}.source-note a{color:#11746a}.status{min-height:22px;color:#486f75;font-size:.84rem;line-height:1.55;margin-top:10px}.status.error{color:#ad3d35}.status.busy:before{content:\"\";display:inline-block;width:12px;height:12px;margin-right:7px;border:2px solid #add6ca;border-top-color:#147d6f;border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.help-panel{display:flex;flex-direction:column;gap:22px}.help-copy{display:flex;gap:13px}.help-icon{flex:0 0 auto;width:45px;height:45px;display:grid;place-items:center;border-radius:14px;background:#123f4e;color:#aaf1d9;font-size:.8rem;font-weight:800}.help-copy strong{font-size:1rem}.help-copy p{font-size:.82rem;color:#698286;line-height:1.65;margin:6px 0 0}.mini-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:0;margin:0;list-style:none}.mini-steps li{border-radius:12px;background:#f2f7f6;padding:11px 9px;display:flex;align-items:center;gap:7px;font-size:.75rem;font-weight:700}.mini-steps b{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#dcefe9;color:#14786d}.manual-search label,.label{display:block;font-size:.8rem;font-weight:800;color:#365d64;margin:0 0 8px}.manual-search input,.location-controls input{width:100%;height:47px;border:1px solid #d5e3e2;border-radius:11px;padding:0 13px;outline:none}.manual-search input:focus,.location-controls input:focus{border-color:#178272;box-shadow:0 0 0 3px #17827218}.search-results{display:flex;flex-direction:column;gap:5px;margin-top:7px}.search-result{border:1px solid #dce8e6;background:#fff;border-radius:10px;padding:9px 11px;text-align:left;color:#23545b;font-size:.82rem;font-weight:700}.chips{display:flex;flex-wrap:wrap;gap:7px}.chip{border:1px solid #cfe1df;background:#f7faf9;color:#24595e;border-radius:999px;padding:8px 11px;font-size:.78rem;font-weight:700}.result-panel{margin-top:16px;background:#fff;border:1px solid #d8e7e3;border-radius:22px;padding:25px}.result-hero{display:flex;justify-content:space-between;gap:20px}.result-kicker{font-size:.76rem;color:#688388;margin:0}.result-hero h3{font-size:1.55rem;letter-spacing:-.04em;margin:5px 0}.result-summary{font-size:.86rem;line-height:1.65;color:#55767b;margin:0}.badges{display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}.badge{white-space:nowrap;border-radius:999px;background:#ddf1ea;color:#126b61;padding:7px 10px;font-size:.72rem;font-weight:800}.badge.low{background:#fff1d9;color:#8a5d18}.result-section{margin-top:20px}.result-section h4{font-size:.86rem;margin:0 0 9px;color:#315a61}.component-list{display:flex;flex-wrap:wrap;gap:7px}.component{padding:9px 11px;border-radius:10px;background:#f1f7f5;font-size:.8rem}.guide-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.guide-step{padding:15px;background:#f7faf9;border:1px solid #e5eeec;border-radius:14px}.guide-step small{color:#168072;font-weight:800}.guide-step strong{display:block;margin:7px 0;font-size:.91rem}.guide-step p{font-size:.78rem;line-height:1.6;color:#637e82;margin:0}.notice{margin-top:17px;border-radius:13px;padding:13px 15px;background:#fff3dd;color:#75531f;font-size:.79rem;line-height:1.6}.clarify{margin-top:17px;border-radius:13px;padding:14px;background:#edf6f4}.clarify strong{font-size:.84rem}.clarify ul{margin:7px 0 0;padding-left:18px;font-size:.8rem;line-height:1.7}.empty-panel{text-align:center;padding:70px 25px}.empty-glyph{display:grid;place-items:center;width:60px;height:60px;border-radius:19px;background:#e2f1ec;color:#168071;font-size:1.6rem;margin:0 auto 15px}.empty-panel strong{display:block}.empty-panel p{max-width:520px;margin:8px auto 0;color:#6c858a;font-size:.86rem;line-height:1.7}.store-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:16px;height:calc(100% - 100px)}.store-panel,.map-panel{min-height:0}.store-panel{display:flex;flex-direction:column}.location-controls{display:flex;gap:8px}.location-controls>div{display:flex;gap:7px;flex:1}.location-controls input{min-width:0}.store-list{overflow:auto;display:flex;flex-direction:column;gap:8px;margin-top:8px;padding-right:3px}.store-item{border:1px solid #e0eae8;background:#fff;border-radius:13px;padding:13px;text-align:left;display:flex;justify-content:space-between;gap:12px}.store-item:hover,.store-item.active{border-color:#168071;background:#f1faf7}.store-item strong,.store-item span{display:block}.store-item strong{font-size:.89rem}.store-item span{color:#6b8286;font-size:.75rem;line-height:1.5;margin-top:4px}.store-item em{font-style:normal;color:#14786c;font-size:.75rem;font-weight:800;white-space:nowrap}.loading-card{height:75px;border-radius:13px;background:linear-gradient(90deg,#f1f5f4 25%,#e5edeb 37%,#f1f5f4 63%);background-size:400% 100%;animation:shine 1.4s infinite}@keyframes shine{to{background-position:-100% 0}}.map-panel{position:relative;overflow:hidden;display:flex;flex-direction:column}.map-head{padding:17px 19px}.map-head strong,.map-head span{display:block}.map-head span{font-size:.76rem;color:#6b8388;margin-top:4px}.map-panel iframe{border:0;width:100%;flex:1;min-height:300px}.map-placeholder{position:absolute;inset:78px 0 0;background:#eef4f2;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#6e8589}.map-placeholder>span{font-size:2rem;color:#168071}.map-placeholder small{margin-top:6px}.directions{position:absolute;right:14px;bottom:14px;background:#fff}.source-note{margin-top:10px}.source-note a{text-underline-offset:3px}.bottom-nav{display:none}button:focus-visible,a:focus-visible,input:focus-visible{outline:3px solid #ffc46c;outline-offset:2px}\r\n@media(max-width:800px){.app-shell{grid-template-rows:66px minmax(0,1fr) 67px}.topbar,main{width:min(100% - 26px,680px)}.topbar{height:66px}.brand-mark{width:36px;height:36px}.brand strong{font-size:.94rem}.brand small{font-size:.65rem}.agency-link{font-size:.7rem;padding:8px 10px}.view{padding:18px 0 22px}.home-view{display:block;overflow:auto}.hero{padding:8px 2px 20px}.hero h1{font-size:2rem}.hero>p:last-child{font-size:.86rem;margin-top:12px}.feature-grid{grid-template-columns:1fr 1fr}.feature-card{min-height:154px;border-radius:19px;padding:18px}.photo-card{grid-row:auto;grid-column:1/-1;min-height:210px}.feature-icon{width:39px;height:39px;border-radius:13px}.feature-tag{position:absolute;right:17px;top:18px;margin:0}.feature-card strong,.photo-card strong{font-size:1.16rem}.feature-card small{font-size:.72rem}.feature-card b{margin-top:11px}.workspace{padding-top:15px}.view-head{margin-bottom:14px}.view-head .back{width:37px;height:37px}.view-head h2{font-size:1.35rem}.view-head div>p:last-child{display:none}.photo-grid,.store-grid{grid-template-columns:1fr;height:auto}.drop-zone{height:250px}.help-panel{gap:18px}.result-panel{padding:18px}.result-hero{display:block}.badges{justify-content:flex-start;margin-top:12px}.guide-steps{grid-template-columns:1fr}.store-panel{min-height:540px}.map-panel{min-height:430px}.bottom-nav{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #dce7e5;background:#fff;padding-bottom:env(safe-area-inset-bottom)}.bottom-nav button{border:0;background:transparent;color:#71868a;font-size:.66rem;font-weight:700;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px}.bottom-nav button span{font-size:.95rem}.bottom-nav button.active{color:#147a6d}.location-controls{flex-direction:column}.location-controls>div{width:100%}}\r\n@media(max-width:430px){.feature-card{min-height:148px}.photo-card{min-height:205px}.feature-card small{display:none}.upload-actions{grid-template-columns:1fr 1fr}.mini-steps{grid-template-columns:1fr}.mini-steps li{padding:8px 10px}.view-head .eyebrow{font-size:.66rem}.view-head h2{font-size:1.2rem}.store-panel{padding:17px}}";
const STATIC_APP="const $=id=>document.getElementById(id);\r\nconst views=[\"home\",\"photo\",\"schedule\",\"stores\"];\r\nfunction openView(id,push=true){\r\n  if(!views.includes(id))id=\"home\";\r\n  document.querySelectorAll(\".view\").forEach(v=>v.hidden=v.id!==id);\r\n  document.querySelectorAll(\"[data-open]\").forEach(b=>b.classList.toggle(\"active\",b.dataset.open===id&&b.closest(\".bottom-nav\")));\r\n  if(push&&location.hash!==\"#\"+id)history.pushState({id},\"\",\"#\"+id);\r\n}\r\ndocument.querySelectorAll(\"[data-open]\").forEach(b=>b.addEventListener(\"click\",e=>{e.preventDefault();openView(b.dataset.open)}));\r\naddEventListener(\"popstate\",()=>openView(location.hash.slice(1)||\"home\",false));\r\nopenView(location.hash.slice(1)||\"home\",false);\r\n\r\nconst fallbackGuides=[\r\n {name:\"우산\",kind:\"일반쓰레기·별도배출\",summary:\"천, 비닐과 금속 살을 가능한 만큼 분리하세요.\",steps:[[\"천·비닐\",\"살대에서 떼기\",\"손을 다치지 않도록 장갑을 끼고 분리해 일반쓰레기로 배출하세요.\"],[\"금속 살대\",\"고철로 분리\",\"완전히 분리한 금속은 지역 재활용 배출 기준에 따라 내놓으세요.\"],[\"손잡이·몸통\",\"크기 확인\",\"분리가 어렵거나 종량제봉투에 들어가지 않으면 대형폐기물 기준을 확인하세요.\"]],warning:\"부러진 살대 끝은 종이나 테이프로 감싸 주세요.\"},\r\n {name:\"칫솔\",kind:\"일반쓰레기\",summary:\"여러 재질이 단단히 붙어 있어 보통 일반쓰레기로 배출합니다.\",steps:[[\"전체\",\"종량제봉투\",\"물기를 말린 뒤 일반 종량제봉투에 넣으세요.\"]],warning:\"전동칫솔은 배터리를 분리해 폐건전지 수거함에 배출하세요.\"},\r\n {name:\"보조배터리\",kind:\"별도배출\",summary:\"리튬 배터리는 종량제봉투나 재활용품에 넣지 않습니다.\",steps:[[\"전체\",\"폐건전지 수거함\",\"단자를 테이프로 막고 동 행정복지센터·공동주택 등의 폐건전지 수거함에 배출하세요.\"]],warning:\"부풀거나 뜨거운 제품은 누르거나 뚫지 말고 소방서·지자체 안내를 확인하세요.\"},\r\n {name:\"깨진 화분\",kind:\"일반쓰레기·별도배출\",summary:\"재질과 크기에 따라 방법이 달라집니다.\",steps:[[\"흙\",\"이물질 제거\",\"식물과 흙을 완전히 비우세요.\"],[\"도자기·유리 조각\",\"안전하게 포장\",\"신문지나 상자에 싸서 깨짐 표시 후 불연성 폐기물 기준을 확인하세요.\"],[\"플라스틱 화분\",\"재질 표시 확인\",\"깨끗이 씻고 단일 플라스틱이면 재활용, 오염·혼합 재질이면 일반쓰레기로 배출하세요.\"]],warning:\"깨진 조각은 수거 작업자가 다치지 않도록 단단히 감싸 주세요.\"},\r\n {name:\"장난감\",kind:\"일반쓰레기·재활용·별도배출\",summary:\"건전지, 금속, 플라스틱을 가능한 만큼 나눕니다.\",steps:[[\"건전지·배터리\",\"먼저 분리\",\"폐건전지 수거함에 별도 배출하세요.\"],[\"금속 부품\",\"분리 가능하면 고철\",\"나사 등 큰 금속 부품을 분리하세요.\"],[\"본체\",\"재질과 크기 확인\",\"복합재질 소형 장난감은 일반쓰레기, 큰 장난감은 대형폐기물 기준을 확인하세요.\"]],warning:\"소리 나는 장난감에는 단추형 전지가 남아 있을 수 있습니다.\"},\r\n {name:\"프라이팬\",kind:\"재활용·별도배출\",summary:\"손잡이와 본체를 분리할 수 있으면 재질별로 나눕니다.\",steps:[[\"음식물·기름\",\"깨끗이 제거\",\"키친타월로 닦고 세척해 말리세요.\"],[\"손잡이\",\"분리\",\"나사로 분리되는 플라스틱·나무 손잡이는 일반쓰레기로 배출하세요.\"],[\"금속 본체\",\"고철\",\"공동주택 고철 수거함 또는 지역 재활용 기준에 따라 배출하세요.\"]],warning:\"코팅이 벗겨져도 금속 본체는 고철로 분류할 수 있으나 지역 기준을 확인하세요.\"},\r\n {name:\"텀블러\",kind:\"재활용·일반쓰레기\",summary:\"뚜껑, 고무 패킹과 금속 몸통을 분리하세요.\",steps:[[\"뚜껑·패킹\",\"분리\",\"실리콘 패킹과 복합재질 뚜껑은 일반쓰레기로 배출하세요.\"],[\"몸통\",\"비우고 세척\",\"금속 단일 재질이면 고철류로 배출하세요.\"]],warning:\"진공 단열 텀블러는 구멍을 뚫지 마세요.\"},\r\n {name:\"전선\",kind:\"재활용·별도배출\",summary:\"소형 폐가전 수거함이나 전선류 수거 기준을 이용하세요.\",steps:[[\"플러그·어댑터\",\"함께 모으기\",\"잘라내지 말고 소형 폐가전 수거함에 배출하세요.\"],[\"전선\",\"묶어서 배출\",\"지역에서 전선류를 받는 재활용 거점에 배출하세요.\"]],warning:\"피복을 태우거나 벗기지 마세요.\"},\r\n {name:\"스프레이통\",kind:\"재활용\",summary:\"내용물을 완전히 사용한 뒤 환기가 잘 되는 곳에서 배출 준비를 합니다.\",steps:[[\"내용물\",\"끝까지 사용\",\"불꽃이 없는 환기 장소에서 남은 내용물을 완전히 빼세요.\"],[\"용기\",\"지역 기준 확인\",\"구멍을 요구하지 않는 지역도 있으므로 광산구 최신 기준을 확인한 뒤 캔류로 배출하세요.\"]],warning:\"불 근처에서 가스를 빼거나 임의로 찌르지 마세요.\"},\r\n {name:\"배달용기\",kind:\"재활용·일반쓰레기\",summary:\"내용물과 기름기를 제거하고 용기·뚜껑·필름을 나눕니다.\",steps:[[\"남은 음식\",\"비우기\",\"음식물 분류 기준에 따라 따로 배출하세요.\"],[\"용기·뚜껑\",\"씻고 말리기\",\"재질 표시가 있고 깨끗하면 같은 재질끼리 배출하세요.\"],[\"필름·오염된 부분\",\"분리\",\"씻기 어려운 양념·기름 오염 용기는 일반쓰레기로 배출하세요.\"]],warning:\"검은색·복합재질 용기는 선별이 어려울 수 있어 지역 기준을 확인하세요.\"}\r\n];\r\n\r\nfunction esc(v){return String(v??\"\").replace(/[&<>\"']/g,c=>({\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",\"\\\"\":\"&quot;\",\"'\":\"&#39;\"}[c]))}\r\nfunction renderManual(item){\r\n  $(\"result-panel\").innerHTML='<div class=\"result-hero\"><div><p class=\"result-kicker\">직접 선택한 품목</p><h3>'+esc(item.name)+'</h3><p class=\"result-summary\">'+esc(item.summary)+'</p></div><div class=\"badges\"><span class=\"badge\">배출 구분 · '+esc(item.kind)+'</span></div></div><div class=\"result-section\"><h4>이렇게 나눠서 배출하세요</h4><div class=\"guide-steps\">'+item.steps.map((s,i)=>'<article class=\"guide-step\"><small>'+String(i+1).padStart(2,\"0\")+' · '+esc(s[0])+'</small><strong>'+esc(s[1])+'</strong><p>'+esc(s[2])+'</p></article>').join(\"\")+'</div></div><div class=\"notice\"><strong>주의사항</strong> · '+esc(item.warning)+'</div>';\r\n  $(\"result-panel\").hidden=false;\r\n  $(\"result-panel\").scrollIntoView({behavior:\"smooth\",block:\"nearest\"});\r\n}\r\n$(\"popular-list\").innerHTML=fallbackGuides.map((g,i)=>'<button class=\"chip\" type=\"button\" data-guide=\"'+i+'\">'+esc(g.name)+'</button>').join(\"\");\r\n$(\"popular-list\").addEventListener(\"click\",e=>{const b=e.target.closest(\"[data-guide]\");if(b)renderManual(fallbackGuides[Number(b.dataset.guide)])});\r\n$(\"item-search\").addEventListener(\"input\",e=>{\r\n  const q=e.target.value.trim(); const box=$(\"search-results\");\r\n  if(!q){box.innerHTML=\"\";return}\r\n  const found=fallbackGuides.map((g,i)=>({g,i})).filter(x=>x.g.name.includes(q)).slice(0,5);\r\n  box.innerHTML=found.length?found.map(x=>'<button class=\"search-result\" type=\"button\" data-guide=\"'+x.i+'\">'+esc(x.g.name)+'</button>').join(\"\"):'<p class=\"privacy-note\">일치하는 품목이 없어요. 사진으로 분석해 보세요.</p>';\r\n});\r\n$(\"search-results\").addEventListener(\"click\",e=>{const b=e.target.closest(\"[data-guide]\");if(b)renderManual(fallbackGuides[Number(b.dataset.guide)])});\r\n\r\nlet photoToken=0;\r\nasync function resizeImage(file){\r\n  const bitmap=await createImageBitmap(file);\r\n  const max=1280, scale=Math.min(1,max/Math.max(bitmap.width,bitmap.height));\r\n  const canvas=document.createElement(\"canvas\"); canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);\r\n  canvas.getContext(\"2d\",{alpha:false}).drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();\r\n  return canvas.toDataURL(\"image/jpeg\",.82);\r\n}\r\nasync function setPhoto(file){\r\n  if(!file||!file.type.startsWith(\"image/\")){setStatus(\"이미지 파일을 선택해 주세요.\",true);return}\r\n  if(file.size>15*1024*1024){setStatus(\"사진 용량이 너무 커요. 15MB 이하 사진을 선택해 주세요.\",true);return}\r\n  const token=++photoToken;\r\n  try{\r\n    setStatus(\"사진을 준비하고 있어요…\");\r\n    const dataUrl=await resizeImage(file); if(token!==photoToken)return;\r\n    $(\"preview-img\").src=dataUrl;$(\"preview-wrap\").hidden=false;$(\"upload-empty\").hidden=true;\r\n    await analyzePhoto(dataUrl,token);\r\n  }catch(err){setStatus(\"사진을 읽지 못했어요. 다른 사진으로 다시 시도해 주세요.\",true)}\r\n}\r\nfunction setStatus(text,error=false,busy=false){const el=$(\"ai-status\");el.textContent=text;el.className=\"status\"+(error?\" error\":\"\")+(busy?\" busy\":\"\")}\r\nasync function analyzePhoto(dataUrl,token){\r\n  setStatus(\"AI가 물건과 재질, 분리할 부분을 살펴보고 있어요…\",false,true);\r\n  $(\"result-panel\").hidden=true;\r\n  try{\r\n    const res=await fetch(\"/api/analyze\",{method:\"POST\",headers:{\"content-type\":\"application/json\"},body:JSON.stringify({image:dataUrl})});\r\n    const data=await res.json().catch(()=>({}));\r\n    if(token!==photoToken)return;\r\n    if(!res.ok)throw new Error(data.message||\"분석에 실패했습니다.\");\r\n    renderAnalysis(data);\r\n    setStatus(\"분석이 끝났어요. 사진과 실제 물건을 함께 확인해 주세요.\");\r\n  }catch(err){\r\n    setStatus(err.message===\"AI_SETUP_REQUIRED\"?\"AI 분석 연결을 준비 중입니다. 잠시 후 다시 시도해 주세요.\":(err.message||\"사진을 분석하지 못했어요. 잠시 후 다시 시도해 주세요.\"),true);\r\n  }\r\n}\r\nfunction renderAnalysis(a){\r\n  const confidence=a.confidence||\"medium\";\r\n  const title=confidence===\"low\"?\"사진 속 물건을 확실히 구분하기 어려워요\":\"사진 속 물건은 ‘\"+esc(a.itemName||\"알 수 없는 물건\")+\"’으로 보여요.\";\r\n  const components=(a.components||[]).map(x=>'<span class=\"component\"><strong>'+esc(x.part)+'</strong> · '+esc(x.material)+'</span>').join(\"\");\r\n  const steps=(a.steps||[]).map((x,i)=>'<article class=\"guide-step\"><small>'+String(i+1).padStart(2,\"0\")+' · '+esc(x.part)+'</small><strong>'+esc(x.action)+'</strong><p>'+esc(x.detail)+'</p></article>').join(\"\");\r\n  const prep=(a.preparation||[]).map(x=>\"<li>\"+esc(x)+\"</li>\").join(\"\");\r\n  const questions=(a.questions||[]).map(x=>\"<li>\"+esc(x)+\"</li>\").join(\"\");\r\n  const alternatives=(a.alternatives||[]).map(x=>esc(x)).join(\" · \");\r\n  $(\"result-panel\").innerHTML='<div class=\"result-hero\"><div><p class=\"result-kicker\">AI 사진 분석 결과</p><h3>'+title+'</h3><p class=\"result-summary\">'+esc(a.summary||\"\")+'</p></div><div class=\"badges\"><span class=\"badge\">배출 구분 · '+esc(a.category||\"판단보류\")+'</span><span class=\"badge '+(confidence===\"low\"?\"low\":\"\")+'\">판단 신뢰도 · '+({high:\"높음\",medium:\"보통\",low:\"낮음\"}[confidence]||\"보통\")+'</span></div></div>'+\r\n  (components?'<div class=\"result-section\"><h4>보이는 부분과 재질</h4><div class=\"component-list\">'+components+'</div></div>':\"\")+\r\n  (steps?'<div class=\"result-section\"><h4>이 부분은 분리해서 배출하세요</h4><div class=\"guide-steps\">'+steps+'</div></div>':\"\")+\r\n  (prep?'<div class=\"result-section\"><h4>배출 전 처리방법</h4><div class=\"notice\"><ol>'+prep+'</ol></div></div>':\"\")+\r\n  ((a.warnings||[]).length?'<div class=\"notice\"><strong>주의사항</strong><ul>'+(a.warnings||[]).map(x=>\"<li>\"+esc(x)+\"</li>\").join(\"\")+'</ul></div>':\"\")+\r\n  (questions||alternatives?'<div class=\"clarify\"><strong>조금 더 확인해 주세요</strong>'+(alternatives?'<p>비슷하게 보이는 품목: '+alternatives+'</p>':\"\")+(questions?'<ul>'+questions+'</ul>':\"\")+'</div>':\"\");\r\n  $(\"result-panel\").hidden=false;$(\"result-panel\").scrollIntoView({behavior:\"smooth\",block:\"nearest\"});\r\n}\r\n[\"camera-input\",\"upload-input\"].forEach(id=>$(id).addEventListener(\"change\",e=>setPhoto(e.target.files&&e.target.files[0])));\r\n$(\"remove-photo\").addEventListener(\"click\",()=>{photoToken++;$(\"preview-img\").removeAttribute(\"src\");$(\"preview-wrap\").hidden=true;$(\"upload-empty\").hidden=false;$(\"result-panel\").hidden=true;setStatus(\"\");$(\"camera-input\").value=\"\";$(\"upload-input\").value=\"\"});\r\nconst drop=$(\"drop-zone\");\r\n[\"dragenter\",\"dragover\"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.add(\"drag\")}));\r\n[\"dragleave\",\"drop\"].forEach(n=>drop.addEventListener(n,e=>{e.preventDefault();drop.classList.remove(\"drag\")}));\r\ndrop.addEventListener(\"drop\",e=>setPhoto(e.dataTransfer.files&&e.dataTransfer.files[0]));\r\n\r\nlet stores=[],userPoint=null,selectedStore=null;\r\nfunction distance(a,b){const r=x=>x*Math.PI/180,dLat=r(b.lat-a.lat),dLon=r(b.lon-a.lon);const h=Math.sin(dLat/2)**2+Math.cos(r(a.lat))*Math.cos(r(b.lat))*Math.sin(dLon/2)**2;return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))}\r\nfunction distanceLabel(km){return km<1?Math.round(km*1000)+\"m\":km.toFixed(1)+\"km\"}\r\nasync function loadStores(){\r\n  try{\r\n    const res=await fetch(\"/api/stores\");const data=await res.json();if(!res.ok)throw new Error();\r\n    stores=data.items||[];\r\n    $(\"store-source\").innerHTML='출처: <a href=\"'+esc(data.sourceUrl)+'\" target=\"_blank\" rel=\"noopener\">공공데이터포털 전국종량제봉투판매소표준데이터</a> · 기준일 '+esc(data.referenceDate||\"확인 필요\")+' · 영업 중 '+stores.length+'곳';\r\n    $(\"location-status\").textContent=stores.length?\"판매소를 선택하거나 현재 위치 기준으로 가까운 곳을 찾아보세요.\":\"광산구 영업 중 판매소가 확인되지 않았어요.\";\r\n    renderStores();\r\n  }catch{$(\"store-list\").innerHTML='<div class=\"empty-panel\"><strong>판매소 자료를 불러오지 못했어요</strong><p>잠시 후 다시 시도해 주세요.</p></div>';$(\"location-status\").textContent=\"공공데이터 연결을 확인하지 못했어요.\"}\r\n}\r\nfunction renderStores(){\r\n  const list=stores.map((s,i)=>({...s,index:i,km:userPoint&&s.lat&&s.lon?distance(userPoint,{lat:s.lat,lon:s.lon}):null})).sort((a,b)=>userPoint?(a.km??1e9)-(b.km??1e9):a.name.localeCompare(b.name,\"ko\"));\r\n  $(\"store-list\").innerHTML=list.map(s=>'<button class=\"store-item '+(selectedStore===s.index?\"active\":\"\")+'\" type=\"button\" data-store=\"'+s.index+'\"><span><strong>'+esc(s.name)+'</strong><span>'+esc(s.address)+'</span><span>대형폐기물 스티커 · '+esc(s.sticker||\"정보 없음\")+(s.phone?\" · \"+esc(s.phone):\"\")+'</span></span><em>'+(s.km==null?\"지도 보기\":distanceLabel(s.km))+'</em></button>').join(\"\");\r\n}\r\n$(\"store-list\").addEventListener(\"click\",e=>{const b=e.target.closest(\"[data-store]\");if(!b)return;selectStore(Number(b.dataset.store))});\r\nfunction selectStore(i){const s=stores[i];if(!s)return;selectedStore=i;$(\"map-store-name\").textContent=s.name;$(\"map-address\").textContent=s.address;$(\"store-map\").src=\"https://www.google.com/maps?q=\"+encodeURIComponent(s.address)+\"&output=embed\";$(\"map-placeholder\").hidden=true;$(\"map-directions\").href=\"https://www.google.com/maps/dir/?api=1&destination=\"+encodeURIComponent(s.address);$(\"map-directions\").hidden=false;renderStores()}\r\n$(\"use-location\").addEventListener(\"click\",()=>{if(!navigator.geolocation){$(\"location-status\").textContent=\"이 기기에서는 위치를 사용할 수 없어요.\";return}$(\"location-status\").textContent=\"현재 위치를 확인하고 있어요…\";navigator.geolocation.getCurrentPosition(p=>{userPoint={lat:p.coords.latitude,lon:p.coords.longitude};$(\"location-status\").textContent=\"현재 위치 기준 가까운 순입니다. 거리는 직선거리예요.\";renderStores()},()=>{$(\"location-status\").textContent=\"위치 권한을 사용할 수 없어요. 주소로 찾아보세요.\"},{timeout:10000,maximumAge:300000})});\r\nasync function geocodeAddress(){\r\n  const q=$(\"address-input\").value.trim();if(!q){$(\"location-status\").textContent=\"광산구 주소나 동 이름을 입력해 주세요.\";return}\r\n  $(\"location-status\").textContent=\"주소 위치를 찾고 있어요…\";\r\n  try{const res=await fetch(\"https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=kr&accept-language=ko&q=\"+encodeURIComponent(\"광주광역시 광산구 \"+q));const data=await res.json();if(!data.length)throw new Error();userPoint={lat:Number(data[0].lat),lon:Number(data[0].lon)};$(\"location-status\").textContent=\"입력한 주소 기준 가까운 순입니다. 거리는 직선거리예요.\";renderStores()}catch{$(\"location-status\").textContent=\"주소를 찾지 못했어요. 도로명주소로 다시 입력해 주세요.\"}\r\n}\r\n$(\"search-address\").addEventListener(\"click\",geocodeAddress);$(\"address-input\").addEventListener(\"keydown\",e=>{if(e.key===\"Enter\")geocodeAddress()});\r\nloadStores();";
const STATIC_STORES={
  "items": [
    {
      "name": "하나마트",
      "address": "전남광주통합특별시 광산구 목련로 95",
      "lat": 35.172353847,
      "lon": 126.8081891608,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "신선한마트",
      "address": "전남광주통합특별시 광산구 월곡산정로 20",
      "lat": 35.1657257027,
      "lon": 126.8051000225,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하나축산",
      "address": "전남광주통합특별시 광산구 산정로2",
      "lat": 35.1669530679,
      "lon": 126.8033227468,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이담아시아마트",
      "address": "전남광주통합특별시 광산구 산정공원로82번길 6-1",
      "lat": 35.1746669272,
      "lon": 126.8069580482,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주월곡희망점",
      "address": "전남광주통합특별시 광산구 산정공원로94번길 22",
      "lat": 35.1756854117,
      "lon": 126.8075790525,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "라두가마트",
      "address": "전남광주통합특별시 광산구 산정공원로 94번길 28",
      "lat": 35.17568541,
      "lon": 126.8079840244,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)슈퍼365마트",
      "address": "전남광주통합특별시 광산구 월곡산정로 15",
      "lat": 35.1668331803,
      "lon": 126.8038558354,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아가족마트",
      "address": "전남광주통합특별시 광산구 목련로 85-1",
      "lat": 35.172432304,
      "lon": 126.807157602,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주산정공원로점",
      "address": "전남광주통합특별시 광산구 산정공원로 60",
      "lat": 35.1729180327,
      "lon": 126.8063946283,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아푸드원(산정점)",
      "address": "전남광주통합특별시 광산구 산정로 45-1",
      "lat": 35.1707521545,
      "lon": 126.8040985484,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "119식자재마트(유한회사 영화유통)",
      "address": "전남광주통합특별시 광산구 사암로319",
      "lat": 35.1729397965,
      "lon": 126.8087982099,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아슈퍼",
      "address": "전남광주통합특별시 광산구 산정로 60",
      "lat": 35.1718895133,
      "lon": 126.8045697656,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아푸드원",
      "address": "전남광주통합특별시 광산구 산정공원로84",
      "lat": 35.1749711083,
      "lon": 126.806606104,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주산정공원점",
      "address": "전남광주통합특별시 광산구 산정공원로82번길 10",
      "lat": 35.1746600479,
      "lon": 126.8074458854,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "로컬푸드제로마진 월곡점",
      "address": "전남광주통합특별시 광산구 사암로 297",
      "lat": 35.1709939352,
      "lon": 126.8090119931,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(FM)마트산정",
      "address": "전남광주통합특별시 광산구 목련로 73-1",
      "lat": 35.1724889591,
      "lon": 126.8059442834,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 월곡일신점",
      "address": "전남광주통합특별시 광산구 사암로 273",
      "lat": 35.1687909405,
      "lon": 126.8087403122,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주영천마을점",
      "address": "전남광주통합특별시 광산구 사암로 390번길 43",
      "lat": 35.1793545209,
      "lon": 126.8103773965,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주산정주공점",
      "address": "전남광주통합특별시 광산구 월곡산정로 11",
      "lat": 35.1667927946,
      "lon": 126.8034386036,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25월곡센터점",
      "address": "전남광주통합특별시 광산구 산정공원로 76",
      "lat": 35.1742100677,
      "lon": 126.8065184616,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주산정대덕점",
      "address": "전남광주통합특별시 광산구 산정공원로81번길 36",
      "lat": 35.1750880811,
      "lon": 126.8045019416,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)디제이코퍼레이션",
      "address": "전남광주통합특별시 광산구 산정공원로81번길 30-20",
      "lat": 35.175757087,
      "lon": 126.8051379121,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알바라카마트 광주",
      "address": "전남광주통합특별시 광산구 산정공원로 66-1",
      "lat": 35.1733084678,
      "lon": 126.8064320525,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "중국마트",
      "address": "전남광주통합특별시 광산구 사암로 287",
      "lat": 35.1701873106,
      "lon": 126.8089368308,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 산정행복점",
      "address": "전남광주통합특별시 광산구 산정공원로71번길14",
      "lat": 35.1739934688,
      "lon": 126.8056340541,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아마트",
      "address": "전남광주통합특별시 광산구 산정공원로72번길 21-8",
      "lat": 35.1740976022,
      "lon": 126.8076584853,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주산정고려점",
      "address": "전남광주통합특별시 광산구 산정로 46",
      "lat": 35.1705779076,
      "lon": 126.8043103709,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "삼정종합상사",
      "address": "전남광주통합특별시 광산구 산정공원로82번길 11-11",
      "lat": 35.1754267179,
      "lon": 126.8075540942,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유하남부영점",
      "address": "전남광주통합특별시 광산구 사암로 251",
      "lat": 35.1669660747,
      "lon": 126.8077171925,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 영천마을점",
      "address": "전남광주통합특별시 광산구 사암로340번길 30",
      "lat": 35.1735853765,
      "lon": 126.8099986283,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(유)일일구식자재",
      "address": "전남광주통합특별시 광산구 사암로 319",
      "lat": 35.1729397965,
      "lon": 126.8087982099,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "중앙산업",
      "address": "전남광주통합특별시 광산구 산정공원로93번길 36",
      "lat": 35.1761183341,
      "lon": 126.8046466504,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 산정목련로점",
      "address": "전남광주통합특별시 광산구 목련로 64",
      "lat": 35.1722140905,
      "lon": 126.8046467,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아 마트",
      "address": "전남광주통합특별시 광산구 산정로6번길 12",
      "lat": 35.166924242,
      "lon": 126.8037331706,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "월드미니마트",
      "address": "전남광주통합특별시 광산구 산정공원로93번길 16",
      "lat": 35.1761199566,
      "lon": 126.8058170347,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "드림디포 (광산점)",
      "address": "전남광주통합특별시 광산구 사암로340번안길 6-13",
      "lat": 35.1757054782,
      "lon": 126.8111966249,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "대방플러스마트",
      "address": "전남광주통합특별시 광산구 용아로297번길17",
      "lat": 35.1686240271,
      "lon": 126.8011061652,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주산정점",
      "address": "전남광주통합특별시 광산구 용아로297번길 58-26",
      "lat": 35.1713628442,
      "lon": 126.7999469828,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주월곡원룸점",
      "address": "전남광주통합특별시 광산구 산정공원로88",
      "lat": 35.1754897215,
      "lon": 126.8066474698,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 광주산정점",
      "address": "전남광주통합특별시 광산구 산정로 33-9",
      "lat": 35.1695308167,
      "lon": 126.8032224948,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "월드마트",
      "address": "전남광주통합특별시 광산구 산정공원로82번길 10",
      "lat": 35.1746600479,
      "lon": 126.8074458854,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "오케이(OK)ASIA마트",
      "address": "전남광주통합특별시 광산구 산정공원로 79",
      "lat": 35.1747381753,
      "lon": 126.8063111677,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "외식업중앙회 광산구지부",
      "address": "전남광주통합특별시 광산구 무진대로212번길29-19",
      "lat": 35.1604385402,
      "lon": 126.8046037101,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 일신점",
      "address": "전남광주통합특별시 광산구 산정공원로2번길 3",
      "lat": 35.1692521902,
      "lon": 126.8084978986,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)에스엠마트 운남점",
      "address": "전남광주통합특별시 광산구 사암로340번안길12",
      "lat": 35.1760400876,
      "lon": 126.8106130014,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 운남9단지점",
      "address": "전남광주통합특별시 광산구 풍영로 63",
      "lat": 35.177636431,
      "lon": 126.8098133593,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "비마켓",
      "address": "전남광주통합특별시 광산구 사암로 271",
      "lat": 35.1682619602,
      "lon": 126.8077064355,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주산정점",
      "address": "전남광주통합특별시 광산구 월곡산정로 19",
      "lat": 35.1667361321,
      "lon": 126.8042445544,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "도울마트",
      "address": "전남광주통합특별시 광산구 산정공원로 71",
      "lat": 35.1739491796,
      "lon": 126.8062237493,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주월곡점",
      "address": "전남광주통합특별시 광산구 산정공원로 42",
      "lat": 35.1713296067,
      "lon": 126.8062237,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알뜰수퍼부식",
      "address": "전남광주통합특별시 광산구 산정로 31",
      "lat": 35.1694234318,
      "lon": 126.803741353,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "맨두루은혜수퍼",
      "address": "전남광주통합특별시 광산구 목련로 100",
      "lat": 35.1718014416,
      "lon": 126.8088213898,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "J마트",
      "address": "전남광주통합특별시 광산구 산정공원로71번길 27",
      "lat": 35.1733986042,
      "lon": 126.8050055217,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "태백수퍼",
      "address": "전남광주통합특별시 광산구 산정로 34",
      "lat": 35.1696849948,
      "lon": 126.8040676281,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "월곡마트",
      "address": "전남광주통합특별시 광산구 사암로279번길 17",
      "lat": 35.1693931252,
      "lon": 126.8080085328,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "올푸드",
      "address": "전남광주통합특별시 광산구 월곡중앙로53번길 20-2",
      "lat": 35.171506463,
      "lon": 126.8101193387,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아 마트",
      "address": "전남광주통합특별시 광산구 월곡중앙로 19",
      "lat": 35.1681225649,
      "lon": 126.8107475845,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "타이아시아마트",
      "address": "전남광주통합특별시 광산구 월곡중앙로 33번길 28",
      "lat": 35.1695261204,
      "lon": 126.8094563608,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "옥비냥",
      "address": "전남광주통합특별시 광산구 월곡중앙로 19",
      "lat": 35.1681225649,
      "lon": 126.8107475845,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "엘마트",
      "address": "전남광주통합특별시 광산구 월곡중앙로 48",
      "lat": 35.1704702918,
      "lon": 126.8112772344,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 월곡한성점",
      "address": "전남광주통합특별시 광산구 월곡산정로 108",
      "lat": 35.1653341285,
      "lon": 126.8141663438,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주월곡금호점",
      "address": "전남광주통합특별시 광산구 월곡반월로5",
      "lat": 35.1664077571,
      "lon": 126.8123814829,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주월곡반월점",
      "address": "전남광주통합특별시 광산구 월곡반월로 57",
      "lat": 35.1699789369,
      "lon": 126.8127217714,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "타이 아시아 마트",
      "address": "전남광주통합특별시 광산구 월곡중앙로33번길 28",
      "lat": 35.1695261204,
      "lon": 126.8094563608,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 월곡중앙점",
      "address": "전남광주통합특별시 광산구 월곡중앙로41번길 18",
      "lat": 35.1701124626,
      "lon": 126.8101855395,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "건성(주)",
      "address": "전남광주통합특별시 광산구 산정공원로94번길 18",
      "lat": 35.1757062926,
      "lon": 126.8074280041,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐하남행복점",
      "address": "전남광주통합특별시 광산구 월곡중앙로25번길 25",
      "lat": 35.1685085729,
      "lon": 126.8093524055,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "영암마트 월곡점",
      "address": "전남광주통합특별시 광산구 월곡산정로 91",
      "lat": 35.1660852619,
      "lon": 126.8120543128,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 월곡영천점",
      "address": "전남광주통합특별시 광산구 월곡중앙로 53",
      "lat": 35.1709721604,
      "lon": 126.811046308,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한솔 종합식품",
      "address": "전남광주통합특별시 광산구 월곡중앙로53번길 13",
      "lat": 35.1710052625,
      "lon": 126.8104820165,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "천원세상",
      "address": "전남광주통합특별시 광산구 월곡중앙로25번길 18",
      "lat": 35.1687022054,
      "lon": 126.8099073048,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "뉴할인마트 본점",
      "address": "전남광주통합특별시 광산구 월곡로 7",
      "lat": 35.1691495903,
      "lon": 126.8099073,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 월곡중앙점",
      "address": "전남광주통합특별시 광산구 월곡로 17",
      "lat": 35.16914959,
      "lon": 126.8111431253,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "생활용품할인마트",
      "address": "전남광주통합특별시 광산구 월곡중앙로47번길 30",
      "lat": 35.1706796386,
      "lon": 126.8099602847,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "프랜드24시",
      "address": "전남광주통합특별시 광산구 월곡중앙로 47",
      "lat": 35.1704696517,
      "lon": 126.8109854067,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "늘푸른유통",
      "address": "전남광주통합특별시 광산구 월곡중앙로47번길 30",
      "lat": 35.1706796386,
      "lon": 126.8099602847,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "명일마트",
      "address": "전남광주통합특별시 광산구 월곡중앙로54번길 20",
      "lat": 35.170907387,
      "lon": 126.8121539564,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 월곡원룸점",
      "address": "전남광주통합특별시 광산구 월곡중앙로 16",
      "lat": 35.1676553833,
      "lon": 126.8109982935,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한국마트",
      "address": "전남광주통합특별시 광산구 월곡로 54-1",
      "lat": 35.1685718747,
      "lon": 126.8150537337,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "금호하이퍼마켓",
      "address": "전남광주통합특별시 광산구 월곡산정로 80,105호",
      "lat": 35.1647238952,
      "lon": 126.8103512719,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "푸드마켓 월곡점",
      "address": "전남광주통합특별시 광산구 월곡로 33",
      "lat": 35.1689537357,
      "lon": 126.8130166502,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "대하하이퍼",
      "address": "전남광주통합특별시 광산구 월곡산정로 79-1(월곡동612-23)",
      "lat": 35.166155404,
      "lon": 126.8109153672,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한성D마켓",
      "address": "전남광주통합특별시 광산구 월곡산정로 96-21, 209동 1층6호",
      "lat": 35.1639984801,
      "lon": 126.8119969523,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하남농업협동조합",
      "address": "전남광주통합특별시 광산구 사암로 280 (월곡동548)",
      "lat": 35.1692584953,
      "lon": 126.8093513301,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하남그릇백화점",
      "address": "전남광주통합특별시 광산구 월곡반월로 35(월곡동600-6)",
      "lat": 35.1683801852,
      "lon": 126.8125691546,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한성마트(1차)",
      "address": "전남광주통합특별시 광산구 월곡산정로 108",
      "lat": 35.1653341285,
      "lon": 126.8141663438,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남금호점",
      "address": "전남광주통합특별시 광산구 월곡산정로 79-1",
      "lat": 35.166155404,
      "lon": 126.8109153672,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주우산국제점",
      "address": "전남광주통합특별시 광산구 용아로 175",
      "lat": 35.1580407691,
      "lon": 126.799907925,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주우산한국점",
      "address": "전남광주통합특별시 광산구 무진대로 278-11,상가동 108~109호",
      "lat": 35.1599105953,
      "lon": 126.8113116325,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 뉴광주우산점",
      "address": "전남광주통합특별시 광산구 사암로215번길 103",
      "lat": 35.1639612617,
      "lon": 126.8025829914,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "우정마트",
      "address": "전남광주통합특별시 광산구 사암로171번길 78",
      "lat": 35.1602256144,
      "lon": 126.8036603555,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 우산센트럴점",
      "address": "전남광주통합특별시 광산구 사암로 92번길 119-5",
      "lat": 35.1526132185,
      "lon": 126.813691284,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "굿윌스토어 밀알광주우산점",
      "address": "전남광주통합특별시 광산구 월곡산정로 12",
      "lat": 35.1649105271,
      "lon": 126.8037218147,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 우산빌리지점",
      "address": "전남광주통합특별시 광산구 우산로 85",
      "lat": 35.1566639232,
      "lon": 126.8095911861,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광산스테이점",
      "address": "전남광주통합특별시 광산구 무진대로 211번길 16",
      "lat": 35.1631369209,
      "lon": 126.8040785769,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "사계절마트",
      "address": "전남광주통합특별시 광산구 무진대로211번길 16",
      "lat": 35.16313692,
      "lon": 126.8040786,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "라하네아이스크림",
      "address": "전남광주통합특별시 광산구 우산로 47, 상가 105호",
      "lat": 35.1590148309,
      "lon": 126.8063641687,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 우산휴로스점",
      "address": "전남광주통합특별시 광산구 무진대로 231번길 13-5",
      "lat": 35.162582666,
      "lon": 126.805737958,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 우산센터점",
      "address": "전남광주통합특별시 광산구 우산로 96번길 82",
      "lat": 35.1526681549,
      "lon": 126.8104246629,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주우산대덕점",
      "address": "전남광주통합특별시 광산구 우산로96번길 82",
      "lat": 35.15266815,
      "lon": 126.8104247,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 우산리버힐점",
      "address": "전남광주통합특별시 광산구 우산로 50",
      "lat": 35.1579426419,
      "lon": 126.8060116452,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "밴드홀릭",
      "address": "전남광주통합특별시 광산구 풍영철길로 46, 상가동 107호",
      "lat": 35.163808981,
      "lon": 126.8146429229,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 광산우체국점",
      "address": "전남광주통합특별시 광산구 사암로171번길 40",
      "lat": 35.1600378047,
      "lon": 126.8055180244,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 우산행복주택점",
      "address": "전남광주통합특별시 광산구 무진대로 246-7",
      "lat": 35.1605509523,
      "lon": 126.8076034556,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주우산중흥점",
      "address": "전남광주통합특별시 광산구 풍영철길로20-5",
      "lat": 35.1633980927,
      "lon": 126.813282371,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한마음새마을금고(우산지점)",
      "address": "전남광주통합특별시 광산구 금봉로 106-1, 131동 102",
      "lat": 35.1510195533,
      "lon": 126.812617536,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "들래미 종합유통",
      "address": "전남광주통합특별시 광산구 사암로106번길 119",
      "lat": 35.1537910476,
      "lon": 126.8143223609,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에프엠마트 우산점",
      "address": "전남광주통합특별시 광산구 사암로92번길 109-5",
      "lat": 35.1526719567,
      "lon": 126.8131781444,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)우산동산점",
      "address": "전남광주통합특별시 광산구 월곡산정로20-49, 상가1동 105",
      "lat": 35.1650452609,
      "lon": 126.8064175777,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 우산중흥점",
      "address": "전남광주통합특별시 광산구 월곡산정로 20-49",
      "lat": 35.16504526,
      "lon": 126.8064176,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 가람식자재마트",
      "address": "전남광주통합특별시 광산구 무진대로 239",
      "lat": 35.1622516244,
      "lon": 126.8067894908,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "서진종합유통",
      "address": "전남광주통합특별시 광산구 무진대로231번길 29-9",
      "lat": 35.1633507337,
      "lon": 126.8055027449,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이슈퍼마켓 우산점",
      "address": "전남광주통합특별시 광산구 용아로175(국제미소래@ 상가101호)",
      "lat": 35.1580407691,
      "lon": 126.799907925,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "와이마트 우산점",
      "address": "전남광주통합특별시 광산구 금봉로98,101호",
      "lat": 35.1519141981,
      "lon": 126.8090203882,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "팜스타마트",
      "address": "전남광주통합특별시 광산구 월곡산정로12,105동~106호",
      "lat": 35.1649105271,
      "lon": 126.8037218147,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐광주무역회관점",
      "address": "전남광주통합특별시 광산구 무진대로 272-9, 101, 102",
      "lat": 35.1602362637,
      "lon": 126.8105103418,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)와이마트하남중흥우산",
      "address": "전남광주통합특별시 광산구 풍영철길로 20-4",
      "lat": 35.1629587138,
      "lon": 126.812835841,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 우산중앙로점",
      "address": "전남광주통합특별시 광산구 사암로130번길 58",
      "lat": 35.1557506237,
      "lon": 126.8105027227,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25우산베스트점",
      "address": "전남광주통합특별시 광산구 사암로215번길 41",
      "lat": 35.163598897,
      "lon": 126.8060079293,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "대명종합철물공구",
      "address": "전남광주통합특별시 광산구 사암로 146",
      "lat": 35.1573597744,
      "lon": 126.8078210752,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유우산시영점",
      "address": "전남광주통합특별시 광산구 사암로171번길 104",
      "lat": 35.1603523824,
      "lon": 126.8021021729,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주우산아제점",
      "address": "전남광주통합특별시 광산구 사암로106번길 57",
      "lat": 35.1538082063,
      "lon": 126.810415669,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에프엠마트",
      "address": "전남광주통합특별시 광산구 우산로 17(우산동1603-1)",
      "lat": 35.1595677901,
      "lon": 126.802772811,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유광주광산점",
      "address": "전남광주통합특별시 광산구 우산로95번길 57(우산동1591-7)",
      "lat": 35.158761791,
      "lon": 126.811570035,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "킴벌리솔루션",
      "address": "전남광주통합특별시 광산구 우산로85번길 2(우산동 1028-16)",
      "lat": 35.1567543872,
      "lon": 126.8095996363,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 콜롬버스점",
      "address": "전남광주통합특별시 광산구 풍영철길로 15(우산동1587-1)",
      "lat": 35.1628984093,
      "lon": 126.8115189789,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)이마트 광산점",
      "address": "전남광주통합특별시 광산구 사암로 172",
      "lat": 35.1601521967,
      "lon": 126.808622835,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남골드점",
      "address": "전남광주통합특별시 광산구 사암로215번길 11",
      "lat": 35.1634553841,
      "lon": 126.8076118294,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 광주하남주공점",
      "address": "전남광주통합특별시 광산구 무진대로211번길 23",
      "lat": 35.1635038517,
      "lon": 126.8037415759,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주우산행복점",
      "address": "전남광주통합특별시 광산구 무진대로212번길 15(우산동1606-1)",
      "lat": 35.1608764024,
      "lon": 126.8037416,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "사람과바다",
      "address": "전남광주통합특별시 광산구 용아로 230(우산동1575-2)",
      "lat": 35.1636081908,
      "lon": 126.8021293773,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하나마트",
      "address": "전남광주통합특별시 광산구 사암로171번길 70(우산동 )",
      "lat": 35.160173621,
      "lon": 126.8040148112,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에이마트",
      "address": "전남광주통합특별시 광산구 월곡산정로 12(우산동1571-3)",
      "lat": 35.1649105271,
      "lon": 126.8037218147,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "스토아마트",
      "address": "전남광주통합특별시 광산구 우산로96번길 66(우산동1074-1)",
      "lat": 35.1533375642,
      "lon": 126.810272704,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 소촌미소래점",
      "address": "전남광주통합특별시 광산구 소촌로42번길195, 103,104호",
      "lat": 35.1553056728,
      "lon": 126.7979798604,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주소촌점",
      "address": "전남광주통합특별시 광산구 소촌로152번길 34",
      "lat": 35.1574728881,
      "lon": 126.79568799,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주소촌대박점",
      "address": "전남광주통합특별시 광산구 소촌로 147",
      "lat": 35.157290308,
      "lon": 126.7918466328,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 소촌모아점",
      "address": "전남광주통합특별시 광산구 소촌로100, 109동지하층117호",
      "lat": 35.1538893576,
      "lon": 126.7932003297,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주소촌점",
      "address": "전남광주통합특별시 광산구 어등대로665번길10 (삼라@)",
      "lat": 35.1451589397,
      "lon": 126.7915672343,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "대화물류",
      "address": "전남광주통합특별시 광산구 소촌로23",
      "lat": 35.1477123809,
      "lon": 126.7917384045,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "라인청과식품마트",
      "address": "전남광주통합특별시 광산구 소촌로152번길 38",
      "lat": 35.1560234194,
      "lon": 126.795379839,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "와이마트 소촌점",
      "address": "전남광주통합특별시 광산구 소촌로86번길 4",
      "lat": 35.1518085377,
      "lon": 126.7935839177,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유뉴선운지구점",
      "address": "전남광주통합특별시 광산구 선운로 5, 102",
      "lat": 35.1484910985,
      "lon": 126.7701082844,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주소촌드림타운점",
      "address": "전남광주통합특별시 광산구 소촌로86번길 20-5,103호",
      "lat": 35.1517310488,
      "lon": 126.7962521093,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "우송(철물점)",
      "address": "전남광주통합특별시 광산구 소촌로 71-1",
      "lat": 35.150711006,
      "lon": 126.7929069621,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "마운틴마트 어룡점",
      "address": "전남광주통합특별시 광산구 소촌로86번길 14",
      "lat": 35.1520576298,
      "lon": 126.7945969903,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "나비소촌",
      "address": "전남광주통합특별시 광산구 어등대로665번길 11(소촌동594-19)",
      "lat": 35.1455040533,
      "lon": 126.7912178613,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "SM오피스",
      "address": "전남광주통합특별시 광산구 어등대로665번길 11",
      "lat": 35.14550405,
      "lon": 126.7912179,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 에스엠마트소촌점",
      "address": "전남광주통합특별시 광산구 소촌로152번길 30",
      "lat": 35.1574878564,
      "lon": 126.795367964,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 광주공군점",
      "address": "전남광주통합특별시 광산구 송도로 114번길 53",
      "lat": 35.1170334626,
      "lon": 126.7899071305,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU) 첨단부영 3차점",
      "address": "전남광주통합특별시 광산구 첨단중앙로68번길 131",
      "lat": 35.21224728,
      "lon": 126.8501924,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "우리동네마트",
      "address": "전남광주통합특별시 광산구 월계로150번길 30",
      "lat": 35.21196935,
      "lon": 126.8416506,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "영암마트 신창부영점",
      "address": "전남광주통합특별시 광산구 장신로265번길 22",
      "lat": 35.19188457,
      "lon": 126.8406369,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)광주송정점",
      "address": "전남광주통합특별시 광산구 상무대로 305",
      "lat": 35.1437802847,
      "lon": 126.7990166796,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "환경슈퍼",
      "address": "전남광주통합특별시 광산구 어등대로 710-1",
      "lat": 35.1417136311,
      "lon": 126.7940870509,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주소촌가로수점",
      "address": "전남광주통합특별시 광산구 금봉로 64",
      "lat": 35.1515828245,
      "lon": 126.8054857093,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주소촌서라점",
      "address": "전남광주통합특별시 광산구 소촌로 9(어룡동655-5)",
      "lat": 35.1472329458,
      "lon": 126.7905377269,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "보양슈퍼",
      "address": "전남광주통합특별시 광산구 소촌로 9",
      "lat": 35.14723295,
      "lon": 126.7905377,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "마을종합수퍼",
      "address": "전남광주통합특별시 광산구 송정공원로11번길 49",
      "lat": 35.1451577707,
      "lon": 126.7965179109,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "광미마트",
      "address": "전남광주통합특별시 광산구 금봉로 59(어룡동9-12)",
      "lat": 35.1518499704,
      "lon": 126.8051698654,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 소촌현대점",
      "address": "전남광주통합특별시 광산구 어등대로647번북길 8, 101,102호",
      "lat": 35.1463193998,
      "lon": 126.793570967,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "탑마트",
      "address": "전남광주통합특별시 광산구 선운로20번길 40",
      "lat": 35.1468263087,
      "lon": 126.7749828647,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "득영중국식품",
      "address": "전남광주통합특별시 광산구 선운로2번길 35-3",
      "lat": 35.146779852,
      "lon": 126.7732812088,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 선운레니체점",
      "address": "전남광주통합특별시 광산구 선암1로39, 상가동 102,103호",
      "lat": 35.1508087186,
      "lon": 126.7822813636,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 선운진아리채점",
      "address": "전남광주통합특별시 광산구 선운중앙로 82",
      "lat": 35.146551695,
      "lon": 126.7816661124,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25선운행복점",
      "address": "전남광주통합특별시 광산구 선암로 19, 상가동 1호",
      "lat": 35.1496852427,
      "lon": 126.7865750439,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "홈마트",
      "address": "전남광주통합특별시 광산구 어등대로 647번북길 9",
      "lat": 35.1459613676,
      "lon": 126.7923136244,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 광주소촌점",
      "address": "전남광주통합특별시 광산구 소촌로86번길 17",
      "lat": 35.1528186114,
      "lon": 126.7956603401,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)에스엠 선운점",
      "address": "전남광주통합특별시 광산구 선운로 20번길 53",
      "lat": 35.1474646618,
      "lon": 126.7770831914,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(유)과일인생 선운점",
      "address": "전남광주통합특별시 광산구 선운로 20번길 55",
      "lat": 35.1469162499,
      "lon": 126.7768160034,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "득영중국식품",
      "address": "전남광주통합특별시 광산구 선운로 2번길 35-3",
      "lat": 35.146779852,
      "lon": 126.7732812088,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25소촌프레시점",
      "address": "전남광주통합특별시 광산구 어등대로 653번길 33",
      "lat": 35.1464588048,
      "lon": 126.7915321855,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 선운메디컬점",
      "address": "전남광주통합특별시 광산구 어등대로653번길 33",
      "lat": 35.1464588,
      "lon": 126.7915322,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU호남대3호관점",
      "address": "전남광주통합특별시 광산구 호남대길 75, 지하 1층",
      "lat": 35.151022432,
      "lon": 126.7694726527,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 소촌현대점",
      "address": "전남광주통합특별시 광산구 어등대로 647번북길 8, 501-101호",
      "lat": 35.1463193998,
      "lon": 126.793570967,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 청정미트",
      "address": "전남광주통합특별시 광산구 소촌로85번길 14-10",
      "lat": 35.1526634571,
      "lon": 126.7916227269,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에이젯시스템",
      "address": "전남광주통합특별시 광산구 사암로 860-10",
      "lat": 35.21628115,
      "lon": 126.824698,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주쌍암지구점",
      "address": "전남광주통합특별시 광산구 임방울대로825번길 22",
      "lat": 35.2191769,
      "lon": 126.8489631,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신창왕버들점",
      "address": "전남광주통합특별시 광산구 왕버들로 265",
      "lat": 35.19625445,
      "lon": 126.8376789,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "광주비아농업협동조합",
      "address": "전남광주통합특별시 광산구 장신로 153",
      "lat": 35.19100076,
      "lon": 126.8269845,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한아름DC마트",
      "address": "전남광주통합특별시 광산구 왕버들로252번길 46",
      "lat": 35.19486157,
      "lon": 126.834269,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "와이마트 신창점",
      "address": "전남광주통합특별시 광산구 신창로161번길 19",
      "lat": 35.19900491,
      "lon": 126.8396855,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 텃밭신창",
      "address": "전남광주통합특별시 광산구 신창로71번길 33",
      "lat": 35.19249161,
      "lon": 126.833833,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세이마트",
      "address": "전남광주통합특별시 광산구 목련로153번길 56",
      "lat": 35.1732508,
      "lon": 126.8158168,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 운남주공점",
      "address": "전남광주통합특별시 광산구 목련로273번길 77",
      "lat": 35.17725027,
      "lon": 126.8245655,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 신창진흥점",
      "address": "전남광주통합특별시 광산구 신창로 138번길 32-3",
      "lat": 35.19603345,
      "lon": 126.840436,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "큰별마트(신가)",
      "address": "전남광주통합특별시 광산구 수등로123번길 22",
      "lat": 35.18419253,
      "lon": 126.8242204,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "텃밭 운남점",
      "address": "전남광주통합특별시 광산구 임방울대로 152",
      "lat": 35.1747592,
      "lon": 126.8181613,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "드림산업안전",
      "address": "전남광주통합특별시 광산구 첨단내촌로 38",
      "lat": 35.21021381,
      "lon": 126.8374272,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 첨단에스엠마트",
      "address": "전남광주통합특별시 광산구 첨단중앙로68번길 99",
      "lat": 35.21231553,
      "lon": 126.8483845,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "햇살마트(SM)",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 104",
      "lat": 35.21849362,
      "lon": 126.8298293,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "미니스톱 쌍암중앙점",
      "address": "전남광주통합특별시 광산구 첨단중앙로152번길 62",
      "lat": 35.21879023,
      "lon": 126.8457108,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "모두와 주식회사",
      "address": "전남광주통합특별시 광산구 왕버들로251번길 24",
      "lat": 35.19733833,
      "lon": 126.8373072,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스(GS)25 신가원룸점",
      "address": "전남광주통합특별시 광산구 수등로243번길 20",
      "lat": 35.18607394,
      "lon": 126.835551,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주월계점",
      "address": "전남광주통합특별시 광산구 월계로140번길 2",
      "lat": 35.21330235,
      "lon": 126.8405946,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 신가주공점",
      "address": "전남광주통합특별시 광산구 목련로253번길 100-9",
      "lat": 35.17589497,
      "lon": 126.8204352,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단중앙점",
      "address": "전남광주통합특별시 광산구 첨단강변로99번길 46",
      "lat": 35.21580309,
      "lon": 126.8500879,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단부영점",
      "address": "전남광주통합특별시 광산구 산월로 81",
      "lat": 35.20941056,
      "lon": 126.846241,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 날마다",
      "address": "전남광주통합특별시 광산구 신창로72번길 10-29",
      "lat": 35.19142819,
      "lon": 126.8387516,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주쌍암에이스점",
      "address": "전남광주통합특별시 광산구 첨단중앙로152번길 76",
      "lat": 35.21878816,
      "lon": 126.846315,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 광주신창점",
      "address": "전남광주통합특별시 광산구 신창로48번길 35",
      "lat": 35.18975347,
      "lon": 126.8390386,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 New wave 더광주점",
      "address": "전남광주통합특별시 광산구 첨단중앙로106번길 29",
      "lat": 35.21501851,
      "lon": 126.8448071,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 신가점",
      "address": "전남광주통합특별시 광산구 수등로 253",
      "lat": 35.18541048,
      "lon": 126.8366508,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "365마트 첨단점",
      "address": "전남광주통합특별시 광산구 산월로 80",
      "lat": 35.20761639,
      "lon": 126.846034,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "햇살마트",
      "address": "전남광주통합특별시 광산구 신창로35번길 54",
      "lat": 35.18970419,
      "lon": 126.8338881,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)제이알에스",
      "address": "전남광주통합특별시 광산구 신창로71번길 16",
      "lat": 35.19281451,
      "lon": 126.8360283,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 신가부영점",
      "address": "전남광주통합특별시 광산구 신창로35번길 20",
      "lat": 35.1896896,
      "lon": 126.8359469,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하나로할인마트",
      "address": "전남광주통합특별시 광산구 첨단내촌로 102",
      "lat": 35.21614319,
      "lon": 126.8357263,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단사랑점",
      "address": "전남광주통합특별시 광산구 임방울대로826번길 25",
      "lat": 35.21646143,
      "lon": 126.8489936,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "마트사랑으로",
      "address": "전남광주통합특별시 광산구 신창로161번길 34",
      "lat": 35.20062428,
      "lon": 126.8395649,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU) 첨단일등점",
      "address": "전남광주통합특별시 광산구 첨단중앙로152번길 21",
      "lat": 35.21915584,
      "lon": 126.8434345,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)자연드림 광주월계점",
      "address": "전남광주통합특별시 광산구 첨단중앙로170번길 20",
      "lat": 35.22043438,
      "lon": 126.8427945,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "텃밭 호반점",
      "address": "전남광주통합특별시 광산구 풍영로 329번길 19",
      "lat": 35.19922621,
      "lon": 126.8133503,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완원룸점",
      "address": "전남광주통합특별시 광산구 수완로 11번길 31",
      "lat": 35.18610764,
      "lon": 126.8268487,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "롯데프레시 광주수완점(2)",
      "address": "전남광주통합특별시 광산구 수완로49번길 32",
      "lat": 35.18974678,
      "lon": 126.8268726,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한우목장마트",
      "address": "전남광주통합특별시 광산구 산월로 80",
      "lat": 35.20761639,
      "lon": 126.846034,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "신세계마트",
      "address": "전남광주통합특별시 광산구 임방울대로 146",
      "lat": 35.17428713,
      "lon": 126.8180111,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 장덕중앙점",
      "address": "전남광주통합특별시 광산구 풍영로 229번안길 2",
      "lat": 35.19223061,
      "lon": 126.813508,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단CGV점",
      "address": "전남광주통합특별시 광산구 임방울대로826번길 19-24",
      "lat": 35.21645627,
      "lon": 126.8500925,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 (24시편의점)",
      "address": "전남광주통합특별시 광산구 왕버들로 11",
      "lat": 35.20273061,
      "lon": 126.812107,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 성덕미소점",
      "address": "전남광주통합특별시 광산구 장덕로 51",
      "lat": 35.19510261,
      "lon": 126.8149556,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 수완애플점",
      "address": "전남광주통합특별시 광산구 임방울대로 330",
      "lat": 35.18933057,
      "lon": 126.8240446,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하루마켓",
      "address": "전남광주통합특별시 광산구 비아로 177-3",
      "lat": 35.22344172,
      "lon": 126.823402,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 흑석미소점",
      "address": "전남광주통합특별시 광산구 풍영로101번안길 2",
      "lat": 35.18111544,
      "lon": 126.811463,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스(GS)25광주보건대점",
      "address": "전남광주통합특별시 광산구 북문대로 417",
      "lat": 35.19352847,
      "lon": 126.8486524,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)농협하나로유통 광주농산물종합유통",
      "address": "전남광주통합특별시 광산구 임방울대로 261",
      "lat": 35.18533055,
      "lon": 126.8188085,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "단원마트",
      "address": "전남광주통합특별시 광산구 풍영로329번길 50",
      "lat": 35.20127945,
      "lon": 126.8128733,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 신창원룸점",
      "address": "전남광주통합특별시 광산구 왕버들로252번길 25",
      "lat": 35.1952819,
      "lon": 126.8358494,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 첨단천사",
      "address": "전남광주통합특별시 광산구 첨단내촌로11번길 16-1",
      "lat": 35.20890062,
      "lon": 126.8356541,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "더원마트",
      "address": "전남광주통합특별시 광산구 비아로62번길 12",
      "lat": 35.22014645,
      "lon": 126.8185206,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "홈마트",
      "address": "전남광주통합특별시 광산구 비아안길 70-17",
      "lat": 35.22028679,
      "lon": 126.8203219,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "신창스튜디오",
      "address": "전남광주통합특별시 광산구 신창로106번길 15",
      "lat": 35.19464687,
      "lon": 126.8386901,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 광주수완점",
      "address": "전남광주통합특별시 광산구 임방울대로 332번길 13",
      "lat": 35.18976295,
      "lon": 126.8246185,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완신완점",
      "address": "전남광주통합특별시 광산구 풍영로329번길 51",
      "lat": 35.19941408,
      "lon": 126.8117958,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 장덕주공점",
      "address": "전남광주통합특별시 광산구 풍영로329번길 51",
      "lat": 35.19941408,
      "lon": 126.8117958,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 신가진만점",
      "address": "전남광주통합특별시 광산구 목련로 394번길 9",
      "lat": 35.18385013,
      "lon": 126.8329702,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25(GS25) 신창타운점",
      "address": "전남광주통합특별시 광산구 신창로 72번길 10",
      "lat": 35.19149127,
      "lon": 126.8378321,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하나마트",
      "address": "전남광주통합특별시 광산구 임방울대로 784",
      "lat": 35.21724056,
      "lon": 126.8441854,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "텃밭 장덕점",
      "address": "전남광주통합특별시 광산구 풍영로169번길 46",
      "lat": 35.18839441,
      "lon": 126.8115285,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "플러스마트",
      "address": "전남광주통합특별시 광산구 산월로 15",
      "lat": 35.20901964,
      "lon": 126.8389829,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "와이마트 신가풍영점",
      "address": "전남광주통합특별시 광산구 수등로258번길 34",
      "lat": 35.18238728,
      "lon": 126.8378429,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한살림 수완매장",
      "address": "전남광주통합특별시 광산구 장덕로40번길 7",
      "lat": 35.19479005,
      "lon": 126.8137134,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)에프엠마트수완",
      "address": "전남광주통합특별시 광산구 장덕로95번길 16",
      "lat": 35.19644401,
      "lon": 126.8199855,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "파머스마켓",
      "address": "전남광주통합특별시 광산구 목련로273번길 83",
      "lat": 35.17770334,
      "lon": 126.8247789,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완솔빛점",
      "address": "전남광주통합특별시 광산구 왕버들로132번길 22",
      "lat": 35.20091172,
      "lon": 126.8215294,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 남부대학교점",
      "address": "전남광주통합특별시 광산구 산월로 23",
      "lat": 35.20902822,
      "lon": 126.8398305,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "SM마트",
      "address": "전남광주통합특별시 광산구 하남대로261번길 22",
      "lat": 35.18113224,
      "lon": 126.8228032,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 비아안길점",
      "address": "전남광주통합특별시 광산구 비아안길 59",
      "lat": 35.22110158,
      "lon": 126.8192806,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 신창중앙점",
      "address": "전남광주통합특별시 광산구 신창로86번길 30",
      "lat": 35.19249552,
      "lon": 126.8389176,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 장덕영신점",
      "address": "전남광주통합특별시 광산구 장신로20번길 14-2",
      "lat": 35.18977857,
      "lon": 126.81224,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 수완명진점",
      "address": "전남광주통합특별시 광산구 수완로10번길 7",
      "lat": 35.18615762,
      "lon": 126.8310213,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "올리브마트",
      "address": "전남광주통합특별시 광산구 첨단내촌로70번길 55",
      "lat": 35.21337521,
      "lon": 126.8392187,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 신선마트수완주공점",
      "address": "전남광주통합특별시 광산구 하남대로261번길 12",
      "lat": 35.1803349,
      "lon": 126.8226053,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "가람오피스",
      "address": "전남광주통합특별시 광산구 첨단중앙로182번길 62",
      "lat": 35.22167637,
      "lon": 126.8481884,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 수완점",
      "address": "전남광주통합특별시 광산구 풍영로229번안길 2-10",
      "lat": 35.19303913,
      "lon": 126.8141705,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완명진점",
      "address": "전남광주통합특별시 광산구 수완로12번길 72",
      "lat": 35.18764097,
      "lon": 126.8313456,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주비아도천점",
      "address": "전남광주통합특별시 광산구 임방울대로 611-5",
      "lat": 35.21211237,
      "lon": 126.8268404,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 비아일신점",
      "address": "전남광주통합특별시 광산구 비아중앙로 29-1",
      "lat": 35.22160885,
      "lon": 126.8245918,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완원룸점",
      "address": "전남광주통합특별시 광산구 수완로 74번길 11-80",
      "lat": 35.19391862,
      "lon": 126.8309751,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 코코마트 수완점",
      "address": "전남광주통합특별시 광산구 장덕로137번길 17",
      "lat": 35.19739909,
      "lon": 126.8230161,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "햇살빅마트",
      "address": "전남광주통합특별시 광산구 풍영로101번안길 12",
      "lat": 35.18158806,
      "lon": 126.8105048,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "탑할인마트",
      "address": "전남광주통합특별시 광산구 수완로74번길 11-4",
      "lat": 35.19190695,
      "lon": 126.8299336,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단월계점",
      "address": "전남광주통합특별시 광산구 첨단중앙로67번길 8-2",
      "lat": 35.2115867,
      "lon": 126.8424274,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "월광식자재",
      "address": "전남광주통합특별시 광산구 첨단중앙로116번길 35",
      "lat": 35.21601015,
      "lon": 126.8448955,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)자연드림 광주수완점",
      "address": "전남광주통합특별시 광산구 임방울대로215번길 5-9",
      "lat": 35.17983585,
      "lon": 126.8168334,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주도천점",
      "address": "전남광주통합특별시 광산구 도천남길 9",
      "lat": 35.20857106,
      "lon": 126.8167226,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 자연숲신가점",
      "address": "전남광주통합특별시 광산구 신가삼효로 19",
      "lat": 35.18646021,
      "lon": 126.8345682,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완세영점",
      "address": "전남광주통합특별시 광산구 풍영로 294-23, 301동 107호",
      "lat": 35.1990078,
      "lon": 126.817962,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "카카오마트",
      "address": "전남광주통합특별시 광산구 풍영로285, 상가213동",
      "lat": 35.19687149,
      "lon": 126.8144839,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단대라수점",
      "address": "전남광주통합특별시 광산구 임방울대로825번길 60-18",
      "lat": 35.22039368,
      "lon": 126.8507866,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 메디케어점",
      "address": "전남광주통합특별시 광산구 월계로 223-8, 110동 109호",
      "lat": 35.21397614,
      "lon": 126.8505559,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24메가박스점",
      "address": "전남광주통합특별시 광산구 앰코로 35",
      "lat": 35.22122136,
      "lon": 126.8523517,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단희망점",
      "address": "전남광주통합특별시 광산구 첨단중앙로152번길 81-14",
      "lat": 35.2201677,
      "lon": 126.8470385,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 첨단주민점",
      "address": "전남광주통합특별시 광산구 첨단중앙로124번길 5",
      "lat": 35.21668587,
      "lon": 126.8427694,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 신창리치",
      "address": "전남광주통합특별시 광산구 신창로106번길 25",
      "lat": 35.19449883,
      "lon": 126.8393998,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완아뜨리움점",
      "address": "전남광주통합특별시 광산구 장덕로 160",
      "lat": 35.19652995,
      "lon": 126.8259006,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단도휘점",
      "address": "전남광주통합특별시 광산구 월계로 223-20",
      "lat": 35.21536741,
      "lon": 126.850511,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완원룸점",
      "address": "전남광주통합특별시 광산구 수완로50번길 55",
      "lat": 35.18845986,
      "lon": 126.8312923,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한아름마트",
      "address": "전남광주통합특별시 광산구 수등로 204",
      "lat": 35.18453373,
      "lon": 126.8310791,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단원룸점",
      "address": "전남광주통합특별시 광산구 첨단내촌로11번길 8-16",
      "lat": 35.20895486,
      "lon": 126.8366605,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완단비점",
      "address": "전남광주통합특별시 광산구 수완로74번길 48",
      "lat": 35.19158003,
      "lon": 126.8315949,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 장덕대방점",
      "address": "전남광주통합특별시 광산구 장신로50번길 4",
      "lat": 35.19054246,
      "lon": 126.8154193,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 첨단호반점",
      "address": "전남광주통합특별시 광산구 월계로 203",
      "lat": 35.21387015,
      "lon": 126.8478197,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주운남삼성점",
      "address": "전남광주통합특별시 광산구 목련로217번길 42",
      "lat": 35.17415915,
      "lon": 126.8217252,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 첨단방통대점",
      "address": "전남광주통합특별시 광산구 첨단내촌로35번길 1",
      "lat": 35.20994474,
      "lon": 126.8370496,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 흑석골드점",
      "address": "전남광주통합특별시 광산구 풍영로101번안길 3-8",
      "lat": 35.18053811,
      "lon": 126.8105091,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "플러스24",
      "address": "전남광주통합특별시 광산구 장신로 143",
      "lat": 35.19101746,
      "lon": 126.8258825,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "Y마트 수완우미린점",
      "address": "전남광주통합특별시 광산구 왕버들로 92",
      "lat": 35.20218629,
      "lon": 126.820884,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 수완장덕점",
      "address": "전남광주통합특별시 광산구 풍영로169번길 16",
      "lat": 35.18687191,
      "lon": 126.813243,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "빅슈퍼마켓",
      "address": "전남광주통합특별시 광산구 풍영로229번길 49",
      "lat": 35.19198901,
      "lon": 126.8113506,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "롯데쇼핑(주) 롯데마트 수완점",
      "address": "전남광주통합특별시 광산구 장신로 98",
      "lat": 35.18919839,
      "lon": 126.8193677,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)운남6단지점",
      "address": "전남광주통합특별시 광산구 목련로153번길 134",
      "lat": 35.17782972,
      "lon": 126.8167111,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주쌍암스타점",
      "address": "전남광주통합특별시 광산구 임방울대로801번길 35",
      "lat": 35.21945286,
      "lon": 126.8457151,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스(GS)25 장덕에버빌",
      "address": "전남광주통합특별시 광산구 풍영로199번길 54",
      "lat": 35.18915956,
      "lon": 126.8111835,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)쌍암힐스테이트점",
      "address": "전남광주통합특별시 광산구 첨단강변로 100, 401동",
      "lat": 35.21668892,
      "lon": 126.8541537,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주비아스타점",
      "address": "전남광주통합특별시 광산구 비아안길 92-3",
      "lat": 35.22112924,
      "lon": 126.8213878,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "자연에마트",
      "address": "전남광주통합특별시 광산구 임방울대로825번길 22-52",
      "lat": 35.21987734,
      "lon": 126.850818,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 상민이레",
      "address": "전남광주통합특별시 광산구 월계로 193",
      "lat": 35.21366991,
      "lon": 126.8467267,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완스타점",
      "address": "전남광주통합특별시 광산구 수완로49번길 10",
      "lat": 35.18974655,
      "lon": 126.8280595,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유광주비아점",
      "address": "전남광주통합특별시 광산구 비아로 12번길 61",
      "lat": 35.22290131,
      "lon": 126.8226846,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "골드마트",
      "address": "전남광주통합특별시 광산구 장덕로5번길 16",
      "lat": 35.19716469,
      "lon": 126.8118852,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주신창원룸점",
      "address": "전남광주통합특별시 광산구 신창로86번길 7",
      "lat": 35.19298835,
      "lon": 126.8379218,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 운남3단지점(CU)",
      "address": "전남광주통합특별시 광산구 목련로 307-13",
      "lat": 35.17671146,
      "lon": 126.8270908,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완부영점",
      "address": "전남광주통합특별시 광산구 풍영로 294-8",
      "lat": 35.19713357,
      "lon": 126.8167251,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "월드푸드마트",
      "address": "전남광주통합특별시 광산구 첨단중앙로152번길 22",
      "lat": 35.21882349,
      "lon": 126.8435584,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "드림마트",
      "address": "전남광주통합특별시 광산구 비아로45번길 8-2",
      "lat": 35.21998134,
      "lon": 126.819941,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 장덕대로점",
      "address": "전남광주통합특별시 광산구 풍영로 229",
      "lat": 35.19192121,
      "lon": 126.8139792,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신가아름점",
      "address": "전남광주통합특별시 광산구 수등로123번길 70",
      "lat": 35.18596673,
      "lon": 126.8245103,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)수완부영",
      "address": "전남광주통합특별시 광산구 장덕로6번길 59",
      "lat": 35.19325679,
      "lon": 126.8114704,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 광주보건대점",
      "address": "전남광주통합특별시 광산구 북문대로419번길 24",
      "lat": 35.19315306,
      "lon": 126.8478139,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완주공점",
      "address": "전남광주통합특별시 광산구 수등로123번길 22",
      "lat": 35.18419253,
      "lon": 126.8242204,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광수완대방1차점",
      "address": "전남광주통합특별시 광산구 수등로 76번길 40",
      "lat": 35.18317589,
      "lon": 126.816441,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주신창진흥점",
      "address": "전남광주통합특별시 광산구 신창로138번길 15-2",
      "lat": 35.19677599,
      "lon": 126.8399875,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)마트고",
      "address": "전남광주통합특별시 광산구 첨단중앙로 105",
      "lat": 35.21468069,
      "lon": 126.8424204,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주도천점",
      "address": "전남광주통합특별시 광산구 하남산단8번로 165",
      "lat": 35.20907915,
      "lon": 126.8137651,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주세계로점",
      "address": "전남광주통합특별시 광산구 장신로 81",
      "lat": 35.19192986,
      "lon": 126.8181932,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 광주삼성점",
      "address": "전남광주통합특별시 광산구 임방울대로 142-12",
      "lat": 35.17308126,
      "lon": 126.8197871,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 self 광주운남리채점",
      "address": "전남광주통합특별시 광산구 목련로273번길 23",
      "lat": 35.17470146,
      "lon": 126.8255789,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한마음새마을금고(장덕지점)",
      "address": "전남광주통합특별시 광산구 풍영로 224",
      "lat": 35.19144267,
      "lon": 126.814493,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스(GS)25 첨단성원점",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 92",
      "lat": 35.21894302,
      "lon": 126.831197,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)OK식자재마트",
      "address": "전남광주통합특별시 광산구 구촌반촌길 38",
      "lat": 35.18883436,
      "lon": 126.8429209,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주운남주공점",
      "address": "전남광주통합특별시 광산구 목련로273번안길 34, 상가동 107호",
      "lat": 35.177727,
      "lon": 126.8228673,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단라인점",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 88-16",
      "lat": 35.22033627,
      "lon": 126.8327723,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신창호반점",
      "address": "전남광주통합특별시 광산구 신창로131번길 9, 109호",
      "lat": 35.1969956,
      "lon": 126.8380058,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완해피점",
      "address": "전남광주통합특별시 광산구 수완로74번길 11-4",
      "lat": 35.19190695,
      "lon": 126.8299336,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단프레뷰점",
      "address": "전남광주통합특별시 광산구 임방울대로826번길 22-22",
      "lat": 35.21668579,
      "lon": 126.8481251,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 신가베르힐",
      "address": "전남광주통합특별시 광산구 수등로94번길 30",
      "lat": 35.18207829,
      "lon": 126.8189581,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단무들점",
      "address": "전남광주통합특별시 광산구 임방울대로826번길 60-5",
      "lat": 35.21437283,
      "lon": 126.8478231,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "광주비아농업협동조합 첨단북부지점",
      "address": "전남광주통합특별시 광산구 임방울대로825번길 76",
      "lat": 35.22137123,
      "lon": 126.8490789,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "골라바 아이스크림 할인점(첨단2호점)",
      "address": "전남광주통합특별시 광산구 첨단강변로99번길 21, 1동 107호",
      "lat": 35.21519392,
      "lon": 126.8511204,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 다원식자재",
      "address": "전남광주통합특별시 광산구 비아로 1",
      "lat": 35.22010064,
      "lon": 126.8246826,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "노블스테이",
      "address": "전남광주통합특별시 광산구 임방울대로826번길 19-7",
      "lat": 35.2167634,
      "lon": 126.8493136,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완대방점",
      "address": "전남광주통합특별시 광산구 왕버들로132번길 35",
      "lat": 35.19919692,
      "lon": 126.8249433,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 가람식자재마트수완첨단점",
      "address": "전남광주통합특별시 광산구 임방울대로 513",
      "lat": 35.20551666,
      "lon": 126.8201473,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 신창사랑점",
      "address": "전남광주통합특별시 광산구 신창로162번길 15",
      "lat": 35.1983582,
      "lon": 126.8418537,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU) 첨단대라수점",
      "address": "전남광주통합특별시 광산구 첨단중앙로182번길 90, 112호",
      "lat": 35.22109126,
      "lon": 126.8508484,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신창신호점",
      "address": "전남광주통합특별시 광산구 장신로266번길 9",
      "lat": 35.19003286,
      "lon": 126.8393234,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 SELF첨단LH3단지점",
      "address": "전남광주통합특별시 광산구 임방울대로800번길 11-5, 102호",
      "lat": 35.21721263,
      "lon": 126.8468217,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 첨단중앙점",
      "address": "전남광주통합특별시 광산구 첨단중앙로106번길 65-14",
      "lat": 35.2160688,
      "lon": 126.8470114,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신가휴먼시아",
      "address": "전남광주통합특별시 광산구 수등로94번길 46",
      "lat": 35.18142142,
      "lon": 126.818772,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 뉴첨단지구점",
      "address": "전남광주통합특별시 광산구 임방울대로825번길 60-3",
      "lat": 35.2211011,
      "lon": 126.849077,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 빅푸드식자재",
      "address": "전남광주통합특별시 광산구 첨단과기로 93-13",
      "lat": 35.22394785,
      "lon": 126.8364071,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 수완원룸점",
      "address": "전남광주통합특별시 광산구 수완로11번길 9",
      "lat": 35.18610125,
      "lon": 126.8280758,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단우리점",
      "address": "전남광주통합특별시 광산구 월계로150번길 30",
      "lat": 35.21196935,
      "lon": 126.8416506,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완브릿지점",
      "address": "전남광주통합특별시 광산구 장신로144",
      "lat": 35.1903865,
      "lon": 126.8258679,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주장덕행복점",
      "address": "전남광주통합특별시 광산구 장덕로40번길 13-2",
      "lat": 35.19438845,
      "lon": 126.8136742,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주본점",
      "address": "전남광주통합특별시 광산구 첨단중앙로 110",
      "lat": 35.21517241,
      "lon": 126.8432531,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신가사거리점",
      "address": "전남광주통합특별시 광산구 하남대로 288",
      "lat": 35.1787485,
      "lon": 126.8250646,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 신창호반5차점",
      "address": "전남광주통합특별시 광산구 왕버들로251번길27, 102,103호",
      "lat": 35.19840451,
      "lon": 126.8365398,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완아름마을점",
      "address": "전남광주통합특별시 광산구 하남대로261번길11,주상가동 104호",
      "lat": 35.18042177,
      "lon": 126.8204804,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단트레비엔점",
      "address": "전남광주통합특별시 광산구 첨단중앙로106번길25,105호",
      "lat": 35.21530305,
      "lon": 126.8442048,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 광주신창원룸점",
      "address": "전남광주통합특별시 광산구 신창로105번길 16-1",
      "lat": 35.19505593,
      "lon": 126.8368738,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단미르채점",
      "address": "전남광주통합특별시 광산구 월계로235-8",
      "lat": 35.21408683,
      "lon": 126.8517089,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단두산점",
      "address": "전남광주통합특별시 광산구 월계로117-22,상가동 102호",
      "lat": 35.21552555,
      "lon": 126.8391105,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완우미린점",
      "address": "전남광주통합특별시 광산구 임방울대로468-9",
      "lat": 35.20186183,
      "lon": 126.8208428,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 운남7단지",
      "address": "전남광주통합특별시 광산구 목련로153번길56, 101~103호",
      "lat": 35.1732508,
      "lon": 126.8158168,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 신가호반점",
      "address": "전남광주통합특별시 광산구 신창로35번길 80",
      "lat": 35.18728319,
      "lon": 126.8333187,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주아킹 광주신창점",
      "address": "전남광주통합특별시 광산구 신창로 78",
      "lat": 35.19212359,
      "lon": 126.8373709,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단동부점",
      "address": "전남광주통합특별시 광산구 첨단중앙로 201",
      "lat": 35.22333764,
      "lon": 126.8390551,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완포유점",
      "address": "전남광주통합특별시 광산구 풍영로170번길39-9, 101호",
      "lat": 35.18720438,
      "lon": 126.8153084,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "과일킹",
      "address": "전남광주통합특별시 광산구 장덕로95번길16, 207동 101호",
      "lat": 35.19644401,
      "lon": 126.8199855,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "다담리테일 첨단점",
      "address": "전남광주통합특별시 광산구 임방울대로825번길 21-10",
      "lat": 35.2194021,
      "lon": 126.8483243,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완피오레점",
      "address": "전남광주통합특별시 광산구 수완로73번길40",
      "lat": 35.19258979,
      "lon": 126.826799,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유)진균-한두레식자재마트",
      "address": "전남광주통합특별시 광산구 목련로231",
      "lat": 35.17313691,
      "lon": 126.8230338,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단센터점",
      "address": "전남광주통합특별시 광산구 임방울대로826번길 60-2",
      "lat": 35.21497878,
      "lon": 126.8484366,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 와이마트 영무수완점",
      "address": "전남광주통합특별시 광산구 수완로33번길79, 상가101호",
      "lat": 35.18714332,
      "lon": 126.8251927,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 신창프뤼몰점",
      "address": "전남광주통합특별시 광산구 신창로 64, 106호(프뤼몰타운)",
      "lat": 35.19098345,
      "lon": 126.8374324,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 신창대광점",
      "address": "전남광주통합특별시 광산구 장신로 306",
      "lat": 35.19023377,
      "lon": 126.8434891,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 운남5단지점",
      "address": "전남광주통합특별시 광산구 임방울대로 178-12",
      "lat": 35.17598887,
      "lon": 126.8183518,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 장덕미소점",
      "address": "전남광주통합특별시 광산구 풍영로329번길50, 상가 103",
      "lat": 35.20127945,
      "lon": 126.8128733,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완휴먼시아점",
      "address": "전남광주통합특별시 광산구 하남대로261번길11",
      "lat": 35.18042177,
      "lon": 126.8204804,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완진흥점",
      "address": "전남광주통합특별시 광산구 장덕로6번길 35",
      "lat": 35.19547481,
      "lon": 126.8114735,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 월계미소점",
      "address": "전남광주통합특별시 광산구 임방울대로 727-6",
      "lat": 35.21860694,
      "lon": 126.838341,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세계로정육할인마트",
      "address": "전남광주통합특별시 광산구 비아동원촌길 83",
      "lat": 35.22153455,
      "lon": 126.8291279,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "담아담아&장봐주는 언니",
      "address": "전남광주통합특별시 광산구 신창로131번길 15",
      "lat": 35.19711312,
      "lon": 126.8378063,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주보훈병원점",
      "address": "전남광주통합특별시 광산구 첨단중앙로68번길134, 상가 109호",
      "lat": 35.21056001,
      "lon": 126.8504138,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단메트로점",
      "address": "전남광주통합특별시 광산구 임방울대로 773, 109호",
      "lat": 35.21825228,
      "lon": 126.8431538,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 장보고푸드",
      "address": "전남광주통합특별시 광산구 목련로381번길 25",
      "lat": 35.18226465,
      "lon": 126.8313414,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 첨단병원점",
      "address": "전남광주통합특별시 광산구 첨단중앙로170번길 64, 1층",
      "lat": 35.22032048,
      "lon": 126.8453904,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단병원점",
      "address": "전남광주통합특별시 광산구 첨단중앙로170번길 59",
      "lat": 35.22150976,
      "lon": 126.8449077,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "초록마을",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 48",
      "lat": 35.22005073,
      "lon": 126.8363091,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "과일왕",
      "address": "전남광주통합특별시 광산구 장덕로 55",
      "lat": 35.1951359,
      "lon": 126.8152589,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 첨단스카이점",
      "address": "전남광주통합특별시 광산구 첨단중앙로 67번길 78(월계동,1층)",
      "lat": 35.21162028,
      "lon": 126.8385024,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완지구점",
      "address": "전남광주통합특별시 광산구 장신로 176",
      "lat": 35.19042431,
      "lon": 126.8293242,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 보건대타운점",
      "address": "전남광주통합특별시 광산구 장신로 308",
      "lat": 35.19187372,
      "lon": 126.8434797,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 신가중흥점",
      "address": "전남광주통합특별시 광산구 목련로 382번길 114-1",
      "lat": 35.18014168,
      "lon": 126.8381905,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐고실8단지",
      "address": "전남광주통합특별시 광산구 풍영로 330번길 15",
      "lat": 35.20164593,
      "lon": 126.816746,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "광장마트",
      "address": "전남광주통합특별시 광산구 북문대로 354",
      "lat": 35.19089701,
      "lon": 126.8542102,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주광산환영점",
      "address": "전남광주통합특별시 광산구 사암로 823",
      "lat": 35.21550299,
      "lon": 126.8207445,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "과일여왕&장봐주는언니수완점",
      "address": "전남광주통합특별시 광산구 수등로 128",
      "lat": 35.18267941,
      "lon": 126.8235351,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 R광주플래티넘점",
      "address": "전남광주통합특별시 광산구 우산로 107번길 67",
      "lat": 35.15990714,
      "lon": 126.8137457,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완프레시점",
      "address": "전남광주통합특별시 광산구 임방울대로 215번길 8",
      "lat": 35.18080058,
      "lon": 126.8170189,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 첨단호반1차점",
      "address": "전남광주통합특별시 광산구 월계로 117-35",
      "lat": 35.21636833,
      "lon": 126.8370301,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 수완탑점",
      "address": "전남광주통합특별시 광산구 수완로 50번길 13",
      "lat": 35.18965141,
      "lon": 126.8298124,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주첨단모아점",
      "address": "전남광주통합특별시 광산구 월계로 80",
      "lat": 35.21226815,
      "lon": 126.8347782,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 운남주공점",
      "address": "전남광주통합특별시 광산구 사암로 340번길 30",
      "lat": 35.17358538,
      "lon": 126.8099986,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 팜스로컬푸드수완점",
      "address": "전남광주통합특별시 광산구 풍영로 200번길 21",
      "lat": 35.18937161,
      "lon": 126.8155965,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "오피스알파 광주첨단",
      "address": "전남광주통합특별시 광산구 산월로 15",
      "lat": 35.20901964,
      "lon": 126.8389829,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "클린센스",
      "address": "전남광주통합특별시 광산구 비아안길 100-12",
      "lat": 35.2208163,
      "lon": 126.8216146,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "늘푸름마켓",
      "address": "전남광주통합특별시 광산구 월계로 207",
      "lat": 35.2136162,
      "lon": 126.848255,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주교통방송점",
      "address": "전남광주통합특별시 광산구 첨단중앙로 182번길 46",
      "lat": 35.22162349,
      "lon": 126.8463339,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한가람유지",
      "address": "전남광주통합특별시 광산구 임방울대로 142-12, 118동 706호",
      "lat": 35.17308126,
      "lon": 126.8197871,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "송이 아시아마트",
      "address": "전남광주통합특별시 광산구 비아로 74",
      "lat": 35.21936508,
      "lon": 126.8167992,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 신가원룸점",
      "address": "전남광주통합특별시 광산구 신가삼효로 26",
      "lat": 35.18645657,
      "lon": 126.8352926,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "gs25 송정더마켓점",
      "address": "전남광주통합특별시 광산구 광산로 20번길 31",
      "lat": 35.13697283,
      "lon": 126.7953965,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "단밤식자재마트 신가점",
      "address": "전남광주통합특별시 광산구 수등로 258번길 3-11",
      "lat": 35.18483779,
      "lon": 126.8384538,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(유)과일인생",
      "address": "전남광주통합특별시 광산구 수등로 94번길 32-7",
      "lat": 35.18156294,
      "lon": 126.8186257,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 흑석프레시점",
      "address": "전남광주통합특별시 광산구 풍영로 145번길 43",
      "lat": 35.18366255,
      "lon": 126.8112502,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "초록마을첨단월계점",
      "address": "전남광주통합특별시 광산구 임방울대로 826번길 86",
      "lat": 35.21364834,
      "lon": 126.8484752,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주장덕점",
      "address": "전남광주통합특별시 광산구 장신로 19번길 4, 채련빌라",
      "lat": 35.1913787,
      "lon": 126.8125643,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 월계소망점",
      "address": "전남광주통합특별시 광산구 첨단내촌로 53-12",
      "lat": 35.21138143,
      "lon": 126.8364742,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 운남본점",
      "address": "전남광주통합특별시 광산구 목련로 153번길 56",
      "lat": 35.1732508,
      "lon": 126.8158168,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "롯데슈퍼 첨단점",
      "address": "전남광주통합특별시 광산구 첨단중앙로 182번길 8",
      "lat": 35.22124696,
      "lon": 126.8420834,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아마트",
      "address": "전남광주통합특별시 광산구 비아로 22",
      "lat": 35.22027867,
      "lon": 126.8224987,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 수완아울렛점",
      "address": "전남광주통합특별시 광산구 풍영로 200번길 81",
      "lat": 35.1898854,
      "lon": 126.8187255,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완아울렛점",
      "address": "전남광주통합특별시 광산구 장신로 98, A관 4층",
      "lat": 35.18919839,
      "lon": 126.8193677,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "장금후의식도락",
      "address": "전남광주통합특별시 광산구 목련로 381번길 22",
      "lat": 35.18271865,
      "lon": 126.8315016,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "드림팀",
      "address": "전남광주통합특별시 광산구 북문대로 419번길 62",
      "lat": 35.19254311,
      "lon": 126.8458333,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신창유탑점",
      "address": "전남광주통합특별시 광산구 장신로 306-37, 2동 1001호",
      "lat": 35.18886002,
      "lon": 126.8445862,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 하남손재로점",
      "address": "전남광주통합특별시 광산구 손재로 184",
      "lat": 35.18182354,
      "lon": 126.7953349,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "로뎀나무 산정점",
      "address": "전남광주통합특별시 광산구 목련로41, 상가동 110호",
      "lat": 35.17405499,
      "lon": 126.802776,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단LC점",
      "address": "전남광주통합특별시 광산구 월계로 169",
      "lat": 35.21367972,
      "lon": 126.8440552,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "신창푸드마켓(신창푸드 유한회사)",
      "address": "전남광주통합특별시 광산구 신창로72번길 10-29",
      "lat": 35.19142819,
      "lon": 126.8387516,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 첨단우미점",
      "address": "전남광주통합특별시 광산구 임방울대로 673-13,101호",
      "lat": 35.21599767,
      "lon": 126.8300999,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "로뎀나무 운남점",
      "address": "전남광주통합특별시 광산구 임방울대로 154-24, 113호",
      "lat": 35.17433148,
      "lon": 126.8200464,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 구구공신가점",
      "address": "전남광주통합특별시 광산구 수등로 274",
      "lat": 35.18497091,
      "lon": 126.8387653,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "다담다 수완",
      "address": "전남광주통합특별시 광산구 하남대로 225",
      "lat": 35.17978162,
      "lon": 126.8181949,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 첨단남부대점",
      "address": "전남광주통합특별시 광산구 산월로41번길 8-2",
      "lat": 35.20913393,
      "lon": 126.8419232,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "카페신",
      "address": "전남광주통합특별시 광산구 수등로 205, 상가 103호",
      "lat": 35.1857562,
      "lon": 126.8308653,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완점",
      "address": "전남광주통합특별시 광산구 수완로74번길 30-2",
      "lat": 35.1916177,
      "lon": 126.8304506,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "마트핫 식자재마트",
      "address": "전남광주통합특별시 광산구 목련로 67",
      "lat": 35.1725331,
      "lon": 126.8052086,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "선정상회",
      "address": "전남광주통합특별시 광산구 왕버들로251번길 16",
      "lat": 35.19710296,
      "lon": 126.8370753,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주흑석로또점",
      "address": "전남광주통합특별시 광산구 풍영로101번안길 12",
      "lat": 35.18158806,
      "lon": 126.8105048,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "로컬푸드 노마진M",
      "address": "전남광주통합특별시 광산구 첨단중앙로67번길 7-1",
      "lat": 35.21129806,
      "lon": 126.8424262,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광산프레시점",
      "address": "전남광주통합특별시 광산구 임방울대로376",
      "lat": 35.19370143,
      "lon": 126.8240485,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주수완명진점",
      "address": "전남광주통합특별시 광산구 수완로50번길 34-1",
      "lat": 35.18915403,
      "lon": 126.8306215,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "초록마을 광주수완점",
      "address": "전남광주통합특별시 광산구 장신로147번길 6",
      "lat": 35.19141258,
      "lon": 126.8265134,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "더듬뿍",
      "address": "전남광주통합특별시 광산구 목련로273번안길 35",
      "lat": 35.17760114,
      "lon": 126.8231961,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단숭덕2",
      "address": "전남광주통합특별시 광산구 월계로118번길 10",
      "lat": 35.21307256,
      "lon": 126.8382594,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "로뎀나무(고실마을점)",
      "address": "전남광주통합특별시 광산구 장덕로95번길 45",
      "lat": 35.19758615,
      "lon": 126.8185216,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "삼정농산주식회사",
      "address": "전남광주통합특별시 광산구 월계로 217",
      "lat": 35.21372494,
      "lon": 126.8493233,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "핫 식자재마트",
      "address": "전남광주통합특별시 광산구 임방울대로 310",
      "lat": 35.18782857,
      "lon": 126.8233169,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 신가아름점",
      "address": "전남광주통합특별시 광산구 수완로11번길 45",
      "lat": 35.18613105,
      "lon": 126.825994,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아푸드원(비아점)",
      "address": "전남광주통합특별시 광산구 비아로34번길 8-6",
      "lat": 35.22025143,
      "lon": 126.8215144,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시안마켓",
      "address": "전남광주통합특별시 광산구 비아로45번길 8-6",
      "lat": 35.22003291,
      "lon": 126.8201581,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주첨단본점",
      "address": "전남광주통합특별시 광산구 첨단강변로99번길 66 ,102호",
      "lat": 35.21582317,
      "lon": 126.8490314,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "로컬푸드 노마진M 신창점",
      "address": "전남광주통합특별시 광산구 신창로 121",
      "lat": 35.19619778,
      "lon": 126.8380541,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 수완모아엘가점",
      "address": "전남광주통합특별시 광산구 목련로381번길 25, 2동 1층",
      "lat": 35.18226465,
      "lon": 126.8313414,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24광주수완해솔점",
      "address": "전남광주통합특별시 광산구 임방울대로358번길20",
      "lat": 35.19165767,
      "lon": 126.8252771,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주선운점",
      "address": "전남광주통합특별시 광산구 선운중앙로 45",
      "lat": 35.14932987,
      "lon": 126.7779334,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신가목련점",
      "address": "전남광주통합특별시 광산구 목련로394번길 42",
      "lat": 35.18358552,
      "lon": 126.8348424,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주고실8단지점",
      "address": "전남광주통합특별시 광산구 풍영로330번길 15 ,104호",
      "lat": 35.20164593,
      "lon": 126.816746,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주수완삼광점",
      "address": "전남광주통합특별시 광산구 장신로 133",
      "lat": 35.19103627,
      "lon": 126.8247896,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 첨단아크레타점",
      "address": "전남광주통합특별시 광산구 임방울대로800번길 71",
      "lat": 35.21417669,
      "lon": 126.8463395,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주쌍암점",
      "address": "전남광주통합특별시 광산구 첨단중앙로 158",
      "lat": 35.21920495,
      "lon": 126.8423905,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주첨단미래점",
      "address": "전남광주통합특별시 광산구 첨단강변로87번길 16",
      "lat": 35.21489493,
      "lon": 126.8516735,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주신창점",
      "address": "전남광주통합특별시 광산구 신창로 38",
      "lat": 35.18871611,
      "lon": 126.8372989,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 신창햇살점",
      "address": "전남광주통합특별시 광산구 신창로162번길 29-4",
      "lat": 35.19788198,
      "lon": 126.8424382,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완사랑점",
      "address": "전남광주통합특별시 광산구 임방울대로 356, 102호",
      "lat": 35.19166762,
      "lon": 126.8244075,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남탑점",
      "address": "전남광주통합특별시 광산구 하남마항로29번길 26",
      "lat": 35.18398627,
      "lon": 126.7976617,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주첨단우수점",
      "address": "전남광주통합특별시 광산구 월계로 117-35",
      "lat": 35.21636833,
      "lon": 126.8370301,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "SM식자재마트 운남점",
      "address": "전남광주통합특별시 광산구 사암로340번안길 12",
      "lat": 35.17604009,
      "lon": 126.810613,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "홈플러스(주)광주하남점",
      "address": "전남광주통합특별시 광산구 용아로 390",
      "lat": 35.17769639,
      "lon": 126.8053927,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주안청점",
      "address": "전남광주통합특별시 광산구 임곡로 653",
      "lat": 35.21683721,
      "lon": 126.8017861,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "공단문구종합상사",
      "address": "전남광주통합특별시 광산구 하남산단4번로 172",
      "lat": 35.19074108,
      "lon": 126.808926,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨엘텍",
      "address": "전남광주통합특별시 광산구 사암로 429",
      "lat": 35.18258993,
      "lon": 126.8087066,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 공구상가점",
      "address": "전남광주통합특별시 광산구 하남산단3번로 138",
      "lat": 35.18923234,
      "lon": 126.8090218,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "종합상사 라이온",
      "address": "전남광주통합특별시 광산구 비아로127번길 38",
      "lat": 35.22393307,
      "lon": 126.8180886,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 우산점",
      "address": "전남광주통합특별시 광산구 용아로 175",
      "lat": 35.15804077,
      "lon": 126.7999079,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단문화점",
      "address": "전남광주통합특별시 광산구 첨단중앙로106번길 65-3, 115호",
      "lat": 35.21516659,
      "lon": 126.8463729,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단메가점",
      "address": "전남광주통합특별시 광산구 앰코로 25",
      "lat": 35.22034752,
      "lon": 126.8526224,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "다모아 생활용품",
      "address": "전남광주통합특별시 광산구 첨단중앙로 170번길 58, 101호",
      "lat": 35.22032195,
      "lon": 126.8450607,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "파인땡큐마트",
      "address": "전남광주통합특별시 광산구 수완로9번길 22-14",
      "lat": 35.18586976,
      "lon": 126.8271196,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)자연드림 광주수완2호점",
      "address": "전남광주통합특별시 광산구 수완로73번길 7",
      "lat": 35.19158887,
      "lon": 126.8281019,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 티스토어마켓",
      "address": "전남광주통합특별시 광산구 풍영로145번길 90",
      "lat": 35.18331944,
      "lon": 126.8097641,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "달구지 마트",
      "address": "전남광주통합특별시 광산구 임방울대로 727-19",
      "lat": 35.21914378,
      "lon": 126.8362473,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 장덕대방점",
      "address": "전남광주통합특별시 광산구 풍영로170번길 39-26",
      "lat": 35.1888993,
      "lon": 126.8176098,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주월계차니점",
      "address": "전남광주통합특별시 광산구 월계로16번길 59",
      "lat": 35.21066728,
      "lon": 126.8349481,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)신창원룸점",
      "address": "전남광주통합특별시 광산구 신창로105번길 24-3",
      "lat": 35.19516514,
      "lon": 126.8364559,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "동남수퍼",
      "address": "전남광주통합특별시 광산구 상무대로 349(신촌동1117-23)",
      "lat": 35.1441883319,
      "lon": 126.803862647,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "호반마트",
      "address": "전남광주통합특별시 광산구 송도로 162번길 11-6",
      "lat": 35.12898378,
      "lon": 126.7943507306,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "제이에스월드",
      "address": "전남광주통합특별시 광산구 평동로1106번길 32",
      "lat": 35.1338427555,
      "lon": 126.785554963,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주도산호반점",
      "address": "전남광주통합특별시 광산구 도산로9번길 40",
      "lat": 35.1279443357,
      "lon": 126.7900928269,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 구구공도산점",
      "address": "전남광주통합특별시 광산구 송도로 227",
      "lat": 35.1342800759,
      "lon": 126.7965128141,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 썬마트",
      "address": "전남광주통합특별시 광산구 상무대로 128-1",
      "lat": 35.1315000807,
      "lon": 126.7882909096,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "명지마트",
      "address": "전남광주통합특별시 광산구 송도로 320번길 11",
      "lat": 35.141136367,
      "lon": 126.8030575369,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "나비마트 신촌점",
      "address": "전남광주통합특별시 광산구 사암로24번길 60-16(신촌동829-2)",
      "lat": 35.145427934,
      "lon": 126.8094222784,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 소촌공단점",
      "address": "전남광주통합특별시 광산구 소촌로149번길36-1, 마동 1층",
      "lat": 35.1576129187,
      "lon": 126.7868391802,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 인재대양식자재마트",
      "address": "전남광주통합특별시 광산구 어등대로 555",
      "lat": 35.1525284932,
      "lon": 126.7840412322,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "로컬푸드빅마트 선운점",
      "address": "전남광주통합특별시 광산구 선운로20번길 40",
      "lat": 35.1468263087,
      "lon": 126.7749828647,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 송정더솔점",
      "address": "전남광주통합특별시 광산구 어등대로 711",
      "lat": 35.1421541997,
      "lon": 126.7946086845,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주선운주공점",
      "address": "전남광주통합특별시 광산구 선운중앙로 68,상가동 1층",
      "lat": 35.1466314245,
      "lon": 126.7796116088,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유광주선운점",
      "address": "전남광주통합특별시 광산구 선운로 65, 상가동 102",
      "lat": 35.1508861538,
      "lon": 126.7779741634,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유선운이지3차점",
      "address": "전남광주통합특별시 광산구 선운로 55, 313동 101,102호",
      "lat": 35.1505280249,
      "lon": 126.774709191,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주선운점",
      "address": "전남광주통합특별시 광산구 선운로34",
      "lat": 35.1483726063,
      "lon": 126.7729862594,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "부지런한사람들행암점",
      "address": "전남광주통합특별시 광산구 선운로 34",
      "lat": 35.14837261,
      "lon": 126.7729863,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유선운이지점",
      "address": "전남광주통합특별시 광산구 선운로20번길 48",
      "lat": 35.1467357389,
      "lon": 126.7757889695,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 선운중앙점",
      "address": "전남광주통합특별시 광산구 어등대로 418-1",
      "lat": 35.1488350882,
      "lon": 126.7696315421,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "마켓진달래",
      "address": "전남광주통합특별시 광산구 어등대로 418-1",
      "lat": 35.14883509,
      "lon": 126.7696315,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "푸드마켓 금성점",
      "address": "전남광주통합특별시 광산구 금봉로30",
      "lat": 35.1514130532,
      "lon": 126.8016846312,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "호대마트",
      "address": "전남광주통합특별시 광산구 어등대로433번길 62(서봉동9-1)",
      "lat": 35.1525999616,
      "lon": 126.7696870845,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주소촌공단점",
      "address": "전남광주통합특별시 광산구 어등대로595번길 13, 상가",
      "lat": 35.1520771675,
      "lon": 126.786703133,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "황금마트편의점",
      "address": "전남광주통합특별시 광산구 상무대로 309-1",
      "lat": 35.1438388792,
      "lon": 126.799713128,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25(GS25)광주공항",
      "address": "전남광주통합특별시 광산구 상무대로 420-25, 2층",
      "lat": 35.1403536811,
      "lon": 126.8102030328,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주공항역점",
      "address": "전남광주통합특별시 광산구 상무대로411",
      "lat": 35.1444372211,
      "lon": 126.810865283,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에덴수퍼",
      "address": "전남광주통합특별시 광산구 신흥동길 19(신촌동1064-10)",
      "lat": 35.1446411281,
      "lon": 126.8010934244,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 광주산정부영점",
      "address": "전남광주통합특별시 광산구 목련로 41",
      "lat": 35.17405499,
      "lon": 126.802776,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남장안점",
      "address": "전남광주통합특별시 광산구 임곡로 691-5",
      "lat": 35.21717101,
      "lon": 126.8056374,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 영은상사",
      "address": "전남광주통합특별시 광산구 손재로110번길 36",
      "lat": 35.17586374,
      "lon": 126.7989819,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "드림마트",
      "address": "전남광주통합특별시 광산구 하남대로54번안길 104",
      "lat": 35.17778986,
      "lon": 126.7982162,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하늘마트",
      "address": "전남광주통합특별시 광산구 목련로 15",
      "lat": 35.1735248,
      "lon": 126.7990674,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유)비케이마트수완점",
      "address": "전남광주통합특별시 광산구 장덕로95번길 46",
      "lat": 35.19760922,
      "lon": 126.8199026,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "FM마트",
      "address": "전남광주통합특별시 광산구 신창로 8-20",
      "lat": 35.18578916,
      "lon": 126.8391945,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주월계제일점",
      "address": "전남광주통합특별시 광산구 첨단중앙로124번길 65",
      "lat": 35.21667952,
      "lon": 126.8457551,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 운남7단지점",
      "address": "전남광주통합특별시 광산구 목련로153번길 53",
      "lat": 35.17421563,
      "lon": 126.8144353,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주쌍암센터",
      "address": "전남광주통합특별시 광산구 첨단중앙로170번길 41",
      "lat": 35.22087967,
      "lon": 126.8441326,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스(GS)25신가부영점",
      "address": "전남광주통합특별시 광산구 수등로 287",
      "lat": 35.18697089,
      "lon": 126.8393501,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "우리청과마트",
      "address": "전남광주통합특별시 광산구 목련로 153번길 143",
      "lat": 35.17791683,
      "lon": 126.8134471,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 월계크라운",
      "address": "전남광주통합특별시 광산구 첨단내촌로71",
      "lat": 35.21285636,
      "lon": 126.8362028,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "대우별마트",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 88-21",
      "lat": 35.21966164,
      "lon": 126.8293248,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 장고분점",
      "address": "전남광주통합특별시 광산구 첨단내촌로70번길 102",
      "lat": 35.21304674,
      "lon": 126.8419785,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한들마트",
      "address": "전남광주통합특별시 광산구 목련로382번길 79",
      "lat": 35.18131938,
      "lon": 126.8370651,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유한회사 고기왕",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 5",
      "lat": 35.22101434,
      "lon": 126.8408158,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주운남5단지점",
      "address": "전남광주통합특별시 광산구 하남대로 248-12",
      "lat": 35.17813913,
      "lon": 126.8204384,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "선경마트",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 42-25",
      "lat": 35.22191189,
      "lon": 126.8345055,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스(GS)25운남삼성점",
      "address": "전남광주통합특별시 광산구 목련로217번길 22",
      "lat": 35.17322745,
      "lon": 126.8216407,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "영암마트 첨단점",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 48",
      "lat": 35.22005073,
      "lon": 126.8363091,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "다담리테일 운남점",
      "address": "전남광주통합특별시 광산구 목련로273번안길 12",
      "lat": 35.1784874,
      "lon": 126.8240066,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한아름마트",
      "address": "전남광주통합특별시 광산구 하남대로 248-13",
      "lat": 35.17794231,
      "lon": 126.8207851,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "광명슈퍼",
      "address": "전남광주통합특별시 광산구 비아로 12번길 27",
      "lat": 35.22145945,
      "lon": 126.8230433,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 월계원룸",
      "address": "전남광주통합특별시 광산구 월계로34번길 20",
      "lat": 35.2100541,
      "lon": 126.8338784,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "와이마트 첨단호반점",
      "address": "전남광주통합특별시 광산구 월계로 59",
      "lat": 35.21243826,
      "lon": 126.8322203,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유하남8번로점",
      "address": "전남광주통합특별시 광산구 하남산단천변우로 28",
      "lat": 35.20861496,
      "lon": 126.8136304,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "미래마트",
      "address": "전남광주통합특별시 광산구 목련로 307-13",
      "lat": 35.17671146,
      "lon": 126.8270908,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "남양마트",
      "address": "전남광주통합특별시 광산구 월계로 137",
      "lat": 35.21411063,
      "lon": 126.8405759,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주비아중흥점",
      "address": "전남광주통합특별시 광산구 비아안길 29",
      "lat": 35.22082185,
      "lon": 126.8177666,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "광주비아농협비아지점",
      "address": "전남광주통합특별시 광산구 비아중앙로 36",
      "lat": 35.22213564,
      "lon": 126.8250994,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "s마트(부국슈퍼)",
      "address": "전남광주통합특별시 광산구 비아중앙로 24",
      "lat": 35.22103446,
      "lon": 126.8249065,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU) 첨단부영점",
      "address": "전남광주통합특별시 광산구 첨단중앙로68번길 22",
      "lat": 35.21081396,
      "lon": 126.8442618,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "부영마트",
      "address": "전남광주통합특별시 광산구 월계로 170",
      "lat": 35.21250204,
      "lon": 126.8451634,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주신창삼능점",
      "address": "전남광주통합특별시 광산구 신창로 20",
      "lat": 35.18673012,
      "lon": 126.8377821,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하일마트",
      "address": "전남광주통합특별시 광산구 목련로397번길 31",
      "lat": 35.18385453,
      "lon": 126.8309103,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주산월점",
      "address": "전남광주통합특별시 광산구 월계로130번길 33",
      "lat": 35.21199677,
      "lon": 126.8397077,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "롯데쇼핑(주) 롯데마트 첨단점",
      "address": "전남광주통합특별시 광산구 첨단강변로99번길 22",
      "lat": 35.21676597,
      "lon": 126.8519046,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단두경점",
      "address": "전남광주통합특별시 광산구 첨단중앙로152번길31",
      "lat": 35.21922937,
      "lon": 126.8442859,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)롯데프레시 광주신가점",
      "address": "전남광주통합특별시 광산구 수등로258번길 10",
      "lat": 35.18422059,
      "lon": 126.8358383,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "더존마트",
      "address": "전남광주통합특별시 광산구 목련로153번길 124",
      "lat": 35.17738597,
      "lon": 126.8151495,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "일신마트",
      "address": "전남광주통합특별시 광산구 첨단중앙로181번길 42-14",
      "lat": 35.2215995,
      "lon": 126.8372895,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주쌍암제일점",
      "address": "전남광주통합특별시 광산구 첨단중앙로170번길 12",
      "lat": 35.22047488,
      "lon": 126.8424104,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)신가지구점",
      "address": "전남광주통합특별시 광산구 수등로258번길 13",
      "lat": 35.18373061,
      "lon": 126.8378592,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 슈퍼마켓자연숲",
      "address": "전남광주통합특별시 광산구 목련로153번길 85",
      "lat": 35.17586223,
      "lon": 126.8144401,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주첨단 호수공원점",
      "address": "전남광주통합특별시 광산구 첨단중앙로182번길 22",
      "lat": 35.22160902,
      "lon": 126.8437416,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한아름마트",
      "address": "전남광주통합특별시 광산구 목련로153번길 134",
      "lat": 35.17782972,
      "lon": 126.8167111,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지엠(GM)마트운남점",
      "address": "전남광주통합특별시 광산구 목련로153번길 56",
      "lat": 35.1732508,
      "lon": 126.8158168,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 하남점",
      "address": "전남광주통합특별시 광산구 손재로110번길 27",
      "lat": 35.17625393,
      "lon": 126.7985459,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 하남공원점",
      "address": "전남광주통합특별시 광산구 하남대로54번안길3",
      "lat": 35.17776097,
      "lon": 126.7993306,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 하남3지구점",
      "address": "전남광주통합특별시 광산구 하남대로 95",
      "lat": 35.18045728,
      "lon": 126.8037474,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 하남모아엘가점",
      "address": "전남광주통합특별시 광산구 단전둘레길 15, 103호",
      "lat": 35.18159433,
      "lon": 126.7968153,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24하남공단점",
      "address": "전남광주통합특별시 광산구 용아로 657",
      "lat": 35.20205092,
      "lon": 126.8042233,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "펜모아",
      "address": "전남광주통합특별시 광산구 용아로 383 , 2층",
      "lat": 35.17752378,
      "lon": 126.8041568,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남중흥점",
      "address": "전남광주통합특별시 광산구 목련로21번길20, 132동 103호",
      "lat": 35.17432193,
      "lon": 126.8009793,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 하남손재로점",
      "address": "전남광주통합특별시 광산구 손재로 324",
      "lat": 35.19455552,
      "lon": 126.7952369,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주여대타운점",
      "address": "전남광주통합특별시 광산구 여대길 290",
      "lat": 35.16656761,
      "lon": 126.7952924,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "리빙플러스",
      "address": "전남광주통합특별시 광산구 목련로 75",
      "lat": 35.17249593,
      "lon": 126.8061046,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에브리마켓 주식회사",
      "address": "전남광주통합특별시 광산구 진곡산단2번로 87",
      "lat": 35.20181685,
      "lon": 126.7895299,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주진곡점",
      "address": "전남광주통합특별시 광산구 진곡산단5번로 43-12",
      "lat": 35.20919217,
      "lon": 126.7829449,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(유)다함께",
      "address": "전남광주통합특별시 광산구 용아로379번길 30",
      "lat": 35.17707726,
      "lon": 126.8024283,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 하남삼성점",
      "address": "전남광주통합특별시 광산구 하남산단6번로80, 상가동 105호",
      "lat": 35.20208169,
      "lon": 126.8038062,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "위드미 광주진곡산단점",
      "address": "전남광주통합특별시 광산구 진곡산단2번로 58-5",
      "lat": 35.19988325,
      "lon": 126.791558,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남2지구점",
      "address": "전남광주통합특별시 광산구 하남대로 54번안길 32, 1",
      "lat": 35.17734084,
      "lon": 126.7982167,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 하남스테이점",
      "address": "전남광주통합특별시 광산구 용아로 405",
      "lat": 35.17949936,
      "lon": 126.8044349,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유광주진곡산단점",
      "address": "전남광주통합특별시 광산구 진곡산단2번로 47-59",
      "lat": 35.20028251,
      "lon": 126.7906766,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 하남다승",
      "address": "전남광주통합특별시 광산구 용아로399번길 51, 1동 105호",
      "lat": 35.17714876,
      "lon": 126.803018,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 산정원룸점",
      "address": "전남광주통합특별시 광산구 산정공원로 95",
      "lat": 35.17606701,
      "lon": 126.8064592,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 산정셀트리움점",
      "address": "전남광주통합특별시 광산구 목련로42, 상가1동 102",
      "lat": 35.17157228,
      "lon": 126.8022406,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "롯데프레시 광주하남점",
      "address": "전남광주통합특별시 광산구 하남대로39, 외1필지",
      "lat": 35.18054359,
      "lon": 126.7978928,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주진만점",
      "address": "전남광주통합특별시 광산구 하남울로48번길4, 101",
      "lat": 35.18450539,
      "lon": 126.8025982,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 하남공원점",
      "address": "전남광주통합특별시 광산구 하남대로54번안길142",
      "lat": 35.17781741,
      "lon": 126.8001553,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "고기파는형제들",
      "address": "전남광주통합특별시 광산구 손재로110번길 27",
      "lat": 35.17625393,
      "lon": 126.7985459,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 하남지식센터점",
      "address": "전남광주통합특별시 광산구 하남산단6번로57, 상가동 107",
      "lat": 35.20311932,
      "lon": 126.8013056,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주어등산한양",
      "address": "전남광주통합특별시 광산구 여대길 340 ,102호",
      "lat": 35.16770123,
      "lon": 126.7923161,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 서희센트럴점",
      "address": "전남광주통합특별시 광산구 용아로 436-20",
      "lat": 35.18376491,
      "lon": 126.8067705,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주팔라시오점",
      "address": "전남광주통합특별시 광산구 고봉로 53",
      "lat": 35.18183124,
      "lon": 126.8013903,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "진곡아시아마트",
      "address": "전남광주통합특별시 광산구 진곡산단2번로58-7,103호",
      "lat": 35.20001949,
      "lon": 126.7914562,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "한마음새마을금고(하남본점)",
      "address": "전남광주통합특별시 광산구 하남대로 69",
      "lat": 35.18058633,
      "lon": 126.8011314,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "넘버원피싱샵(세븐일레븐 광주진곡오선점)",
      "address": "전남광주통합특별시 광산구 진곡산단3번로 54",
      "lat": 35.20188326,
      "lon": 126.7889463,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남5번로점",
      "address": "전남광주통합특별시 광산구 하남산단5번로 120, 나동",
      "lat": 35.19638555,
      "lon": 126.8080664,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주산정초점",
      "address": "전남광주통합특별시 광산구 용아로297번길 58-12",
      "lat": 35.17075475,
      "lon": 126.7999014,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "금빛해바라기 주식회사",
      "address": "전남광주통합특별시 광산구 고봉로 89",
      "lat": 35.18282432,
      "lon": 126.7975083,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 하남다사로움점",
      "address": "전남광주통합특별시 광산구 목련로21번길45",
      "lat": 35.1748517,
      "lon": 126.7987071,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU)하남2지구점",
      "address": "전남광주통합특별시 광산구 용아로379번길 45",
      "lat": 35.17642574,
      "lon": 126.8018458,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 하남모아점",
      "address": "전남광주통합특별시 광산구 손재로 191",
      "lat": 35.18242792,
      "lon": 126.7946682,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "초록마을 광주하남점",
      "address": "전남광주통합특별시 광산구 손재로110번길 25-1",
      "lat": 35.17637026,
      "lon": 126.7980472,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남3지구점",
      "address": "전남광주통합특별시 광산구 하남대로 47",
      "lat": 35.18055774,
      "lon": 126.7986573,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하남마트",
      "address": "전남광주통합특별시 광산구 용아로379번길 25",
      "lat": 35.1761322,
      "lon": 126.8024704,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완파크힐스점",
      "address": "전남광주통합특별시 광산구 하남산단1번로 61, 126",
      "lat": 35.18617004,
      "lon": 126.8018298,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 수완예미지점",
      "address": "전남광주통합특별시 광산구 하남산단1번로 61, 142호",
      "lat": 35.18617004,
      "lon": 126.8018298,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주하남산단점",
      "address": "전남광주통합특별시 광산구 손재로 458",
      "lat": 35.20645779,
      "lon": 126.7952441,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주오선IC점",
      "address": "전남광주통합특별시 광산구 손재로 397",
      "lat": 35.20098971,
      "lon": 126.7948402,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "임곡농업협동조합",
      "address": "전남광주통합특별시 광산구 고봉로 796",
      "lat": 35.21962367,
      "lon": 126.7439107,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "장봐주는언니 하남점",
      "address": "전남광주통합특별시 광산구 목련로21번길 20, 상가동 107호",
      "lat": 35.17432193,
      "lon": 126.8009793,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주하남진만점",
      "address": "전남광주통합특별시 광산구 하남울로48번길 4",
      "lat": 35.18450539,
      "lon": 126.8025982,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 하남CGV점",
      "address": "전남광주통합특별시 광산구 용아로400번길 29",
      "lat": 35.17891456,
      "lon": 126.8065165,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "더듬뿍과일 하남2지구점",
      "address": "전남광주통합특별시 광산구 하남대로54번안길 136",
      "lat": 35.17782119,
      "lon": 126.799786,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 하남프레시점",
      "address": "전남광주통합특별시 광산구 목련로 15",
      "lat": 35.1735248,
      "lon": 126.7990674,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 하남부영3차점",
      "address": "전남광주통합특별시 광산구 하남대로 54번안길 42-8",
      "lat": 35.1778264,
      "lon": 126.7978619,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하남마트",
      "address": "전남광주통합특별시 광산구 무진대로 231번길 29-13",
      "lat": 35.16337111,
      "lon": 126.8052841,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "럭키마트",
      "address": "전남광주통합특별시 광산구 진곡산단 2번로 84",
      "lat": 35.2017837,
      "lon": 126.7901602,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "오픈박스 광주하남점",
      "address": "전남광주통합특별시 광산구 고봉로 113번길 2",
      "lat": 35.18433733,
      "lon": 126.795271,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "장보고싶은마트목련점",
      "address": "전남광주통합특별시 광산구 목련로 41, 상가동 1층",
      "lat": 35.17405499,
      "lon": 126.802776,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 광주어등점",
      "address": "전남광주통합특별시 광산구 여대길 303",
      "lat": 35.16582946,
      "lon": 126.7941637,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주하남3지구점",
      "address": "전남광주통합특별시 광산구 하남마항로29번길 26",
      "lat": 35.18398627,
      "lon": 126.7976617,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 진곡산단점",
      "address": "전남광주통합특별시 광산구 진곡산단2번로 88-2",
      "lat": 35.2021047,
      "lon": 126.7905417,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 하남로또점",
      "address": "전남광주통합특별시 광산구 하남울로 24, 103,104호",
      "lat": 35.18237296,
      "lon": 126.8021735,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 진곡센터점",
      "address": "전남광주통합특별시 광산구 진곡산단 5번로 57-23",
      "lat": 35.21008962,
      "lon": 126.7833883,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 하남중앙점",
      "address": "전남광주통합특별시 광산구 고봉로 67",
      "lat": 35.18190196,
      "lon": 126.7997582,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 하남3지구점",
      "address": "전남광주통합특별시 광산구 고봉로 96",
      "lat": 35.1835391,
      "lon": 126.7973094,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 하남우체국점",
      "address": "전남광주통합특별시 광산구 하남산단4번로 172",
      "lat": 35.19074108,
      "lon": 126.808926,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주돈보스코점",
      "address": "전남광주통합특별시 광산구 고봉로 130",
      "lat": 35.18465799,
      "lon": 126.7940048,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "평동농협",
      "address": "전남광주통합특별시 광산구 평동로800번길 16(옥동218)",
      "lat": 35.12434484,
      "lon": 126.7607213,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 그린화이트",
      "address": "전남광주통합특별시 광산구 동곡로185번길 74",
      "lat": 35.0994333,
      "lon": 126.7684836,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주동곡점",
      "address": "전남광주통합특별시 광산구 동곡로 170",
      "lat": 35.09788022,
      "lon": 126.775553,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "동곡농협",
      "address": "전남광주통합특별시 광산구 동곡로 161-1",
      "lat": 35.09790983,
      "lon": 126.7742329,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아 베스트마트",
      "address": "전남광주통합특별시 광산구 임곡로 423",
      "lat": 35.20993112,
      "lon": 126.7817754,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주진곡은하점",
      "address": "전남광주통합특별시 광산구 진곡산단중앙로226",
      "lat": 35.20855854,
      "lon": 126.7816866,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주고룡점",
      "address": "전남광주통합특별시 광산구 임곡로 413",
      "lat": 35.20953398,
      "lon": 126.7808932,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 광주고룡점",
      "address": "전남광주통합특별시 광산구 진곡산단중앙로250",
      "lat": 35.21034935,
      "lon": 126.7803195,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "오케이할인마트",
      "address": "전남광주통합특별시 광산구 월전로 20  (월전동, 스타빌)",
      "lat": 35.12154443,
      "lon": 126.7767369,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "탑스푸드마켓 평동점",
      "address": "전남광주통합특별시 광산구 월전로 22-69",
      "lat": 35.12160086,
      "lon": 126.7792105,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "외국인마트",
      "address": "전남광주통합특별시 광산구 평동로 851, 3층",
      "lat": 35.12506724,
      "lon": 126.7672335,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주평동아시아마트점",
      "address": "전남광주통합특별시 광산구 평동로751-2",
      "lat": 35.12611695,
      "lon": 126.7569057,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "월전슈퍼마켓",
      "address": "전남광주통합특별시 광산구 월전로 4-38",
      "lat": 35.12014441,
      "lon": 126.7793894,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "O.K아시아마트",
      "address": "전남광주통합특별시 광산구 월전로 10-11",
      "lat": 35.12124458,
      "lon": 126.7776427,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 뉴평동공단",
      "address": "전남광주통합특별시 광산구 평동로913번길 58",
      "lat": 35.13083203,
      "lon": 126.7738254,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주평동SB점",
      "address": "전남광주통합특별시 광산구 평동산단로 196-24",
      "lat": 35.12417533,
      "lon": 126.7709391,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주옥동점",
      "address": "전남광주통합특별시 광산구 평동로789-73,상가동101,102호",
      "lat": 35.12624231,
      "lon": 126.7575317,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25 평동산단점",
      "address": "전남광주통합특별시 광산구 평동산단로 170-3",
      "lat": 35.12229861,
      "lon": 126.7689461,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유평동타운점",
      "address": "전남광주통합특별시 광산구 월전로4-10",
      "lat": 35.12016723,
      "lon": 126.7781903,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주평동월전점",
      "address": "전남광주통합특별시 광산구 월전로22",
      "lat": 35.12179803,
      "lon": 126.7764989,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 광주옥동점",
      "address": "전남광주통합특별시 광산구 평동로 792",
      "lat": 35.1245602,
      "lon": 126.7609584,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주평동원룸점",
      "address": "전남광주통합특별시 광산구 월전로6-5 (월전동, 월전빌)",
      "lat": 35.12068763,
      "lon": 126.7776311,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지마트 평동점",
      "address": "전남광주통합특별시 광산구 평동로803번길2",
      "lat": 35.12461156,
      "lon": 126.7623924,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "산단탑마트",
      "address": "전남광주통합특별시 광산구 평동산단로 188(월전동 1210)",
      "lat": 35.12346959,
      "lon": 126.7686162,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주평동산단점",
      "address": "전남광주통합특별시 광산구 평동산단3번로 48(용동)",
      "lat": 35.12950923,
      "lon": 126.7557606,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 평동일번로",
      "address": "전남광주통합특별시 광산구 송촌길 2-17(송촌동276-15)",
      "lat": 35.1377624,
      "lon": 126.7740915,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 광주송촌점",
      "address": "전남광주통합특별시 광산구 송촌길 1(송촌동276-1)",
      "lat": 35.13864247,
      "lon": 126.7735307,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "강변마트",
      "address": "전남광주통합특별시 광산구 동곡로 672(송촌동61-2)",
      "lat": 35.14146132,
      "lon": 126.7769526,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "첨단마트(에프엠마트)",
      "address": "전남광주통합특별시 광산구 월계로 117-32",
      "lat": 35.21671702,
      "lon": 126.8407458,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "풍년마트",
      "address": "전남광주통합특별시 광산구 비아로185",
      "lat": 35.22386366,
      "lon": 126.8244141,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "유투(U2) 편의점",
      "address": "전남광주통합특별시 광산구 어등대로412",
      "lat": 35.1490079848,
      "lon": 126.7687205569,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 SMART광주도산우방점",
      "address": "전남광주통합특별시 광산구 평동로1098번길185, 111동 101호",
      "lat": 35.1281334924,
      "lon": 126.7827815475,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "나나마트(옥동점)",
      "address": "전남광주통합특별시 광산구 평동로 789-3",
      "lat": 35.12499705,
      "lon": 126.7605678,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주평동스타점",
      "address": "전남광주통합특별시 광산구 평동산단7번로 59(연산동)",
      "lat": 35.11365879,
      "lon": 126.7549611,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주소촌이지점",
      "address": "전남광주통합특별시 광산구 소촌로152번길11, 101~102",
      "lat": 35.1586991118,
      "lon": 126.7938234537,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 소촌송광점",
      "address": "전남광주통합특별시 광산구 어등대로647번길32,상가 1,2호",
      "lat": 35.1448418234,
      "lon": 126.7936258311,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "화신유통",
      "address": "전남광주통합특별시 광산구 남동길 32",
      "lat": 35.129859293,
      "lon": 126.7886136016,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "삼도농협 하나로마트",
      "address": "전남광주통합특별시 광산구 상지길 2 (도덕동)",
      "lat": 35.16234947,
      "lon": 126.7029736,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "하나축산아시아마트",
      "address": "전남광주통합특별시 광산구 평동로 791 ,103호",
      "lat": 35.12480508,
      "lon": 126.761153,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 가족마트68",
      "address": "전남광주통합특별시 광산구 월전로 22-29",
      "lat": 35.12253918,
      "lon": 126.7775943,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 평동타운점",
      "address": "전남광주통합특별시 광산구 평동로 851",
      "lat": 35.12506724,
      "lon": 126.7672335,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "6번가 마트",
      "address": "전남광주통합특별시 광산구 월전로4-2",
      "lat": 35.12016255,
      "lon": 126.7779487,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "골드아시아마트",
      "address": "전남광주통합특별시 광산구 평동로 749-2",
      "lat": 35.12644988,
      "lon": 126.7566067,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "(주)가족마트",
      "address": "전남광주통합특별시 광산구 월전로 22-29",
      "lat": 35.12253918,
      "lon": 126.7775943,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "대한타이마트((주)태한무역지점)",
      "address": "전남광주통합특별시 광산구 월전로 10-6",
      "lat": 35.12084785,
      "lon": 126.7774774,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아세안마트",
      "address": "전남광주통합특별시 광산구 월전로 10-40",
      "lat": 35.12131495,
      "lon": 126.778204,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광산엘리체점",
      "address": "전남광주통합특별시 광산구 용동길63번길31,상가동106,107호",
      "lat": 35.13862776,
      "lon": 126.7516004,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주평동센터",
      "address": "전남광주통합특별시 광산구 평동로 801",
      "lat": 35.12475142,
      "lon": 126.7619348,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 평동3차산단점",
      "address": "전남광주통합특별시 광산구 평동산단7번로128,1층(연산동)",
      "lat": 35.1176865,
      "lon": 126.7603272,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "이마트24 R평동3차점",
      "address": "전남광주통합특별시 광산구 평동산단연산로28 (연산동)",
      "lat": 35.11262132,
      "lon": 126.7558698,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "99마트",
      "address": "전남광주통합특별시 광산구 월전로 22-35",
      "lat": 35.1226597,
      "lon": 126.7777726,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아시아슈퍼 월전점",
      "address": "전남광주통합특별시 광산구 월전로22-13",
      "lat": 35.12203213,
      "lon": 126.776845,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알파라이프",
      "address": "전남광주통합특별시 광산구 상무대로 248",
      "lat": 35.14070103,
      "lon": 126.7945423,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "송정철물공구",
      "address": "전남광주통합특별시 광산구 상무대로 324",
      "lat": 35.14336764,
      "lon": 126.8012019,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "쌍합성상회 쌍표철물",
      "address": "전남광주통합특별시 광산구 내상로33번길 10(송정동809-3)",
      "lat": 35.13909499,
      "lon": 126.7973397,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "파머스마트 송정점",
      "address": "전남광주통합특별시 광산구 내상로 36(송정동820-6)",
      "lat": 35.138567,
      "lon": 126.7966487,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 송정중앙점",
      "address": "전남광주통합특별시 광산구 광산로 30(송정동843-1)",
      "lat": 35.13855665,
      "lon": 126.7950686,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 송정점",
      "address": "전남광주통합특별시 광산구 광산로 53",
      "lat": 35.14020107,
      "lon": 126.7969977,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "중앙상회",
      "address": "전남광주통합특별시 광산구 송정로15번길 58(송정동819-8)",
      "lat": 35.13817366,
      "lon": 126.7958362,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "제일고추상회",
      "address": "전남광주통합특별시 광산구 광산로30번길 63(송정동884-5)",
      "lat": 35.13649894,
      "lon": 126.7971769,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 송정명지점",
      "address": "전남광주통합특별시 광산구 송도로320번길 16-15,상가동101호",
      "lat": 35.13972549,
      "lon": 126.8038246,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주송정대화점",
      "address": "전남광주통합특별시 광산구 송도로212번길31-8, 101~108호",
      "lat": 35.13206028,
      "lon": 126.7983786,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 거경",
      "address": "전남광주통합특별시 광산구 내상로 86",
      "lat": 35.13559567,
      "lon": 126.8014103,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "송정농협 경제사업장",
      "address": "전남광주통합특별시 광산구 광산로68번길 38",
      "lat": 35.1392185,
      "lon": 126.7995846,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "영암마트 송정점",
      "address": "전남광주통합특별시 광산구 송정로 87",
      "lat": 35.13361429,
      "lon": 126.7999673,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 송정나비점",
      "address": "전남광주통합특별시 광산구 송도로 307-1",
      "lat": 35.14047777,
      "lon": 126.8011884,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주송정점",
      "address": "전남광주통합특별시 광산구 송정로 61(송정동895-1)",
      "lat": 35.13477017,
      "lon": 126.7977207,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "알리바이 공항24편의점",
      "address": "전남광주통합특별시 광산구 송도로 262(송정동258-28)",
      "lat": 35.13668508,
      "lon": 126.7987489,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "뉴나이스마트",
      "address": "전남광주통합특별시 광산구 송도로320번길 16-15(송정동448-1)",
      "lat": 35.13972549,
      "lon": 126.8038246,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU) 송정에이스점",
      "address": "전남광주통합특별시 광산구 내상로 73 (송정동555-4)",
      "lat": 35.1367711,
      "lon": 126.8002332,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "송정푸드마켓",
      "address": "전남광주통합특별시 광산구 광산로 73",
      "lat": 35.14119986,
      "lon": 126.7987248,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에덴종합마트",
      "address": "전남광주통합특별시 광산구 용보로27번길 43(송정동425-17)",
      "lat": 35.13746788,
      "lon": 126.8030474,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "농협마트",
      "address": "전남광주통합특별시 광산구 용진로 391(송치동393-1)",
      "lat": 35.18140516,
      "lon": 126.7299986,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 빛그린산단점",
      "address": "전남광주통합특별시 광산구 삼도로101 (삼거동)",
      "lat": 35.16367206,
      "lon": 126.6747549,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주빛그린산단점",
      "address": "전남광주통합특별시 광산구 빛동2로가길 13(삼거동840)",
      "lat": 35.16612721,
      "lon": 126.672497,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "삼도농협 대산간이지점",
      "address": "전남광주통합특별시 광산구 노안삼도로 979(삼도동)",
      "lat": 35.12635465,
      "lon": 126.6804821,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "도덕철물슈퍼",
      "address": "전남광주통합특별시 광산구 삼도로 349(도덕동314-4)",
      "lat": 35.16313302,
      "lon": 126.7011957,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "중앙유통",
      "address": "전남광주통합특별시 광산구 도산동 1294-10",
      "lat": 35.12860916,
      "lon": 126.7907805,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "해뜰생활용품백화점",
      "address": "전남광주통합특별시 광산구 송도로 152(도산동766)",
      "lat": 35.12828665,
      "lon": 126.7925003,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "다담리테일 송정점",
      "address": "전남광주통합특별시 광산구 송도로 164",
      "lat": 35.12924401,
      "lon": 126.7931982,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "영신할인마트",
      "address": "전남광주통합특별시 광산구 남동길 16(도산동1298-1)",
      "lat": 35.12878359,
      "lon": 126.7888412,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "SM송정점",
      "address": "전남광주통합특별시 광산구 도산로 21(도산동 1040-2)",
      "lat": 35.13003576,
      "lon": 126.7908193,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "호반할인마트",
      "address": "전남광주통합특별시 광산구 도산로9번길 40(도산동1295-8)",
      "lat": 35.12794434,
      "lon": 126.7900928,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주송정대로점",
      "address": "전남광주통합특별시 광산구 상무대로 211",
      "lat": 35.13827067,
      "lon": 126.7916733,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "아침해마트",
      "address": "전남광주통합특별시 광산구 내상로 40",
      "lat": 35.1383424,
      "lon": 126.7969567,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐송정라인점",
      "address": "전남광주통합특별시 광산구 상무대로 157(송정동950-12)",
      "lat": 35.13401991,
      "lon": 126.7889903,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주안수퍼",
      "address": "전남광주통합특별시 광산구 상무대로 137-2",
      "lat": 35.13333642,
      "lon": 126.7883077,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "오피스할인마트",
      "address": "전남광주통합특별시 광산구 송정로 5-1(송정동852-10)",
      "lat": 35.13742625,
      "lon": 126.7922837,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "중앙생활용품",
      "address": "전남광주통합특별시 광산구 내상로 37",
      "lat": 35.13869054,
      "lon": 126.7970733,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "과일여왕&장봐주는언니송정점",
      "address": "전남광주통합특별시 광산구 송정로56",
      "lat": 35.13478228,
      "lon": 126.7966274,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 민영 송정지점 오픈박스",
      "address": "전남광주통합특별시 광산구 내상로 53",
      "lat": 35.13773186,
      "lon": 126.7983267,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유(CU) 송정사랑점",
      "address": "전남광주통합특별시 광산구 송정로30번길 16",
      "lat": 35.13565002,
      "lon": 126.7934793,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "우리아시안마트",
      "address": "전남광주통합특별시 광산구 내상로38-2",
      "lat": 35.13837554,
      "lon": 126.7968681,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "또또슈퍼",
      "address": "전남광주통합특별시 광산구 송도로 239",
      "lat": 35.13527424,
      "lon": 126.7973142,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 송정중앙점",
      "address": "전남광주통합특별시 광산구 광산로 57",
      "lat": 35.14038836,
      "lon": 126.7973153,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 송정광신점",
      "address": "전남광주통합특별시 광산구 광산로20번길 23",
      "lat": 35.13741496,
      "lon": 126.7949662,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 송정중앙점",
      "address": "전남광주통합특별시 광산구 광산로 65",
      "lat": 35.14083053,
      "lon": 126.7981391,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "지에스25(GS25)광산구청점",
      "address": "전남광주통합특별시 광산구 광산로19번길 11",
      "lat": 35.13868487,
      "lon": 126.7934839,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "에브리마켓",
      "address": "전남광주통합특별시 광산구 평동로1101번길 40",
      "lat": 35.13728574,
      "lon": 126.7874599,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "세븐일레븐 광주송정KTX 1호점",
      "address": "전남광주통합특별시 광산구 상무대로206,1층(송정동,해옥빌딩)",
      "lat": 35.13763775,
      "lon": 126.7919413,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주송정역점",
      "address": "전남광주통합특별시 광산구 송정로 2",
      "lat": 35.13718676,
      "lon": 126.791851,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 송정대화점",
      "address": "전남광주통합특별시 광산구 송도로212번길27",
      "lat": 35.132219409,
      "lon": 126.7971432823,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "씨유 도산행복사랑점",
      "address": "전남광주통합특별시 광산구 남동길48번길 25",
      "lat": 35.1308022493,
      "lon": 126.790277518,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "카카오마트",
      "address": "전남광주통합특별시 광산구 평동로1120번길 70-22",
      "lat": 35.1324068535,
      "lon": 126.785098042,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "CU 광주도산점",
      "address": "전남광주통합특별시 광산구 송도로182번길 16-6, 107~107호",
      "lat": 35.1299971757,
      "lon": 126.794358859,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "주식회사 장바구니마트",
      "address": "전남광주통합특별시 광산구 상무대로 128-1",
      "lat": 35.1315000807,
      "lon": 126.7882909096,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "남성대마트",
      "address": "전남광주통합특별시 광산구 송도로114번길 53",
      "lat": 35.1170334626,
      "lon": 126.7899071305,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 광주도산점",
      "address": "전남광주통합특별시 광산구 도산로9번길22",
      "lat": 35.1286091568,
      "lon": 126.7907805286,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    },
    {
      "name": "GS25 도산빌리지점",
      "address": "전남광주통합특별시 광산구 송도로 182번길 15-3",
      "lat": 35.130526209,
      "lon": 126.7949540718,
      "sticker": "아니오",
      "phone": "",
      "referenceDate": "2026-07-23"
    }
  ],
  "referenceDate": "2026-07-23",
  "sourceUrl": "https://www.data.go.kr/data/15114144/standard.do"
};
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});

export default {
  async fetch(request,env,ctx){
    const url=new URL(request.url);
    if(url.pathname==="/api/analyze"&&request.method==="POST")return analyze(request,env);
    if(url.pathname==="/api/stores"&&request.method==="GET")return stores(request,ctx);
    if(url.pathname.startsWith("/api/"))return json({message:"요청한 기능을 찾을 수 없습니다."},404);
    if(url.pathname==="/styles.css")return new Response(STATIC_CSS,{headers:{"content-type":"text/css; charset=utf-8","cache-control":"public, max-age=3600"}});
    if(url.pathname==="/app.js")return new Response(STATIC_APP,{headers:{"content-type":"text/javascript; charset=utf-8","cache-control":"public, max-age=3600"}});
    if(url.pathname==="/"||url.pathname==="/index.html")return new Response(STATIC_HTML,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-cache"}});
    return new Response("Not found",{status:404});
  }
};

async function analyze(request,env){
  if(!env.GEMINI_API_KEY)return json({message:"AI_SETUP_REQUIRED"},503);
  let body;
  try{body=await request.json()}catch{return json({message:"올바른 요청이 아닙니다."},400)}
  const match=/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(body.image||"");
  if(!match)return json({message:"지원하지 않는 사진 형식입니다."},400);
  if(match[2].length>10_000_000)return json({message:"사진 용량이 너무 큽니다."},413);

  const schema={
    type:"OBJECT",
    properties:{
      itemName:{type:"STRING",description:"사진에서 가장 가능성이 높은 물품명. 불확실하면 '판단 어려움'"},
      confidence:{type:"STRING",enum:["high","medium","low"]},
      summary:{type:"STRING",description:"물건은 무엇으로 보이며 핵심 배출 방법은 무엇인지 쉬운 한국어 1~2문장"},
      category:{type:"STRING",enum:["일반쓰레기","재활용","음식물","별도배출","복합배출","판단보류"]},
      components:{type:"ARRAY",items:{type:"OBJECT",properties:{part:{type:"STRING"},material:{type:"STRING"}},required:["part","material"]}},
      steps:{type:"ARRAY",items:{type:"OBJECT",properties:{part:{type:"STRING"},action:{type:"STRING"},detail:{type:"STRING"}},required:["part","action","detail"]}},
      preparation:{type:"ARRAY",items:{type:"STRING"}},
      warnings:{type:"ARRAY",items:{type:"STRING"}},
      alternatives:{type:"ARRAY",items:{type:"STRING"}},
      questions:{type:"ARRAY",items:{type:"STRING"}}
    },
    required:["itemName","confidence","summary","category","components","steps","preparation","warnings","alternatives","questions"]
  };
  const prompt=[
    "당신은 대한민국 광주광역시 광산구 시민을 위한 생활폐기물 분리배출 안내자입니다.",
    "사진 자체를 직접 관찰해 물건, 구성 부품, 보이는 재질을 분석하세요. 저장된 품목 사진이나 유사 이미지 검색 결과를 가정하지 마세요.",
    "답변은 한국어로 쉽고 구체적으로 작성하세요. '사진 속 물건은 ~로 보입니다. ~부분은 분리하고, ~한 뒤 ~로 배출하세요'처럼 바로 행동할 수 있게 안내하세요.",
    "여러 재질이 붙은 제품은 부품별로 분리 순서를 제시하세요. 사진으로 확인할 수 없는 재질은 추측을 사실처럼 말하지 마세요.",
    "확신이 낮으면 confidence를 low, category를 판단보류로 두고, 가능한 품목 2~3개와 사용자가 확인할 재질·용도 질문을 제시하세요.",
    "리튬 배터리, 스프레이통, 깨진 유리처럼 위험할 수 있는 품목은 화재·상해 예방 주의사항을 포함하세요.",
    "광산구 세부 규정이 확실하지 않은 내용은 '지역 최신 기준 확인'이라고 적으세요. 판매소나 수거일을 만들어내지 마세요."
  ].join("\n");

  const model=env.GEMINI_MODEL||"gemini-3.8-flash";
  const endpoint="https://generativelanguage.googleapis.com/v1beta/models/"+encodeURIComponent(model)+":generateContent";
  let response;
  try{
    response=await fetch(endpoint,{method:"POST",headers:{"content-type":"application/json","x-goog-api-key":env.GEMINI_API_KEY},body:JSON.stringify({
      contents:[{role:"user",parts:[{text:prompt},{inlineData:{mimeType:match[1],data:match[2]}}]}],
      generationConfig:{responseMimeType:"application/json",responseSchema:schema,temperature:.2,maxOutputTokens:3000}
    })});
  }catch{return json({message:"AI 서비스에 연결하지 못했어요."},502)}
  const result=await response.json().catch(()=>({}));
  if(!response.ok){
    const reason=result&&result.error&&result.error.message;
    return json({message:reason&&reason.includes("API key")?"AI API 키를 확인해 주세요.":"AI 분석 요청을 처리하지 못했어요."},502);
  }
  const text=result?.candidates?.[0]?.content?.parts?.map(p=>p.text||"").join("")||"";
  try{return json(JSON.parse(text))}catch{return json({message:"AI 응답을 읽지 못했어요. 다시 촬영해 주세요."},502)}
}

async function stores(){
  if(!STATIC_STORES)return json({message:"판매소 데이터가 준비되지 않았습니다."},503);
  const response=json(STATIC_STORES);
  response.headers.set("cache-control","public, max-age=21600");
  return response;
}