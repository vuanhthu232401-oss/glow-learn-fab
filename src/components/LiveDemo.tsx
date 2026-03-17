import { useState, useRef, useCallback } from 'react';

type TooltipData = {
  badge: string;
  word: string;
  original: string;
  definition: string;
  example: string;
  synonyms: string;
  badgeColor: string;
};

type IeltsLevel = '5.0' | '6.0' | '7.0' | '8.0+';

const ieltsLevels: IeltsLevel[] = ['5.0', '6.0', '7.0', '8.0+'];

// Vietnamese words per IELTS level
const viWordsByLevel: Record<IeltsLevel, { sentence: { before: string; words: { text: string; key: string }[]; between: string[] }; words: Record<string, TooltipData> }> = {
  '5.0': {
    sentence: { before: 'Hôm nay thời tiết rất ', words: [{ text: 'đẹp', key: 'đẹp' }, { text: 'vui', key: 'vui' }, { text: 'công viên', key: 'công viên' }], between: [' và tôi cảm thấy ', ' khi đi dạo trong ', ' cùng gia đình.'] },
    words: {
      'đẹp': { badge: 'VI → EN · 5.0', word: 'NICE', original: 'đẹp', definition: 'Pleasant or agreeable', example: 'The weather is very nice today.', synonyms: 'pleasant, good, fine', badgeColor: '#4DD9C0' },
      'vui': { badge: 'VI → EN · 5.0', word: 'HAPPY', original: 'vui', definition: 'Feeling pleasure or contentment', example: 'She is happy with her results.', synonyms: 'glad, pleased, content', badgeColor: '#4DD9C0' },
      'công viên': { badge: 'VI → EN · 5.0', word: 'PARK', original: 'công viên', definition: 'A public green area for recreation', example: 'We went to the park yesterday.', synonyms: 'garden, playground, ground', badgeColor: '#4DD9C0' },
    }
  },
  '6.0': {
    sentence: { before: 'Hôm nay thời tiết rất ', words: [{ text: 'đẹp', key: 'đẹp' }, { text: 'vui', key: 'vui' }, { text: 'công viên', key: 'công viên' }], between: [' và tôi cảm thấy ', ' khi đi dạo trong ', ' cùng gia đình.'] },
    words: {
      'đẹp': { badge: 'VI → EN · 6.0', word: 'BEAUTIFUL', original: 'đẹp', definition: 'Pleasing to the senses or mind', example: 'The scenery was absolutely beautiful.', synonyms: 'lovely, attractive, gorgeous', badgeColor: '#4DD9C0' },
      'vui': { badge: 'VI → EN · 6.0', word: 'CHEERFUL', original: 'vui', definition: 'Noticeably happy and optimistic', example: 'He remained cheerful despite the rain.', synonyms: 'joyful, merry, upbeat', badgeColor: '#4DD9C0' },
      'công viên': { badge: 'VI → EN · 6.0', word: 'RECREATIONAL AREA', original: 'công viên', definition: 'A space designed for leisure activities', example: 'The recreational area was crowded on weekends.', synonyms: 'leisure ground, reserve, garden', badgeColor: '#4DD9C0' },
    }
  },
  '7.0': {
    sentence: { before: 'Hôm nay thời tiết rất ', words: [{ text: 'đẹp', key: 'đẹp' }, { text: 'vui', key: 'vui' }, { text: 'công viên', key: 'công viên' }], between: [' và tôi cảm thấy ', ' khi đi dạo trong ', ' cùng gia đình.'] },
    words: {
      'đẹp': { badge: 'VI → EN · 7.0', word: 'EXQUISITE', original: 'đẹp', definition: 'Extremely beautiful and delicate', example: 'The garden had exquisite floral arrangements.', synonyms: 'stunning, magnificent, splendid', badgeColor: '#4DD9C0' },
      'vui': { badge: 'VI → EN · 7.0', word: 'ELATED', original: 'vui', definition: 'Ecstatically happy and thrilled', example: 'She was elated upon receiving the scholarship.', synonyms: 'ecstatic, overjoyed, euphoric', badgeColor: '#4DD9C0' },
      'công viên': { badge: 'VI → EN · 7.0', word: 'BOTANICAL GARDEN', original: 'công viên', definition: 'A garden devoted to the collection and display of plants', example: 'They visited the botanical garden during spring.', synonyms: 'arboretum, conservatory, sanctuary', badgeColor: '#4DD9C0' },
    }
  },
  '8.0+': {
    sentence: { before: 'Hôm nay thời tiết rất ', words: [{ text: 'đẹp', key: 'đẹp' }, { text: 'vui', key: 'vui' }, { text: 'công viên', key: 'công viên' }], between: [' và tôi cảm thấy ', ' khi đi dạo trong ', ' cùng gia đình.'] },
    words: {
      'đẹp': { badge: 'VI → EN · 8.0+', word: 'RESPLENDENT', original: 'đẹp', definition: 'Dazzling in appearance; impressively beautiful', example: 'The palace was resplendent with golden ornaments.', synonyms: 'radiant, sublime, transcendent', badgeColor: '#4DD9C0' },
      'vui': { badge: 'VI → EN · 8.0+', word: 'EBULLIENT', original: 'vui', definition: 'Overflowing with enthusiastic excitement', example: 'His ebullient personality lit up the room.', synonyms: 'exuberant, vivacious, effervescent', badgeColor: '#4DD9C0' },
      'công viên': { badge: 'VI → EN · 8.0+', word: 'VERDANT PROMENADE', original: 'công viên', definition: 'A lush green walkway or public space', example: 'They meandered along the verdant promenade at twilight.', synonyms: 'esplanade, arboreal retreat, sylvan path', badgeColor: '#4DD9C0' },
    }
  },
};

