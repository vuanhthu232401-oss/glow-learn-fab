const AuroraBackground = () => (
  <div className="ocean-bg">
    {/* Flowing gradient layers */}
    <div className="ocean-layer ocean-layer-1" />
    <div className="ocean-layer ocean-layer-2" />
    <div className="ocean-layer ocean-layer-3" />
    {/* Soft wave overlays */}
    <svg className="ocean-waves" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
      <path className="ocean-wave wave-1" d="M0,300 C360,220 720,380 1080,280 C1260,240 1380,300 1440,300 L1440,600 L0,600Z" />
      <path className="ocean-wave wave-2" d="M0,350 C240,290 480,410 720,330 C960,250 1200,370 1440,320 L1440,600 L0,600Z" />
      <path className="ocean-wave wave-3" d="M0,380 C300,340 600,420 900,360 C1100,320 1300,390 1440,360 L1440,600 L0,600Z" />
    </svg>
  </div>
);

export default AuroraBackground;
