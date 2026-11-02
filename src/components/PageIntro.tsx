export function PageIntro({
  label,
  title,
  emphasis,
  description,
}: {
  label: string;
  title: string;
  emphasis?: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">
        <i className="orange-dot" />
        {label}
      </p>
      <h1>
        {title}
        {emphasis && (
          <>
            <br />
            <em>{emphasis}</em>
          </>
        )}
        <span className="accent">.</span>
      </h1>
      <p>{description}</p>
    </div>
  );
}
