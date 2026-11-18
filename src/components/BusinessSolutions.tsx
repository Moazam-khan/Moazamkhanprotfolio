import { profile } from "@/data/profile";
import type { Locale } from "@/lib/locales";
import { Arrow } from "./Icon";

const content = {
  en: {
    label: "Digital solutions for your business",
    title: "Have a business challenge?",
    emphasis: "Let’s build a solution together.",
    description:
      "Whether you’re starting something new or improving the way your business works, you’re welcome to bring me your idea. I’ll help you shape it into a practical digital product.",
    services: [
      {
        title: "Web, mobile & SaaS",
        description:
          "Business websites, patient apps, booking platforms, and custom applications built around your users and workflows.",
      },
      {
        title: "ERPNext & business systems",
        description:
          "ERPNext installation, site deployment on a VPS, and customization through both the UI and code. Connected HR, CRM, accounting, and e-invoicing workflows.",
      },
      {
        title: "AI, integrations & deployment",
        description:
          "Document search with RAG, invoice automation with Ollama and OpenAI, API integrations, VPS configuration, and hosting migrations.",
      },
    ],
    processTitle: "How we’ll work together",
    steps: [
      {
        title: "Discuss your requirements",
        description:
          "We’ll talk through your business, users, existing systems, and the problem you want to solve.",
      },
      {
        title: "Agree on scope and timeline",
        description:
          "We’ll define the deliverables, priorities, budget, and timeline before development starts.",
      },
      {
        title: "Build, review and launch",
        description:
          "I’ll develop the solution, review progress with you, and prepare the agreed release for deployment.",
      },
    ],
    next: "Tell me about your business, the problem you want to solve, and what a useful result would look like.",
    action: "Discuss your business idea",
    channel: "Start a conversation on LinkedIn",
  },
  ar: {
    label: "حلول رقمية لأعمالك",
    title: "هل تواجه تحديًا في عملك؟",
    emphasis: "لنبنِ الحل معًا.",
    description:
      "سواء كنت تبدأ مشروعًا جديدًا أو تطور طريقة عمل شركتك، يسعدني الاستماع إلى فكرتك ومساعدتك على تحويلها إلى منتج رقمي يخدم احتياجاتك.",
    services: [
      {
        title: "مواقع وتطبيقات ومنصات SaaS",
        description:
          "مواقع أعمال وتطبيقات للمرضى ومنصات حجز وبرمجيات مخصصة تراعي المستخدمين وسير العمل.",
      },
      {
        title: "ERPNext وأنظمة الأعمال",
        description:
          "تثبيت ERPNext ونشر المواقع على خوادم VPS وتخصيصه عبر الواجهة والكود، مع ربط الموارد البشرية وإدارة العملاء والمحاسبة والفوترة الإلكترونية.",
      },
      {
        title: "الذكاء الاصطناعي والتكاملات والنشر",
        description:
          "استرجاع المعرفة باستخدام RAG وأتمتة الفواتير عبر Ollama وOpenAI وربط واجهات البرمجة وتهيئة الخوادم ونقل الاستضافة.",
      },
    ],
    processTitle: "كيف سنعمل معًا",
    steps: [
      {
        title: "نناقش متطلباتك",
        description:
          "نتحدث عن نشاطك ومستخدميك وأنظمتك الحالية والمشكلة التي تريد حلها.",
      },
      {
        title: "نتفق على النطاق والجدول الزمني",
        description:
          "نحدد المخرجات والأولويات والميزانية ومواعيد التسليم قبل بدء التطوير.",
      },
      {
        title: "نطور ونراجع ونطلق",
        description:
          "أطور الحل وأراجع التقدم معك وأجهز الإصدار المتفق عليه للنشر.",
      },
    ],
    next: "أخبرني عن نشاطك والتحدي الذي تريد حله والنتيجة التي تتطلع إليها.",
    action: "لنتحدث عن فكرتك",
    channel: "ابدأ محادثة على LinkedIn",
  },
} satisfies Record<
  Locale,
  {
    label: string;
    title: string;
    emphasis: string;
    description: string;
    services: { title: string; description: string }[];
    processTitle: string;
    steps: { title: string; description: string }[];
    next: string;
    action: string;
    channel: string;
  }
>;

export function BusinessSolutions({ locale = "en" }: { locale?: Locale }) {
  const copy = content[locale];

  return (
    <section
      id="business-solutions"
      className="container section-space business-solutions"
      aria-labelledby="business-solutions-title"
    >
      <div className="section-label">
        <span>
          <i /> {copy.label}
        </span>
      </div>
      <div className="business-solutions-intro" data-reveal>
        <h2 id="business-solutions-title">
          {copy.title}
          <br />
          <em>{copy.emphasis}</em>
        </h2>
        <p>{copy.description}</p>
      </div>
      <div className="business-solutions-grid">
        {copy.services.map((service, index) => (
          <article key={service.title} data-reveal>
            <span className="eyebrow accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
      <div
        className="business-process"
        aria-labelledby="business-process-title"
      >
        <h3 id="business-process-title">{copy.processTitle}</h3>
        <ol>
          {copy.steps.map((step, index) => (
            <li key={step.title} data-reveal>
              <span className="eyebrow accent" aria-hidden="true">
                {new Intl.NumberFormat(locale, {
                  minimumIntegerDigits: 2,
                }).format(index + 1)}
              </span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="business-solutions-action" data-reveal>
        <p>{copy.next}</p>
        <div>
          <a
            className="button button-light"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.action}
            <Arrow />
          </a>
          <span className="muted">{copy.channel}</span>
        </div>
      </div>
    </section>
  );
}
