import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Arrow } from "./Icon";

export function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`project-card${featured ? " project-feature" : ""}`}
      data-project={project.slug}
      data-reveal
    >
      <Link
        href={`/work/${project.slug}/`}
        className="project-preview"
        aria-label={`Read the ${project.title} case study`}
      >
        <div className="project-window">
          <div className="browser-bar">
            <span className="browser-dots" aria-hidden="true">
              •••
            </span>
            <span>{new URL(project.url).hostname.replace(/^www\./, "")}</span>
            <Arrow />
          </div>
          <div className="project-image">
            <Image
              src={project.image}
              alt={`${project.title} website screenshot`}
              width={1400}
              height={850}
              sizes={
                featured
                  ? "(max-width: 800px) 92vw, 60vw"
                  : "(max-width: 700px) 92vw, 45vw"
              }
            />
            <span className="project-open">
              <Arrow />
            </span>
          </div>
        </div>
        <div className="preview-caption">
          <span>{project.eyebrow}</span>
          <span>{project.status}</span>
        </div>
      </Link>
      <div className="project-copy">
        <span className="eyebrow project-index">
          {String(index + 1).padStart(2, "0")}{" "}
          <span>
            {project.category === "Platforms"
              ? "Full stack & platforms"
              : project.category === "Business"
                ? "Business & web experience"
                : "Engineering exploration"}
          </span>
        </span>
        <h3>
          <Link href={`/work/${project.slug}/`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <ul
          className="project-technologies"
          aria-label="Project technologies and capabilities"
        >
          {project.stack.slice(0, 3).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/work/${project.slug}/`}>
          Explore the story <Arrow />
        </Link>
        {project.resources && (
          <div className="project-resource-links">
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
    </article>
  );
}
