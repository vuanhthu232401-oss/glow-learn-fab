const AuroraBackground = () => (
  <div className="aurora-bg">
    <div
      className="aurora-blob"
      style={{
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(77,217,192,0.25) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
        animation: 'auroraMove1 20s ease-in-out infinite',
      }}
    />
    <div
      className="aurora-blob"
      style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(106,184,247,0.2) 0%, transparent 70%)',
        top: '40%',
        right: '5%',
        animation: 'auroraMove2 25s ease-in-out infinite',
      }}
    />
    <div
      className="aurora-blob"
      style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)',
        bottom: '10%',
        left: '30%',
        animation: 'auroraMove3 18s ease-in-out infinite',
      }}
    />
    <div
      className="aurora-blob"
      style={{
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(77,217,192,0.15) 0%, transparent 70%)',
        top: '60%',
        left: '60%',
        animation: 'auroraMove1 22s ease-in-out infinite reverse',
      }}
    />
  </div>
);

export default AuroraBackground;
