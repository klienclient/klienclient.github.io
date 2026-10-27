import { DownloadSimple, FolderOpen, GameController, Key } from '@phosphor-icons/react/dist/ssr';
import DownloadButton from './DownloadButton';
import Reveal from './Reveal';
import { DISCORD_URL, JAVA_VERSION, MC_VERSION } from '@/lib/site';

const STEPS = [
  {
    icon: Key,
    title: 'Get a license key',
    text: 'Klien uses a protected license key. Get yours from the Discord server.',
    href: DISCORD_URL
  },
  {
    icon: DownloadSimple,
    title: 'Install Fabric',
    text: `Use the Fabric loader for Minecraft ${MC_VERSION} with Java ${JAVA_VERSION}.`
  },
  {
    icon: FolderOpen,
    title: 'Add Klien',
    text: 'Place the Klien jar inside your Minecraft mods folder.'
  },
  {
    icon: GameController,
    title: 'Activate and launch',
    text: 'Start the Fabric profile, enter your license key and open Klien in game.'
  }
];

export default function Install() {
  return (
    <section className="section install-section" id="install">
      <div className="shell install-grid">
        <Reveal className="install-copy">
          <h2>Download. License. Launch.</h2>
          <p>A protected license key is required. Keys are available through the Klien Discord.</p>
          <div className="install-actions">
            <DownloadButton />
            <a className="text-link" href={DISCORD_URL} target="_blank" rel="noreferrer">Get a license key</a>
          </div>
        </Reveal>

        <div className="install-steps">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const content = (
              <>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </>
            );

            return (
              <Reveal className="install-step" key={step.title} delay={index * 0.05}>
                <Icon size={24} weight="regular" />
                <div>
                  {step.href ? (
                    <a className="install-step-link" href={step.href} target="_blank" rel="noreferrer">{content}</a>
                  ) : content}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
