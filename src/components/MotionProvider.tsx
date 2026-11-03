"use client";

import type { Locale } from "@/lib/locales";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MotionLayer } from "./MotionLayer";

const MotionContext = createContext(false);
export function useMotionEnabled() {
  return useContext(MotionContext);
}

export function MotionProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const pathname = usePathname();
  const arabic = locale === "ar";
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    function sync() {
      setReduced(media.matches);
      let preference: string | null = null;
      try {
        preference = localStorage.getItem("mk-motion");
      } catch {
        /* Storage may be unavailable. */
      }
      setEnabled(
        !media.matches && (preference === "on" || preference !== "off"),
      );
    }
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
  }, [enabled]);

  useEffect(() => {
    if (
      !enabled ||
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    )
      return;
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const ambientElements = new Set<HTMLElement>();
    const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
    const revealSelector =
      "[data-reveal],.section-label,.expertise-item,.foundation-grid > *, .prose > *, .case-chapters section,.more-work > a,.about-photo,.case-image,.project-image img";

    function play(
      element: Element,
      frames: Keyframe[],
      options: KeyframeAnimationOptions,
    ) {
      const animation = element.animate(frames, options);
      animations.add(animation);
      animation.finished.then(
        () => animations.delete(animation),
        () => animations.delete(animation),
      );
    }

    // Animate on entry without making server-rendered content depend on JavaScript.
    const reveals = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          reveals.unobserve(entry.target);
          const siblings = entry.target.parentElement?.querySelectorAll(
            ":scope > :is(" + revealSelector + ")",
          );
          const index = siblings
            ? Array.from(siblings).indexOf(entry.target)
            : 0;
          if (
            entry.target.matches(".project-image img,.about-photo,.case-image")
          ) {
            play(
              entry.target,
              [
                { clipPath: "inset(0 0 14% 0 round 12px)", opacity: 0.35 },
                { clipPath: "inset(0 0 0% 0 round 12px)", opacity: 1 },
              ],
              { duration: 1050, easing: ease },
            );
            continue;
          }
          play(
            entry.target,
            [
              {
                opacity: 0,
                transform: "translateY(18px)",
                filter: "blur(2px)",
              },
              { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
            ],
            {
              duration: 760,
              delay: Math.min(Math.max(index, 0) * 65, 180),
              easing: ease,
              fill: "backwards",
            },
          );
          if (entry.target.matches(".section-heading")) {
            entry.target
              .querySelectorAll(".heading-line")
              .forEach((line, lineIndex) => {
                play(
                  line,
                  [
                    { opacity: 0, transform: "translateY(18px)" },
                    { opacity: 1, transform: "translateY(0)" },
                  ],
                  {
                    duration: 850,
                    delay: 90 + lineIndex * 120,
                    easing: ease,
                    fill: "backwards",
                  },
                );
              });
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    const ambient = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        (entry.target as HTMLElement).dataset.ambientActive = String(
          entry.isIntersecting,
        );
      });
    });

    function observe(root: Element) {
      const targets = [
        ...(root.matches(revealSelector) ? [root] : []),
        ...Array.from(root.querySelectorAll(revealSelector)),
      ];
      targets.forEach((element) => {
        if (!seen.has(element)) reveals.observe(element);
      });
      const scenes = [
        ...(root.matches(".hero,.architecture-visual,.contact-content")
          ? [root]
          : []),
        ...Array.from(
          root.querySelectorAll(".hero,.architecture-visual,.contact-content"),
        ),
      ];
      scenes.forEach((element) => {
        if (!ambientElements.has(element as HTMLElement)) {
          ambientElements.add(element as HTMLElement);
          ambient.observe(element);
        }
      });
    }
    observe(document.body);
    function syncVisibility() {
      document.documentElement.dataset.pageVisible = String(!document.hidden);
    }
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);

    const hero = document.querySelector<HTMLElement>(".hero");
    if (hero && window.scrollY < 80) {
      const selectors = [
        ".hero-kicker",
        ".hero h1",
        ".hero-description",
        ".hero-actions",
      ];
      selectors.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element)
          play(
            element,
            [
              {
                opacity: 0,
                transform: "translateY(18px)",
                filter: "blur(2px)",
              },
              { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
            ],
            {
              duration: 950,
              delay: 70 + index * 100,
              easing: ease,
              fill: "backwards",
            },
          );
      });
      const portrait = hero.querySelector(".hero-portrait img");
      if (portrait)
        play(portrait, [{ opacity: 0 }, { opacity: 1 }], {
          duration: 1500,
          easing: ease,
        });
    }

    const intro = document.querySelector(".page-intro");
    if (intro && window.scrollY < 120) {
      Array.from(intro.children)
        .slice(0, 4)
        .forEach((element, index) => {
          play(
            element,
            [
              { opacity: 0, transform: "translateY(16px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 850,
              delay: index * 90,
              easing: ease,
              fill: "backwards",
            },
          );
        });
    }

    // Register project cards mounted by filters and content mounted after navigation.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) observe(node);
        }),
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      document.removeEventListener("visibilitychange", syncVisibility);
      delete document.documentElement.dataset.pageVisible;
      reveals.disconnect();
      ambient.disconnect();
      mutations.disconnect();
      animations.forEach((animation) => animation.cancel());
      ambientElements.forEach((element) => {
        delete element.dataset.ambientActive;
      });
    };
  }, [enabled, pathname]);

  function toggle() {
    const next = !enabled;
    try {
      localStorage.setItem("mk-motion", next ? "on" : "off");
    } catch {
      /* The control still works without persistence. */
    }
    setEnabled(next);
  }

  return (
    <MotionContext.Provider value={enabled}>
      <MotionLayer enabled={enabled} />
      {children}
      <button
        className="motion-toggle"
        onClick={toggle}
        disabled={reduced}
        title={
          reduced
            ? arabic
              ? "تتبع الحركة إعداد تقليل الحركة في جهازك"
              : "Animations follow your system’s reduced-motion preference"
            : undefined
        }
        aria-pressed={enabled}
        aria-label={
          reduced
            ? arabic
              ? "الحركة معطّلة حسب إعدادات الجهاز"
              : "Animations disabled by system preference"
            : enabled
              ? arabic
                ? "إيقاف الحركة"
                : "Pause animations"
              : arabic
                ? "تشغيل الحركة"
                : "Enable animations"
        }
      >
        <span aria-hidden="true">{enabled ? "Ⅱ" : "▷"}</span>{" "}
        {arabic
          ? enabled
            ? "الحركة مفعّلة"
            : "الحركة متوقفة"
          : enabled
            ? "Motion on"
            : "Motion off"}
      </button>
    </MotionContext.Provider>
  );
}
