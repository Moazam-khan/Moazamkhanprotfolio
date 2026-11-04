import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Icon";
import { ParticleField } from "@/components/ParticleField";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Expertise } from "@/components/Expertise";
import { ContactSection } from "@/components/ContactSection";
import { featuredProjects, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/site";

export const metadata = {
  ...pageMetadata("Full Stack Developer in Riyadh", profile.description, "/"),
  title: { absolute: "Moazam Khan | Full Stack Developer in Riyadh" },
};

export default function Home() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-topline eyebrow">
          <span>
            <i className="orange-dot" /> Engineer. Developer. Builder.
          </span>
          <span>Based in Riyadh · Building beyond borders</span>
        </div>
        <div className="hero-aura" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="hero-portrait hero-portrait-suit hero-portrait-hd">
          <div className="hero-photo">
            <Image
              src="/images/moazam-suit-hd.webp"
              alt="Moazam Khan wearing a suit"
              width={1065}
              height={1476}
              priority
              sizes="(max-width: 700px) 480px, 680px"
            />
          </div>
          <ParticleField />
        </div>
        <div className="hero-side eyebrow" aria-hidden="true">
          <span>01 / Presence</span>
          <b>+</b>
          <span>
            Thoughtful interfaces.
            <br />
            Reliable systems.
            <br />
            Useful products.
          </span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">
            Full Stack Developer · SaaS & AI
          </p>
          <h1 id="hero-title">
            Moazam{" "}
            <em>
              Khan<span className="accent">.</span>
            </em>
          </h1>
          <p className="hero-description">
            I build SaaS products, AI-powered workflows,
            <br className="desktop-break" /> and web & mobile applications.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button">
              View my work <Arrow direction="down" />
            </a>
            <a href="#contact" className="text-link">
              Start a conversation <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-foot eyebrow">
          <a href="#work">
            Scroll to discover <Arrow direction="down" />
          </a>
          <span>Full stack development · SaaS & business applications</span>
          <span>
            Always learning. Always building. <span className="accent">↗</span>
          </span>
        </div>
      </section>

      <section id="work" className="container section-space">
        <SectionHeading
          number="01"
          label="Selected work"
          note="Built for real business needs"
          title="Ideas become useful"
          emphasis="when you build them."
          description="A few products and platforms I’ve helped take from requirements to working software."
        />
        <ProjectCard project={featuredProjects[0]} index={0} featured />
        <div className="project-grid">
          {featuredProjects.slice(1).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
        <div className="more-work">
          <span className="eyebrow">More ways I build</span>
          {projects
            .filter((project) =>
              ["whippy-brother", "own-it-digital"].includes(project.slug),
            )
            .map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}/`}>
                <Image
                  className="more-work-thumbnail"
                  src={project.image}
                  alt=""
                  width={96}
                  height={64}
                  sizes="80px"
                />
                <span className="more-work-details">
                  <span>{project.title}</span>
                  <span className="eyebrow">
                    {project.category === "Business"
                      ? "Brand & web experience"
                      : project.eyebrow}
                  </span>
                </span>
                <Arrow />
              </Link>
            ))}
        </div>
        <div className="section-end">
          <span className="muted">
            Platforms, business websites, and engineering explorations.
          </span>
          <Link href="/work/" className="text-link">
            Explore all {projects.length} projects <Arrow />
          </Link>
        </div>
      </section>

      <section id="about" className="container section-space about-section">
        <div className="section-label">
          <span>
            <i />
            02 / The person behind the code
          </span>
          <span>See the whole picture</span>
        </div>
        <div className="about-grid">
          <div className="architecture-visual" aria-hidden="true">
            <div className="architecture-orbit orbit-one" />
            <div className="architecture-orbit orbit-two" />
            <span className="architecture-code">&#123; &#125;</span>
            <span className="architecture-node node-interface">Interface</span>
            <span className="architecture-node node-api">API & logic</span>
            <span className="architecture-node node-data">Data</span>
            <div className="architecture-caption eyebrow">
              Different layers. One connected product.
            </div>
          </div>
          <div className="about-copy" data-reveal>
            <h2>
              Good software.
              <br />
              <em>From the inside out.</em>
            </h2>
            <p className="lead">
              I connect the details people see with the systems they depend on.
            </p>
            <p>
              I’m Moazam, a full stack developer and Computer Systems
              Engineering graduate based in Riyadh. I work across interfaces,
              APIs, databases, and deployment to turn business needs into
              practical web applications.
            </p>
            <p>
              My work spans SaaS products, ERPNext customization, AI automation,
              and mobile applications. I care about how a product looks, how it
              works, and what it makes possible.
            </p>
            <Link href="/about/" className="text-link">
              More about me <Arrow />
            </Link>
            <p className="eyebrow about-signoff">
              Engineering thinking. Practical execution. Human perspective.
            </p>
          </div>
        </div>
      </section>

      <section className="container section-space approach-section">
        <SectionHeading
          number="03"
          label="How I work"
          note="From understanding to delivery"
          title="Start with the problem."
          emphasis="Build with purpose."
        />
        <div className="approach-grid">
          {[
            {
              number: "01",
              title: "Understand.",
              text: "The business, the people using it, and the problem worth solving. A useful product starts with the right questions.",
            },
            {
              number: "02",
              title: "Connect.",
              text: "Shape the interface, model the data, and plan how each part fits together. Make complexity manageable.",
            },
            {
              number: "03",
              title: "Build & refine.",
              text: "Implement, test, and improve. Pay attention to the small interactions and the systems supporting them.",
            },
          ].map((item) => (
            <article key={item.number} data-reveal>
              <span className="eyebrow">{item.number} /</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="container section-space stack-section">
        <SectionHeading
          number="04"
          label="Full stack capabilities"
          note="Depth across the product"
          title="From the first pixel"
          emphasis="to the last endpoint."
          description="Web products, ERP systems, AI automation, and mobile applications. The goal stays the same: make the whole product work together."
        />
        <Expertise />
      </section>

      <section id="experience" className="container section-space">
        <SectionHeading
          number="05"
          label="Experience in practice"
          note="Teams. Clients. Real responsibilities."
          title="Built with people."
          emphasis="Delivered for businesses."
        />
        <div className="experience-list">
          {[
            {
              company: "B-IT Solutions",
              role: "Full Stack Developer",
              location: "Riyadh, Saudi Arabia",
              text: "Enterprise web applications, API integrations, ZATCA e-invoicing, and performance optimization for business operations.",
            },
            {
              company: "ERPNext & AI automation",
              role: "ERP Customization & Integration",
              location: "Project work",
              text: "Customized ERPNext, deployed it to servers, and integrated Ollama and OpenAI to create invoices from natural-language commands.",
            },
            {
              company: "Independent work",
              role: "Freelance Full Stack Developer",
              location: "Working across borders",
              text: "Marketplaces, service platforms, and business websites for clients in Saudi Arabia, the UAE, the UK, and Thailand.",
            },
            {
              company: "Selsla Technology",
              role: "Full Stack Developer",
              location: "Riyadh, Saudi Arabia",
              text: "School portals and legal service platforms. Reusable interfaces, admin dashboards, API endpoints, and file uploads.",
            },
          ].map((item, index) => (
            <article key={item.company} data-reveal>
              <span className="eyebrow experience-number">0{index + 1}</span>
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
                <span className="eyebrow muted">{item.location}</span>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="section-end">
          <span className="muted">
            A background in engineering. Experience across the stack.
          </span>
          <Link className="text-link" href="/Experience/">
            The full experience <Arrow />
          </Link>
        </div>
      </section>

      <section className="container section-space foundation-section">
        <div className="section-label">
          <span>
            <i />
            06 / A foundation to build on
          </span>
          <span>Curiosity doesn’t graduate</span>
        </div>
        <div className="foundation-grid">
          <h2>
            Engineering roots.
            <br />
            <em>A builder’s direction.</em>
          </h2>
          <div>
            <p className="lead">
              Computer Systems Engineering
              <br />
              <span className="muted">UET Peshawar</span>
            </p>
            <p>
              My background connects software with an understanding of systems
              and networks. That perspective follows me into every web product I
              build.
            </p>
            <Link href="/Education/" className="text-link">
              Education & certifications <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
