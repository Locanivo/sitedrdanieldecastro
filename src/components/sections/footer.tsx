import { cityLine, contact, crmLabel, doctor, hasAddress, nav, rqeLabel, site } from "@/content/site";
import { instagramHref, phoneHref, whatsappLinkProps } from "@/lib/links";
import { Pending } from "@/components/ui/pending";

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-mist">{children}</h2>;
}

const link = "text-paper/75 transition-colors hover:text-paper";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink pb-24 text-paper md:pb-0">
      <div className="container-site grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        {/* Identificação exigida pela Resolução CFM nº 2.336/2023: nome, CRM/UF e RQE da especialidade */}
        <div className="lg:col-span-4">
          <p className="font-serif text-3xl">{doctor.name}</p>
          <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.3em] text-mist">{doctor.title}</p>
          <p className="mt-6 text-sm text-paper/75">
            {crmLabel ?? <Pending>CRM-{doctor.crmState} a confirmar</Pending>}
            {rqeLabel ? ` | ${rqeLabel}` : <Pending className="ml-2">RQE a confirmar</Pending>}
          </p>
        </div>

        <div className="lg:col-span-3">
          <Heading>Endereço</Heading>
          {hasAddress ? (
            <address className="mt-5 text-sm not-italic leading-relaxed text-paper/75">
              {contact.address.street}
              {contact.address.district && ` – ${contact.address.district}`}
              <br />
              {cityLine}
            </address>
          ) : (
            <p className="mt-5">
              <Pending>Endereço a confirmar</Pending>
            </p>
          )}
        </div>

        <div className="lg:col-span-3">
          <Heading>Contato e atendimento</Heading>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a {...whatsappLinkProps()} className={link}>
                WhatsApp: {contact.whatsappDisplay || "fale conosco"}
              </a>
            </li>
            {phoneHref && (
              <li>
                <a href={phoneHref} className={link}>
                  {contact.phone}
                </a>
              </li>
            )}
            {instagramHref && (
              <li>
                <a href={instagramHref} target="_blank" rel="noopener noreferrer" className={link}>
                  Instagram
                </a>
              </li>
            )}
            {contact.hours.map((row) => (
              <li key={row.days} className="text-paper/75">
                {row.days}: {row.hours.toLowerCase() === "fechado" ? "fechado" : row.hours}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-2">
          <Heading>Navegação</Heading>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={`/${item.href}`} className={link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-site flex flex-col gap-4 py-8 text-xs text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {doctor.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-md md:text-center">
            As informações deste site têm caráter informativo e não substituem a consulta médica.
          </p>
          <a href="/politica-de-privacidade" className="transition-colors hover:text-paper">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
