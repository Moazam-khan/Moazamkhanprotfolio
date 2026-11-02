"use client";

import { useEffect, useRef } from "react";
import { useMotionEnabled } from "./MotionProvider";

/** A bounded decorative canvas. No render loop when off-screen or motion is disabled. */
export function ParticleField() {
  const enabled = useMotionEnabled();
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!enabled || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let visible = true;
    let width = 0,
      height = 0;
    const pointer = { x: 0.5, targetX: 0.5 };
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (time: number) => {
      pointer.x += (pointer.targetX - pointer.x) * 0.035;
      context.clearRect(0, 0, width, height);
      const count = width < 550 ? 140 : 260;
      for (let i = 0; i < count; i++) {
        const angle = i * 2.39996 + time * 0.000018;
        const radius = Math.sqrt(i / count);
        const x =
          width / 2 +
          Math.cos(angle) * radius * width * 0.45 +
          (pointer.x - 0.5) * 12 * radius;
        const y = height * 0.45 + Math.sin(angle) * radius * height * 0.4;
        context.fillStyle =
          i % 7 === 0 ? "rgba(222,145,93,0.65)" : "rgba(228,219,202,0.3)";
        context.fillRect(x, y, 1, 1);
      }
      if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      if (visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      resume();
    });
    const resizeObserver = new ResizeObserver(resize);
    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width),
      );
    };
    resize();
    observer.observe(canvas);
    resizeObserver.observe(canvas);
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("pointermove", move);
    };
  }, [enabled]);
  return enabled ? (
    <canvas ref={ref} className="particle-field" aria-hidden="true" />
  ) : null;
}
