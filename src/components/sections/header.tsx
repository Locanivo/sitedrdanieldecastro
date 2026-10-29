"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { crmLabel, doctor, nav } from "@/content/site";
import { whatsappLinkProps } from "@/lib/links";
import { WhatsappIcon } from "@/components/ui/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção visível.
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Menu mobile: trava a rolagem e fecha com Esc.
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500 ease-[var(--ease-premium)] ${
        solid ? "border-b border-line bg-paper/85 text-ink backdrop-blur-xl" : "border-b border-transparent text-paper"
      }`}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <a href="#inicio" className="relative z-10 flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-[1.4rem] font-medium tracking-[0.01em] md:text-[1.55rem]">{doctor.name}</span>
          <span className={`mt-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.3em] ${solid ? "text-navy" : "text-mist"}`}>
            {doctor.specialty}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "location" : undefined}
                  className="group relative py-2 text-[0.8125rem] font-medium tracking-[0.02em] opacity-80 transition-opacity hover:opacity-100 aria-[current]:opacity-100"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-x-100 group-aria-[current]:scale-x-100 ${
                      solid ? "bg-navy" : "bg-mist"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <a
            {...whatsappLinkProps()}
            className={`hidden min-h-11 items-center gap-2.5 rounded-full px-5 text-[0.8125rem] font-semibold tracking-[0.03em] transition-colors duration-500 md:inline-flex ${
              solid ? "bg-ink text-paper hover:bg-navy" : "bg-paper text-ink hover:bg-ice"
            }`}
          >
            <WhatsappIcon className="size-4" />
            Agendar consulta
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={`grid size-11 place-items-center rounded-full border transition-colors xl:hidden ${
              solid ? "border-ink/15 hover:border-ink/40" : "border-paper/25 hover:border-paper/60"
            }`}
          >
            {open ? <X strokeWidth={1.25} className="size-5" /> : <Menu strokeWidth={1.25} className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 -z-0 flex flex-col overflow-y-auto bg-ink pb-10 pt-28 text-paper xl:hidden"
          >
            <nav aria-label="Menu" className="container-site flex-1">
              <ul className="border-t border-line-dark">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.06 + index * 0.045 }}
                    className="border-b border-line-dark"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 font-serif text-[2rem] leading-none sm:text-[2.5rem]"
                    >
                      {item.label}
                      <span className="font-sans text-[0.6875rem] font-semibold tracking-[0.2em] text-mist">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="container-site mt-10 flex flex-col gap-6"
            >
              <a
                {...whatsappLinkProps()}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-paper text-[0.8125rem] font-semibold tracking-[0.04em] text-ink"
              >
                <WhatsappIcon className="size-[1.15rem]" />
                Agendar consulta
              </a>
              <p className="text-xs tracking-[0.08em] text-paper/60">
                {doctor.title} · {doctor.city} – {doctor.state}
                {crmLabel && ` · ${crmLabel}`}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
