import { SiteDocument } from "@/components/SiteDocument";
export { metadata, viewport } from "@/components/SiteDocument";
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
