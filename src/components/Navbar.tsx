import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Live Demo', href: '#live-demo' },
  { label: 'Features', href: '#features' },
  { label: 'For Students', href: '#for-students' },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY);
      setLastY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        background: 'rgba(10, 15, 30, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(77,217,192,0.1)',
      }}
    >
      <div className="section-container flex items-center justify-between py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 cursor-pointer bg-transparent border-none">
          <span className="text-2xl">🪼</span>
          <span className="font-display text-xl font-bold text-foreground">Silly Jelly</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="bg-transparent border-none text-muted-foreground hover:text-primary font-bold text-sm cursor-pointer transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#hero')} className="cta-button-outline text-sm">
            Add to Chrome — Free
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none text-foreground text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(10, 15, 30, 0.95)' }}>
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="bg-transparent border-none text-foreground font-bold text-left text-base cursor-pointer py-2"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('#hero')} className="cta-button text-sm mt-2">
            Add to Chrome — Free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
