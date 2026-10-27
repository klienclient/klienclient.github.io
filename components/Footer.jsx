import Image from 'next/image';
import { DISCORD_URL, MC_VERSION } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <a className="footer-brand" href="/#top" aria-label="Klien home">
          <Image src="/klien-logo.png" alt="" width={46} height={46} />
          <div>
            <strong>klien</strong>
            <span>Fabric client for Minecraft {MC_VERSION}</span>
          </div>
        </a>
        <div className="footer-links">
          <a href="/#features">Features</a>
          <a href="/#modules">Modules</a>
          <a href="/#install">Install</a>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord</a>
        </div>
        <p className="footer-note">Not affiliated with Mojang Studios or Microsoft.</p>
      </div>
    </footer>
  );
}
