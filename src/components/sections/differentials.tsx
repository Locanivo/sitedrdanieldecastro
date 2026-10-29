import { Ear, MessagesSquare, ScanFace, ShieldCheck } from "lucide-react";
import { differentials, photos } from "@/content/content";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = { ear: Ear, scan: ScanFace, shield: ShieldCheck, messages: MessagesSquare };

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="section bg-ink text-paper">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          {/* Fixo só em telas altas o bastante para o título e a foto caberem inteiros */}
          <div className="lg:top-32 lg:[@media(min-height:840px)]:sticky">
            <SectionHeading
              id="diferenciais-title"
              tone="dark"
              eyebrow={differentials.eyebrow}
              title={differentials.title}
              text={differentials.text}
            />
            <Reveal delay={0.1} className="group relative mt-12 max-w-md">
              <PhotoFrame photo={photos.surgeryPortrait} sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[3/2] w-full" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-paper/10" />
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {differentials.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 2) * 0.1}
                className={`border-t border-line-dark py-10 ${index % 2 === 1 ? "sm:mt-20" : ""}`}
              >
                <Icon aria-hidden="true" strokeWidth={1} className="size-9 text-mist" />
                <h3 className="display-md mt-8">{item.title}</h3>
                <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-paper/65">{item.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
