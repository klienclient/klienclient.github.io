import Reveal from './Reveal';

const FEATURES = [
  'Scanners',
  'ESP tools',
  'Crystal combat',
  'Shield breaker',
  'Auto Mace',
  'Themes',
  'Profiles',
  'HUD layouts',
  'Screen-share protection'
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="shell">
        <Reveal className="section-intro feature-intro">
          <h2>The tools you came for.</h2>
        </Reveal>

        <div className="feature-cloud">
          {FEATURES.map((feature, index) => (
            <Reveal className={`feature-chip feature-chip-${index + 1}`} key={feature} delay={index * 0.035}>
              <span>{feature}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
