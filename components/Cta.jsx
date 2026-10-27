'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import DownloadButton from './DownloadButton';
import { JAR_NAME } from '@/lib/site';

const EASE = [0.16, 1, 0.3, 1];

export default function Cta() {
  const reduce = useReducedMotion();

  return (
    <section className="cta" id="download">
      <div className="container">
        <motion.div
          className="bezel"
          initial={reduce ? false : { opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="cta-inner">
            <Image
              className="cta-mark"
              src="/klien-mark.webp"
              alt=""
              width={900}
              height={900}
              aria-hidden="true"
            />
            <div className="cta-copy">
              <h2 className="cta-title">Ready when you are.</h2>
              <p className="cta-sub">
                {JAR_NAME}, one mods folder, one keybind.
              </p>
            </div>
            <div className="cta-actions">
              <DownloadButton label="Download the client" size="lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
