import type { Metadata } from "next";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteOrigin = configuredOrigin
  ? new URL(configuredOrigin).origin
  : undefined;

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    ...(siteOrigin
      ? { alternates: { canonical: `${siteOrigin}${path}` } }
      : {}),
    openGraph: {
      title: `${title} — Moazam Khan`,
      description,
      type: "website",
      siteName: "Moazam Khan",
      ...(siteOrigin
        ? {
            url: `${siteOrigin}${path}`,
            images: [
              {
                url: `${siteOrigin}/images/social.png`,
                width: 1200,
                height: 630,
                alt: "Moazam Khan — Full Stack Developer",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Moazam Khan`,
      description,
      ...(siteOrigin ? { images: [`${siteOrigin}/images/social.png`] } : {}),
    },
  };
}
