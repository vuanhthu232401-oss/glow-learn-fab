const Jellyfish = () => (
  <div
    style={{
      position: 'absolute',
      overflow: 'visible',
      zIndex: 10,
      pointerEvents: 'none',
      width: '340px',
      height: '460px',
      right: '-40px',
      top: '50%',
      animation: 'jFloat 4s ease-in-out infinite',
      filter: 'drop-shadow(0 0 40px rgba(77,217,192,0.45))',
    }}
  >
    <svg
      viewBox="0 0 340 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', width: '100%', height: '100%' }}
    >
      <defs>
        {/* Bell gradients */}
        <radialGradient id="jBell" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.5" />
          <stop offset="25%" stopColor="#93c5fd" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#4DD9C0" stopOpacity="0.75" />
          <stop offset="85%" stopColor="#2dd4bf" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0.1" />
        </radialGradient>
        <radialGradient id="jShine" cx="40%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="jInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4DD9C0" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4DD9C0" stopOpacity="0" />
        </radialGradient>
        {/* Tentacle gradients */}
        <linearGradient id="tG1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4DD9C0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4DD9C0" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="tG2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6AB8F7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6AB8F7" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="tG3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.03" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="jGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <ellipse cx="170" cy="120" rx="115" ry="105" fill="rgba(77,217,192,0.06)" filter="url(#jGlow)" />

      {/* Main bell */}
      <ellipse cx="170" cy="120" rx="115" ry="105" fill="url(#jBell)" />
      <ellipse cx="170" cy="120" rx="115" ry="105" fill="url(#jShine)" />

      {/* Inner organs */}
      <ellipse cx="170" cy="130" rx="70" ry="50" fill="url(#jInner)" />
      <ellipse cx="150" cy="100" rx="35" ry="22" fill="rgba(255,255,255,0.05)" />
      <ellipse cx="195" cy="108" rx="20" ry="14" fill="rgba(255,255,255,0.03)" />

      {/* Rim / skirt */}
      <ellipse cx="170" cy="195" rx="110" ry="20" fill="rgba(77,217,192,0.12)" />
      <path d="M60,195 Q90,210 115,195 Q140,210 170,195 Q200,210 225,195 Q250,210 280,195" 
        stroke="rgba(77,217,192,0.25)" strokeWidth="2" fill="none" />

      {/* Long tentacles */}
      <g style={{ animation: 'tentacleSway1 3s ease-in-out infinite', transformOrigin: '85px 200px' }}>
        <path d="M85 200 Q78 270 88 320 Q75 370 92 430" stroke="url(#tG1)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway2 3.5s ease-in-out infinite', transformOrigin: '120px 202px' }}>
        <path d="M120 202 Q112 280 125 340 Q115 385 130 445" stroke="url(#tG2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway1 4s ease-in-out infinite 0.5s', transformOrigin: '170px 205px' }}>
        <path d="M170 205 Q163 290 175 350 Q165 400 178 460" stroke="url(#tG1)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway3 3.2s ease-in-out infinite', transformOrigin: '215px 202px' }}>
        <path d="M215 202 Q222 280 208 340 Q218 385 205 445" stroke="url(#tG3)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway2 3.8s ease-in-out infinite 0.3s', transformOrigin: '255px 200px' }}>
        <path d="M255 200 Q262 270 248 320 Q260 370 245 430" stroke="url(#tG2)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* Short frilly tentacles */}
      <g style={{ animation: 'tentacleSway3 2.5s ease-in-out infinite', transformOrigin: '100px 198px' }}>
        <path d="M100 198 Q94 240 108 280" stroke="url(#tG3)" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
      <g style={{ animation: 'tentacleSway1 2.8s ease-in-out infinite 0.2s', transformOrigin: '145px 203px' }}>
        <path d="M145 203 Q140 248 150 290" stroke="url(#tG1)" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>
      <g style={{ animation: 'tentacleSway2 2.6s ease-in-out infinite 0.4s', transformOrigin: '195px 204px' }}>
        <path d="M195 204 Q200 248 190 290" stroke="url(#tG2)" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>
      <g style={{ animation: 'tentacleSway3 2.9s ease-in-out infinite 0.1s', transformOrigin: '235px 200px' }}>
        <path d="M235 200 Q242 240 228 280" stroke="url(#tG3)" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Bioluminescent dots */}
      <circle cx="140" cy="110" r="3" fill="rgba(77,217,192,0.4)">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="100" r="2" fill="rgba(106,184,247,0.4)">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="135" r="2.5" fill="rgba(167,139,250,0.35)">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="155" cy="85" r="1.5" fill="rgba(255,255,255,0.2)">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

export default Jellyfish;
