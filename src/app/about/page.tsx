import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { ContactSection } from "@/components/ContactSection";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  "Meet Moazam Khan, a full stack developer and Computer Systems Engineering graduate based in Riyadh.",
  "/about/",
);
export default function AboutPage() {
  return (
    <>
      <div className="container inner-page">
        <PageIntro
          label="About / The person & the perspective"
          title="A systems mind"
          emphasis="A product perspective"
          description="I’m Moazam Khan. A full stack developer who enjoys connecting good interfaces with the engineering that makes them useful."
        />
        <div className="about-page-grid">
          <div className="about-photo">
            <Image
              src="/images/moazam.webp"
              alt="Moazam Khan"
              width={1200}
              height={1600}
              sizes="(max-width: 700px) 90vw, 40vw"
            />
          </div>
          <div className="prose">
            <p className="eyebrow">Riyadh, Saudi Arabia</p>
            <h2>
              From engineering
              <br />
              to everyday products.
            </h2>
            <p>
              I graduated in Computer Systems Engineering from UET Peshawar.
              Today, I build web applications across the frontend, backend, and
              the integrations that connect them. I also design custom software
              solutions and develop mobile applications.
            </p>
            <p>
              My work includes marketplaces, service booking platforms, legal
              services interfaces, school portals, and business websites. I’ve
              contributed in engineering teams and delivered projects
              independently for clients across several markets.
            </p>
            <h3>ERP systems, connected to AI.</h3>
            <p>
              I customize ERPNext for business needs and deploy it to servers.
              I’ve integrated Ollama and OpenAI to create invoices from
              natural-language commands, connecting AI tools with practical
              business workflows.
            </p>
            <h3>How I think about the work.</h3>
            <p>
              A useful product needs more than an attractive screen. I like
              understanding the business need, making the interface clear, and
              making sure the data, APIs, and workflows behind it fit together.
            </p>
            <p>
              Alongside development, I’ve worked with hosting, DNS, on-page SEO,
              and network infrastructure. I bring that wider systems perspective
              to the products I build.
            </p>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub ↗
            </a>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
