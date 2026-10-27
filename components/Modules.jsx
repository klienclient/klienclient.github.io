'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CATEGORIES } from '@/lib/data';

const EASE = [0.32, 0.72, 0, 1];

export default function Modules() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabsRef = useRef(null);
  const category = CATEGORIES[active];
  const rest = category.total - category.modules.length;

  const onKeyDown = (event) => {
    const buttons = Array.from(tabsRef.current?.querySelectorAll('[role="tab"]') ?? []);
    const current = buttons.indexOf(event.currentTarget);
    let next = -1;
    if (event.key === 'ArrowRight') next = (current + 1) % buttons.length;
    if (event.key === 'ArrowLeft') next = (current - 1 + buttons.length) % buttons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (next < 0) return;
    event.preventDefault();
    setActive(next);
    buttons[next].focus();
  };

  return (
    <section className="section" id="modules">
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="eyebrow">Module index</span>
          <h2 className="h2">133 modules, nine categories.</h2>
          <p className="lede">
            Pick a category to see what ships in 0.9.9.3. Each module keeps its own keybind, settings
            and toggle message.
          </p>
        </motion.div>

        <div className="explorer">
          <div className="tabs" role="tablist" aria-label="Module categories" ref={tabsRef}>
            {CATEGORIES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={active === index}
                aria-controls={`panel-${item.id}`}
                tabIndex={active === index ? 0 : -1}
                className="tab"
                onClick={() => setActive(index)}
                onKeyDown={onKeyDown}
              >
                {active === index && (
                  <motion.span
                    layoutId="tab-pill"
                    className="tab-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                {item.name}
                <span className="n">{item.total}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={category.id}
              id={`panel-${category.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${category.id}`}
              className="panel"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {category.modules.map(([name, description]) => (
                <div className="mod" key={name}>
                  <span className="mod-name">{name}</span>
                  <span className="mod-desc">{description}</span>
                </div>
              ))}
              {rest > 0 && (
                <p className="panel-note">
                  plus {rest} more in {category.name.toLowerCase()}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
