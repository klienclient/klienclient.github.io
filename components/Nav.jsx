'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { List, X } from '@phosphor-icons/react';
import DownloadButton from './DownloadButton';
import { NAV_LINKS } from '@/lib/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="site-nav">
      <div className="nav-shell">
        <a className="nav-brand" href="/#top" aria-label="Klien home" onClick={() => setOpen(false)}>
          <span className="nav-mark">
            <Image src="/klien-logo.png" alt="" width={34} height={34} priority />
          </span>
          <span>klien</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <DownloadButton compact />
          <button
            type="button"
            className="menu-button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
