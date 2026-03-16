const Footer = () =>
<footer className="relative z-10 py-16 text-center" style={{ overflow: 'visible' }}>
    <div className="section-container">
      <p className="text-2xl font-bold holographic-text mb-4">
        Built with BEN by Team Silly Jelly
      </p>
      <p className="text-sm text-muted-foreground font-bold">
        © {new Date().getFullYear()} Silly Jelly. Making vocabulary learning effortless.
      </p>
    </div>
  </footer>;


export default Footer;