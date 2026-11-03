import { PageIntro } from "@/components/PageIntro";
import { ContactSection } from "@/components/ContactSection";
import { experiences } from "@/data/experience";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Experience",
  "Moazam Khan’s experience across full stack development, enterprise applications, freelance projects, and engineering.",
  "/Experience/",
);
export default function ExperiencePage() {
  return (
    <>
      <div className="container inner-page">
        <PageIntro
          label="Experience / Learning through the work"
          title="Different teams"
          emphasis="A connected perspective"
          description="Enterprise systems, independent projects, and the people behind them. My experience across software and business needs."
        />
        <div className="career-list">
          {experiences.map((item, index) => (
            <article key={item.company}>
              <div>
                <span className="eyebrow">
                  {String(index + 1).padStart(2, "0")} / {item.type}
                </span>
                <h2>{item.company}</h2>
                <p className="career-role">{item.role}</p>
                {item.location.trim().replace(/\s*\/\s*$/, "") && (
                  <p className="eyebrow muted">
                    {item.location.trim().replace(/\s*\/\s*$/, "")}
                  </p>
                )}
              </div>
              <div>
                <p>{item.description}</p>
                <ul className="tag-list">
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ContactSection />
    </>
  );
}
