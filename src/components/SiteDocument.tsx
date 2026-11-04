import type { Locale } from "@/lib/locales";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/SiteHeader";
import { MotionProvider } from "@/components/MotionProvider";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import { siteOrigin } from "@/lib/site";
import "@/app/globals.css";
import "@/app/polish.css";
import "@/app/arabic.css";

const sans = localFont({
  src: [
    { path: "../../public/fonts/sans-400.ttf", weight: "400" },
    { path: "../../public/fonts/sans-500.ttf", weight: "500" },
    { path: "../../public/fonts/sans-600.ttf", weight: "600" },
    { path: "../../public/fonts/sans-700.ttf", weight: "700" },
  ],
  variable: "--font-sans",
  display: "swap",
});
const serif = localFont({
  src: [
    {
      path: "../../public/fonts/serif-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/serif-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#080807" };
export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  title: {
    default: "Moazam Khan — Full Stack Developer",
    template: "%s — Moazam Khan",
  },
  description: profile.description,
  icons: {
    icon: { url: "/favicon.png", type: "image/png", sizes: "180x180" },
    apple: "/apple-icon.png",
  },
  applicationName: "Moazam Khan Portfolio",
  authors: [{ name: profile.name, url: profile.linkedin }],
  robots: { index: !!siteOrigin, follow: !!siteOrigin },
  openGraph: {
    title: "Moazam Khan — Full Stack Developer",
    description: profile.description,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
    ...(siteOrigin
      ? {
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
    title: "Moazam Khan — Full Stack Developer",
    description: profile.description,
  },
};

export function SiteDocument({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const arabic = locale === "ar";
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.description,
    sameAs: [profile.linkedin, profile.github],
    ...(siteOrigin
      ? { url: siteOrigin, image: `${siteOrigin}/images/moazam.webp` }
      : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    knowsAbout: [
      "Full stack development",
      "SaaS applications",
      "React",
      "Next.js",
      "Node.js",
      "API development",
      "ERPNext customization",
      "Server deployment",
      "Ollama",
      "OpenAI integration",
      "Invoice automation",
      "Mobile application development",
      "Interface design",
    ],
  };
  return (
    <html
      lang={locale}
      dir={arabic ? "rtl" : "ltr"}
      className={`${sans.variable} ${serif.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          {arabic ? "انتقل إلى المحتوى" : "Skip to content"}
        </a>
        <noscript>
          <style>{`.motion-toggle,.menu-toggle,.filter-row button{display:none!important}.expertise-item [hidden]{display:block!important}@media(max-width:900px){.site-header{position:absolute;flex-wrap:wrap}.main-nav{display:flex;position:static;flex-direction:row;flex-wrap:wrap;padding:0;width:100%;border:0;background:none;gap:6px}.main-nav .nav-link{font:12px var(--sans);padding:10px 8px;border:0}.main-nav .nav-contact{font:12px var(--sans);padding:10px;margin:0}.mobile-arrow{display:none}.hero{padding-top:175px}.hero-portrait{top:180px}}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider locale={locale}>
          <SiteHeader locale={locale} />
          <main id="main">{children}</main>
          <Footer locale={locale} />
        </MotionProvider>
      </body>
    </html>
  );
}
