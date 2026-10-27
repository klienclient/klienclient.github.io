import { ArrowUpRight, DiscordLogo } from '@phosphor-icons/react/dist/ssr';
import Reveal from './Reveal';
import { DISCORD_URL } from '@/lib/site';

export default function Community() {
  return (
    <section className="section community-section" id="discord">
      <div className="shell">
        <Reveal className="community-card">
          <div className="community-mark" aria-hidden="true">
            <DiscordLogo size={78} weight="fill" />
          </div>
          <div className="community-copy">
            <span>Klien community</span>
            <h2>Configs, support, people.</h2>
            <p>Get your protected license key, releases, configs, support and client updates.</p>
          </div>
          <a className="button button-primary" href={DISCORD_URL} target="_blank" rel="noreferrer">
            <DiscordLogo size={20} weight="fill" aria-hidden="true" />
            <span>Join Discord</span>
            <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
