"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const categories = [
  "Professional work",
  "Platforms",
  "Business",
  "Experiments",
  "All work",
] as const;
type ProjectFilter = ProjectCategory | "Professional work" | "All work";

export function ProjectExplorer() {
  const [category, setCategory] = useState<ProjectFilter>("Professional work");
  const filtered = projects.filter(
    (project) =>
      category === "All work" ||
      (category === "Professional work"
        ? project.category !== "Experiments"
        : project.category === category),
  );
  return (
    <>
      <div className="archive-introduction">
        <p>
          Client platforms and business websites come first. Explore the
          experiments to see the learning behind the work.
        </p>
      </div>
      <div className="filter-row" aria-label="Filter projects">
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
        <span className="eyebrow filter-count" role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <div className="project-grid archive-grid">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
      <noscript>
        <section
          className="noscript-experiments section-space"
          aria-labelledby="experiment-heading"
        >
          <h2 id="experiment-heading">Learning experiments.</h2>
          <p>The projects behind the practice.</p>
          <div className="project-grid archive-grid">
            {projects
              .filter((project) => project.category === "Experiments")
              .map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
          </div>
        </section>
      </noscript>
    </>
  );
}
