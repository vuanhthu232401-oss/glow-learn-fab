const ForStudents = () =>
<section id="for-students" className="relative z-10 py-24 lg:py-32" style={{ overflow: 'visible' }}>
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
        Built for <span className="holographic-text">Ambitious Students</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 text-lg font-bold">
        Whether you're targeting IELTS or SAT, Silly Jelly adapts to your goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* IELTS */}
        <div
        className="glass-card p-10 text-center relative"
        style={{ border: '1px solid rgba(77,217,192,0.3)' }}>
        
          <div className="text-4xl mb-4">☽</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">IELTS Learners</h3>
          <p className="text-muted-foreground font-bold mb-6">
            From band 5.0 to 8.0+ — build the vocabulary examiners reward.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground font-bold">Band 5.0</span>
            <div className="flex-1 h-2 rounded-full max-w-[160px]" style={{ background: 'linear-gradient(90deg, #4DD9C0, #6AB8F7)' }} />
            <span className="text-sm text-primary font-bold">8.0+</span>
          </div>
        </div>

        {/* SAT */}
        <div
        className="glass-card glass-card-purple p-10 text-center"
        style={{ border: '1px solid rgba(167,139,250,0.3)' }}>
        
          <div className="text-4xl mb-4">​☾</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">SAT Preppers</h3>
          <p className="text-muted-foreground font-bold mb-6">
            Target 1300 to 1500+ with vocabulary that actually appears on the test.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground font-bold">1300</span>
            <div className="flex-1 h-2 rounded-full max-w-[160px]" style={{ background: 'linear-gradient(90deg, #A78BFA, #6AB8F7)' }} />
            <span className="text-sm font-bold" style={{ color: '#A78BFA' }}>1500+</span>
          </div>
        </div>
      </div>
    </div>
  </section>;


export default ForStudents;