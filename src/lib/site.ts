import type { Metadata } from "next";
import { languageLinks, localizePath, type Locale } from "./locales";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteOrigin = configuredOrigin
  ? new URL(configuredOrigin).origin
  : undefined;

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  locale: Locale = "en",
): Metadata {
  const links = languageLinks(path);
  const url = siteOrigin && siteOrigin + localizePath(path, locale);
  const name = locale === "ar" ? "معظم خان" : "Moazam Khan";
  const socialTitle = title + " — " + name;
  const socialImage = siteOrigin && siteOrigin + "/images/social.png";

  return {
    title,
    description,
    ...(siteOrigin && {
      alternates: {
        canonical: url,
        languages: {
          en: siteOrigin + links.en,
          ar: siteOrigin + links.ar,
          "x-default": siteOrigin + links.en,
        },
      },
    }),
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      siteName: name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
      url,
      ...(socialImage && {
        images: [{ url: socialImage, width: 1200, height: 630, alt: name }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(socialImage && { images: [socialImage] }),
    },
  };
}
