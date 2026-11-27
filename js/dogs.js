// js/dogs.js
// Interactive Pixel Black Dog Cursor & White Pixel Dog Companion for mipo cuteee
(function () {
  'use strict';

  function createBlackDogSvg() {
    // 16x16 pixel art black puppy facing right, crispEdges
    return `
      <svg class="pixel-dog-svg" viewBox="0 0 16 16" width="36" height="36" shape-rendering="crispEdges" aria-hidden="true">
        <!-- Subtle outer rim for dark-mode visibility & crisp pixel definition -->
        <!-- Ears -->
        <rect x="3" y="2" width="2" height="3" fill="#27272a"/>
        <rect x="4" y="1" width="1" height="1" fill="#3f3f46"/>
        <rect x="9" y="2" width="2" height="3" fill="#27272a"/>
        <rect x="9" y="1" width="1" height="1" fill="#3f3f46"/>

        <!-- Head -->
        <rect x="4" y="3" width="6" height="5" fill="#18181b"/>
        <rect x="3" y="4" width="8" height="4" fill="#18181b"/>
        <!-- Soft sheen highlight on forehead -->
        <rect x="5" y="3" width="2" height="1" fill="#3f3f46"/>
        <!-- Muzzle extending right -->
        <rect x="10" y="5" width="3" height="3" fill="#18181b"/>
        <rect x="12" y="5" width="1" height="1" fill="#fb7185"/> <!-- Cute tiny nose highlight/tip -->
        <rect x="12" y="6" width="1" height="1" fill="#09090b"/>

        <!-- Expressive sparkling pixel eyes -->
        <g class="dog-eyes-open">
          <rect x="6" y="5" width="1" height="1" fill="#ffffff"/>
          <rect x="9" y="5" width="1" height="1" fill="#ffffff"/>
        </g>
        <g class="dog-eyes-blink" style="display:none;">
          <rect x="6" y="5" width="1" height="1" fill="#71717a"/>
          <rect x="9" y="5" width="1" height="1" fill="#71717a"/>
        </g>
        <!-- Rosy cheek -->
        <rect x="7" y="7" width="1" height="1" fill="#fda4af"/>

        <!-- Cute coral collar -->
        <rect x="4" y="8" width="6" height="1" fill="#f43f5e"/>
        <rect x="8" y="9" width="1" height="1" fill="#fde047"/> <!-- Bell -->

        <!-- Body -->
        <rect x="3" y="9" width="7" height="4" fill="#18181b"/>
        <rect x="4" y="9" width="5" height="1" fill="#27272a"/>

        <!-- Wagging Tail (animates with frames) -->
        <g class="dog-tail-1">
          <rect x="1" y="8" width="2" height="1" fill="#18181b"/>
          <rect x="2" y="9" width="1" height="1" fill="#27272a"/>
        </g>
        <g class="dog-tail-2" style="display:none;">
          <rect x="2" y="7" width="1" height="2" fill="#18181b"/>
          <rect x="1" y="7" width="1" height="1" fill="#3f3f46"/>
        </g>

        <!-- Legs Frame 1 -->
        <g class="dog-legs-1">
          <rect x="3" y="13" width="2" height="2" fill="#18181b"/>
          <rect x="8" y="13" width="2" height="2" fill="#18181b"/>
          <rect x="3" y="14" width="2" height="1" fill="#3f3f46"/>
          <rect x="8" y="14" width="2" height="1" fill="#3f3f46"/>
        </g>
        <!-- Legs Frame 2 (walk cycle) -->
        <g class="dog-legs-2" style="display:none;">
          <rect x="2" y="13" width="2" height="2" fill="#18181b"/>
          <rect x="9" y="13" width="2" height="2" fill="#18181b"/>
          <rect x="2" y="14" width="2" height="1" fill="#3f3f46"/>
          <rect x="9" y="14" width="2" height="1" fill="#3f3f46"/>
        </g>
      </svg>
    `;
  }

  function createWhiteDogSvg() {
    // 18x18 pixel art snowy-white puppy facing right with crisp dark-slate outline
    return `
      <svg class="pixel-dog-svg" viewBox="0 0 18 18" width="50" height="50" shape-rendering="crispEdges" aria-hidden="true">
        <!-- Floppy ears outline & fill -->
        <rect x="4" y="2" width="2" height="1" fill="#334155"/>
        <rect x="10" y="2" width="2" height="1" fill="#334155"/>
        <rect x="3" y="3" width="1" height="3" fill="#334155"/>
        <rect x="12" y="3" width="1" height="3" fill="#334155"/>
        <rect x="4" y="3" width="2" height="3" fill="#e2e8f0"/>
        <rect x="10" y="3" width="2" height="3" fill="#e2e8f0"/>

        <!-- Head outline -->
        <rect x="6" y="3" width="4" height="1" fill="#334155"/>
        <rect x="3" y="6" width="1" height="3" fill="#334155"/>
        <rect x="13" y="5" width="2" height="1" fill="#334155"/>
        <rect x="15" y="6" width="1" height="3" fill="#334155"/>
        <rect x="13" y="9" width="2" height="1" fill="#334155"/>

        <!-- Head fill (pure white + soft shading) -->
        <rect x="4" y="4" width="8" height="5" fill="#ffffff"/>
        <rect x="6" y="4" width="4" height="1" fill="#f8fafc"/>
        <!-- Muzzle right -->
        <rect x="12" y="6" width="3" height="3" fill="#ffffff"/>
        <!-- Nose -->
        <rect x="14" y="6" width="1" height="1" fill="#0f172a"/>

        <!-- Eyes (open / happy / sleep) -->
        <g class="wdog-eyes-open">
          <rect x="7" y="6" width="1" height="2" fill="#0f172a"/>
          <rect x="11" y="6" width="1" height="2" fill="#0f172a"/>
        </g>
        <g class="wdog-eyes-happy" style="display:none;">
          <rect x="7" y="6" width="1" height="1" fill="#0f172a"/>
          <rect x="6" y="7" width="1" height="1" fill="#0f172a"/>
          <rect x="8" y="7" width="1" height="1" fill="#0f172a"/>
          <rect x="11" y="6" width="1" height="1" fill="#0f172a"/>
          <rect x="10" y="7" width="1" height="1" fill="#0f172a"/>
          <rect x="12" y="7" width="1" height="1" fill="#0f172a"/>
        </g>
        <g class="wdog-eyes-sleep" style="display:none;">
          <rect x="7" y="7" width="2" height="1" fill="#475569"/>
          <rect x="11" y="7" width="2" height="1" fill="#475569"/>
        </g>

        <!-- Rosy pixel cheeks -->
        <rect x="8" y="8" width="1" height="1" fill="#fda4af"/>
        <rect x="12" y="8" width="1" height="1" fill="#fda4af"/>

        <!-- Sky-blue pixel collar + gold bell -->
        <rect x="4" y="9" width="8" height="1" fill="#38bdf8"/>
        <rect x="10" y="10" width="1" height="1" fill="#facc15"/>

        <!-- Body outline & white fill -->
        <rect x="3" y="10" width="1" height="4" fill="#334155"/>
        <rect x="11" y="10" width="1" height="4" fill="#334155"/>
        <rect x="4" y="10" width="7" height="4" fill="#ffffff"/>
        <rect x="5" y="13" width="5" height="1" fill="#e2e8f0"/>
        <rect x="6" y="14" width="3" height="1" fill="#334155"/>

        <!-- Tail Frame 1 -->
        <g class="wdog-tail-1">
          <rect x="1" y="9" width="2" height="1" fill="#334155"/>
          <rect x="1" y="10" width="2" height="1" fill="#ffffff"/>
          <rect x="2" y="11" width="1" height="1" fill="#334155"/>
        </g>
        <!-- Tail Frame 2 -->
        <g class="wdog-tail-2" style="display:none;">
          <rect x="2" y="7" width="1" height="2" fill="#334155"/>
          <rect x="1" y="8" width="1" height="2" fill="#ffffff"/>
          <rect x="1" y="7" width="1" height="1" fill="#334155"/>
        </g>

        <!-- Legs Frame 1 (Standing / Idle) -->
        <g class="wdog-legs-1">
          <rect x="4" y="14" width="2" height="2" fill="#ffffff"/>
          <rect x="3" y="14" width="1" height="2" fill="#334155"/>
          <rect x="6" y="14" width="1" height="2" fill="#334155"/>
          <rect x="4" y="16" width="2" height="1" fill="#334155"/>

          <rect x="9" y="14" width="2" height="2" fill="#ffffff"/>
          <rect x="9" y="16" width="2" height="1" fill="#334155"/>
          <rect x="11" y="14" width="1" height="2" fill="#334155"/>
        </g>

        <!-- Legs Frame 2 (Trotting) -->
        <g class="wdog-legs-2" style="display:none;">
          <rect x="3" y="14" width="2" height="2" fill="#ffffff"/>
          <rect x="2" y="14" width="1" height="2" fill="#334155"/>
          <rect x="3" y="16" width="2" height="1" fill="#334155"/>

          <rect x="10" y="14" width="2" height="2" fill="#ffffff"/>
          <rect x="10" y="16" width="2" height="1" fill="#334155"/>
          <rect x="12" y="14" width="1" height="2" fill="#334155"/>
        </g>
      </svg>
    `;
  }

  function initPixelDogs() {
    if (document.getElementById('pixelWhiteDogCompanion')) return;

    const supportsFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // 1. Create Particle Layer (for pixel hearts, sparkles, zZz)
    const fxLayer = document.createElement('div');
    fxLayer.id = 'pixelDogFxLayer';
    document.body.appendChild(fxLayer);

    // 2. Create Black Dog Cursor (desktop / fine pointer)
    const blackDogEl = document.createElement('div');
    blackDogEl.id = 'pixelBlackDogCursor';
    blackDogEl.innerHTML = `
      <span class="cursor-pin-dot" aria-hidden="true"></span>
      <div class="black-dog-sprite-wrap">
        ${createBlackDogSvg()}
      </div>
    `;
    document.body.appendChild(blackDogEl);

    // 3. Create White Dog Screen Companion
    const whiteDogEl = document.createElement('div');
    whiteDogEl.id = 'pixelWhiteDogCompanion';
    whiteDogEl.title = 'mipo trắng • Click hoặc đưa cún đen lại gần để chơi cùng!';
    whiteDogEl.innerHTML = `
      <div class="dog-emote-bubble" id="whiteDogBubble"></div>
      <div class="white-dog-sprite-wrap">
        ${createWhiteDogSvg()}
      </div>
      <div class="dog-ground-shadow"></div>
    `;
    document.body.appendChild(whiteDogEl);

    const blackWrap = blackDogEl.querySelector('.black-dog-sprite-wrap');
    const whiteWrap = whiteDogEl.querySelector('.white-dog-sprite-wrap');
    const whiteBubble = whiteDogEl.querySelector('#whiteDogBubble');

    // Black dog state
    const black = {
      active: false,
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
      lastX: window.innerWidth * 0.5,
      lastY: window.innerHeight * 0.5,
      facing: 1, // 1 = right, -1 = left
      speed: 0,
      lastMoveTime: Date.now(),
      isPointerHover: false,
      animFrame: 0,
      lastBoopTime: 0
    };

    // White dog state
    const floorY = () => Math.max(80, window.innerHeight - 54);
    const white = {
      x: Math.max(60, Math.min(window.innerWidth - 90, window.innerWidth * 0.78)),
      y: floorY(),
      vx: 0,
      vy: 0,
      facing: -1, // face left initially
      mode: 'wander', // 'wander' | 'sit' | 'sleep' | 'approach' | 'play' | 'follow'
      targetX: window.innerWidth * 0.3,
      targetY: floorY(),
      modeTimer: 160,
      followUntil: 0,
      playUntil: 0,
      hopPhase: 0,
      lastInteractionFx: 0,
      bubbleTimer: 0
    };

    const CUTE_WORDS = [
      'gâu! ♥',
      '*vẫy đuôi*',
      'wuff! 🐾',
      '*boop!* 💖',
      'chơi nè!',
      'iu quá ♥',
      'gâu gâu!'
    ];

    function showBubble(text, durationMs = 1700) {
      whiteBubble.textContent = text;
      whiteBubble.classList.add('show');
      clearTimeout(white.bubbleTimer);
      white.bubbleTimer = setTimeout(() => {
        whiteBubble.classList.remove('show');
      }, durationMs);
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

    // Track pointer hover over interactive controls
    function isClickableTarget(target) {
      if (!target || !target.closest) return false;
      return !!target.closest('button, a, label, input, select, textarea, .subject-chip, .nav-dot, .filter-chip, #pixelWhiteDogCompanion');
    }

    if (supportsFinePointer) {
      window.addEventListener('mousemove', (e) => {
        if (!black.active) {
          black.active = true;
          document.body.classList.add('pixel-dog-cursor-active');
          blackDogEl.classList.add('visible');
        }
        const dx = e.clientX - black.x;
        const dy = e.clientY - black.y;
        black.speed = Math.hypot(dx, dy);
        if (Math.abs(dx) > 1.5) {
          black.facing = dx > 0 ? 1 : -1;
        }
        black.x = e.clientX;
        black.y = e.clientY;
        black.lastMoveTime = Date.now();
        black.isPointerHover = isClickableTarget(e.target);

        blackDogEl.style.transform = `translate3d(${black.x}px, ${black.y}px, 0)`;
        blackDogEl.classList.toggle('is-pointer', black.isPointerHover);
        blackWrap.style.transform = `scaleX(${black.facing})`;
      }, { passive: true });

      document.addEventListener('mouseleave', () => {
        black.active = false;
        blackDogEl.classList.remove('visible');
        document.body.classList.remove('pixel-dog-cursor-active');
      });

      window.addEventListener('mousedown', () => {
        blackDogEl.classList.add('is-clicking');
      });
      window.addEventListener('mouseup', () => {
        blackDogEl.classList.remove('is-clicking');
      });
    }

    // Clicking / petting the White Dog
    whiteDogEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const now = Date.now();
      white.playUntil = now + 1100;
      white.hopPhase = 1.0;

      // Toggle buddy follow mode when clicked, or pet if already following
      if (white.mode === 'follow' && now < white.followUntil - 1000) {
        white.mode = 'sit';
        white.followUntil = 0;
        showBubble('*ngồi ngoan* ♥', 1600);
      } else {
        white.mode = 'follow';
        white.followUntil = now + 9000;
        const phrase = CUTE_WORDS[Math.floor(Math.random() * CUTE_WORDS.length)];
        showBubble(phrase, 1800);
      }

      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          spawnHeartParticle(white.x + 24, white.y - 6, i % 2 === 0 ? 'heart' : 'sparkle');
        }, i * 90);
      }
      if (black.active) {
        spawnHeartParticle(black.x + 12, black.y - 10, 'heart');
      }
    });

    // Animation frame counters
    let tick = 0;
    let sleepFxTick = 0;

    function updateFrameSprites(elRoot, prefix, isMoving, isHappy, isSleeping, fastWag) {
      const legs1 = elRoot.querySelector(`.${prefix}-legs-1`);
      const legs2 = elRoot.querySelector(`.${prefix}-legs-2`);
      const tail1 = elRoot.querySelector(`.${prefix}-tail-1`);
      const tail2 = elRoot.querySelector(`.${prefix}-tail-2`);

      // Legs animation
      const walkToggle = isMoving && Math.floor(tick / 7) % 2 === 1;
      if (legs1 && legs2) {
        legs1.style.display = walkToggle ? 'none' : '';
        legs2.style.display = walkToggle ? '' : 'none';
      }

      // Tail wag animation
      const wagRate = fastWag ? 5 : 14;
      const wagToggle = !isSleeping && Math.floor(tick / wagRate) % 2 === 1;
      if (tail1 && tail2) {
        tail1.style.display = wagToggle ? 'none' : '';
        tail2.style.display = wagToggle ? '' : 'none';
      }

      // Eyes (white dog)
      if (prefix === 'wdog') {
        const eOpen = elRoot.querySelector('.wdog-eyes-open');
        const eHappy = elRoot.querySelector('.wdog-eyes-happy');
        const eSleep = elRoot.querySelector('.wdog-eyes-sleep');
        const blinkNow = (tick % 210) > 202;
        if (eOpen && eHappy && eSleep) {
          eOpen.style.display = (!isSleeping && !isHappy && !blinkNow) ? '' : 'none';
          eHappy.style.display = (!isSleeping && isHappy) ? '' : 'none';
          eSleep.style.display = (isSleeping || (!isHappy && blinkNow)) ? '' : 'none';
        }
      } else {
        const eOpen = elRoot.querySelector('.dog-eyes-open');
        const eBlink = elRoot.querySelector('.dog-eyes-blink');
        const blinkNow = (tick % 190) > 183;
        if (eOpen && eBlink) {
          eOpen.style.display = blinkNow ? 'none' : '';
          eBlink.style.display = blinkNow ? '' : 'none';
        }
      }
    }

    function step() {
      tick++;
      const now = Date.now();
      const maxW = Math.max(120, window.innerWidth - 64);
      const groundY = floorY();

      // 1. Update Black Dog Cursor sprites
      const blackIdleMs = now - black.lastMoveTime;
      const blackMoving = black.active && blackIdleMs < 130;
      const blackPlaying = black.active && (now - black.lastBoopTime < 900);
      if (black.active) {
        updateFrameSprites(blackDogEl, 'dog', blackMoving, blackPlaying, false, blackMoving || blackPlaying);
        blackDogEl.classList.toggle('is-playing', blackPlaying);
      }

      // 2. Compute distance between Black Dog & White Dog
      const whiteCenterX = white.x + 25;
      const whiteCenterY = white.y + 25;
      const dist = black.active ? Math.hypot(black.x - whiteCenterX, black.y - whiteCenterY) : 9999;

      // 3. Interaction & State transitions for White Dog
      if (black.active && dist < 52) {
        // Nose boop / close play!
        white.mode = 'play';
        white.playUntil = now + 700;
        black.lastBoopTime = now;
        white.facing = black.x >= whiteCenterX ? 1 : -1;

        if (now - white.lastInteractionFx > 750) {
          white.lastInteractionFx = now;
          white.hopPhase = 1.0;
          spawnHeartParticle(whiteCenterX, white.y - 6, 'heart');
          spawnHeartParticle(black.x + 12, black.y - 8, 'sparkle');
          if (Math.random() < 0.72) {
            const word = CUTE_WORDS[Math.floor(Math.random() * CUTE_WORDS.length)];
            showBubble(word, 1400);
          }
        }
      } else if (black.active && white.mode === 'follow' && now < white.followUntil) {
        // Stay in buddy follow mode (trotting slightly behind/beside cursor so clicks aren't blocked)
        const offsetX = black.facing > 0 ? -74 : 26;
        white.targetX = Math.max(12, Math.min(maxW, black.x + offsetX));
        white.targetY = Math.max(76, Math.min(groundY, black.y - 10));
      } else if (black.active && dist < 240 && black.y > window.innerHeight * 0.55) {
        // Approach black dog excitedly along bottom/lower zone!
        if (white.mode === 'sleep' || white.mode === 'sit' || white.mode === 'wander') {
          if (Math.random() < 0.04) showBubble('! ♪', 900);
        }
        white.mode = 'approach';
        const offsetX = black.x > whiteCenterX ? -42 : 42;
        white.targetX = Math.max(12, Math.min(maxW, black.x + offsetX));
        white.targetY = Math.max(window.innerHeight * 0.55, Math.min(groundY, black.y));
      } else {
        // Calm autonomous behavior along bottom floor
        if (white.mode === 'approach' || (white.mode === 'follow' && now >= white.followUntil) || (white.mode === 'play' && now > white.playUntil)) {
          white.mode = 'wander';
          white.targetX = 24 + Math.random() * (maxW - 36);
          white.targetY = groundY;
          white.modeTimer = 140 + Math.floor(Math.random() * 140);
        }
        white.targetY = groundY;

        if (blackIdleMs > 22000 && white.mode !== 'sleep' && Math.abs(white.y - groundY) < 4) {
          white.mode = 'sleep';
          white.modeTimer = 240;
          showBubble('zzZ...', 1800);
        } else {
          white.modeTimer--;
          if (white.modeTimer <= 0) {
            if (white.mode === 'wander') {
              white.mode = 'sit';
              white.modeTimer = 110 + Math.floor(Math.random() * 140);
            } else {
              white.mode = 'wander';
              white.targetX = 24 + Math.random() * (maxW - 36);
              white.modeTimer = 160 + Math.floor(Math.random() * 160);
            }
          }
        }
      }

      // 4. Move White Dog smoothly
      let isMoving = false;
      if (white.mode === 'wander' || white.mode === 'approach' || white.mode === 'follow') {
        const dx = white.targetX - white.x;
        const dy = white.targetY - white.y;
        const d = Math.hypot(dx, dy);
        const speed = white.mode === 'follow' ? 3.1 : white.mode === 'approach' ? 2.6 : 1.15;

        if (d > 4) {
          isMoving = true;
          white.vx = (dx / d) * Math.min(speed, d);
          white.vy = (dy / d) * Math.min(speed, d);
          white.x += white.vx;
          white.y += white.vy;
          if (Math.abs(white.vx) > 0.25) {
            white.facing = white.vx > 0 ? 1 : -1;
          }
        } else if (white.mode === 'wander') {
          white.mode = 'sit';
          white.modeTimer = 100 + Math.floor(Math.random() * 100);
        }
      } else {
        // Gently settle onto ground if above floor and not following
        if (Math.abs(white.y - groundY) > 1 && white.mode !== 'play') {
          isMoving = true;
          white.y += (groundY - white.y) * 0.12;
        }
      }

      // Clamp bounds cleanly on resize
      white.x = Math.max(8, Math.min(maxW, white.x));
      white.y = Math.max(70, Math.min(groundY, white.y));

      // Happy hop decay
      let hopY = 0;
      if (white.hopPhase > 0.02) {
        hopY = -Math.sin(white.hopPhase * Math.PI) * 16;
        white.hopPhase = Math.max(0, white.hopPhase - 0.065);
      }

      // Sleep zZz particles
      if (white.mode === 'sleep') {
        sleepFxTick++;
        if (sleepFxTick % 110 === 0) {
          spawnHeartParticle(white.x + 26, white.y, 'sleep');
        }
      }

      const isHappy = white.mode === 'play' || white.mode === 'approach' || white.mode === 'follow' || white.hopPhase > 0.1;
      const isSleeping = white.mode === 'sleep';
      const fastWag = white.mode === 'play' || white.mode === 'approach' || white.mode === 'follow';

      updateFrameSprites(whiteDogEl, 'wdog', isMoving, isHappy, isSleeping, fastWag);

      whiteDogEl.style.transform = `translate3d(${Math.round(white.x)}px, ${Math.round(white.y + hopY)}px, 0)`;
      whiteWrap.style.transform = `scaleX(${white.facing})`;
      whiteDogEl.classList.toggle('is-sleeping', isSleeping);
      whiteDogEl.classList.toggle('is-happy', isHappy);

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
