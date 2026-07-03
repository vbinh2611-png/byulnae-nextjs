type Props = { label: string; title: React.ReactNode; desc?: string };
export default function SectionHead({ label, title, desc }: Props) {
  return (
    <div className="section-head">
      <div>
        <div className="label">{label}</div>
        <h1>{title}</h1>
      </div>
      {desc && <p>{desc}</p>}
    </div>
  );
}
