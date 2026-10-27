'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { MC_VERSION } from '@/lib/site';

const EASE = [0.32, 0.72, 0, 1];

const ITEMS = [
  {
    q: 'Which Minecraft version does klien run on?',
    a: (
      <>
        Minecraft {MC_VERSION} on Fabric, built against loader 0.18.1 and Fabric API 0.141.6. Other
        1.21.x versions need a rebuild.
      </>
    )
  },
  {
    q: 'Do I need Fabric API?',
    a: <>Yes. Install Fabric API for {MC_VERSION} first, then the klien jar. With only one of the two the game will not start.</>
  },
  {
    q: 'Where do my settings live?',
    a: (
      <>
        Everything is under <code>.minecraft/config/klien</code>. Theme, HUD layout, per module
        configs and profiles all save there, and they survive a client update.
      </>
    )
  },
  {
    q: 'Can I share a theme or profile?',
    a: <>Open the theme menu and use Export. It copies a JSON string you can paste anywhere. Import reads the same string back.</>
  },
  {
    q: 'Does it work on macOS and Linux?',
    a: <>The build is a Fabric mod, so it runs wherever Fabric {MC_VERSION} runs. Windows, macOS and Linux all use the same jar.</>
  }
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="section" id="faq">
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h2 className="h2">Before you download.</h2>
        </motion.div>

        <div className="faq">
          {ITEMS.map((item, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                className="faq-item"
                key={item.q}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: index * 0.04, ease: EASE }}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className="faq-icon"
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
