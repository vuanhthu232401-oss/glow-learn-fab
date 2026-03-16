import Jellyfish from './Jellyfish';

const HeroSection = () =>
<section
  id="hero"
  className="relative min-h-screen flex items-center pt-20"
  style={{ overflow: 'visible' }}>
  
    <div className="section-container w-full" style={{ overflow: 'visible' }}>
      <div className="flex-col lg:flex-row gap-12 lg:gap-0 flex items-center justify-start" style={{ overflow: 'visible' }}>
        {/* Left */}
        <div className="flex-1 z-20 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground mb-6">
            Learn Every Word<br />
            <span className="holographic-text">the Internet Throws at You</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 font-bold">
            Silly Jelly transforms your daily browsing into IELTS & SAT vocabulary mastery — automatically.
          </p>
          <button
          className="cta-button text-lg px-8 py-4"
          style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}>
          
            🪼 Add to Chrome — Free
          </button>
        </div>

        {/* Right — Jellyfish */}
        <div className="flex-1 relative" style={{ overflow: 'visible', minHeight: '400px' }}>
          <Jellyfish />
        </div>
      </div>
    </div>
  </section>;


export default HeroSection;