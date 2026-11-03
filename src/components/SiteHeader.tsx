"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { alternatePage, localizePath, type Locale } from "@/lib/locales";
import { Arrow } from "./Icon";

const items = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const arabic = locale === "ar";
  const home = localizePath("/", locale);
  const labels = ["الأعمال", "نبذة", "الخبرة", "المهارات"];
  const current = pathname.endsWith("/") ? pathname : pathname + "/";
  const alternate = alternatePage(pathname, locale);
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
    if (current !== home) return;
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
  }, [current, home]);

  return (
    <header className="site-header">
      <Link
        href={home}
        className="wordmark"
        aria-label={arabic ? "معظم خان، الرئيسية" : "Moazam Khan home"}
      >
        {arabic ? "معظم خان" : "Moazam Khan"}
        <span>.</span>
      </Link>
      <button
        ref={toggleRef}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={
          arabic
            ? open
              ? "إغلاق القائمة"
              : "فتح القائمة"
            : open
              ? "Close menu"
              : "Open menu"
        }
        onClick={() => setOpen(!open)}
      >
        {arabic ? (open ? "إغلاق" : "القائمة") : open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      {open && (
        <button
          className="menu-backdrop"
          tabIndex={-1}
          aria-label={arabic ? "إغلاق القائمة" : "Close navigation"}
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
        aria-label={arabic ? "التنقل الرئيسي" : "Main navigation"}
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node) &&
            event.relatedTarget !== toggleRef.current
          )
            setOpen(false);
        }}
      >
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={home + "#" + item.id}
            className={
              active === item.id && current === home
                ? "nav-link is-active"
                : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            {arabic ? labels[index] : item.label}
            <Arrow className="mobile-arrow" />
          </Link>
        ))}
        <Link
          className="nav-contact"
          href={home + "#contact"}
          onClick={() => setOpen(false)}
        >
          {arabic ? "تواصل معي" : "Let’s talk"} <Arrow />
        </Link>
      </nav>
      <a
        className="language-switch"
        href={alternate}
        hrefLang={arabic ? "en" : "ar"}
        lang={arabic ? "en" : "ar"}
        dir={arabic ? "ltr" : "rtl"}
      >
        {arabic ? "English" : "العربية"}
      </a>
    </header>
  );
}
