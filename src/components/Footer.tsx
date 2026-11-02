import Link from "next/link";
import { profile } from "@/data/profile";
import { Arrow } from "./Icon";

export function Footer() {
  return (
    <footer className="site-footer container">
      <Link href="/" className="wordmark">
        Moazam Khan<span>.</span>
      </Link>
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <Arrow />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub <Arrow />
        </a>
        <Link href="/Contact/">
          Contact <Arrow />
        </Link>
      </div>
      <div className="footer-bottom eyebrow">
        <span>© {new Date().getUTCFullYear()} Moazam Khan</span>
        <span>Built with intention. Always evolving.</span>
        <span>
          Riyadh, KSA <span className="accent">↗</span> The world
        </span>
      </div>
    </footer>
  );
}
