"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Pointer effects use one scheduled frame and never take over scrolling or the cursor. */
export function MotionLayer({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!enabled) return;
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let active: HTMLElement | null = null;
    let rectangle: DOMRect | null = null;
    let point: { x: number; y: number; target: Element } | null = null;
    const properties = [
      "--tilt-x",
      "--tilt-y",
      "--glow-x",
      "--glow-y",
      "--magnetic-x",
      "--magnetic-y",
    ];
    function resetTarget() {
      if (active)
        properties.forEach((property) =>
          active?.style.removeProperty(property),
        );
      active = null;
      rectangle = null;
    }
    function resetHero() {
      hero?.style.removeProperty("--hero-shift-x");
      hero?.style.removeProperty("--hero-shift-y");
    }
    function paint() {
      frame = 0;
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      if (progressRef.current)
        progressRef.current.style.transform = "scaleX(" + progress + ")";
      if (header) header.dataset.scrolled = String(window.scrollY > 24);
      if (!point || !finePointer.matches || document.hidden) return;
      const target = point.target.closest<HTMLElement>(
        ".project-preview,.button,.nav-contact",
      );
      if (target !== active || !rectangle) {
        resetTarget();
        active = target;
        rectangle = target?.getBoundingClientRect() || null;
      }
      if (active && rectangle && rectangle.width && rectangle.height) {
        const x = Math.max(
          0,
          Math.min(1, (point.x - rectangle.left) / rectangle.width),
        );
        const y = Math.max(
          0,
          Math.min(1, (point.y - rectangle.top) / rectangle.height),
        );
        active.style.setProperty("--glow-x", x * 100 + "%");
        active.style.setProperty("--glow-y", y * 100 + "%");
        if (active.matches(".project-preview")) {
          active.style.setProperty("--tilt-x", (0.5 - y) * 2.4 + "deg");
          active.style.setProperty("--tilt-y", (x - 0.5) * 2.4 + "deg");
        } else {
          active.style.setProperty("--magnetic-x", (x - 0.5) * 3 + "px");
          active.style.setProperty("--magnetic-y", (y - 0.5) * 5 + "px");
        }
      }
      if (hero) {
        const bounds = hero.getBoundingClientRect();
        if (point.y >= bounds.top && point.y <= bounds.bottom) {
          hero.style.setProperty(
            "--hero-shift-x",
            (point.x / window.innerWidth - 0.5) * 10 + "px",
          );
          hero.style.setProperty(
            "--hero-shift-y",
            ((point.y - bounds.top) / bounds.height - 0.5) * 6 + "px",
          );
        } else resetHero();
      }
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(paint);
    }
    function move(event: PointerEvent) {
      if (!finePointer.matches || !(event.target instanceof Element)) return;
      point = { x: event.clientX, y: event.clientY, target: event.target };
      schedule();
    }
    function scroll() {
      point = null;
      resetTarget();
      resetHero();
      schedule();
    }
    function leave() {
      point = null;
      resetTarget();
      resetHero();
    }
    function visibility() {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
        leave();
      } else schedule();
    }
    const resize = new ResizeObserver(() => {
      rectangle = null;
      schedule();
    });
    resize.observe(document.documentElement);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", leave);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", visibility);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      resetTarget();
      resetHero();
      if (header) delete header.dataset.scrolled;
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", leave);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [enabled, pathname]);
  return enabled ? (
    <div ref={progressRef} className="reading-progress" aria-hidden="true" />
  ) : null;
}
