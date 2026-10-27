'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PRESETS } from '@/lib/data';

const EASE = [0.32, 0.72, 0, 1];

export default function ThemePresets() {
  const [active, setActive] = useState(2);
  const reduce = useReducedMotion();
  const preset = PRESETS[active];

  return (
    <section className="section" id="theme">
      <div className="container">
        <motion.div
          className="section-head"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="eyebrow">Theme engine</span>
          <h2 className="h2">Six presets. It opens on Rose.</h2>
          <p className="lede">
            Accent, panels and cards are three separate colours. Set them once and the menu, HUD and
            popups all follow, down to the flowing pattern behind every panel.
          </p>
        </motion.div>

        <div className="theme-layout">
          <motion.div
            className="preview-shell"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <div className="bezel">
              <motion.div
                className="preview"
                animate={{ backgroundColor: preset.panel }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div className="preview-head">
                  <span className="mono">Panels</span>
                  <span className="mono">{preset.panel}</span>
                </div>
                <motion.div
                  className="preview-card"
                  animate={{ backgroundColor: preset.card }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <motion.div
                    className="preview-accent"
                    animate={{ backgroundColor: preset.accent }}
                    transition={{ duration: 0.7, ease: EASE }}
                  />
                  <div className="preview-rows">
                    <div className="preview-row">
                      <span>Accent</span>
                      <i style={{ background: preset.accent }} />
                    </div>
                    <div className="preview-row">
                      <span>Card</span>
                      <i style={{ background: preset.card, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.18)' }} />
                    </div>
                    <div className="preview-row">
                      <span>Panel</span>
                      <i style={{ background: preset.panel, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.18)' }} />
                    </div>
                  </div>
                </motion.div>
                <div className="preview-name">
                  <strong>{preset.name}</strong>
                  <span>{preset.isDefault ? 'Default' : 'Preset'}</span>
                </div>
              </motion.div>
            </div>
            <p className="mono" style={{ marginTop: 14 }}>
              Live preview / hover a preset
            </p>
          </motion.div>

          <div>
            <div className="swatches">
              {PRESETS.map((item, index) => (
                <motion.button
                  key={item.name}
                  type="button"
                  className={`swatch ${item.isDefault ? 'is-default' : ''}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  aria-label={`${item.name} preset, accent ${item.accent}`}
                  whileHover={reduce ? undefined : { y: -5 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span
                    className="swatch-face"
                    style={{
                      background: `linear-gradient(150deg, ${item.accent} 0%, ${item.panel} 54%, ${item.card} 100%)`
                    }}
                  >
                    <span className="swatch-top">
                      {item.isDefault && <span className="swatch-chip">Default</span>}
                    </span>
                    <span className="swatch-bottom">
                      <span className="swatch-hex">{item.accent}</span>
                      <span className="swatch-name">{item.name}</span>
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>

            <p className="theme-note">
              Themes save as JSON in <code>.minecraft/config/klien/theme.json</code> and can be
              exported as a string to share. Hover a card to preview it above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
