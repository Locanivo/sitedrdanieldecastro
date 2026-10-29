"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { faq } from "@/content/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

const ease = [0.22, 1, 0.36, 1] as const;

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <li className="border-b border-ink/15">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
        >
          <span className="font-serif text-[1.35rem] leading-snug transition-colors group-hover:text-navy md:text-[1.6rem]">
            {q}
          </span>
          <span
            aria-hidden="true"
            className={`grid size-10 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-[var(--ease-premium)] ${
              open ? "rotate-45 border-ink bg-ink text-paper" : "border-ink/20 text-ink group-hover:border-ink/50"
            }`}
          >
            <Plus strokeWidth={1.25} className="size-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-a`}
            role="region"
            aria-labelledby={`${id}-q`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-8 pr-16 text-[0.9375rem] leading-relaxed text-ink/70 md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="section bg-paper">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading id="duvidas-title" eyebrow={faq.eyebrow} title={faq.title} />
            <Reveal delay={0.15} className="mt-10 hidden lg:block">
              <WhatsappButton variant="outline-dark">{faq.cta}</WhatsappButton>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-ink/15">
            {faq.items.map((item, index) => (
              <Item
                key={item.q}
                {...item}
                open={open === index}
                onToggle={() => setOpen(open === index ? null : index)}
              />
            ))}
          </ul>
          <div className="mt-10 lg:hidden">
            <WhatsappButton variant="outline-dark">{faq.cta}</WhatsappButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
