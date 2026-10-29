import { contact, hasWhatsapp, mapsAddress } from "@/content/site";

/** Link único de WhatsApp usado por todos os botões do site. */
export function whatsappHref(message = contact.whatsappMessage) {
  if (!hasWhatsapp) return "#contato";
  return `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

/** Props de âncora para o WhatsApp: abre em nova aba só quando é link externo. */
export function whatsappLinkProps() {
  return hasWhatsapp
    ? { href: whatsappHref(), target: "_blank", rel: "noopener noreferrer" }
    : { href: whatsappHref() };
}

const mapsQuery = mapsAddress ?? `${contact.address.city} - ${contact.address.state}`;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=${mapsAddress ? 16 : 13}&output=embed`;

/** Abre o endereço no Google Maps com a rota até o consultório. */
export const mapsRouteHref = mapsAddress
  ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsAddress)}`
  : null;

export const instagramHref = contact.instagram
  ? `https://www.instagram.com/${contact.instagram.replace(/^@/, "")}/`
  : null;

export const phoneHref = contact.phone ? `tel:+55${contact.phone.replace(/\D/g, "")}` : null;
