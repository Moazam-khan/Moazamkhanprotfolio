export type Locale = "en" | "ar";

export const portfolioSections = [
  "work",
  "about",
  "Experience",
  "Education",
  "Contact",
] as const;

export function localizePath(path: string, locale: Locale) {
  return locale === "ar" ? "/ar" + path : path;
}

export function languageLinks(path: string) {
  return { en: localizePath(path, "en"), ar: localizePath(path, "ar") };
}

export function alternatePage(pathname: string, locale: Locale) {
  const target = locale === "ar" ? "en" : "ar";
  const normalized = pathname.replace(/\/+$/, "") + "/";
  const path = locale === "ar" ? normalized.slice("/ar".length) : normalized;
  const hasTranslation =
    path === "/" ||
    path === "/Projects/" ||
    portfolioSections.some((section) => path === "/" + section + "/") ||
    /^\/work\/[a-z0-9-]+\/$/.test(path);

  return localizePath(hasTranslation ? path : "/", target);
}
