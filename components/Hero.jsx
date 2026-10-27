import Image from 'next/image';
import { ArrowUpRight, DiscordLogo } from '@phosphor-icons/react/dist/ssr';
import DownloadButton from './DownloadButton';
import ProductVisual from './ProductVisual';
import Reveal from './Reveal';
import { DISCORD_URL } from '@/lib/site';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <Image
          src="/klien-dusk-backdrop.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="shell hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Minecraft utility client</p>
          <h1>Work smarter. Not harder.</h1>
          <p className="hero-lede">
            Scanners, ESP, combat, automation and HUD tools in one focused Fabric client.
          </p>
          <div className="hero-actions">
            <DownloadButton />
            <a className="button button-secondary" href={DISCORD_URL} target="_blank" rel="noreferrer">
              <DiscordLogo size={20} weight="fill" aria-hidden="true" />
              <span>Join Discord</span>
              <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="hero-visual">
          <ProductVisual />
        </div>
      </div>
    </section>
  );
}
