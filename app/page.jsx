import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ModuleExplorer from '@/components/ModuleExplorer';
import Community from '@/components/Community';
import Install from '@/components/Install';
import Reveal from '@/components/Reveal';
import { MC_VERSION, VERSION } from '@/lib/site';

const FACTS = [
  ['Release', VERSION],
  ['Minecraft', MC_VERSION],
  ['Platform', 'Fabric'],
  ['Categories', '9']
];

export default function Page() {
  return (
    <main>
      <Hero />

      <Reveal as="section" className="fact-band" aria-label="Client details">
        <div className="shell fact-grid">
          {FACTS.map(([label, value]) => (
            <div className="fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </Reveal>

      <Features />
      <ModuleExplorer />
      <Install />
      <Community />
    </main>
  );
}
