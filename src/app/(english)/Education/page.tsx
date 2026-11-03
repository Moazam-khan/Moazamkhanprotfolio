import { PageIntro } from "@/components/PageIntro";
import { Expertise } from "@/components/Expertise";
import { ContactSection } from "@/components/ContactSection";
import { education, certifications, achievements } from "@/data/profile";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Education & capabilities",
  "Computer Systems Engineering, full stack development capabilities, Cisco networking, and web development certifications.",
  "/Education/",
);
export default function EducationPage() {
  return (
    <>
      <div className="container inner-page">
        <PageIntro
          label="Education / A foundation for what comes next"
          title="Keep learning"
          emphasis="Keep building"
          description="An engineering foundation, practical development experience, and a curiosity about how systems connect."
        />
        <section className="detail-section">
          <span className="eyebrow">01 / Academic background</span>
          <div>
            {education.map((item) => (
              <article className="education-item" key={item.institution}>
                <h2>{item.institution}</h2>
                <p>{item.qualification}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="detail-section">
          <span className="eyebrow">02 / Certifications</span>
          <ul className="certification-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="detail-section">
          <span className="eyebrow">03 / Technical capabilities</span>
          <Expertise />
        </section>
        <section className="detail-section">
          <span className="eyebrow">04 / Beyond the code</span>
          <div>
            {achievements.map((item) => (
              <article className="education-item" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <ContactSection />
    </>
  );
}
