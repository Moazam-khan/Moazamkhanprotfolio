"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useMotionEnabled } from "./MotionProvider";
import { capabilities } from "@/data/profile";
import { Plus } from "./Icon";

function DisclosurePanel({
  open,
  id,
  labelledBy,
  children,
}: {
  open: boolean;
  id: string;
  labelledBy: string;
  children: React.ReactNode;
}) {
  const motionEnabled = useMotionEnabled();
  const [present, setPresent] = useState(open);
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.inert = !open;
    if (!motionEnabled || !("animate" in element)) {
      setPresent(open);
      return;
    }
    if (open && !present) {
      setPresent(true);
      return;
    }
    if (!present) return;
    const height = element.getBoundingClientRect().height;
    const paddingBottom = getComputedStyle(element).paddingBottom;
    const expanded = { height: height + "px", opacity: 1, paddingBottom };
    const collapsed = { height: "0px", opacity: 0, paddingBottom: "0px" };
    const animation = element.animate(
      open ? [collapsed, expanded] : [expanded, collapsed],
      {
        duration: open ? 520 : 340,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      },
    );
    animation.finished.then(
      () => {
        if (open) animation.cancel();
        else setPresent(false);
      },
      () => {},
    );
    return () => animation.cancel();
  }, [open, present, motionEnabled]);
  return (
    <div
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      role="region"
      hidden={!present}
      aria-hidden={present && !open ? true : undefined}
    >
      {children}
    </div>
  );
}

export function Expertise() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="expertise-list">
      {capabilities.map((item, index) => (
        <article
          key={item.name}
          className={
            active === index ? "expertise-item is-expanded" : "expertise-item"
          }
        >
          <h3>
            <button
              aria-expanded={active === index}
              aria-controls={"expertise-panel-" + index}
              id={"expertise-button-" + index}
              onClick={() => setActive(active === index ? null : index)}
            >
              <span className="eyebrow">
                {item.number} / {item.name}
              </span>
              <span className="expertise-title">{item.title}</span>
              <Plus />
            </button>
          </h3>
          <DisclosurePanel
            open={active === index}
            id={"expertise-panel-" + index}
            labelledBy={"expertise-button-" + index}
          >
            <p>{item.description}</p>
            <ul className="tag-list">
              {item.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </DisclosurePanel>
        </article>
      ))}
    </div>
  );
}
