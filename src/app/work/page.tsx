import { PageIntro } from "@/components/PageIntro";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { ContactSection } from "@/components/ContactSection";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Selected work",
  "Explore Moazam Khan’s marketplaces, booking platforms, business websites, and full stack engineering projects.",
  "/work/",
);
export default function WorkPage() {
  return (
    <>
      <div className="container inner-page">
        <PageIntro
          label="Work / Ideas into software"
          title="Built to be"
          emphasis="used"
          description="Platforms, business websites, and focused experiments. Different problems, the same intention: build something useful."
        />
        <ProjectExplorer />
      </div>
      <ContactSection />
    </>
  );
}
