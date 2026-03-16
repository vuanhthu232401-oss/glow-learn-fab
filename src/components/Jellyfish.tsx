const Jellyfish = () => (
  <div
    style={{
      position: 'absolute',
      overflow: 'visible',
      zIndex: 10,
      pointerEvents: 'none',
      width: '320px',
      height: '420px',
      right: '-20px',
      top: '50%',
      transform: 'translateY(-50%)',
      animation: 'jellyFloat 4s ease-in-out infinite',
      filter: 'drop-shadow(0 0 30px rgba(77,217,192,0.4))',
    }}
  >
    <svg
      viewBox="0 0 320 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id="bellGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.6" />
          <stop offset="30%" stopColor="#6AB8F7" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#4DD9C0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4DD9C0" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id="bellInner" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tentGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4DD9C0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4DD9C0" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="tentGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6AB8F7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6AB8F7" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="tentGrad3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Bell / dome */}
      <ellipse cx="160" cy="120" rx="110" ry="100" fill="url(#bellGrad)" />
      <ellipse cx="160" cy="120" rx="110" ry="100" fill="url(#bellInner)" />
      {/* Rim */}
      <ellipse cx="160" cy="185" rx="105" ry="18" fill="rgba(77,217,192,0.15)" />

      {/* Inner details */}
      <ellipse cx="140" cy="100" rx="30" ry="20" fill="rgba(255,255,255,0.06)" />

      {/* Tentacles */}
      <g style={{ animation: 'tentacleSway1 3s ease-in-out infinite', transformOrigin: '80px 190px' }}>
        <path d="M80 190 Q75 260 85 310 Q78 350 90 400" stroke="url(#tentGrad1)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway2 3.5s ease-in-out infinite', transformOrigin: '120px 195px' }}>
        <path d="M120 195 Q115 270 125 330 Q118 370 128 420" stroke="url(#tentGrad2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway1 4s ease-in-out infinite 0.5s', transformOrigin: '160px 198px' }}>
        <path d="M160 198 Q155 280 165 340 Q158 380 168 430" stroke="url(#tentGrad1)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway3 3.2s ease-in-out infinite', transformOrigin: '200px 195px' }}>
        <path d="M200 195 Q205 270 195 330 Q202 370 192 420" stroke="url(#tentGrad3)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      <g style={{ animation: 'tentacleSway2 3.8s ease-in-out infinite 0.3s', transformOrigin: '240px 190px' }}>
        <path d="M240 190 Q245 260 235 310 Q242 350 230 400" stroke="url(#tentGrad2)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* Short frilly tentacles */}
      <g style={{ animation: 'tentacleSway3 2.5s ease-in-out infinite', transformOrigin: '100px 192px' }}>
        <path d="M100 192 Q95 230 105 270" stroke="url(#tentGrad3)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
      <g style={{ animation: 'tentacleSway1 2.8s ease-in-out infinite 0.2s', transformOrigin: '140px 196px' }}>
        <path d="M140 196 Q138 240 145 280" stroke="url(#tentGrad1)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>
      <g style={{ animation: 'tentacleSway2 2.6s ease-in-out infinite 0.4s', transformOrigin: '180px 197px' }}>
        <path d="M180 197 Q183 240 176 280" stroke="url(#tentGrad2)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>
      <g style={{ animation: 'tentacleSway3 2.9s ease-in-out infinite 0.1s', transformOrigin: '220px 194px' }}>
        <path d="M220 194 Q225 230 215 270" stroke="url(#tentGrad3)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  </div>
);

export default Jellyfish;
