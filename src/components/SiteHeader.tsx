"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Icon";

const items = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Moazam Khan home">
        Moazam Khan<span>.</span>
      </Link>
      <button
        ref={toggleRef}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      {open && (
        <button
          className="menu-backdrop"
          tabIndex={-1}
          aria-label="Close navigation"
          onClick={() => {
            setOpen(false);
            toggleRef.current?.focus();
          }}
        />
      )}
      <nav
        id="main-nav"
        ref={navRef}
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node) &&
            event.relatedTarget !== toggleRef.current
          )
            setOpen(false);
        }}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/#${item.id}`}
            className={
              active === item.id && pathname === "/"
                ? "nav-link is-active"
                : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
            <Arrow className="mobile-arrow" />
          </Link>
        ))}
        <Link
          className="nav-contact"
          href="/#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <Arrow />
        </Link>
      </nav>
    </header>
  );
}
