import { Languages, Brain, Puzzle, RotateCcw, Trophy, GitBranch } from 'lucide-react';

const features = [
  { icon: Languages, title: 'Dual Language Mode', desc: 'VI→EN and Basic→Elite English — learn vocabulary from two powerful angles.' },
  { icon: Brain, title: 'AI Smart Setup', desc: 'Personalizes content to your IELTS band or SAT score target.' },
  { icon: Puzzle, title: 'Puzzle Mode', desc: 'Guess before you reveal — gamify your learning experience.' },
  { icon: RotateCcw, title: 'Spaced Repetition', desc: 'Smart algorithm resurfaces words at the perfect interval.' },
  { icon: Trophy, title: 'Elo Rating System', desc: 'Competitive score that grows with every word you master.' },
  { icon: GitBranch, title: 'Morphology Trees', desc: 'Visual word root breakdowns to understand etymology.' },
];

const FeaturesSection = () => (
  <section id="features" className="relative z-10 py-24 lg:py-32" style={{ overflow: 'visible' }}>
    <div className="section-container">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
        Everything You Need to{' '}
        <span className="holographic-text">Master Vocabulary</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 text-lg font-bold">
        Powered by AI. Designed for real learning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="glass-card p-8">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
              style={{ background: 'linear-gradient(135deg, rgba(77,217,192,0.12), rgba(106,184,247,0.08))' }}
            >
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-bold leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
