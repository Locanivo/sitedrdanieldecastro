import { ArrowDown } from "lucide-react";
import { hero, photos } from "@/content/content";
import { crmLabel, doctor, rqeLabel } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Pending } from "@/components/ui/pending";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-paper">
      {/* Luz e linhas arquitetônicas discretas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[20%] -top-[30%] size-[60rem] rounded-full bg-[radial-gradient(closest-side,rgba(100,139,170,0.22),transparent)]" />
        <div className="absolute inset-y-0 left-[58%] hidden w-px bg-line-dark/60 lg:block" />
        <div className="absolute inset-x-0 bottom-[5.5rem] hidden h-px bg-line-dark/60 lg:block" />
      </div>

      <div className="container-site relative grid min-h-[100svh] items-center gap-10 pb-28 pt-24 sm:gap-14 sm:pt-32 md:pt-40 lg:grid-cols-12 lg:gap-10 lg:pb-36 lg:pt-36">
        <div className="lg:col-span-7 lg:pr-10">
          <Reveal y={16}>
            <p className="flex flex-col gap-2">
              <span className="eyebrow text-mist">{hero.eyebrow}</span>
              <span className="whitespace-nowrap pl-[2.875rem] font-serif text-xl italic text-paper/90">{doctor.name}</span>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 id="hero-title" className="display-xl mt-8 max-w-[13ch] md:mt-10">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="lead mt-8 max-w-[34rem] text-paper/70">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={0.34} className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <WhatsappButton variant="light">{hero.primaryCta}</WhatsappButton>
            <Button href="#sobre" variant="outline-light" arrow={false}>
              {hero.secondaryCta}
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={32} className="relative order-first lg:order-none lg:col-span-5">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 top-4 left-4 hidden border border-mist/30 sm:block md:-bottom-6 md:-right-6 md:left-6 md:top-6" />
          <figure className="group relative">
            <PhotoFrame
              photo={photos.heroPortrait}
              tone="dark"
              eager
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[5/4] w-full sm:aspect-[4/5]"
            />
            {/* Leve integração com o fundo azul, sem cobrir o rosto */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/60 to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-paper/10" />
            <figcaption className="absolute -left-px bottom-10 hidden bg-paper px-6 py-5 text-ink md:block lg:-left-10">
              <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-navy">{doctor.specialty}</span>
              <span className="mt-1.5 block font-serif text-xl">
                {doctor.city} – {doctor.state}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Faixa de identificação profissional */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-site flex h-[5.5rem] items-center justify-between gap-6 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-paper/60">
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{doctor.title}</span>
            {crmLabel ? <span>{crmLabel}</span> : <Pending>CRM-{doctor.crmState} a confirmar</Pending>}
            {rqeLabel ? <span>{rqeLabel}</span> : <Pending className="hidden sm:inline-flex">RQE a confirmar</Pending>}
          </p>
          <a href="#sobre" className="hidden items-center gap-3 transition-colors hover:text-paper md:flex">
            Role para conhecer
            <ArrowDown aria-hidden="true" strokeWidth={1.25} className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
