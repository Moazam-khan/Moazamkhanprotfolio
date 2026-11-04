import { PageIntro } from "@/components/PageIntro";
import { WritingList, writingCopy } from "@/components/WritingList";
import { pageMetadata } from "@/lib/site";

const { title, description } = writingCopy.en;

export const metadata = pageMetadata(title, description, "/writing/");

export default function WritingPage() {
  return (
    <div className="container inner-page">
      <PageIntro
        label="Articles on Medium"
        title={title}
        description={description}
      />
      <WritingList locale="en" />
    </div>
  );
}
