import { Reveal } from "./reveal";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  id?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, text, tone = "light", id, className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={className}>
      <p className={`eyebrow ${dark ? "text-mist" : "text-navy"}`}>{eyebrow}</p>
      <h2 id={id} className={`display-lg mt-6 ${dark ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`lead mt-6 max-w-xl ${dark ? "text-paper/70" : "text-ink/70"}`}>{text}</p>}
    </Reveal>
  );
}
