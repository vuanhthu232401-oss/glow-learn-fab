import { Monitor, Underline, MessageSquare } from 'lucide-react';

const steps = [
  { icon: Monitor, title: 'Browse Normally', desc: 'Keep reading your favorite sites — no extra tabs, no flashcard apps.' },
  { icon: Underline, title: 'Jelly Highlights Words', desc: 'Key vocabulary gets a glowing underline, right in your content.' },
  { icon: MessageSquare, title: 'Hover to Learn', desc: 'Hover any highlighted word for instant definitions, examples & synonyms.' },
];

const HowItWorks = () => (
  <section id="how-it-works" className="relative z-10 py-24 lg:py-32" style={{ overflow: 'visible' }}>
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
        Three Steps. <span className="holographic-text">Zero Extra Effort.</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 text-lg font-bold">
        Learning vocabulary has never been this seamless.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="glass-card p-8 text-center">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
              style={{ background: 'linear-gradient(135deg, rgba(77,217,192,0.15), rgba(106,184,247,0.1))' }}
            >
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground font-bold text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
