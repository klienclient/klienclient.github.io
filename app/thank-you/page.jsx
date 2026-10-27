import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle,
  DiscordLogo,
  DownloadSimple
} from '@phosphor-icons/react/dist/ssr';
import { DISCORD_URL, DOWNLOAD_URL } from '@/lib/site';

export const metadata = {
  title: 'Thanks for choosing Klien',
  description: 'Your Klien client download has started.'
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page" id="top">
      <div className="thank-you-backdrop" aria-hidden="true">
        <Image src="/klien-dusk-backdrop.png" alt="" fill priority sizes="100vw" />
      </div>
      <div className="thank-you-overlay" aria-hidden="true" />

      <section className="shell thank-you-grid" aria-labelledby="thank-you-title">
        <div className="thank-you-copy">
          <CheckCircle className="thank-you-check" size={42} weight="fill" aria-hidden="true" />
          <h1 id="thank-you-title">Thanks for choosing Klien.</h1>
          <p>
            Your download has started. Add the client to your Fabric setup and launch Minecraft.
          </p>

          <div className="thank-you-actions">
            <a className="button button-primary" href={DOWNLOAD_URL} download="klien.jar">
              <DownloadSimple size={19} weight="bold" aria-hidden="true" />
              <span>Download again</span>
            </a>
            <a className="button button-secondary" href="/">
              <ArrowLeft size={18} weight="bold" aria-hidden="true" />
              <span>Back home</span>
            </a>
          </div>

          <div className="thank-you-help">
            <span>Need installation help?</span>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">
              <DiscordLogo size={18} weight="fill" aria-hidden="true" />
              Join Discord
            </a>
          </div>
        </div>

        <div className="thank-you-mark">
          <Image
            src="/jump-circle-logo.png"
            alt="Klien client emblem"
            fill
            priority
            sizes="(max-width: 780px) 52vw, 28vw"
          />
        </div>
      </section>
    </main>
  );
}
