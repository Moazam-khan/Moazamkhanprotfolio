import type { Metadata } from "next";
import { arabicDescription } from "@/data/profile.ar";
import { siteOrigin } from "@/lib/site";
import { SiteDocument } from "@/components/SiteDocument";
export { viewport } from "@/components/SiteDocument";
export const metadata: Metadata = {
  robots: { index: !!siteOrigin, follow: !!siteOrigin },
  title: { default: "معظم خان — مطور متكامل", template: "%s — معظم خان" },
  description: arabicDescription,
  icons: {
    icon: { url: "/favicon.png", type: "image/png", sizes: "180x180" },
    apple: "/apple-icon.png",
  },
};
export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteDocument locale="ar">{children}</SiteDocument>;
}
