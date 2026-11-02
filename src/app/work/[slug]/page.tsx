import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/Icon";
import { pageMetadata } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? pageMetadata(project.title, project.summary, `/work/${slug}/`)
    : {};
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];
  return (
    <div className="container inner-page case-study">
      <Link className="text-link back-link" href="/work/">
        <Arrow direction="left" /> Back to selected work
      </Link>
      <div className="page-intro">
        <p className="eyebrow">
          Selected work / {String(index + 1).padStart(2, "0")} /{" "}
          {project.category}
        </p>
        <h1>
          {project.title}
          <span className="accent">.</span>
        </h1>
        <p>{project.summary}</p>
        <div className="case-meta">
          <span className="eyebrow">Project status</span>
          <span>{project.status}</span>
          <span className="eyebrow">Focus</span>
          <span>{project.eyebrow.toLowerCase()}</span>
        </div>
      </div>
      <div className="case-image">
        <Image
          src={project.image}
          alt={`${project.title} website screenshot`}
          width={1400}
          height={900}
          priority
          sizes="(max-width: 700px) 92vw, 90vw"
        />
      </div>
      <div className="case-chapters">
        <section>
          <span className="eyebrow">01 / The context</span>
          <div>
            <h2>The need behind it.</h2>
            <p>{project.context}</p>
          </div>
        </section>
        <section>
          <span className="eyebrow">02 / My contribution</span>
          <div>
            <h2>Where I came in.</h2>
            <p>{project.contribution}</p>
          </div>
        </section>
        <section>
          <span className="eyebrow">03 / In practice</span>
          <div>
            <h2>The pieces that connect.</h2>
            <ul className="feature-list">
              {project.features.map((feature, i) => (
                <li key={feature}>
                  <span className="eyebrow">0{i + 1}</span>
                  {feature}
                  <Arrow />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <span className="eyebrow">04 / The technology</span>
          <div>
            <h2>Tools for the job.</h2>
            <ul className="tag-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {(project.status === "In development" ||
              project.status === "Personal project") && (
              <p className="case-note">
                {project.status === "In development"
                  ? "This project is in development. Features describe the work in progress; production scale and capacity have not been measured."
                  : "A personal learning project exploring the technologies and workflows described here."}
              </p>
            )}
            <a
              className="button"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.status === "In development"
                ? "Visit project website"
                : "Explore the website"}
              <Arrow />
            </a>
            {project.resources && (
              <div className="resource-links">
                {project.resources.map((resource) => (
                  <a
                    key={resource.url}
                    className="text-link"
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.label}
                    <Arrow />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Link className="next-project" href={`/work/${next.slug}/`}>
        <span className="eyebrow">Next story</span>
        <span>{next.title}</span>
        <Arrow />
      </Link>
    </div>
  );
}
