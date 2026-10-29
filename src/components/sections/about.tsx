import { about, photos } from "@/content/content";
import { crmLabel, doctor, rqeLabel } from "@/content/site";
import { Button } from "@/components/ui/button";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section bg-paper">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <figure className="group relative">
              <PhotoFrame photo={photos.aboutPortrait} sizes="(min-width: 1024px) 36vw, 100vw" className="aspect-[4/5] w-full" />
              <figcaption className="mt-4 flex items-center justify-between text-xs tracking-[0.08em] text-ink/60">
                <span>{doctor.name}</span>
                <span>
                  {doctor.city} – {doctor.state}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            <Reveal>
              <p className="eyebrow text-navy">{about.eyebrow}</p>
              <h2 id="sobre-title" className="display-lg mt-6">
                {about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "font-serif text-[1.5rem] leading-snug text-ink md:text-[1.7rem]" : "lead text-ink/70"}>
                  {paragraph}
                </p>
              ))}
              <p className="pt-2 font-serif text-xl italic text-navy">— {doctor.name}</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <Button href={about.ctaHref} variant="outline-dark">
                {about.cta}
              </Button>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 lg:mt-24">
          <div id="trajetoria" className="grid scroll-mt-28 gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h3 className="font-serif text-[1.75rem] leading-tight text-ink md:text-[2rem]">
                {doctor.name} <span className="hidden text-mist sm:inline">|</span>{" "}
                <span className="block sm:inline">{doctor.title}</span>
              </h3>
              <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-navy">
                {[crmLabel, rqeLabel].filter(Boolean).join(" | ")}
              </p>
            </div>
            <ul aria-label="Formação" className="divide-y divide-line lg:col-span-6 lg:col-start-7">
              {doctor.education.map((item) => (
                <li key={item.area} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-serif text-xl text-ink">{item.area}</span>
                  <span className="text-sm text-ink/65 sm:text-right">
                    {item.institution}
                    {item.year && <span className="ml-2 text-navy">{item.year}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
