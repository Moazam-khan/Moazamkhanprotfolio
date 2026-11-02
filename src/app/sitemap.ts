import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin) return [];
  return [
    "/",
    "/work/",
    "/about/",
    "/Experience/",
    "/Education/",
    "/Contact/",
    ...projects.map((project) => `/work/${project.slug}/`),
  ].map((path) => ({
    url: `${siteOrigin}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
