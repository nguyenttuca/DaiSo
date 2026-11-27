// js/dogs.js
// Interactive Equal-Sized Pixel Dogs:
// - Mipo (White Puppy) on Cursor (#pixelWhiteDogCursor)
// - Tu (Black Puppy) on Screen Floor (#pixelBlackDogCompanion)
// Hold stationary click over white dog / non-UI surface or Tu to trigger Confession Scene!
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
        <!-- Stem & leaves -->
        <rect x="5" y="6" width="2" height="5" fill="#16a34a"/>
        <rect x="3" y="8" width="2" height="2" fill="#22c55e"/>
        <rect x="7" y="7" width="2" height="2" fill="#22c55e"/>
        <!-- Rose/blossom petals -->
        <rect x="4" y="1" width="4" height="2" fill="#f43f5e"/>
        <rect x="3" y="2" width="6" height="4" fill="#fb7185"/>
        <rect x="4" y="3" width="4" height="2" fill="#e11d48"/>
        <rect x="5" y="2" width="2" height="2" fill="#fecdd3"/>
        <rect x="4" y="5" width="4" height="1" fill="#be123c"/>
      </svg>
    `;
  }

  function initPixelDogs() {
    if (document.getElementById('pixelBlackDogCompanion')) return;

    const supportsFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // 1. Particle Layer
    const fxLayer = document.createElement('div');
    fxLayer.id = 'pixelDogFxLayer';
    document.body.appendChild(fxLayer);

    // 2. White Dog Cursor = MIPO (44x44px)
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

    // 3. Black Dog Screen Companion = TU (exact same 44x44px!)
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
      mode: 'wander', // 'wander' | 'sit' | 'sleep' | 'approach' | 'play' | 'follow' | 'confess'
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

    const CUTE_WORDS = [
      'gâu! ♥',
      'mipo ơi~',
      '*vẫy đuôi*',
      'tú nè! ♥',
      '*boop!* 💖',
      'chơi cùng tú nhé!'
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
      return !!target.closest('button, a, label, input, select, textarea, .subject-chip, .nav-dot, .filter-chip, #pixelBlackDogCompanion');
    }

    function isHoldBlockedTarget(target) {
      if (!target || !target.closest) return false;
      return !!target.closest('button, a, input, select, textarea, .option-btn, .nav-dot, .subject-chip, .diff-card, .chapter-check-card, .source-radio-card, .size-pill-card, .matrix-pill, .filter-chip');
    }

    function stopConfessionTimers() {
      cutscene.stepTimers.forEach(t => clearTimeout(t));
      cutscene.stepTimers = [];
    }

    function startConfessionScene() {
      stopConfessionTimers();
      cutscene.active = true;
      tu.mode = 'confess';
      tu.hopPhase = 0.8;
      hideBubble(tuBubble, tu);
      hideBubble(mipoBubble, mipo);
      tuFlower.classList.remove('visible', 'offering');
      tuEl.classList.remove('is-confessing');

      // Step 1: Tu says: "chào cậu tớ là tú"
      const t1 = setTimeout(() => {
        if (!cutscene.active) return;
        tuEl.classList.add('is-confessing');
        showBubble(tuBubble, tu, 'chào cậu tớ là tú', 1750);
        spawnHeartParticle(tu.x + 22, tu.y - 4, 'sparkle');
      }, 480);

      // Step 2: Mipo replies: "tớ là mipo"
      const t2 = setTimeout(() => {
        if (!cutscene.active) return;
        hideBubble(tuBubble, tu);
        mipo.lastBoopTime = Date.now() + 3000;
        showBubble(mipoBubble, mipo, 'tớ là mipo', 1750);
        spawnHeartParticle(mipo.x + 22, mipo.y, 'sparkle');
      }, 2250);

      // Step 3: Tu pulls out pixel flower & says: "tớ thích cậu á :3"
      const t3 = setTimeout(() => {
        if (!cutscene.active) return;
        hideBubble(mipoBubble, mipo);
        tuFlower.classList.add('visible');
        showBubble(tuBubble, tu, 'tớ thích cậu á :3', 2800);
        tu.hopPhase = 1.0;

        const tFlower = setTimeout(() => {
          if (!cutscene.active) return;
          tuFlower.classList.add('offering');
          for (let i = 0; i < 6; i++) {
            setTimeout(() => {
              spawnHeartParticle((tu.x + mipo.x) / 2 + 20, Math.min(tu.y, mipo.y), i % 2 === 0 ? 'heart' : 'sparkle');
            }, i * 110);
          }
          setTimeout(() => {
            if (!cutscene.active) return;
            showBubble(mipoBubble, mipo, '♥ :3', 1600);
          }, 350);
        }, 420);
        cutscene.stepTimers.push(tFlower);
      }, 4000);

      // Step 4: Return to buddy mode
      const tEnd = setTimeout(() => {
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
        if (!mipo.active) {
          mipo.active = true;
          document.body.classList.add('pixel-dog-cursor-active');
          mipoEl.classList.add('visible');
        }
        const dx = e.clientX - mipo.x;
        if (!cutscene.active && Math.abs(dx) > 1.5) {
          mipo.facing = dx > 0 ? 1 : -1;
        }
        mipo.x = e.clientX;
        mipo.y = e.clientY;
        mipo.lastMoveTime = Date.now();
        mipo.isPointerHover = isClickableControl(e.target);

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
        mipo.active = false;
        mipoEl.classList.remove('visible');
        document.body.classList.remove('pixel-dog-cursor-active');
      });

      window.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
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

    tuEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cutscene.suppressNextTuClick) {
        cutscene.suppressNextTuClick = false;
        return;
      }
      if (cutscene.active) return;

      const now = Date.now();
      tu.playUntil = now + 1100;
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

    let tick = 0;
    let sleepFxTick = 0;

    function updateFrameSprites(elRoot, prefix, isMoving, isHappy, isSleeping, fastWag) {
      const legs1 = elRoot.querySelector(`.${prefix}-legs-1`);
      const legs2 = elRoot.querySelector(`.${prefix}-legs-2`);
      const tail1 = elRoot.querySelector(`.${prefix}-tail-1`);
      const tail2 = elRoot.querySelector(`.${prefix}-tail-2`);

      const walkToggle = isMoving && Math.floor(tick / 7) % 2 === 1;
      if (legs1 && legs2) {
        legs1.style.display = walkToggle ? 'none' : '';
        legs2.style.display = walkToggle ? '' : 'none';
      }

      const wagRate = fastWag ? 5 : 14;
      const wagToggle = !isSleeping && Math.floor(tick / wagRate) % 2 === 1;
      if (tail1 && tail2) {
        tail1.style.display = wagToggle ? 'none' : '';
        tail2.style.display = wagToggle ? '' : 'none';
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

    function step() {
      tick++;
      const now = Date.now();
      const maxW = Math.max(120, window.innerWidth - 60);
      const groundY = floorY();

      // 1. Update Mipo (White Dog Cursor)
      const mipoIdleMs = now - mipo.lastMoveTime;
      const mipoMoving = mipo.active && mipoIdleMs < 130 && !cutscene.active;
      const mipoPlaying = mipo.active && (now < mipo.lastBoopTime || cutscene.active);
      if (mipo.active) {
        updateFrameSprites(mipoEl, 'wdog', mipoMoving, mipoPlaying, false, mipoMoving || mipoPlaying);
        mipoEl.classList.toggle('is-playing', mipoPlaying);
      }

      // 2. Distance between Mipo and Tu
      const tuCenterX = tu.x + 22;
      const tuCenterY = tu.y + 22;
      const mipoCenterX = mipo.x + 26;
      const mipoCenterY = mipo.y + 26;
      const dist = mipo.active ? Math.hypot(mipoCenterX - tuCenterX, mipoCenterY - tuCenterY) : 9999;

      // 3. Tu Behavior / Cutscene
      if (cutscene.active) {
        const preferLeft = (mipo.x > 88);
        tu.targetX = preferLeft ? Math.max(10, mipo.x - 52) : Math.min(maxW, mipo.x + 62);
        tu.targetY = Math.max(66, Math.min(groundY, mipo.y + 4));
      } else if (mipo.active && dist < 56) {
        tu.mode = 'play';
        tu.playUntil = now + 700;
        mipo.lastBoopTime = now + 900;
        tu.facing = mipoCenterX >= tuCenterX ? 1 : -1;

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
        const offsetX = mipo.facing > 0 ? -68 : 26;
        tu.targetX = Math.max(12, Math.min(maxW, mipo.x + offsetX));
        tu.targetY = Math.max(76, Math.min(groundY, mipo.y - 8));
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

      // 4. Move Tu Smoothly
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

      if (cutscene.active) {
        const tuOnLeft = tu.x <= mipo.x;
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

      updateFrameSprites(tuEl, 'bdog', isMoving, isHappy, isSleeping, fastWag);

      tuEl.style.transform = `translate3d(${Math.round(tu.x)}px, ${Math.round(tu.y + hopY)}px, 0)`;
      tuWrap.style.transform = `scaleX(${tu.facing})`;
      tuEl.classList.toggle('is-sleeping', isSleeping);
      tuEl.classList.toggle('is-happy', isHappy);

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPixelDogs);
  } else {
    initPixelDogs();
  }
})();
