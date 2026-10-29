import { office } from "@/content/content";
import { Button } from "@/components/ui/button";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";

// Composição assimétrica conforme a quantidade de fotos (as fotos atuais são horizontais).
const layouts: Record<number, { cell: string; ratio: string }[]> = {
  3: [
    { cell: "md:col-span-7", ratio: "aspect-[3/2]" },
    { cell: "md:col-span-5 md:mt-24", ratio: "aspect-[4/3]" },
    { cell: "md:col-span-7 md:col-start-5", ratio: "aspect-[3/2]" },
  ],
  4: [
    { cell: "md:col-span-7", ratio: "aspect-[3/2]" },
    { cell: "md:col-span-5 md:mt-24", ratio: "aspect-[4/3]" },
    { cell: "md:col-span-5", ratio: "aspect-[4/3]" },
    { cell: "md:col-span-7 md:mt-24", ratio: "aspect-[3/2]" },
  ],
};

// Só exibe espaços com foto real; os demais aguardam o envio da imagem.
const gallery = office.gallery.filter((photo) => photo.src);
const layout = layouts[gallery.length] ?? layouts[4];

export function Office() {
  return (
    <section id="consultorio" aria-labelledby="consultorio-title" className="section bg-paper">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-navy">{office.eyebrow}</p>
            <h2 id="consultorio-title" className="display-lg mt-6 max-w-[15ch]">
              {office.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="lead text-ink/70">{office.text}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
          {gallery.map((photo, index) => (
            <Reveal as="li" key={photo.label} delay={(index % 2) * 0.08} className={layout[index % layout.length].cell}>
              <figure className="group">
                <PhotoFrame
                  photo={photo}
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className={`w-full ${layout[index % layout.length].ratio}`}
                />
                <figcaption className="mt-4 flex items-center gap-4 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-ink/60">
                  <span className="text-navy">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-6 bg-ink/20" aria-hidden="true" />
                  {photo.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 flex justify-start md:justify-end">
          <Button href="#contato" variant="outline-dark">
            {office.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