const enWords: Record<string, TooltipData> = {
  'really bad': { badge: 'UPGRADE', word: 'DELETERIOUS', original: 'really bad', definition: 'Causing harm or damage', example: 'The policy had a deleterious effect on students.', synonyms: 'detrimental, harmful, injurious', badgeColor: '#A78BFA' },
  'very tired': { badge: 'UPGRADE', word: 'ENERVATED', original: 'very tired', definition: 'Feeling completely drained of energy', example: 'He felt enervated after the long journey.', synonyms: 'exhausted, depleted, fatigued', badgeColor: '#A78BFA' },
  'hard': { badge: 'UPGRADE', word: 'ARDUOUS', original: 'hard', definition: 'Involving great effort or difficulty', example: 'It was an arduous task to complete.', synonyms: 'grueling, strenuous, laborious', badgeColor: '#A78BFA' }
};

const LiveDemo = () => {
  const [tab, setTab] = useState<'vi' | 'en'>('vi');
  const [ieltsLevel, setIeltsLevel] = useState<IeltsLevel>('6.0');
  const [puzzleMode, setPuzzleMode] = useState(false);
  const [tooltip, setTooltip] = useState<{data: TooltipData; x: number; y: number;} | null>(null);
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState(false);
  const hideTimer = useRef<number | null>(null);

  const showTooltip = useCallback((data: TooltipData, e: React.MouseEvent) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = Math.min(rect.left, window.innerWidth - 340);
    const y = rect.top - 10;
    setTooltip({ data, x, y });
    setGuess('');
    setRevealed(false);
  }, []);

  const scheduleHide = useCallback(() => {
    hideTimer.current = window.setTimeout(() => setTooltip(null), 200);
  }, []);

  const cancelHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

  const HighlightWord = ({ text, data, color }: {text: string; data: TooltipData; color: 'teal' | 'purple';}) =>
    <span
      className={color === 'teal' ? 'highlight-teal' : 'highlight-purple'}
      onMouseEnter={(e) => showTooltip(data, e)}
      onMouseLeave={scheduleHide}>
      {text}
    </span>;

  const displayWord = (data: TooltipData) => {
    if (!puzzleMode) return data.word;
    if (revealed) return data.word;
    return '_ '.repeat(data.word.length).trim();
  };

  const currentViData = viWordsByLevel[ieltsLevel];

  return (
    <section id="live-demo" className="relative z-10 py-24 lg:py-32" style={{ overflow: 'visible' }}>
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          Try It <span className="holographic-text">Live</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg font-bold">
          See exactly how it works — on a real page.
        </p>

        {/* Controls */}
        <div className="flex flex-col items-center justify-center gap-6 mb-10">
          {/* Row 1: Tabs + Puzzle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Tabs */}
            <div className="flex rounded-full overflow-hidden" style={{ border: '1px solid rgba(77,217,192,0.2)' }}>
              <button
                onClick={() => {setTab('vi'); setTooltip(null);}}
                className="px-6 py-3 font-bold text-sm transition-all duration-200 border-none cursor-pointer"
                style={{
                  background: tab === 'vi' ? 'rgba(77,217,192,0.15)' : 'transparent',
                  color: tab === 'vi' ? '#4DD9C0' : 'hsl(195, 20%, 60%)'
                }}>
                Vietnamese Mode
              </button>
              <button
                onClick={() => {setTab('en'); setTooltip(null);}}
                className="px-6 py-3 font-bold text-sm transition-all duration-200 border-none cursor-pointer"
                style={{
                  background: tab === 'en' ? 'rgba(167,139,250,0.15)' : 'transparent',
                  color: tab === 'en' ? '#A78BFA' : 'hsl(195, 20%, 60%)'
                }}>
                English Upgrade Mode
              </button>
            </div>

            {/* Puzzle toggle */}
            <button
              onClick={() => {setPuzzleMode(!puzzleMode); setRevealed(false);}}
              className="flex items-center gap-3 px-5 py-3 rounded-full font-bold text-sm border-none cursor-pointer transition-all duration-200"
              style={{
                background: puzzleMode ? 'rgba(77,217,192,0.15)' : 'rgba(255,255,255,0.05)',
                color: puzzleMode ? '#4DD9C0' : 'hsl(195, 20%, 60%)',
                border: `1px solid ${puzzleMode ? 'rgba(77,217,192,0.3)' : 'rgba(255,255,255,0.1)'}`
              }}>
              Puzzle Mode: {puzzleMode ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Row 2: IELTS Level Selector (only in Vietnamese mode) */}
          {tab === 'vi' && (
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-muted-foreground">IELTS Target:</span>
              <div className="flex rounded-full overflow-hidden" style={{ border: '1px solid rgba(77,217,192,0.2)' }}>
                {ieltsLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => { setIeltsLevel(level); setTooltip(null); }}
                    className="px-4 py-2 font-bold text-sm transition-all duration-200 border-none cursor-pointer"
                    style={{
                      background: ieltsLevel === level ? 'rgba(77,217,192,0.2)' : 'transparent',
                      color: ieltsLevel === level ? '#4DD9C0' : 'hsl(195, 20%, 60%)',
                    }}>
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Demo card */}
        <div className="glass-card p-8 sm:p-12 max-w-3xl mx-auto" style={{ borderColor: tab === 'vi' ? 'rgba(77,217,192,0.2)' : 'rgba(167,139,250,0.2)' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <span className="text-xs text-muted-foreground font-bold ml-2">example-webpage.com</span>
          </div>

          <p className="text-lg sm:text-xl leading-relaxed text-foreground font-bold">
            {tab === 'vi' ? (
              <>
                {currentViData.sentence.before}
                {currentViData.sentence.words.map((w, i) => (
                  <span key={w.key}>
                    <HighlightWord text={w.text} data={currentViData.words[w.key]} color="teal" />
                    {currentViData.sentence.between[i]}
                  </span>
                ))}
              </>
            ) : (
              <>
                The results were{' '}
                <HighlightWord text="really bad" data={enWords['really bad']} color="purple" />{' '}
                and the team felt{' '}
                <HighlightWord text="very tired" data={enWords['very tired']} color="purple" />{' '}
                after the{' '}
                <HighlightWord text="hard" data={enWords['hard']} color="purple" />{' '}
                work they had done all week.
              </>
            )}
          </p>

          <p className="text-sm text-muted-foreground mt-6 font-bold">
            {tab === 'vi'
              ? `Hover over the highlighted words — vocabulary adapted for IELTS ${ieltsLevel}`
              : 'Hover over the highlighted words to see the magic'}
          </p>
        </div>
      </div>

      {/* Fixed tooltip */}
      {tooltip && (
        <div
          onMouseEnter={cancelHide}
          onMouseLeave={scheduleHide}
          style={{
            position: 'fixed',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translateY(-100%)',
            zIndex: 9999,
            background: 'var(--tooltip-bg)',
            border: `1px solid ${tooltip.data.badgeColor}`,
            borderRadius: '16px',
            padding: '20px',
            width: '320px',
            maxWidth: '90vw',
            animation: 'tooltipIn 0.2s ease-out',
            pointerEvents: 'auto'
          }}>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{
              background: `${tooltip.data.badgeColor}22`,
              color: tooltip.data.badgeColor,
              border: `1px solid ${tooltip.data.badgeColor}44`
            }}>
            {tooltip.data.badge}
          </span>

          {puzzleMode && !revealed ? (
            <>
              <div className="text-[28px] font-bold text-foreground mb-2 tracking-widest">
                {'_ '.repeat(tooltip.data.word.length)}
              </div>
              <input
                type="text"
                placeholder="Type your guess..."
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-muted text-foreground font-bold text-sm border-none outline-none mb-3"
                style={{ border: `1px solid ${tooltip.data.badgeColor}33` }}
                autoFocus />
              <button
                onClick={() => setRevealed(true)}
                className="px-5 py-2 rounded-lg font-bold text-sm border-none cursor-pointer transition-all duration-200"
                style={{
                  background: tooltip.data.badgeColor,
                  color: '#0A0F1E'
                }}>
                Reveal ✨
              </button>
              {revealed && (
                <div className="text-[28px] font-bold text-foreground mt-2" style={{ animation: 'revealFlash 0.5s ease-out' }}>
                  {tooltip.data.word}
                </div>
              )}
            </>
          ) : (
            <div
              className="text-[28px] font-bold text-foreground mb-1"
              style={revealed ? { animation: 'revealFlash 0.5s ease-out' } : {}}>
              {displayWord(tooltip.data)}
            </div>
          )}

          <div className="text-sm text-muted-foreground font-bold mt-2">
            {tooltip.data.badge.includes('VI') ?
              <span>Vietnamese: <span className="text-foreground">{tooltip.data.original}</span></span> :
              <span>Upgrade from: <span className="text-foreground">"{tooltip.data.original}"</span></span>
            }
          </div>
          <div className="text-sm text-foreground font-bold mt-3">{tooltip.data.definition}</div>
          <div className="text-sm text-muted-foreground font-bold mt-2 italic">"{tooltip.data.example}"</div>
          <div className="text-xs text-muted-foreground font-bold mt-3">
            Synonyms: <span style={{ color: tooltip.data.badgeColor }}>{tooltip.data.synonyms}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default LiveDemo;
