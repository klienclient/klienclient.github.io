'use client';

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const ToastContext = createContext(() => {});

export function useToast() {
  return useContext(ToastContext);
}

const EASE = [0.32, 0.72, 0, 1];

export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);
  const timer = useRef(null);

  const show = useCallback((text) => {
    setMessage(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), 3000);
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <AnimatePresence>
        {message && (
          <motion.output
            key={message}
            className="toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {message}
          </motion.output>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}
