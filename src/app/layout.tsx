import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { contact, crmLabel, doctor, hasAddress, rqeLabel, site } from "@/content/site";
import { instagramHref } from "@/lib/links";
import { MotionProvider } from "@/components/ui/motion-provider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s | ${doctor.name}` },
  description: site.seo.description,
  applicationName: site.name,
  keywords: site.seo.keywords,
  authors: [{ name: doctor.name }],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  // Site ainda local: bloqueia indexação até a publicação autorizada.
  robots: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true" ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0c2038",
  width: "device-width",
  initialScale: 1,
};

// Dados estruturados de médico/consultório. Campos pendentes são omitidos.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  url: site.url,
  description: site.seo.description,
  medicalSpecialty: "PlasticSurgery",
  areaServed: { "@type": "City", name: `${doctor.city}, ${doctor.state}` },
  address: {
    "@type": "PostalAddress",
    ...(hasAddress && {
      streetAddress: [contact.address.street, contact.address.complement].filter(Boolean).join(", "),
    }),
    ...(contact.address.zip && { postalCode: contact.address.zip }),
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    addressCountry: "BR",
  },
  telephone: contact.phone || `+${contact.whatsapp}`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: contact.openingHours.days,
    opens: contact.openingHours.opens,
    closes: contact.openingHours.closes,
  },
  ...(instagramHref && { sameAs: [instagramHref] }),
  ...((crmLabel || rqeLabel) && {
    identifier: [crmLabel, rqeLabel].filter(Boolean).map((value) => ({ "@type": "PropertyValue", value })),
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        {/* Sem JavaScript, as animações de entrada não rodam: mostra o conteúdo direto. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
