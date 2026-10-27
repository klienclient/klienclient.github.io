'use client';

import { useEffect, useRef } from 'react';

export default function FlowCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const STEP = 6;
    const GAP = 10;
    const TINT = '252, 207, 215';

    let width = 0;
    let height = 0;
    let gradient = null;
    let raf = 0;
    let lastDraw = 0;
    let onScreen = true;
    let pageVisible = true;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, `rgba(${TINT}, 0)`);
      gradient.addColorStop(0.18, `rgba(${TINT}, 0.13)`);
      gradient.addColorStop(0.6, `rgba(${TINT}, 0.15)`);
      gradient.addColorStop(1, `rgba(${TINT}, 0)`);
    };

    const draw = (time) => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;

      const phase = time * 0.25;
      const first = Math.floor(-40 / GAP);
      const lastRow = Math.ceil((height + 40) / GAP);

      for (let i = first; i <= lastRow; i++) {
        ctx.beginPath();
        for (let x = 0; x <= width + STEP; x += STEP) {
          const y =
            i * GAP +
            Math.sin(x * 0.018 + i * 0.35 + phase) * 14 +
            Math.sin(x * 0.007 - i * 0.2 - phase * 0.6) * 10;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (!onScreen || !pageVisible) return;
      if (now - lastDraw < 33) return;
      lastDraw = now;
      draw(now / 1000);
    };

    resize();
    if (reduce) draw(0);
    else raf = requestAnimationFrame(loop);

    let resizeTimer;
    const scheduleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (reduce) draw(0);
      }, 150);
    };

    const resizeObserver = new ResizeObserver(scheduleResize);
    resizeObserver.observe(canvas.parentElement);

    const intersection = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    intersection.observe(canvas);

    const onVisibility = () => {
      pageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
