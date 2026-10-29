import { Clock, MapPin, Phone, Stethoscope } from "lucide-react";
import { location } from "@/content/content";
import { contact, crmLabel, doctor, hasAddress, hasWhatsapp, rqeLabel } from "@/content/site";
import { instagramHref, mapsEmbedSrc, mapsRouteHref, phoneHref, whatsappLinkProps } from "@/lib/links";
import { Button } from "@/components/ui/button";
import { InstagramIcon, WhatsappIcon } from "@/components/ui/icons";
import { Pending } from "@/components/ui/pending";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 border-t border-ink/15 py-6">
      <span className="mt-0.5 text-navy">{icon}</span>
      <div className="min-w-0 flex-1">
        <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-navy">{label}</dt>
        <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{children}</dd>
      </div>
    </div>
  );
}

const iconClass = "size-5";
const textLink = "underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink";

export function Location() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="section bg-ice">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading id="contato-title" eyebrow={location.eyebrow} title={location.title} text={location.text} />

          <Reveal delay={0.1}>
            <dl className="mt-12">
              <Row icon={<Stethoscope strokeWidth={1.25} className={iconClass} />} label="Profissional">
                <span className="block font-serif text-xl">{doctor.name}</span>
                {doctor.title}
                <span className="mt-1 block text-sm text-ink/70">
                  {crmLabel ?? <Pending className="text-navy">CRM a confirmar</Pending>}
                  {rqeLabel && <span aria-hidden="true"> | </span>}
                  {rqeLabel}
                </span>
              </Row>
              <Row icon={<MapPin strokeWidth={1.25} className={iconClass} />} label="Endereço">
                {hasAddress ? (
                  <address className="not-italic">
                    {contact.address.street}
                    {contact.address.complement && `, ${contact.address.complement}`}
                    <br />
                    {contact.address.district}
                    <br />
                    {contact.address.city} – {contact.address.state}
                    {contact.address.zip && (
                      <>
                        <br />
                        CEP {contact.address.zip}
                      </>
                    )}
                  </address>
                ) : (
                  <span className="flex flex-col items-start gap-2">
                    {contact.address.city} – {contact.address.state}
                    <Pending className="text-navy">Endereço completo a confirmar</Pending>
                  </span>
                )}
              </Row>
              <Row icon={<WhatsappIcon className={iconClass} />} label="WhatsApp">
                {hasWhatsapp ? (
                  <a {...whatsappLinkProps()} className={textLink}>
                    {contact.whatsappDisplay}
                  </a>
                ) : (
                  <Pending className="text-navy">Número a confirmar</Pending>
                )}
              </Row>
              {phoneHref && (
                <Row icon={<Phone strokeWidth={1.25} className={iconClass} />} label="Telefone">
                  <a href={phoneHref} className={textLink}>
                    {contact.phone}
                  </a>
                </Row>
              )}
              {instagramHref && (
                <Row icon={<InstagramIcon className={iconClass} />} label="Instagram">
                  <a href={instagramHref} target="_blank" rel="noopener noreferrer" className={textLink}>
                    @{contact.instagram.replace(/^@/, "")}
                  </a>
                </Row>
              )}
              <Row icon={<Clock strokeWidth={1.25} className={iconClass} />} label="Atendimento">
                {contact.hours.length > 0 ? (
                  <>
                    <ul className="max-w-xs">
                      {contact.hours.map((row) => (
                        <li key={row.days} className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/15 py-1.5 last:border-0">
                          <span>{row.days}</span>
                          <span className="tabular-nums text-ink/75">{row.hours}</span>
                        </li>
                      ))}
                    </ul>
                    {contact.hoursNote && <p className="mt-3 max-w-xs text-xs leading-relaxed text-ink/60">{contact.hoursNote}</p>}
                  </>
                ) : (
                  <Pending className="text-navy">Horários a confirmar</Pending>
                )}
              </Row>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappButton variant="dark">Agendar pelo WhatsApp</WhatsappButton>
            {mapsRouteHref ? (
              <Button
                href={mapsRouteHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-dark"
                icon={<MapPin aria-hidden="true" strokeWidth={1.5} className="size-4" />}
              >
                {location.cta}
              </Button>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-dashed border-ink/30 px-7 text-[0.8125rem] font-semibold text-ink/55"
              >
                {location.cta} · após confirmar o endereço
              </span>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative h-full min-h-[22rem] overflow-hidden bg-line md:min-h-[32rem]">
            <iframe
              title={`Mapa de localização do consultório — ${contact.address.city} – ${contact.address.state}`}
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 [filter:grayscale(0.85)_contrast(1.05)]"
            />
            {!hasAddress && (
              <p className="pointer-events-none absolute left-4 right-4 top-4 bg-paper px-4 py-3 text-xs font-medium text-ink sm:right-auto">
                Mapa da cidade · o ponto exato será exibido após a confirmação do endereço
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
