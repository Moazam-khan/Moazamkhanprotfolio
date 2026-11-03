import type { Locale } from "@/lib/locales";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Arrow } from "./Icon";

export function Footer({ locale }: { locale: Locale }) {
  const arabic = locale === "ar";
  return (
    <footer className="site-footer container">
      <Link href={arabic ? "/ar/" : "/"} className="wordmark">
        {arabic ? "معظم خان" : "Moazam Khan"}
        <span>.</span>
      </Link>
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <Arrow />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub <Arrow />
        </a>
        <Link href={arabic ? "/ar/Contact/" : "/Contact/"}>
          {arabic ? "التواصل" : "Contact"} <Arrow />
        </Link>
      </div>
      <div className="footer-bottom eyebrow">
        <span>
          © {new Date().getUTCFullYear()} {arabic ? "معظم خان" : "Moazam Khan"}
        </span>
        <span>
          {arabic
            ? "أطور منتجاتي باستمرار."
            : "Built with intention. Always evolving."}
        </span>
        <span>
          {arabic ? "الرياض، السعودية" : "Riyadh, KSA"}{" "}
          <span className="accent">↗</span> {arabic ? "العالم" : "The world"}
        </span>
      </div>
    </footer>
  );
}
