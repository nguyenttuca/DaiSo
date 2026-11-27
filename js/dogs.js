// js/dogs.js
// Interactive Equal-Sized Pixel Dogs:
// - Mipo (White Puppy) on Cursor (#pixelWhiteDogCursor)
// - Tu (Black Puppy) on Screen Floor (#pixelBlackDogCompanion)
// Features:
// 1. Hold stationary click over white dog / non-UI surface or Tu -> Confession + Pixel Flower Scene
// 2. Active Exam ("bắt đầu thi") -> Mouse returns to normal cursor; Mipo & Tu walk together
//    to the bottom-left corner, hop onto the PTIT Library study desk, and study together!
(function () {
  'use strict';

  function createDogSvg(variant) {
    const isWhite = variant === 'white';
    const outline = isWhite ? '#334155' : '#09090b';
    const furMain = isWhite ? '#ffffff' : '#1f2937';
    const furShade = isWhite ? '#e2e8f0' : '#111827';
    const earFill = isWhite ? '#e2e8f0' : '#334155';
    const highlight = isWhite ? '#f8fafc' : '#4b5563';
    const eyeFill = isWhite ? '#0f172a' : '#ffffff';
    const sleepEye = isWhite ? '#475569' : '#9ca3af';
    const noseFill = isWhite ? '#0f172a' : '#fb7185';
    const collarFill = isWhite ? '#38bdf8' : '#f43f5e';
    const bellFill = isWhite ? '#facc15' : '#fde047';
    const glassesRim = isWhite ? '#0284c7' : '#38bdf8';
    const prefix = isWhite ? 'wdog' : 'bdog';

    // Identical 18x18 pixel grid rendered at exact 44x44 size for both Mipo & Tu
    return `
      <svg class="pixel-dog-svg" viewBox="0 0 18 18" width="44" height="44" shape-rendering="crispEdges" aria-hidden="true">
        <!-- Floppy ears -->
        <rect x="4" y="2" width="2" height="1" fill="${outline}"/>
        <rect x="10" y="2" width="2" height="1" fill="${outline}"/>
        <rect x="3" y="3" width="1" height="3" fill="${outline}"/>
        <rect x="12" y="3" width="1" height="3" fill="${outline}"/>
        <rect x="4" y="3" width="2" height="3" fill="${earFill}"/>
        <rect x="10" y="3" width="2" height="3" fill="${earFill}"/>

        <!-- Head outline -->
        <rect x="6" y="3" width="4" height="1" fill="${outline}"/>
        <rect x="3" y="6" width="1" height="3" fill="${outline}"/>
        <rect x="13" y="5" width="2" height="1" fill="${outline}"/>
        <rect x="15" y="6" width="1" height="3" fill="${outline}"/>
        <rect x="13" y="9" width="2" height="1" fill="${outline}"/>

        <!-- Head fill -->
        <rect x="4" y="4" width="8" height="5" fill="${furMain}"/>
        <rect x="6" y="4" width="4" height="1" fill="${highlight}"/>
        <!-- Muzzle right -->
        <rect x="12" y="6" width="3" height="3" fill="${furMain}"/>
        <!-- Nose -->
        <rect x="14" y="6" width="1" height="1" fill="${noseFill}"/>

        <!-- Eyes (open / happy / sleep) -->
        <g class="${prefix}-eyes-open">
          <rect x="7" y="6" width="1" height="2" fill="${eyeFill}"/>
          <rect x="11" y="6" width="1" height="2" fill="${eyeFill}"/>
        </g>
        <g class="${prefix}-eyes-happy" style="display:none;">
          <rect x="7" y="6" width="1" height="1" fill="${eyeFill}"/>
          <rect x="6" y="7" width="1" height="1" fill="${eyeFill}"/>
          <rect x="8" y="7" width="1" height="1" fill="${eyeFill}"/>
          <rect x="11" y="6" width="1" height="1" fill="${eyeFill}"/>
          <rect x="10" y="7" width="1" height="1" fill="${eyeFill}"/>
          <rect x="12" y="7" width="1" height="1" fill="${eyeFill}"/>
        </g>
        <g class="${prefix}-eyes-sleep" style="display:none;">
          <rect x="7" y="7" width="2" height="1" fill="${sleepEye}"/>
          <rect x="11" y="7" width="2" height="1" fill="${sleepEye}"/>
        </g>

        <!-- Scholarly Pixel Reading Glasses (shown when studying in PTIT Library) -->
        <g class="${prefix}-glasses" style="display:none;">
          <rect x="4" y="6" width="2" height="1" fill="${glassesRim}"/>
          <rect x="6" y="5" width="3" height="1" fill="${glassesRim}"/>
          <rect x="6" y="6" width="1" height="2" fill="${glassesRim}"/>
          <rect x="7" y="8" width="1" height="1" fill="${glassesRim}"/>
          <rect x="9" y="6" width="1" height="1" fill="${glassesRim}"/>
          <rect x="10" y="5" width="3" height="1" fill="${glassesRim}"/>
          <rect x="12" y="6" width="1" height="2" fill="${glassesRim}"/>
          <rect x="10" y="8" width="2" height="1" fill="${glassesRim}"/>
        </g>

        <!-- Rosy pixel cheeks -->
        <rect x="8" y="8" width="1" height="1" fill="#fda4af"/>
        <rect x="12" y="8" width="1" height="1" fill="#fda4af"/>

        <!-- Collar + Bell -->
        <rect x="4" y="9" width="8" height="1" fill="${collarFill}"/>
        <rect x="10" y="10" width="1" height="1" fill="${bellFill}"/>

        <!-- Body -->
        <rect x="3" y="10" width="1" height="4" fill="${outline}"/>
        <rect x="11" y="10" width="1" height="4" fill="${outline}"/>
        <rect x="4" y="10" width="7" height="4" fill="${furMain}"/>
        <rect x="5" y="13" width="5" height="1" fill="${furShade}"/>
        <rect x="6" y="14" width="3" height="1" fill="${outline}"/>

        <!-- Tail Frame 1 -->
        <g class="${prefix}-tail-1">
          <rect x="1" y="9" width="2" height="1" fill="${outline}"/>
          <rect x="1" y="10" width="2" height="1" fill="${furMain}"/>
          <rect x="2" y="11" width="1" height="1" fill="${outline}"/>
        </g>
        <!-- Tail Frame 2 -->
        <g class="${prefix}-tail-2" style="display:none;">
          <rect x="2" y="7" width="1" height="2" fill="${outline}"/>
          <rect x="1" y="8" width="1" height="2" fill="${furMain}"/>
          <rect x="1" y="7" width="1" height="1" fill="${outline}"/>
        </g>

        <!-- Legs Frame 1 -->
        <g class="${prefix}-legs-1">
          <rect x="4" y="14" width="2" height="2" fill="${furMain}"/>
          <rect x="3" y="14" width="1" height="2" fill="${outline}"/>
          <rect x="6" y="14" width="1" height="2" fill="${outline}"/>
          <rect x="4" y="16" width="2" height="1" fill="${outline}"/>

          <rect x="9" y="14" width="2" height="2" fill="${furMain}"/>
          <rect x="9" y="16" width="2" height="1" fill="${outline}"/>
          <rect x="11" y="14" width="1" height="2" fill="${outline}"/>
        </g>

        <!-- Legs Frame 2 (Walk) -->
        <g class="${prefix}-legs-2" style="display:none;">
          <rect x="3" y="14" width="2" height="2" fill="${furMain}"/>
          <rect x="2" y="14" width="1" height="2" fill="${outline}"/>
          <rect x="3" y="16" width="2" height="1" fill="${outline}"/>

          <rect x="10" y="14" width="2" height="2" fill="${furMain}"/>
          <rect x="10" y="16" width="2" height="1" fill="${outline}"/>
          <rect x="12" y="14" width="1" height="2" fill="${outline}"/>
        </g>
      </svg>
    `;
  }

  function createPixelFlowerSvg() {
    // Crisp 12x12 pixel rose/flower offered by Tu to Mipo
    return `
      <svg class="pixel-flower-svg" viewBox="0 0 12 12" width="24" height="24" shape-rendering="crispEdges" aria-hidden="true">
        <rect x="5" y="6" width="2" height="5" fill="#16a34a"/>
        <rect x="3" y="8" width="2" height="2" fill="#22c55e"/>
        <rect x="7" y="7" width="2" height="2" fill="#22c55e"/>
        <rect x="4" y="1" width="4" height="2" fill="#f43f5e"/>
        <rect x="3" y="2" width="6" height="4" fill="#fb7185"/>
        <rect x="4" y="3" width="4" height="2" fill="#e11d48"/>
        <rect x="5" y="2" width="2" height="2" fill="#fecdd3"/>
        <rect x="4" y="5" width="4" height="1" fill="#be123c"/>
      </svg>
    `;
  }

  function createLibraryDeskSvg() {
    // 96x64 pixel-art PTIT Library Scene rendered 2x at 192x128px
    // Top of oak desk surface sits at SVG y=39 (78px from top edge), legs down to bottom.
    return `
      <svg class="ptit-lib-svg" viewBox="0 0 96 64" width="192" height="128" shape-rendering="crispEdges" aria-hidden="true">
        <!-- Library Backdrop Frame & Wall -->
        <rect x="4" y="6" width="88" height="34" fill="#78350f"/>
        <rect class="lib-wall-fill" x="6" y="8" width="84" height="31" fill="#fef3c7"/>

        <!-- Left PTIT Library Bookshelf -->
        <rect x="7" y="9" width="20" height="30" fill="#92400e"/>
        <rect x="8" y="10" width="18" height="8" fill="#451a03"/>
        <rect x="8" y="20" width="18" height="8" fill="#451a03"/>
        <rect x="8" y="30" width="18" height="9" fill="#451a03"/>
        <!-- Bookshelf top row books -->
        <rect x="9" y="12" width="3" height="6" fill="#dc2626"/>
        <rect x="12" y="11" width="3" height="7" fill="#2563eb"/>
        <rect x="15" y="13" width="2" height="5" fill="#16a34a"/>
        <rect x="17" y="12" width="3" height="6" fill="#eab308"/>
        <rect x="21" y="12" width="3" height="6" fill="#9333ea"/>
        <!-- Bookshelf middle row books -->
        <rect x="9" y="22" width="2" height="6" fill="#0ea5e9"/>
        <rect x="11" y="21" width="3" height="7" fill="#f43f5e"/>
        <rect x="15" y="23" width="3" height="5" fill="#f97316"/>
        <rect x="19" y="22" width="2" height="6" fill="#10b981"/>
        <rect x="22" y="21" width="3" height="7" fill="#6366f1"/>
        <!-- Tiny pixel succulent on bottom shelf -->
        <rect x="10" y="35" width="4" height="4" fill="#ea580c"/>
        <rect x="10" y="33" width="2" height="2" fill="#22c55e"/>
        <rect x="12" y="32" width="2" height="3" fill="#16a34a"/>
        <rect x="17" y="32" width="8" height="3" fill="#3b82f6"/>
        <rect x="16" y="35" width="9" height="4" fill="#dc2626"/>

        <!-- Library Center Window -->
        <rect x="30" y="11" width="36" height="23" fill="#92400e"/>
        <rect class="lib-window-glass" x="32" y="13" width="32" height="19" fill="#bae6fd"/>
        <!-- Subtle cloud / stars inside window -->
        <rect class="lib-window-accent" x="35" y="15" width="4" height="2" fill="#ffffff"/>
        <rect class="lib-window-accent" x="55" y="16" width="5" height="2" fill="#ffffff"/>
        <rect class="lib-window-star" x="37" y="16" width="1" height="1" fill="#fde047" style="display:none;"/>
        <rect class="lib-window-star" x="58" y="15" width="2" height="2" fill="#fef08a" style="display:none;"/>
        <rect class="lib-window-star" x="43" y="25" width="1" height="1" fill="#fde047" style="display:none;"/>
        <!-- Window Mullions -->
        <rect x="47" y="13" width="2" height="19" fill="#92400e"/>
        <rect x="32" y="22" width="32" height="2" fill="#92400e"/>

        <!-- Right PTIT Library Bookshelf -->
        <rect x="69" y="9" width="20" height="30" fill="#92400e"/>
        <rect x="70" y="10" width="18" height="8" fill="#451a03"/>
        <rect x="70" y="20" width="18" height="8" fill="#451a03"/>
        <rect x="70" y="30" width="18" height="9" fill="#451a03"/>
        <!-- Bookshelf top row -->
        <rect x="71" y="12" width="3" height="6" fill="#0284c7"/>
        <rect x="74" y="11" width="3" height="7" fill="#dc2626"/>
        <rect x="78" y="12" width="3" height="6" fill="#eab308"/>
        <rect x="82" y="12" width="4" height="6" fill="#14b8a6"/>
        <!-- Bookshelf middle row -->
        <rect x="72" y="22" width="3" height="6" fill="#8b5cf6"/>
        <rect x="76" y="21" width="3" height="7" fill="#ec4899"/>
        <rect x="80" y="23" width="4" height="5" fill="#22c55e"/>
        <!-- Study binders on bottom -->
        <rect x="71" y="33" width="7" height="6" fill="#f59e0b"/>
        <rect x="79" y="32" width="8" height="7" fill="#2563eb"/>

        <!-- Iconic Green Banker's Desk Lamp (left corner of desk) -->
        <rect class="lib-lamp-glow" x="3" y="29" width="15" height="11" fill="#fef08a" opacity="0.28"/>
        <rect x="6" y="37" width="6" height="2" fill="#ca8a04"/>
        <rect x="8" y="31" width="2" height="6" fill="#eab308"/>
        <rect x="5" y="27" width="9" height="4" fill="#15803d"/>
        <rect x="6" y="28" width="7" height="2" fill="#22c55e"/>
        <rect x="7" y="30" width="5" height="1" fill="#fef08a"/>

        <!-- PTIT Red Mug & Pencils (right corner of desk) -->
        <rect x="84" y="31" width="1" height="4" fill="#eab308"/>
        <rect x="86" y="30" width="1" height="5" fill="#38bdf8"/>
        <rect x="83" y="34" width="5" height="5" fill="#dc2626"/>
        <rect x="88" y="35" width="2" height="3" fill="#dc2626"/>
        <rect x="84" y="35" width="2" height="2" fill="#ffffff"/>

        <!-- Wide Oak Wooden Study Desk (Top plank sits at y=39..44) -->
        <rect x="1" y="39" width="94" height="1" fill="#fbbf24"/>
        <rect x="0" y="40" width="96" height="4" fill="#d97706"/>
        <rect x="0" y="44" width="96" height="2" fill="#78350f"/>
        <rect x="2" y="46" width="92" height="3" fill="#92400e"/>

        <!-- Desk Drawers & Legs -->
        <rect x="5" y="49" width="4" height="15" fill="#78350f"/>
        <rect x="6" y="49" width="2" height="15" fill="#92400e"/>
        <rect x="87" y="49" width="4" height="15" fill="#78350f"/>
        <rect x="88" y="49" width="2" height="15" fill="#92400e"/>
        <!-- Subtle library desk modesty panel & drawers -->
        <rect x="12" y="49" width="72" height="8" fill="#b45309" opacity="0.22"/>
        <rect x="14" y="49" width="20" height="6" fill="#78350f"/>
        <rect x="22" y="51" width="4" height="1" fill="#fde047"/>
        <rect x="62" y="49" width="20" height="6" fill="#78350f"/>
        <rect x="70" y="51" width="4" height="1" fill="#fde047"/>

        <!-- Open Pixel Textbooks & Notebooks Right Between/Under Dogs on Desk Top -->
        <!-- Left notebook (near Tu) -->
        <rect x="22" y="40" width="14" height="3" fill="#1d4ed8"/>
        <rect x="23" y="40" width="12" height="2" fill="#ffffff"/>
        <rect x="28" y="40" width="1" height="2" fill="#94a3b8"/>
        <!-- Center shared PTIT math textbook -->
        <rect x="42" y="40" width="13" height="3" fill="#dc2626"/>
        <rect x="43" y="40" width="11" height="2" fill="#fffbeb"/>
        <rect x="48" y="40" width="1" height="2" fill="#cbd5e1"/>
        <rect x="44" y="41" width="3" height="1" fill="#ef4444"/>
        <rect x="50" y="41" width="3" height="1" fill="#2563eb"/>
        <!-- Right notebook & pencil (near Mipo) -->
        <rect x="61" y="40" width="14" height="3" fill="#0284c7"/>
        <rect x="62" y="40" width="12" height="2" fill="#ffffff"/>
        <rect x="67" y="40" width="1" height="2" fill="#94a3b8"/>
        <rect x="76" y="41" width="5" height="1" fill="#facc15"/>
        <rect x="81" y="41" width="1" height="1" fill="#fb7185"/>
      </svg>
    `;
  }

  function isElementVisible(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden';
  }

  function shouldBeInStudyMode() {
    const quizView = document.getElementById('quizView');
    const quizActive = document.getElementById('quizActiveScreen');
    if (isElementVisible(quizView) && isElementVisible(quizActive)) return true;

    const soloView = document.getElementById('soloView');
    const soloBattle = document.getElementById('soloBattleScreen');
    if (isElementVisible(soloView) && isElementVisible(soloBattle)) return true;

    return false;
  }

  function initPixelDogs() {
    if (document.getElementById('pixelBlackDogCompanion')) return;

    const supportsFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // 1. Particle Layer
    const fxLayer = document.createElement('div');
    fxLayer.id = 'pixelDogFxLayer';
    document.body.appendChild(fxLayer);

    // 2. PTIT Library Study Desk Scene (Bottom-Left)
    const deskEl = document.createElement('div');
    deskEl.id = 'ptitLibraryDesk';
    deskEl.title = 'Thư viện PTIT • Bấm để cổ vũ Mipo & Tú ôn thi!';
    deskEl.innerHTML = `
      <div class="ptit-lib-sign">THƯ VIỆN PTIT</div>
      ${createLibraryDeskSvg()}
    `;
    document.body.appendChild(deskEl);

    // 3. White Dog Cursor = MIPO (44x44px)
    const mipoEl = document.createElement('div');
    mipoEl.id = 'pixelWhiteDogCursor';
    mipoEl.innerHTML = `
      <span class="cursor-pin-dot" aria-hidden="true"></span>
      <div class="dog-emote-bubble mipo-bubble" id="whiteDogBubble"></div>
      <div class="mipo-sprite-wrap">
        ${createDogSvg('white')}
      </div>
    `;
    document.body.appendChild(mipoEl);

    // 4. Black Dog Screen Companion = TU (exact same 44x44px!)
    const tuEl = document.createElement('div');
    tuEl.id = 'pixelBlackDogCompanion';
    tuEl.title = 'Tú • Giữ chuột hoặc đưa Mipo lại gần để xem bất ngờ!';
    tuEl.innerHTML = `
      <div class="dog-emote-bubble tu-bubble" id="blackDogBubble"></div>
      <div class="tu-sprite-wrap">
        ${createDogSvg('black')}
        <div class="dog-pixel-flower" id="tuPixelFlower">${createPixelFlowerSvg()}</div>
      </div>
      <div class="dog-ground-shadow"></div>
    `;
    document.body.appendChild(tuEl);

    const mipoWrap = mipoEl.querySelector('.mipo-sprite-wrap');
    const mipoBubble = mipoEl.querySelector('#whiteDogBubble');
    const tuWrap = tuEl.querySelector('.tu-sprite-wrap');
    const tuBubble = tuEl.querySelector('#blackDogBubble');
    const tuFlower = tuEl.querySelector('#tuPixelFlower');

    const floorY = () => Math.max(80, window.innerHeight - 54);

    // Mipo (white dog cursor) state
    const mipo = {
      active: false,
      pointerInside: false,
      lastPointerX: window.innerWidth * 0.5,
      lastPointerY: window.innerHeight * 0.5,
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
      facing: 1,
      lastMoveTime: Date.now(),
      isPointerHover: false,
      lastBoopTime: 0,
      bubbleTimer: 0
    };

    // Tu (black dog floor companion) state
    const tu = {
      x: Math.max(60, Math.min(window.innerWidth - 90, window.innerWidth * 0.78)),
      y: floorY(),
      vx: 0,
      vy: 0,
      facing: -1,
      mode: 'wander', // 'wander' | 'sit' | 'sleep' | 'approach' | 'play' | 'follow' | 'confess' | 'study'
      targetX: window.innerWidth * 0.3,
      targetY: floorY(),
      modeTimer: 160,
      followUntil: 0,
      playUntil: 0,
      hopPhase: 0,
      lastInteractionFx: 0,
      bubbleTimer: 0
    };

    // Confession Hold Cutscene State
    const cutscene = {
      active: false,
      holdTimer: null,
      downX: 0,
      downY: 0,
      suppressNextTuClick: false,
      stepTimers: []
    };

    // PTIT Library Exam Study Mode State
    const study = {
      active: false,
      phase: 'none', // 'none' | 'meetup' | 'walk' | 'climb' | 'studying'
      phaseStartedAt: 0,
      climbProgress: 0,
      climbStartTuX: 0,
      climbStartTuY: 0,
      climbStartMipoX: 0,
      climbStartMipoY: 0,
      mipoX: window.innerWidth * 0.5,
      mipoY: window.innerHeight * 0.5,
      mipoHopPhase: 0,
      lastChatAt: 0,
      chatIdx: 0,
      deskRectCache: null
    };

    const CUTE_WORDS = [
      'gâu! ♥',
      '*vẫy đuôi*',
      '*boop!* 💖',
      'cậu ơiii học thoi :3',
      'nhớ ngủ sớm nha',
      'tớ yêu thầy Dũng nhất',
      'thằng Hải nó sút vật',
      'nay hà nội cute không cậu :3'
    ];

    const STUDY_DIALOGUES = [
      { who: 'tu', text: 'tập trung giải đề nha cậu!' },
      { who: 'mipo', text: 'câu này áp dụng công thức nè 📖' },
      { who: 'tu', text: 'tú ghi chép xong rùi đó~' },
      { who: 'mipo', text: 'thư viện PTIT mát quá ha!' },
      { who: 'tu', text: 'A+ thẳng tiến luôn nhé ♥' },
      { who: 'mipo', text: 'kiểm tra kỹ dấu trừ nha cậu!' }
    ];

    function showBubble(bubbleEl, timerOwner, text, durationMs = 1700) {
      bubbleEl.textContent = text;
      bubbleEl.classList.add('show');
      clearTimeout(timerOwner.bubbleTimer);
      timerOwner.bubbleTimer = setTimeout(() => {
        bubbleEl.classList.remove('show');
      }, durationMs);
    }

    function hideBubble(bubbleEl, timerOwner) {
      clearTimeout(timerOwner.bubbleTimer);
      bubbleEl.classList.remove('show');
    }

    function spawnHeartParticle(x, y, type = 'heart') {
      const p = document.createElement('div');
      p.className = `pixel-fx-particle pixel-fx-${type}`;
      const offsetX = (Math.random() - 0.5) * 28;
      p.style.left = `${Math.round(x + offsetX)}px`;
      p.style.top = `${Math.round(y)}px`;

      if (type === 'heart') {
        p.innerHTML = `<svg viewBox="0 0 7 6" width="14" height="12" shape-rendering="crispEdges"><rect x="1" y="0" width="2" height="1" fill="#f43f5e"/><rect x="4" y="0" width="2" height="1" fill="#f43f5e"/><rect x="0" y="1" width="7" height="2" fill="#fb7185"/><rect x="1" y="1" width="1" height="1" fill="#fecdd3"/><rect x="1" y="3" width="5" height="1" fill="#f43f5e"/><rect x="2" y="4" width="3" height="1" fill="#e11d48"/><rect x="3" y="5" width="1" height="1" fill="#e11d48"/></svg>`;
      } else if (type === 'sparkle') {
        p.innerHTML = `<svg viewBox="0 0 5 5" width="10" height="10" shape-rendering="crispEdges"><rect x="2" y="0" width="1" height="5" fill="#facc15"/><rect x="0" y="2" width="5" height="1" fill="#facc15"/><rect x="2" y="2" width="1" height="1" fill="#ffffff"/></svg>`;
      } else {
        p.textContent = 'zZ';
      }

      fxLayer.appendChild(p);
      setTimeout(() => {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, 1100);
    }

    function isClickableControl(target) {
      if (!target || !target.closest) return false;
      return !!target.closest('button, a, label, input, select, textarea, .subject-chip, .nav-dot, .filter-chip, #pixelBlackDogCompanion, #ptitLibraryDesk');
    }

    function isHoldBlockedTarget(target) {
      if (!target || !target.closest) return false;
      return !!target.closest('button, a, input, select, textarea, .option-btn, .nav-dot, .subject-chip, .diff-card, .chapter-check-card, .source-radio-card, .size-pill-card, .matrix-pill, .filter-chip, #ptitLibraryDesk');
    }

    function stopConfessionTimers() {
      cutscene.stepTimers.forEach(t => clearTimeout(t));
      cutscene.stepTimers = [];
    }

    function cancelConfessionScene() {
      if (cutscene.holdTimer) {
        clearTimeout(cutscene.holdTimer);
        cutscene.holdTimer = null;
      }
      stopConfessionTimers();
      cutscene.active = false;
      tuEl.classList.remove('is-confessing');
      tuFlower.classList.remove('visible', 'offering');
    }

    function getDeskTargets() {
      const r = deskEl.getBoundingClientRect();
      const w = r.width || 126;
      const h = r.height || 84;
      const scaleX = w / 126;
      const gY = floorY();
      // Desk oak top surface sits at SVG y=39 (~52px in 84px mini desk); 28px puppy paws rest at +26.5px from dog top
      const seatY = r.top + h * (40 / 64) - 27;
      return {
        rect: r,
        tuSeatX: r.left + 21 * scaleX,
        tuSeatY: seatY,
        mipoSeatX: r.left + 76 * scaleX,
        mipoSeatY: seatY,
        walkStageTuX: r.left + 14 * scaleX,
        walkStageMipoX: r.left + 64 * scaleX,
        walkFloorY: gY
      };
    }

    function enterStudyMode() {
      if (study.active) return;

      cancelConfessionScene();
      study.active = true;
      study.phase = 'meetup';
      study.phaseStartedAt = Date.now();
      study.lastChatAt = Date.now();
      study.chatIdx = 0;

      // Return mouse back to normal system cursor immediately
      document.body.classList.remove('pixel-dog-cursor-active');
      mipo.active = false;
      mipoEl.classList.remove('is-pointer', 'is-clicking', 'is-playing');
      mipoEl.classList.add('visible', 'is-detached');
      mipoEl.classList.remove('is-studying');
      tuEl.classList.remove('is-sleeping', 'is-studying');
      tu.mode = 'study';
      tu.followUntil = 0;
      tu.playUntil = 0;

      // Determine starting spot for detached Mipo
      study.mipoX = Math.max(12, Math.min(window.innerWidth - 56, mipo.pointerInside ? mipo.lastPointerX : window.innerWidth * 0.52));
      study.mipoY = Math.max(70, Math.min(floorY(), mipo.pointerInside ? mipo.lastPointerY : window.innerHeight * 0.58));
      study.mipoHopPhase = 0.7;

      // Reveal PTIT Library Desk in bottom-left corner
      deskEl.classList.add('visible');

      // Show cute start-walk dialogue
      showBubble(tuBubble, tu, 'đi học thư viện PTIT thui!', 2100);
      setTimeout(() => {
        if (study.active && (study.phase === 'meetup' || study.phase === 'walk')) {
          showBubble(mipoBubble, mipo, 'cùng ôn thi nha tú~', 2000);
        }
      }, 420);
    }

    function exitStudyMode() {
      if (!study.active) return;

      study.active = false;
      study.phase = 'none';
      deskEl.classList.remove('visible');
      mipoEl.classList.remove('is-studying', 'is-detached');
      tuEl.classList.remove('is-studying');
      tu.mode = 'wander';
      tu.hopPhase = 0.8;
      tu.targetX = Math.min(window.innerWidth - 90, Math.max(220, window.innerWidth * 0.45));
      tu.targetY = floorY();
      tu.modeTimer = 180;

      hideBubble(mipoBubble, mipo);
      showBubble(tuBubble, tu, 'thi tốt rồi nè! ♥', 1700);
      spawnHeartParticle(tu.x + 22, tu.y - 4, 'heart');

      // Restore Mipo cursor cleanly if pointer is inside viewport
      if (supportsFinePointer && mipo.pointerInside) {
        mipo.active = true;
        mipo.x = mipo.lastPointerX;
        mipo.y = mipo.lastPointerY;
        mipo.lastMoveTime = Date.now();
        document.body.classList.add('pixel-dog-cursor-active');
        mipoEl.classList.add('visible');
        mipoEl.style.transform = `translate3d(${mipo.x}px, ${mipo.y}px, 0)`;
      } else {
        mipoEl.classList.remove('visible');
        document.body.classList.remove('pixel-dog-cursor-active');
      }
    }

    function syncExamState() {
      const shouldStudy = shouldBeInStudyMode();
      if (shouldStudy && !study.active) {
        enterStudyMode();
      } else if (!shouldStudy && study.active) {
        exitStudyMode();
      }
    }

    function triggerStudyCheer() {
      if (!study.active || study.phase !== 'studying') return;
      const line = STUDY_DIALOGUES[study.chatIdx % STUDY_DIALOGUES.length];
      study.chatIdx++;
      study.lastChatAt = Date.now();
      const targets = getDeskTargets();
      if (line.who === 'tu') {
        tu.hopPhase = 0.7;
        showBubble(tuBubble, tu, line.text, 2200);
        spawnHeartParticle(targets.tuSeatX + 14, targets.tuSeatY - 6, 'sparkle');
      } else {
        study.mipoHopPhase = 0.7;
        showBubble(mipoBubble, mipo, line.text, 2200);
        spawnHeartParticle(targets.mipoSeatX + 14, targets.mipoSeatY - 6, 'heart');
      }
    }

    function startConfessionScene() {
      if (study.active) return;
      stopConfessionTimers();
      cutscene.active = true;
      tu.mode = 'confess';
      tu.hopPhase = 0.8;
      hideBubble(tuBubble, tu);
      hideBubble(mipoBubble, mipo);
      tuFlower.classList.remove('visible', 'offering');
      tuEl.classList.remove('is-confessing');

      const t1 = setTimeout(() => {
        if (!cutscene.active || study.active) return;
        tuEl.classList.add('is-confessing');
        showBubble(tuBubble, tu, 'chào cậu tớ là tú', 1750);
        spawnHeartParticle(tu.x + 22, tu.y - 4, 'sparkle');
      }, 480);

      const t2 = setTimeout(() => {
        if (!cutscene.active || study.active) return;
        hideBubble(tuBubble, tu);
        mipo.lastBoopTime = Date.now() + 3000;
        showBubble(mipoBubble, mipo, 'tớ là mipo', 1750);
        spawnHeartParticle(mipo.x + 22, mipo.y, 'sparkle');
      }, 2250);

      const t3 = setTimeout(() => {
        if (!cutscene.active || study.active) return;
        hideBubble(mipoBubble, mipo);
        tuFlower.classList.add('visible');
        showBubble(tuBubble, tu, 'tớ thích cậu á :3', 2800);
        tu.hopPhase = 1.0;

        const tFlower = setTimeout(() => {
          if (!cutscene.active || study.active) return;
          tuFlower.classList.add('offering');
          for (let i = 0; i < 6; i++) {
            setTimeout(() => {
              spawnHeartParticle((tu.x + mipo.x) / 2 + 20, Math.min(tu.y, mipo.y), i % 2 === 0 ? 'heart' : 'sparkle');
            }, i * 110);
          }
          setTimeout(() => {
            if (!cutscene.active || study.active) return;
            showBubble(mipoBubble, mipo, '♥ :3', 1600);
          }, 350);
        }, 420);
        cutscene.stepTimers.push(tFlower);
      }, 4000);

      const tEnd = setTimeout(() => {
        if (study.active) return;
        cutscene.active = false;
        tuEl.classList.remove('is-confessing');
        tuFlower.classList.remove('visible', 'offering');
        tu.mode = 'follow';
        tu.followUntil = Date.now() + 6500;
      }, 7300);

      cutscene.stepTimers.push(t1, t2, t3, tEnd);
    }

    if (supportsFinePointer) {
      window.addEventListener('mousemove', (e) => {
        mipo.pointerInside = true;
        mipo.lastPointerX = e.clientX;
        mipo.lastPointerY = e.clientY;
        mipo.lastMoveTime = Date.now();

        if (study.active) {
          document.body.classList.remove('pixel-dog-cursor-active');
          return;
        }

        if (!mipo.active) {
          mipo.active = true;
          document.body.classList.add('pixel-dog-cursor-active');
          mipoEl.classList.add('visible');
        }
        const dx = e.clientX - mipo.x;
        const dNow = Math.hypot((e.clientX + 28) - (tu.x + 22), (e.clientY + 26) - (tu.y + 22));
        const talkingClose = (tu.mode === 'play' || Date.now() < tu.playUntil || tuBubble.classList.contains('show') || mipoBubble.classList.contains('show')) && dNow < 110;
        if (!cutscene.active && !talkingClose && Math.abs(dx) > 1.5) {
          mipo.facing = dx > 0 ? 1 : -1;
        }
        mipo.x = e.clientX;
        mipo.y = e.clientY;
        mipo.isPointerHover = isClickableControl(e.target);

        if (talkingClose && !cutscene.active) {
          const tuOnLeft = (tu.x + 22) <= (mipo.x + 28);
          mipo.facing = tuOnLeft ? -1 : 1;
        }

        mipoEl.style.transform = `translate3d(${mipo.x}px, ${mipo.y}px, 0)`;
        mipoEl.classList.toggle('is-pointer', mipo.isPointerHover);
        mipoWrap.style.transform = `scaleX(${mipo.facing})`;

        if (cutscene.holdTimer) {
          const moved = Math.hypot(e.clientX - cutscene.downX, e.clientY - cutscene.downY);
          if (moved > 10) {
            clearTimeout(cutscene.holdTimer);
            cutscene.holdTimer = null;
          }
        }
      }, { passive: true });

      document.addEventListener('mouseleave', () => {
        mipo.pointerInside = false;
        if (study.active) return;
        mipo.active = false;
        mipoEl.classList.remove('visible');
        document.body.classList.remove('pixel-dog-cursor-active');
      });

      window.addEventListener('mousedown', (e) => {
        if (e.button !== 0 || study.active) return;
        mipoEl.classList.add('is-clicking');

        clearTimeout(cutscene.holdTimer);
        cutscene.holdTimer = null;

        const onTu = !!(e.target && e.target.closest && e.target.closest('#pixelBlackDogCompanion'));
        if (onTu || !isHoldBlockedTarget(e.target)) {
          cutscene.downX = e.clientX;
          cutscene.downY = e.clientY;
          cutscene.holdTimer = setTimeout(() => {
            cutscene.holdTimer = null;
            if (onTu) cutscene.suppressNextTuClick = true;
            startConfessionScene();
          }, 420);
        }
      });

      window.addEventListener('mouseup', () => {
        mipoEl.classList.remove('is-clicking');
        if (cutscene.holdTimer) {
          clearTimeout(cutscene.holdTimer);
          cutscene.holdTimer = null;
        }
      });
    }

    deskEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (study.active) triggerStudyCheer();
    });

    tuEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cutscene.suppressNextTuClick) {
        cutscene.suppressNextTuClick = false;
        return;
      }
      if (study.active) {
        triggerStudyCheer();
        return;
      }
      if (cutscene.active) return;

      const now = Date.now();
      tu.playUntil = now + 1800;
      tu.hopPhase = 1.0;

      if (tu.mode === 'follow' && now < tu.followUntil - 1000) {
        tu.mode = 'sit';
        tu.followUntil = 0;
        showBubble(tuBubble, tu, '*ngồi ngoan* ♥', 1600);
      } else {
        tu.mode = 'follow';
        tu.followUntil = now + 9000;
        const phrase = CUTE_WORDS[Math.floor(Math.random() * CUTE_WORDS.length)];
        showBubble(tuBubble, tu, phrase, 1800);
      }

      if (mipo.active) {
        const tuOnLeft = (tu.x + 22) <= (mipo.x + 28);
        tu.facing = tuOnLeft ? 1 : -1;
        mipo.facing = tuOnLeft ? -1 : 1;
        tuWrap.style.transform = `scaleX(${tu.facing})`;
        mipoWrap.style.transform = `scaleX(${mipo.facing})`;
      }

      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          spawnHeartParticle(tu.x + 22, tu.y - 6, i % 2 === 0 ? 'heart' : 'sparkle');
        }, i * 90);
      }
      if (mipo.active) {
        spawnHeartParticle(mipo.x + 14, mipo.y - 8, 'heart');
      }
    });

    tuEl.addEventListener('touchstart', () => {
      if (study.active) return;
      clearTimeout(cutscene.holdTimer);
      cutscene.holdTimer = setTimeout(() => {
        cutscene.suppressNextTuClick = true;
        startConfessionScene();
      }, 420);
    }, { passive: true });

    tuEl.addEventListener('touchend', () => {
      if (cutscene.holdTimer) {
        clearTimeout(cutscene.holdTimer);
        cutscene.holdTimer = null;
      }
    }, { passive: true });

    // Watch exam screens automatically in case any flow toggles display directly
    const observer = new MutationObserver(() => {
      syncExamState();
    });
    ['quizView', 'quizActiveScreen', 'soloView', 'soloBattleScreen'].forEach(id => {
      const node = document.getElementById(id);
      if (node) observer.observe(node, { attributes: true, attributeFilter: ['style', 'class'] });
    });

    window.MipoDogs = {
      enterStudyMode,
      exitStudyMode,
      syncExamState,
      getStudyState: () => ({
        active: study.active,
        phase: study.phase,
        tuX: Math.round(tu.x),
        tuY: Math.round(tu.y),
        mipoX: Math.round(study.mipoX),
        mipoY: Math.round(study.mipoY)
      })
    };

    let tick = 0;
    let sleepFxTick = 0;

    function updateFrameSprites(elRoot, prefix, isMoving, isHappy, isSleeping, fastWag, isStudying) {
      const legs1 = elRoot.querySelector(`.${prefix}-legs-1`);
      const legs2 = elRoot.querySelector(`.${prefix}-legs-2`);
      const tail1 = elRoot.querySelector(`.${prefix}-tail-1`);
      const tail2 = elRoot.querySelector(`.${prefix}-tail-2`);
      const glasses = elRoot.querySelector(`.${prefix}-glasses`);

      const walkToggle = isMoving && Math.floor(tick / 7) % 2 === 1;
      if (legs1 && legs2) {
        legs1.style.display = walkToggle ? 'none' : '';
        legs2.style.display = walkToggle ? '' : 'none';
      }

      const wagRate = isStudying ? 20 : (fastWag ? 5 : 14);
      const wagToggle = !isSleeping && Math.floor(tick / wagRate) % 2 === 1;
      if (tail1 && tail2) {
        tail1.style.display = wagToggle ? 'none' : '';
        tail2.style.display = wagToggle ? '' : 'none';
      }

      if (glasses) {
        glasses.style.display = isStudying ? '' : 'none';
      }

      const eOpen = elRoot.querySelector(`.${prefix}-eyes-open`);
      const eHappy = elRoot.querySelector(`.${prefix}-eyes-happy`);
      const eSleep = elRoot.querySelector(`.${prefix}-eyes-sleep`);
      const blinkOffset = prefix === 'wdog' ? 190 : 215;
      const blinkNow = (tick % blinkOffset) > (blinkOffset - 8);
      if (eOpen && eHappy && eSleep) {
        eOpen.style.display = (!isSleeping && !isHappy && !blinkNow) ? '' : 'none';
        eHappy.style.display = (!isSleeping && isHappy) ? '' : 'none';
        eSleep.style.display = (isSleeping || (!isHappy && blinkNow)) ? '' : 'none';
      }
    }

    function moveTowards(curX, curY, destX, destY, speed) {
      const dx = destX - curX;
      const dy = destY - curY;
      const d = Math.hypot(dx, dy);
      if (d <= 2.5) {
        return { x: destX, y: destY, moved: false, vx: 0, vy: 0, dist: d };
      }
      const stepDist = Math.min(speed, d);
      const vx = (dx / d) * stepDist;
      const vy = (dy / d) * stepDist;
      return { x: curX + vx, y: curY + vy, moved: true, vx, vy, dist: d };
    }

    function step() {
      tick++;
      const now = Date.now();
      const maxW = Math.max(120, window.innerWidth - 60);
      const groundY = floorY();

      // ================================================================
      // STUDY MODE IN PTIT LIBRARY (Active when taking an exam)
      // ================================================================
      if (study.active) {
        const targets = getDeskTargets();
        const elapsed = now - study.phaseStartedAt;

        if (study.phase === 'meetup') {
          // Bring Mipo & Tu side-by-side at floor height toward a shared starting spot before walking together
          const meetX = Math.max(targets.walkStageMipoX + 36, Math.min(maxW - 70, (tu.x + study.mipoX) * 0.5 - 24));
          const stepTu = moveTowards(tu.x, tu.y, meetX, targets.walkFloorY, 7.5);
          const stepMipo = moveTowards(study.mipoX, study.mipoY, meetX + 54, targets.walkFloorY, 8.5);
          tu.x = stepTu.x;
          tu.y = stepTu.y;
          study.mipoX = stepMipo.x;
          study.mipoY = stepMipo.y;
          if (Math.abs(stepTu.vx) > 0.2) tu.facing = stepTu.vx > 0 ? 1 : -1;
          if (Math.abs(stepMipo.vx) > 0.2) mipo.facing = stepMipo.vx > 0 ? 1 : -1;

          updateFrameSprites(tuEl, 'bdog', stepTu.moved, true, false, true, false);
          updateFrameSprites(mipoEl, 'wdog', stepMipo.moved, true, false, true, false);

          if ((stepTu.dist < 14 && stepMipo.dist < 14) || elapsed > 900) {
            study.phase = 'walk';
            study.phaseStartedAt = now;
          }
        } else if (study.phase === 'walk') {
          // Both dogs walk side-by-side together to the bottom-left PTIT Library desk!
          const stepTu = moveTowards(tu.x, tu.y, targets.walkStageTuX, targets.walkFloorY, 3.8);
          const stepMipo = moveTowards(study.mipoX, study.mipoY, targets.walkStageMipoX, targets.walkFloorY, 3.8);
          tu.x = stepTu.x;
          tu.y = stepTu.y;
          study.mipoX = stepMipo.x;
          study.mipoY = stepMipo.y;

          if (Math.abs(stepTu.vx) > 0.15) tu.facing = stepTu.vx > 0 ? 1 : -1;
          if (Math.abs(stepMipo.vx) > 0.15) mipo.facing = stepMipo.vx > 0 ? 1 : -1;

          updateFrameSprites(tuEl, 'bdog', stepTu.moved, true, false, true, false);
          updateFrameSprites(mipoEl, 'wdog', stepMipo.moved, true, false, true, false);

          if ((stepTu.dist < 8 && stepMipo.dist < 8) || (now - study.phaseStartedAt > 2500)) {
            study.phase = 'climb';
            study.phaseStartedAt = now;
            study.climbProgress = 0;
            study.climbStartTuX = tu.x;
            study.climbStartTuY = tu.y;
            study.climbStartMipoX = study.mipoX;
            study.climbStartMipoY = study.mipoY;
            tu.facing = 1;
            mipo.facing = -1;
          }
        } else if (study.phase === 'climb') {
          // Jump together up onto the study desk top!
          study.climbProgress = Math.min(1, study.climbProgress + 0.05);
          const ease = 1 - Math.pow(1 - study.climbProgress, 3);
          const arc = Math.sin(study.climbProgress * Math.PI) * 24;

          tu.x = study.climbStartTuX + (targets.tuSeatX - study.climbStartTuX) * ease;
          tu.y = study.climbStartTuY + (targets.tuSeatY - study.climbStartTuY) * ease - arc;
          study.mipoX = study.climbStartMipoX + (targets.mipoSeatX - study.climbStartMipoX) * ease;
          study.mipoY = study.climbStartMipoY + (targets.mipoSeatY - study.climbStartMipoY) * ease - arc;
          tu.facing = 1;
          mipo.facing = -1;

          updateFrameSprites(tuEl, 'bdog', false, true, false, true, true);
          updateFrameSprites(mipoEl, 'wdog', false, true, false, true, true);

          if (study.climbProgress >= 0.65 && !tuEl.classList.contains('is-studying')) {
            tuEl.classList.add('is-studying');
            mipoEl.classList.add('is-studying');
          }

          if (study.climbProgress >= 1) {
            study.phase = 'studying';
            study.phaseStartedAt = now;
            study.lastChatAt = now;
            tuEl.classList.add('is-studying');
            mipoEl.classList.add('is-studying');
            showBubble(tuBubble, tu, 'ngồi học thôi mipo!', 1900);
            spawnHeartParticle(targets.tuSeatX + 14, targets.tuSeatY - 6, 'sparkle');
            spawnHeartParticle(targets.mipoSeatX + 14, targets.mipoSeatY - 6, 'heart');
          }
        } else if (study.phase === 'studying') {
          // Stay seated pixel-perfectly on the study desk top even on resize
          tu.x = targets.tuSeatX;
          tu.y = targets.tuSeatY;
          study.mipoX = targets.mipoSeatX;
          study.mipoY = targets.mipoSeatY;
          tu.facing = 1;
          mipo.facing = -1;

          updateFrameSprites(tuEl, 'bdog', false, false, false, false, true);
          updateFrameSprites(mipoEl, 'wdog', false, false, false, false, true);

          if (now - study.lastChatAt > 9500) {
            triggerStudyCheer();
          }
        }

        // Apply optional cheers hops while studying
        let tuHopY = 0;
        if (tu.hopPhase > 0.02) {
          tuHopY = -Math.sin(tu.hopPhase * Math.PI) * 10;
          tu.hopPhase = Math.max(0, tu.hopPhase - 0.07);
        }
        let mipoHopY = 0;
        if (study.mipoHopPhase > 0.02) {
          mipoHopY = -Math.sin(study.mipoHopPhase * Math.PI) * 10;
          study.mipoHopPhase = Math.max(0, study.mipoHopPhase - 0.07);
        }

        tuEl.classList.toggle('is-happy', study.phase !== 'studying');
        tuEl.classList.toggle('is-sleeping', false);
        tuEl.style.transform = `translate3d(${Math.round(tu.x)}px, ${Math.round(tu.y + tuHopY)}px, 0)`;
        tuWrap.style.transform = `scaleX(${tu.facing})`;

        mipoEl.style.transform = `translate3d(${Math.round(study.mipoX)}px, ${Math.round(study.mipoY + mipoHopY)}px, 0)`;
        mipoWrap.style.transform = `scaleX(${mipo.facing})`;

        requestAnimationFrame(step);
        return;
      }

      // ================================================================
      // NORMAL CURSOR + FLOOR COMPANION MODE
      // ================================================================
      const mipoIdleMs = now - mipo.lastMoveTime;
      const mipoMoving = mipo.active && mipoIdleMs < 130 && !cutscene.active;
      const mipoPlaying = mipo.active && (now < mipo.lastBoopTime || cutscene.active);
      if (mipo.active) {
        updateFrameSprites(mipoEl, 'wdog', mipoMoving, mipoPlaying, false, mipoMoving || mipoPlaying, false);
        mipoEl.classList.toggle('is-playing', mipoPlaying);
      }

      const tuCenterX = tu.x + 22;
      const tuCenterY = tu.y + 22;
      const mipoCenterX = mipo.x + 28;
      const mipoCenterY = mipo.y + 26;
      const dist = mipo.active ? Math.hypot(mipoCenterX - tuCenterX, mipoCenterY - tuCenterY) : 9999;
      const isTalkingTogether = tuBubble.classList.contains('show') || mipoBubble.classList.contains('show');
      const shouldFaceEachOther =
        cutscene.active ||
        (mipo.active && (
          tu.mode === 'play' ||
          now < tu.playUntil ||
          (isTalkingTogether && dist < 180) ||
          (dist < 110 && mipoIdleMs > 120)
        ));

      if (cutscene.active) {
        const preferLeft = (mipo.x > 88);
        tu.targetX = preferLeft ? Math.max(10, mipo.x - 52) : Math.min(maxW, mipo.x + 62);
        tu.targetY = Math.max(66, Math.min(groundY, mipo.y + 4));
      } else if (mipo.active && dist < 56) {
        tu.mode = 'play';
        tu.playUntil = now + 700;
        mipo.lastBoopTime = now + 900;

        if (now - tu.lastInteractionFx > 800) {
          tu.lastInteractionFx = now;
          tu.hopPhase = 1.0;
          spawnHeartParticle(tuCenterX, tu.y - 6, 'heart');
          spawnHeartParticle(mipoCenterX, mipo.y, 'sparkle');
          if (Math.random() < 0.72) {
            const word = CUTE_WORDS[Math.floor(Math.random() * CUTE_WORDS.length)];
            showBubble(tuBubble, tu, word, 1400);
          }
        }
      } else if (mipo.active && tu.mode === 'follow' && now < tu.followUntil) {
        if (now < tu.playUntil && dist < 110) {
          tu.targetX = tu.x;
          tu.targetY = tu.y;
        } else {
          const offsetX = mipoCenterX >= tuCenterX ? -58 : 22;
          tu.targetX = Math.max(12, Math.min(maxW, mipo.x + offsetX));
          tu.targetY = Math.max(76, Math.min(groundY, mipo.y - 8));
        }
      } else if (mipo.active && dist < 240 && mipo.y > window.innerHeight * 0.55) {
        if (tu.mode === 'sleep' || tu.mode === 'sit' || tu.mode === 'wander') {
          if (Math.random() < 0.04) showBubble(tuBubble, tu, '! ♪', 900);
        }
        tu.mode = 'approach';
        const offsetX = mipoCenterX > tuCenterX ? -40 : 40;
        tu.targetX = Math.max(12, Math.min(maxW, mipo.x + offsetX));
        tu.targetY = Math.max(window.innerHeight * 0.55, Math.min(groundY, mipo.y));
      } else {
        if (tu.mode === 'approach' || tu.mode === 'confess' || (tu.mode === 'follow' && now >= tu.followUntil) || (tu.mode === 'play' && now > tu.playUntil)) {
          tu.mode = 'wander';
          tu.targetX = 24 + Math.random() * (maxW - 36);
          tu.targetY = groundY;
          tu.modeTimer = 140 + Math.floor(Math.random() * 140);
        }
        tu.targetY = groundY;

        if (mipoIdleMs > 22000 && tu.mode !== 'sleep' && Math.abs(tu.y - groundY) < 4) {
          tu.mode = 'sleep';
          tu.modeTimer = 240;
          showBubble(tuBubble, tu, 'zzZ...', 1800);
        } else {
          tu.modeTimer--;
          if (tu.modeTimer <= 0) {
            if (tu.mode === 'wander') {
              tu.mode = 'sit';
              tu.modeTimer = 110 + Math.floor(Math.random() * 140);
            } else {
              tu.mode = 'wander';
              tu.targetX = 24 + Math.random() * (maxW - 36);
              tu.modeTimer = 160 + Math.floor(Math.random() * 160);
            }
          }
        }
      }

      let isMoving = false;
      if (tu.mode === 'wander' || tu.mode === 'approach' || tu.mode === 'follow' || cutscene.active) {
        const dx = tu.targetX - tu.x;
        const dy = tu.targetY - tu.y;
        const d = Math.hypot(dx, dy);
        const speed = cutscene.active ? 7.5 : tu.mode === 'follow' ? 3.2 : tu.mode === 'approach' ? 2.6 : 1.15;

        if (d > 4) {
          isMoving = true;
          tu.vx = (dx / d) * Math.min(speed, d);
          tu.vy = (dy / d) * Math.min(speed, d);
          tu.x += tu.vx;
          tu.y += tu.vy;
          if (!cutscene.active && Math.abs(tu.vx) > 0.25) {
            tu.facing = tu.vx > 0 ? 1 : -1;
          }
        } else if (tu.mode === 'wander') {
          tu.mode = 'sit';
          tu.modeTimer = 100 + Math.floor(Math.random() * 100);
        }
      } else if (Math.abs(tu.y - groundY) > 1 && tu.mode !== 'play') {
        isMoving = true;
        tu.y += (groundY - tu.y) * 0.12;
      }

      if (shouldFaceEachOther) {
        const tuOnLeft = tuCenterX <= mipoCenterX;
        tu.facing = tuOnLeft ? 1 : -1;
        mipo.facing = tuOnLeft ? -1 : 1;
        mipoWrap.style.transform = `scaleX(${mipo.facing})`;
      }

      tu.x = Math.max(8, Math.min(maxW, tu.x));
      tu.y = Math.max(66, Math.min(groundY, tu.y));

      let hopY = 0;
      if (tu.hopPhase > 0.02) {
        hopY = -Math.sin(tu.hopPhase * Math.PI) * 15;
        tu.hopPhase = Math.max(0, tu.hopPhase - 0.065);
      }

      if (tu.mode === 'sleep' && !cutscene.active) {
        sleepFxTick++;
        if (sleepFxTick % 110 === 0) {
          spawnHeartParticle(tu.x + 22, tu.y, 'sleep');
        }
      }

      const isHappy = cutscene.active || tu.mode === 'play' || tu.mode === 'approach' || tu.mode === 'follow' || tu.hopPhase > 0.1;
      const isSleeping = tu.mode === 'sleep' && !cutscene.active;
      const fastWag = cutscene.active || tu.mode === 'play' || tu.mode === 'approach' || tu.mode === 'follow';

      updateFrameSprites(tuEl, 'bdog', isMoving, isHappy, isSleeping, fastWag, false);

      tuEl.style.transform = `translate3d(${Math.round(tu.x)}px, ${Math.round(tu.y + hopY)}px, 0)`;
      tuWrap.style.transform = `scaleX(${tu.facing})`;
      tuEl.classList.toggle('is-sleeping', isSleeping);
      tuEl.classList.toggle('is-happy', isHappy);

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
    // Sync immediately on boot in case an exam screen is already open
    syncExamState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPixelDogs);
  } else {
    initPixelDogs();
  }
})();
