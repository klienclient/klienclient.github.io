import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const geist = localFont({
  src: './fonts/geist-latin.woff2',
  variable: '--font-sans',
  weight: '100 900',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif']
});

const geistMono = localFont({
  src: './fonts/geist-mono-latin.woff2',
  variable: '--font-mono',
  weight: '100 900',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace']
});

export const metadata = {
  title: 'Klien Client | Minecraft Fabric Utility Client',
  description:
    'Klien is a Fabric client for Minecraft 1.21.11 with combat, recon, movement, visual and quality-of-life modules.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  openGraph: {
    title: 'Klien Client',
    description: 'Combat, recon, movement and visual tools in one focused Fabric client.',
    images: ['/klien-logo.png'],
    type: 'website'
  },
  icons: { icon: '/klien-logo.png' }
};

export const viewport = {
  themeColor: '#080506',
  colorScheme: 'dark'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <ScrollProgress />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
