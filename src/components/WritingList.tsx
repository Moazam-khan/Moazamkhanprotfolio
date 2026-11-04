import { mediumProfile, writing } from "@/data/writing";
import type { Locale } from "@/lib/locales";
import { Arrow } from "./Icon";

export const writingCopy = {
  en: {
    title: "Writing",
    description:
      "Articles by Moazam Khan on system design, backend development, terminal tools, and lessons from real deployments.",
    profile: "All articles on Medium",
    language: "English on Medium",
  },
  ar: {
    title: "المقالات",
    description:
      "مقالات معظم خان عن تصميم الأنظمة وتطوير الخوادم وأدوات الطرفية ودروس من تجارب النشر.",
    profile: "جميع المقالات على Medium",
    language: "المقال بالإنجليزية على Medium",
  },
};

export function WritingList({ locale }: { locale: Locale }) {
  const copy = writingCopy[locale];
  const format = new Intl.DateTimeFormat(locale === "ar" ? "ar-SA" : "en-GB", {
    calendar: "gregory",
    dateStyle: "medium",
    timeZone: "UTC",
  });

  return (
    <>
      <div className="resource-links">
        <a className="text-link" href={mediumProfile}>
          {copy.profile} <Arrow />
        </a>
      </div>
      <div className="experience-list section-space">
        {writing.map((article, index) => (
          <article key={article.slug} data-reveal>
            <span className="eyebrow experience-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>
                <a href={mediumProfile + "/" + article.slug} hrefLang="en">
                  {article[locale].title} <span aria-hidden="true">↗</span>
                </a>
              </h3>
              <p className="experience-role">
                <time dateTime={article.date}>
                  {format.format(new Date(article.date))}
                </time>{" "}
                · {copy.language}
              </p>
            </div>
            <p>{article[locale].summary}</p>
          </article>
        ))}
      </div>
    </>
  );
}
