import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WritingList, writingCopy } from "@/components/WritingList";
import { Arrow } from "@/components/Icon";
import { ParticleField } from "@/components/ParticleField";
import {
  arabicCategories,
  arabicProjects,
  type ArabicProject,
} from "@/data/projects.ar";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/site";
import { portfolioSections } from "@/lib/locales";
import { arabicDescription, skills, experience } from "@/data/profile.ar";

type Props = { params: Promise<{ segments?: string[] }> };
const titles = {
  writing: writingCopy.ar.title,
  work: "معرض الأعمال",
  Projects: "معرض الأعمال",
  about: "نبذة عني",
  Experience: "الخبرة العملية",
  Education: "التعليم والشهادات",
  Contact: "تواصل معي",
};
export const dynamicParams = false;
export function generateStaticParams() {
  return [
    { segments: [] },
    ...[...portfolioSections, "Projects"].map((name) => ({ segments: [name] })),
    ...arabicProjects.map((project) => ({ segments: ["work", project.slug] })),
  ];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const segments = (await params).segments ?? [];
  const [section, slug] = segments;
  const project = arabicProjects.find((item) => item.slug === slug);
  const title =
    project?.title ?? titles[section as keyof typeof titles] ?? "مطور متكامل";
  const path =
    section === "Projects"
      ? "/work/"
      : segments.length
        ? "/" + segments.join("/") + "/"
        : "/";
  const metadata = pageMetadata(
    title,
    project?.summary ??
      (section === "writing" ? writingCopy.ar.description : arabicDescription),
    path,
    "ar",
  );
  return section
    ? metadata
    : { ...metadata, title: { absolute: "معظم خان | مطور متكامل في الرياض" } };
}

function Contact() {
  return (
    <section id="contact" className="container section-space contact-section">
      <div className="section-label">
        <span>
          <i /> التواصل
        </span>
      </div>
      <div className="contact-content" data-reveal>
        <p className="eyebrow">
          <span className="status-dot" /> متاح لمناقشة المشاريع
        </p>
        <h2>لنتحدث عن مشروعك</h2>
        <a className="button button-light" href={profile.linkedin}>
          تواصل معي عبر LinkedIn <Arrow />
        </a>
        <p>
          أخبرني بما تحتاجه، سواء كان تطبيقًا أو منصة SaaS أو نظامًا مخصصًا
          لأعمالك.
        </p>
      </div>
    </section>
  );
}

function Card({
  project,
  featured = false,
}: {
  project: ArabicProject;
  featured?: boolean;
}) {
  const href = "/ar/work/" + project.slug + "/";
  return (
    <article
      className={
        "arabic-project project-card" + (featured ? " project-feature" : "")
      }
      data-project={project.slug}
      data-reveal
    >
      <Link
        className="project-preview"
        href={href}
        aria-label={"تفاصيل مشروع " + project.title}
      >
        <div className="project-window">
          <div className="browser-bar" dir="ltr">
            <span className="browser-dots" aria-hidden="true">
              •••
            </span>
            <span>{new URL(project.url).hostname}</span>
            <Arrow />
          </div>
          <div className="project-image">
            <Image
              src={project.image}
              alt={"لقطة من مشروع " + project.title}
              width={1400}
              height={850}
              sizes="(max-width: 700px) 90vw, 50vw"
            />
          </div>
        </div>
        <div className="preview-caption">
          <span>{arabicCategories[project.category]}</span>
          <span>{project.status}</span>
        </div>
      </Link>
      <div className="project-copy">
        <h3>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <Link className="text-link" href={href}>
          تفاصيل المشروع <Arrow />
        </Link>
      </div>
    </article>
  );
}

