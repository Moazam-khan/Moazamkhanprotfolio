export function SectionHeading({
  number,
  label,
  note,
  title,
  emphasis,
  description,
}: {
  number: string;
  label: string;
  note?: string;
  title: string;
  emphasis?: string;
  description?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-label">
        <span>
          <i />
          {number} / {label}
        </span>
        {note && <span>{note}</span>}
      </div>
      <div className="heading-row">
        <h2>
          <span className="heading-line">{title}</span>
          {emphasis && (
            <span className="heading-line">
              <em>{emphasis}</em>
            </span>
          )}
        </h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
