const Jellyfish = () => (
  <div
    className="jellyfish-container"
    style={{
      position: 'absolute',
      overflow: 'visible',
      zIndex: 10,
      pointerEvents: 'none',
      width: '380px',
      height: '520px',
      right: '-40px',
      top: '50%',
      animation: 'jFloat 4s ease-in-out infinite',
      perspective: '800px',
    }}
  >
    {/* 3D wrapper with perspective tilt */}
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'visible',
        transformStyle: 'preserve-3d',
        animation: 'jellyTilt 6s ease-in-out infinite',
      }}
    >
      {/* Ambient glow layers */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '30px',
        width: '300px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(77,217,192,0.2) 0%, transparent 70%)',
        filter: 'blur(30px)',
        animation: 'glowPulse 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '60px',
        left: '80px',
        width: '200px',
        height: '150px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(167,139,250,0.15) 0%, transparent 70%)',
        filter: 'blur(25px)',
        animation: 'glowPulse 5s ease-in-out infinite 1s',
      }} />

      <svg
        viewBox="0 0 380 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', width: '100%', height: '100%' }}
      >
        <defs>
          {/* Enhanced bell gradient with more depth */}
          <radialGradient id="jBell3d" cx="45%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#e0d4ff" stopOpacity="0.6" />
            <stop offset="15%" stopColor="#c4b5fd" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#93c5fd" stopOpacity="0.6" />
            <stop offset="55%" stopColor="#4DD9C0" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#2dd4bf" stopOpacity="0.35" />
            <stop offset="90%" stopColor="#1a9a85" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0.05" />
          </radialGradient>

          {/* Specular highlight — top-left shine */}
          <radialGradient id="jSpecular" cx="35%" cy="22%" r="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Secondary rim highlight */}
          <radialGradient id="jRimLight" cx="70%" cy="60%" r="40%">
            <stop offset="0%" stopColor="#6AB8F7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6AB8F7" stopOpacity="0" />
          </radialGradient>

          {/* Inner organ glow */}
          <radialGradient id="jInner3d" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#4DD9C0" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#6AB8F7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4DD9C0" stopOpacity="0" />
          </radialGradient>

          {/* Tentacle gradients — richer */}
          <linearGradient id="t3d1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4DD9C0" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#4DD9C0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4DD9C0" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="t3d2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6AB8F7" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#6AB8F7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6AB8F7" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="t3d3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#A78BFA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.02" />
          </linearGradient>

          {/* Depth shadow filter */}
          <filter id="depthShadow" x="-30%" y="-10%" width="160%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="shadow" />
            <feOffset dx="8" dy="15" result="offsetShadow" />
            <feFlood floodColor="#0a0f1e" floodOpacity="0.4" result="color" />
            <feComposite in="color" in2="offsetShadow" operator="in" result="colorShadow" />
            <feMerge>
              <feMergeNode in="colorShadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow filter */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === BELL with depth shadow === */}
        <g filter="url(#depthShadow)">
          {/* Background glow */}
          <ellipse cx="190" cy="130" rx="130" ry="118" fill="rgba(77,217,192,0.04)" filter="url(#softGlow)" />

          {/* Main bell — 3D curvature via overlapping ellipses */}
          <ellipse cx="190" cy="130" rx="125" ry="115" fill="url(#jBell3d)" />

          {/* Depth shadow on bottom of bell */}
          <ellipse cx="190" cy="175" rx="100" ry="40" fill="rgba(10,15,30,0.2)" />

          {/* Specular highlight */}
          <ellipse cx="190" cy="130" rx="125" ry="115" fill="url(#jSpecular)" />

          {/* Rim light (right side) */}
          <ellipse cx="190" cy="130" rx="125" ry="115" fill="url(#jRimLight)" />

          {/* Glass refraction streaks */}
          <ellipse cx="155" cy="95" rx="40" ry="25" fill="rgba(255,255,255,0.06)" transform="rotate(-15 155 95)" />
          <ellipse cx="220" cy="110" rx="25" ry="15" fill="rgba(255,255,255,0.04)" transform="rotate(10 220 110)" />
          <ellipse cx="170" cy="75" rx="18" ry="8" fill="rgba(255,255,255,0.08)" transform="rotate(-20 170 75)" />
        </g>

        {/* Inner organs — visible through translucent bell */}
        <g style={{ animation: 'organPulse 3s ease-in-out infinite' }}>
          <ellipse cx="190" cy="145" rx="75" ry="55" fill="url(#jInner3d)" />
          <ellipse cx="168" cy="120" rx="30" ry="18" fill="rgba(167,139,250,0.06)" />
          <ellipse cx="215" cy="125" rx="22" ry="14" fill="rgba(106,184,247,0.05)" />
          {/* Central nervous cluster */}
          <ellipse cx="190" cy="140" rx="15" ry="12" fill="rgba(77,217,192,0.12)">
            <animate attributeName="rx" values="15;18;15" dur="2s" repeatCount="indefinite" />
            <animate attributeName="ry" values="12;14;12" dur="2s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* Rim / skirt with 3D wave */}
        <g>
          <ellipse cx="190" cy="215" rx="120" ry="22" fill="rgba(77,217,192,0.1)" />
          <path d="M70,215 Q95,232 125,215 Q155,232 190,215 Q225,232 255,215 Q285,232 310,215"
            stroke="rgba(77,217,192,0.3)" strokeWidth="2.5" fill="none" style={{ animation: 'skirtWave 2s ease-in-out infinite' }} />
          <path d="M75,218 Q100,228 130,218 Q160,228 190,218 Q220,228 250,218 Q280,228 305,218"
            stroke="rgba(106,184,247,0.15)" strokeWidth="1.5" fill="none" style={{ animation: 'skirtWave 2s ease-in-out infinite 0.3s' }} />
        </g>

        {/* === TENTACLES — physics-like with multi-segment curves === */}
        {/* Main thick tentacles */}
        <g style={{ animation: 'tentaclePhysics1 3.5s ease-in-out infinite', transformOrigin: '95px 220px' }}>
          <path d="M95 220 Q82 270 92 310 Q78 350 88 390 Q76 420 85 460 Q80 480 88 510" stroke="url(#t3d1)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>
        <g style={{ animation: 'tentaclePhysics2 4s ease-in-out infinite', transformOrigin: '140px 222px' }}>
          <path d="M140 222 Q128 278 142 330 Q130 375 145 420 Q135 455 148 495" stroke="url(#t3d2)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        <g style={{ animation: 'tentaclePhysics3 4.5s ease-in-out infinite 0.3s', transformOrigin: '190px 225px' }}>
          <path d="M190 225 Q182 290 195 350 Q183 400 198 450 Q188 485 196 520" stroke="url(#t3d1)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <g style={{ animation: 'tentaclePhysics2 3.8s ease-in-out infinite 0.5s', transformOrigin: '240px 222px' }}>
          <path d="M240 222 Q252 278 238 330 Q250 375 235 420 Q245 455 232 495" stroke="url(#t3d3)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        <g style={{ animation: 'tentaclePhysics1 4.2s ease-in-out infinite 0.2s', transformOrigin: '285px 220px' }}>
          <path d="M285 220 Q298 270 288 310 Q302 350 292 390 Q304 420 295 460 Q300 480 292 510" stroke="url(#t3d2)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Wispy thin tentacles */}
        <g style={{ animation: 'tentaclePhysics3 2.8s ease-in-out infinite', transformOrigin: '110px 218px' }}>
          <path d="M110 218 Q102 255 112 290 Q105 320 115 355" stroke="url(#t3d3)" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
        </g>
        <g style={{ animation: 'tentaclePhysics1 3s ease-in-out infinite 0.4s', transformOrigin: '160px 224px' }}>
          <path d="M160 224 Q153 260 163 295 Q155 325 165 360" stroke="url(#t3d1)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
        </g>
        <g style={{ animation: 'tentaclePhysics2 2.6s ease-in-out infinite 0.2s', transformOrigin: '215px 224px' }}>
          <path d="M215 224 Q222 260 212 295 Q220 325 210 360" stroke="url(#t3d2)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
        </g>
        <g style={{ animation: 'tentaclePhysics3 3.2s ease-in-out infinite 0.6s', transformOrigin: '260px 220px' }}>
          <path d="M260 220 Q268 255 258 290 Q266 320 256 355" stroke="url(#t3d3)" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* Hair-thin trailing filaments */}
        <g style={{ animation: 'tentaclePhysics1 5s ease-in-out infinite 1s', transformOrigin: '125px 220px' }}>
          <path d="M125 220 Q118 300 128 380 Q120 430 130 490" stroke="url(#t3d1)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" />
        </g>
        <g style={{ animation: 'tentaclePhysics3 5.5s ease-in-out infinite 0.8s', transformOrigin: '255px 220px' }}>
          <path d="M255 220 Q262 300 252 380 Q260 430 250 490" stroke="url(#t3d3)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" />
        </g>

        {/* Bioluminescent dots with depth */}
        <circle cx="155" cy="105" r="4" fill="rgba(77,217,192,0.5)">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="225" cy="98" r="3" fill="rgba(106,184,247,0.5)">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="190" cy="148" r="3.5" fill="rgba(167,139,250,0.4)">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
          <animate attributeName="r" values="2.5;4.5;2.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="172" cy="82" r="2" fill="rgba(255,255,255,0.25)">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="210" cy="155" r="2" fill="rgba(77,217,192,0.3)">
          <animate attributeName="opacity" values="0.15;0.5;0.15" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="145" cy="140" r="1.5" fill="rgba(106,184,247,0.3)">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  </div>
);

export default Jellyfish;
