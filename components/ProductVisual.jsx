'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

export default function ProductVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className="hero-lockup"
      initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src="/jump-circle-logo.png"
        alt="Klien client icon"
        fill
        priority
        sizes="(max-width: 980px) 62vw, 28vw"
      />
    </motion.figure>
  );
}
