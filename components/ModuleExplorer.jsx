'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Crosshair, Eye, MagnifyingGlass, Wrench } from '@phosphor-icons/react';
import Reveal from './Reveal';
import { MODULE_GROUPS } from '@/lib/data';

const ICONS = {
  combat: Crosshair,
  recon: MagnifyingGlass,
  visuals: Eye,
  utility: Wrench
};

export default function ModuleExplorer() {
  const [activeId, setActiveId] = useState(MODULE_GROUPS[0].id);
  const reduceMotion = useReducedMotion();
  const active = MODULE_GROUPS.find((group) => group.id === activeId) || MODULE_GROUPS[0];

  return (
    <section className="section modules-section" id="modules">
      <div className="shell">
        <Reveal className="modules-heading">
          <p className="eyebrow">133 modules across 9 categories</p>
          <h2>A loadout for every session.</h2>
          <p>Explore a small selection pulled directly from the client.</p>
        </Reveal>

        <Reveal className="module-explorer" delay={0.08}>
          <div className="module-tabs" role="tablist" aria-label="Module categories">
            {MODULE_GROUPS.map((group) => {
              const Icon = ICONS[group.id];
              const selected = group.id === activeId;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={selected ? 'module-tab is-active' : 'module-tab'}
                  onClick={() => setActiveId(group.id)}
                  key={group.id}
                >
                  <Icon size={20} weight={selected ? 'fill' : 'regular'} />
                  <span>{group.label}</span>
                </button>
              );
            })}
          </div>

          <div className="module-panel">
            <div className="module-panel-copy">
              <span>{active.label}</span>
              <h3>{active.summary}</h3>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="module-list"
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                role="tabpanel"
              >
                {active.modules.map(([name, description]) => (
                  <article className="module-item" key={name}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
