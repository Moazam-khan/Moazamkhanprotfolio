import { PageIntro } from "@/components/PageIntro";
import { Arrow } from "@/components/Icon";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Let’s talk",
  "Connect with Moazam Khan about SaaS products, ERPNext customization, AI integrations, custom software, and mobile applications.",
  "/Contact/",
);
export default function ContactPage() {
  return (
    <div className="container inner-page contact-page">
      <PageIntro
        label="Contact / The next chapter"
        title="Let’s build"
        emphasis="something useful"
        description="Have a product in mind, a system to improve, or an engineering opportunity? I’d like to hear about it."
      />
      <div className="contact-page-grid">
        <div>
          <span className="eyebrow">
            <i className="orange-dot" />
            Based in Riyadh, Saudi Arabia
          </span>
          <h2>
            Start with an idea.
            <br />
            We’ll take it from there.
          </h2>
          <p>
            Tell me a little about the project, who it’s for, and what you want
            to make possible. LinkedIn is the best place to start the
            conversation.
          </p>
          <a
            className="button button-light"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <Arrow />
          </a>
        </div>
        <div className="conversation-list">
          {[
            "SaaS & business applications",
            "Marketplaces & booking platforms",
            "ERPNext customization & deployment",
            "Ollama & OpenAI integrations",
            "Custom software & mobile applications",
            "Interface & product design",
            "Frontend & backend development",
            "APIs, dashboards & integrations",
            "Website hosting & migration",
            "Full stack engineering opportunities",
          ].map((item, index) => (
            <div key={item}>
              <span className="eyebrow">0{index + 1}</span>
              <span>{item}</span>
              <Arrow />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
