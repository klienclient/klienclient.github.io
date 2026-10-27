'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.3 });

  if (reduceMotion) return null;

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
