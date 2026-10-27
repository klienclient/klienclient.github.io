'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PRESETS } from '@/lib/data';

const EASE = [0.32, 0.72, 0, 1];
const DWELL = 3200;

export default function PresetCycler() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(2);
  const [paused, setPaused] = useState(false);
  const preset = PRESETS[index];

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setIndex((value) => (value + 1) % PRESETS.length), DWELL);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <div
      className="stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="stage-glow" aria-hidden="true" />

      <motion.div
        className="cycle-shell"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="bezel">
          <div className="cycle">
            <div className="cycle-head">
              <span className="mono">Theme preset</span>
              <span className="cycle-chip">{preset.isDefault ? 'Default' : 'Preset'}</span>
            </div>

            <div className="cycle-stack" aria-hidden="true">
              <motion.div
                className="cycle-layer cycle-layer--panel"
                animate={{ backgroundColor: preset.panel }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <span className="cycle-layer-label">Panel</span>
              </motion.div>
              <motion.div
                className="cycle-layer cycle-layer--card"
                animate={{ backgroundColor: preset.card }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <span className="cycle-layer-label">Card</span>
              </motion.div>
              <motion.div
                className="cycle-layer cycle-layer--accent"
                animate={{ backgroundColor: preset.accent }}
                transition={{ duration: 0.8, ease: EASE }}
              />
            </div>

            <div className="cycle-meta">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={preset.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <div className="cycle-name">{preset.name}</div>
                  <div className="cycle-hex">
                    {preset.accent} / {preset.panel}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="cycle-track" aria-hidden="true">
              <motion.span
                key={`${preset.name}-bar`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: reduce ? 1 : 1 }}
                transition={{ duration: reduce ? 0 : DWELL / 1000, ease: 'linear' }}
                style={{ backgroundColor: preset.accent }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
