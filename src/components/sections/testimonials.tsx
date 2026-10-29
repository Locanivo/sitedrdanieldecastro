"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonialsSection, visibleTestimonials, type Testimonial } from "@/content/testimonials";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function Card({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-line-dark p-7 md:p-9">
      <span aria-hidden="true" className="font-serif text-6xl leading-[0.5] text-mist">
        &ldquo;
      </span>
      <blockquote className="mt-5 flex-1">
        <p className="text-[0.9375rem] leading-relaxed text-paper/80">{item.text}</p>
      </blockquote>
      <figcaption className="mt-8 border-t border-line-dark pt-5">
        <span className="block font-serif text-xl text-paper">{item.name}</span>
        {item.source && <span className="mt-1 block text-xs tracking-[0.06em] text-paper/55">{item.source}</span>}
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setEdges({
      start: track.scrollLeft <= 4,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  // Avaliações só são publicadas após aprovação (ver content/testimonials.ts).
  if (visibleTestimonials.length === 0) return null;

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.clientWidth + 24), behavior: "smooth" });
  };

  const navButton =
    "grid size-12 place-items-center rounded-full border border-paper/25 text-paper transition-colors duration-500 hover:border-paper disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="section bg-ink text-paper">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            id="avaliacoes-title"
            tone="dark"
            eyebrow={testimonialsSection.eyebrow}
            title={testimonialsSection.title}
            text={testimonialsSection.subtitle}
            className="max-w-3xl"
          />
          <div className="hidden gap-3 md:flex">
            <button type="button" onClick={() => scroll(-1)} disabled={edges.start} aria-label="Relato anterior" className={navButton}>
              <ArrowLeft strokeWidth={1.25} className="size-5" />
            </button>
            <button type="button" onClick={() => scroll(1)} disabled={edges.end} aria-label="Próximo relato" className={navButton}>
              <ArrowRight strokeWidth={1.25} className="size-5" />
            </button>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-14 md:mt-16">
          <ul
            ref={trackRef}
            onScroll={update}
            aria-label="Relatos de pacientes"
            className="relative flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visibleTestimonials.map((item) => (
              <li key={item.name} className="w-[85%] shrink-0 snap-start md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]">
                <Card item={item} />
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-8 flex items-center justify-between gap-6">
          <p className="max-w-xl text-xs leading-relaxed text-paper/55">{testimonialsSection.disclaimer}</p>
          <div className="flex gap-3 md:hidden">
            <button type="button" onClick={() => scroll(-1)} disabled={edges.start} aria-label="Relato anterior" className={navButton}>
              <ArrowLeft strokeWidth={1.25} className="size-5" />
            </button>
            <button type="button" onClick={() => scroll(1)} disabled={edges.end} aria-label="Próximo relato" className={navButton}>
              <ArrowRight strokeWidth={1.25} className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