function Home() {
  const featured = featuredProjects.map(
    (item) => arabicProjects.find((project) => project.slug === item.slug)!,
  );
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-topline eyebrow">
          <span>
            <i className="orange-dot" /> مهندس ومطور برمجيات
          </span>
          <span>الرياض، السعودية</span>
        </div>
        <div className="hero-aura" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="hero-portrait hero-portrait-suit hero-portrait-hd">
          <div className="hero-photo">
            <Image
              src="/images/moazam-suit-hd.webp"
              alt="معظم خان يرتدي بدلة"
              width={1065}
              height={1476}
              priority
              sizes="(max-width: 700px) 480px, 680px"
            />
          </div>
          <ParticleField />
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">
            مطور متكامل · تطبيقات SaaS والذكاء الاصطناعي
          </p>
          <h1 id="hero-title">
            معظم{" "}
            <em>
              خان<span className="accent">.</span>
            </em>
          </h1>
          <p className="hero-description">
            أطور تطبيقات الويب والجوال ومنصات SaaS، وأدمج الذكاء الاصطناعي في
            سير العمل.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button">
              شاهد أعمالي <Arrow direction="down" />
            </a>
            <a href="#contact" className="text-link">
              تواصل معي <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-foot eyebrow">
          <a href="#work">
            تصفح الأعمال <Arrow direction="down" />
          </a>
          <span>تطوير متكامل للويب والجوال</span>
          <span>الرياض، السعودية</span>
        </div>
      </section>
      <section id="work" className="container section-space">
        <div className="section-label">
          <span>
            <i /> أعمال مختارة
          </span>
        </div>
        <div className="heading-row" data-reveal>
          <h2>مشاريع طورتها للأعمال</h2>
        </div>
        <div className="arabic-content">
          <Card project={featured[0]} featured />
          <div className="project-grid">
            {featured.slice(1).map((project) => (
              <Card key={project.slug} project={project} />
            ))}
          </div>
        </div>
        <Link className="text-link" href="/ar/work/">
          تصفح جميع المشاريع <Arrow />
        </Link>
      </section>
      <section id="about" className="container section-space">
        <div className="section-label">
          <span>
            <i /> نبذة عني
          </span>
        </div>
        <div className="arabic-content" data-reveal>
          <h2>من هندسة الأنظمة إلى تطوير المنتجات</h2>
          <p>
            أنا معظم خان، مطور متكامل وخريج هندسة أنظمة الحاسوب. أعمل في الرياض
            وأربط الواجهات بواجهات البرمجة وقواعد البيانات والبنية التحتية
            للنشر.
          </p>
          <Link className="text-link" href="/ar/about/">
            المزيد عني <Arrow />
          </Link>
        </div>
      </section>
      <section id="stack" className="container section-space">
        <div className="section-label">
          <span>
            <i /> المهارات
          </span>
        </div>
        <div className="arabic-content">
          <h2>مهاراتي التقنية</h2>
        </div>
        <div className="arabic-capabilities">
          {skills.map(([title, description]) => (
            <details key={title} data-reveal>
              <summary>{title}</summary>
              <p>{description}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="experience" className="container section-space">
        <div className="section-label">
          <span>
            <i /> الخبرة
          </span>
        </div>
        <div className="arabic-content">
          <h2>خبرتي العملية</h2>
        </div>
        <ExperienceList entries={experience.slice(0, 4)} />
        <div className="resource-links">
          <Link className="text-link" href="/ar/Experience/">
            عرض الخبرة كاملة <Arrow />
          </Link>
          <Link className="text-link" href="/ar/Education/">
            التعليم والشهادات <Arrow />
          </Link>
        </div>
      </section>
      <Contact />
    </>
  );
}

function ExperienceList({
  entries,
}: {
  entries: readonly (readonly [string, string])[];
}) {
  return (
    <div className="experience-list arabic-content">
      {entries.map(([title, description], index) => (
        <article key={title} data-reveal>
          <span className="eyebrow experience-number">{index + 1}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}

function Page({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container inner-page">
      <header className="page-intro">
        <p className="eyebrow">معظم خان</p>
        <h1>{title}</h1>
      </header>
      {children}
    </div>
  );
}

function ProjectDetails({ project }: { project: ArabicProject }) {
  return (
    <>
      <Page title={project.title}>
        <div className="arabic-content">
          <p className="eyebrow">
            {arabicCategories[project.category]} · {project.status}
          </p>
          <p className="lead">{project.summary}</p>
          <Image
            className="case-image"
            src={project.image}
            alt={"لقطة من مشروع " + project.title}
            width={1400}
            height={850}
            sizes="90vw"
          />
          {project.contribution && (
            <>
              <h2>دوري في المشروع</h2>
              <p>{project.contribution}</p>
            </>
          )}
          {project.features.length > 0 && (
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          <h2>التقنيات والأدوات</h2>
          <ul className="tag-list">
            {project.stack.map((technology) => (
              <li key={technology} dir="auto">
                {technology}
              </li>
            ))}
          </ul>
          <div className="resource-links">
            <a href={project.url} className="text-link">
              زيارة المشروع <Arrow />
            </a>
            {project.resources?.map((resource, index) => (
              <a key={resource.url} href={resource.url} className="text-link">
                {index === 0
                  ? "تطبيق المرضى على iOS"
                  : "تطبيق المرضى على Android"}{" "}
                <Arrow />
              </a>
            ))}
            <Link href="/ar/work/" className="text-link">
              جميع المشاريع <Arrow />
            </Link>
          </div>
        </div>
      </Page>
      <Contact />
    </>
  );
}

export default async function ArabicPage({ params }: Props) {
  const segments = (await params).segments ?? [];
  const [section, slug] = segments;
  if (!section) return <Home />;
  if (section === "work" && slug && segments.length === 2) {
    const project = arabicProjects.find((item) => item.slug === slug);
    if (project) return <ProjectDetails project={project} />;
  }
  if (segments.length !== 1) notFound();

  switch (section) {
    case "writing":
      return (
        <Page title={titles.writing}>
          <p className="arabic-content">{writingCopy.ar.description}</p>
          <WritingList locale="ar" />
        </Page>
      );
    case "work":
    case "Projects":
      return (
        <Page title={titles.work}>
          <p className="arabic-content">
            منصات وتطبيقات ومواقع أعمال وتجارب برمجية.
          </p>
          {Object.entries(arabicCategories).map(([category, label]) => (
            <section key={category} className="arabic-content">
              <h2>{label}</h2>
              <div className="project-grid">
                {arabicProjects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <Card key={project.slug} project={project} />
                  ))}
              </div>
            </section>
          ))}
        </Page>
      );
    case "about":
      return (
        <>
          <Page title={titles.about}>
            <div className="about-page-grid">
              <div className="about-photo">
                <Image
                  src="/images/moazam-suit-hd.webp"
                  alt="معظم خان"
                  width={1065}
                  height={1476}
                  sizes="(max-width: 700px) 90vw, 40vw"
                />
              </div>
              <div className="prose">
                <h2>مطور متكامل في الرياض</h2>
                <p>
                  تخرجت في هندسة أنظمة الحاسوب من جامعة الهندسة والتقنية في
                  بيشاور. أعمل في تطوير الواجهات والخوادم والتكاملات، وأصمم
                  برمجيات مخصصة وتطبيقات جوال.
                </p>
                <p>
                  شملت أعمالي متاجر متعددة البائعين ومنصات حجز وبوابات مدرسية
                  وأنظمة للخدمات القانونية. أخصص ERPNext وأدمج Ollama وOpenAI
                  لأتمتة إنشاء الفواتير.
                </p>
                <p>
                  تشمل خبرتي أيضًا الاستضافة وإدارة النطاقات وتحسين ظهور المواقع
                  في البحث.
                </p>
                <a className="text-link" href={profile.github}>
                  ملفي على GitHub <Arrow />
                </a>
              </div>
            </div>
          </Page>
          <Contact />
        </>
      );
    case "Experience":
      return (
        <Page title={titles.Experience}>
          <ExperienceList entries={experience} />
        </Page>
      );
    case "Education":
      return (
        <Page title={titles.Education}>
          <section className="arabic-content" data-reveal>
            <h2>التعليم</h2>
            <ul>
              <li>
                بكالوريوس العلوم في هندسة أنظمة الحاسوب، جامعة الهندسة والتقنية
                في بيشاور
              </li>
              <li>المرحلة التمهيدية للهندسة، TWPSAC في أبوت آباد</li>
              <li>المرحلة الثانوية، APSACS في ريسالبور</li>
            </ul>
          </section>
          <section className="arabic-content" data-reveal>
            <h2>الشهادات</h2>
            <ul>
              <li>مقدمة في الشبكات، أكاديمية Cisco للشبكات، ٢٠٢٥</li>
              <li>
                أساسيات التبديل والتوجيه والشبكات اللاسلكية، أكاديمية Cisco
                للشبكات، ٢٠٢٥
              </li>
              <li>
                شبكات المؤسسات والأمن والأتمتة، أكاديمية Cisco للشبكات، ٢٠٢٥
              </li>
              <li>تصميم الويب المتجاوب، freeCodeCamp، ٢٠٢٥</li>
              <li>تطوير الخوادم وواجهات البرمجة، freeCodeCamp، ٢٠٢٥</li>
            </ul>
          </section>
          <section className="arabic-content" data-reveal>
            <h2>المساهمات واللغات</h2>
            <p>
              حصلت على شهادة تقدير لمساهمتي في مبادرة الحركة الشبابية الخضراء
              عام ٢٠٢٤، ودرع تقدير لدوري في برنامج توزيع الحواسيب المحمولة
              بجامعة الهندسة والتقنية. شاركت في تنظيم حملات توعوية مع جمعية
              Let’s Help، وألعب في دوري الكريكيت في الرياض.
            </p>
            <p>
              الأردية والبشتوية لغتان أم. أجيد الإنجليزية، ومستواي في العربية
              أساسي.
            </p>
          </section>
        </Page>
      );
    case "Contact":
      return (
        <>
          <Page title={titles.Contact}>
            <div className="arabic-content">
              <p>
                أقيم في الرياض، السعودية. يمكنك التواصل معي بشأن تطوير تطبيقات
                الويب والجوال أو تكاملات ERPNext والذكاء الاصطناعي.
              </p>
              <div className="resource-links">
                <a className="text-link" href={profile.linkedin}>
                  LinkedIn <Arrow />
                </a>
                <a className="text-link" href={profile.github}>
                  GitHub <Arrow />
                </a>
              </div>
            </div>
          </Page>
          <Contact />
        </>
      );
    default:
      notFound();
  }
}
