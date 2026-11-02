import { profile } from "@/data/profile";
import { Arrow } from "./Icon";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section container section-space">
      <div className="section-label">
        <span>
          <i />
          07 / The next chapter
        </span>
        <span>Let’s make it useful</span>
      </div>
      <div className="contact-content" data-reveal>
        <p className="eyebrow">
          <span className="status-dot" /> Open to projects & conversations
        </p>
        <h2>
          Good software starts
          <br />
          with <em>a conversation.</em>
        </h2>
        <a
          className="button button-light"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me on LinkedIn <Arrow />
        </a>
        <p>
          SaaS products, ERPNext, AI automation, or a custom mobile application.
          <br />
          Tell me what you’re working on.
        </p>
      </div>
    </section>
  );
}
