import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
import { languageLinks, portfolioSections } from "@/lib/locales";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin;
  if (!origin) return [];

  const paths = [
    "/",
    ...portfolioSections.map((section) => "/" + section + "/"),
    ...projects.map((project) => "/work/" + project.slug + "/"),
  ];
  return paths.flatMap((path) => {
    const links = languageLinks(path);
    const languages = { en: origin + links.en, ar: origin + links.ar };
    return Object.values(languages).map((url) => ({
      url,
      alternates: { languages },
    }));
  });
}
