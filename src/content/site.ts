/**
 * Configuração central do site.
 *
 * Tudo o que for `null` ou string vazia é uma informação PENDENTE: o site
 * mostra um marcador "a confirmar" no lugar e omite o dado do SEO.
 * Preencha aqui assim que o consultório enviar os dados oficiais — nenhum
 * outro arquivo precisa ser alterado.
 */

export const doctor = {
  name: "Dr. Daniel de Castro",
  shortName: "Dr. Daniel",
  specialty: "Cirurgia Plástica",
  /** Usado no hero e no rodapé. Só anunciar a especialidade com RQE confirmado. */
  title: "Cirurgião Plástico",
  city: "Montes Claros",
  state: "MG",

  /** Ex.: "12345". UF do conselho em `crmState`. */
  crm: "86788" as string | null,
  crmState: "MG",
  /** Registro de Qualificação de Especialista em Cirurgia Plástica. */
  rqe: "63522" as string | null,

  /** Formação, exatamente como informada (2026-10-28). `year` é opcional. */
  education: [
    { area: "Medicina", institution: "UEFS", year: "2016" },
    { area: "Cirurgia Geral", institution: "HGCA" },
    { area: "Cirurgia Plástica", institution: "Santa Casa de Montes Claros", year: "2024" },
    { area: "Cosmiatria", institution: "Instituto Boggio", year: "2022" },
  ] as { area: string; institution: string; year?: string }[],
};

export const contact = {
  /**
   * Número do WhatsApp do consultório, somente dígitos, com DDI e DDD.
   * Ex.: "5538999999999". Vazio = botões levam à seção de contato.
   */
  whatsapp: "5538999588581",
  /** Número formatado para exibição. */
  whatsappDisplay: "(38) 99958-8581",
  whatsappMessage:
    "Olá! Conheci o trabalho do Dr. Daniel de Castro pelo site e gostaria de saber mais sobre os horários disponíveis para uma consulta.",

  /** Telefone para exibição, ex.: "(38) 3200-0000". */
  phone: "",
  /** Usuário do Instagram sem @, ex.: "drdanieldecastro". */
  instagram: "",
  email: "",

  address: {
    street: "R. São Pedro, 141", // Rua e número
    complement: "", // Sala, andar, edifício
    district: "Todos os Santos", // Bairro
    city: "Montes Claros",
    state: "MG",
    zip: "39400-123",
  },

  /** Horário resumido exibido no site. */
  hours: [
    { days: "Segunda a sábado", hours: "07h às 20h" },
    { days: "Domingo", hours: "Fechado" },
  ] as { days: string; hours: string }[],
  hoursNote: "Os horários podem sofrer alterações. Consulte nossa equipe para confirmar a disponibilidade.",
  /** Horário para os dados estruturados (schema.org). */
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "20:00" },
};

export const site = {
  name: "Dr. Daniel de Castro | Cirurgia Plástica",
  /** Defina NEXT_PUBLIC_SITE_URL com o domínio definitivo na publicação. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3400",
  seo: {
    title: "Dr. Daniel de Castro | Cirurgia Plástica em Montes Claros – MG",
    description:
      "Consultório de cirurgia plástica do Dr. Daniel de Castro em Montes Claros – MG. Atendimento individualizado, orientações claras e agendamento de consultas pelo WhatsApp.",
    keywords: [
      "cirurgião plástico Montes Claros",
      "cirurgia plástica Montes Claros",
      "Dr. Daniel de Castro",
      "consulta cirurgia plástica MG",
      "cirurgião plástico Norte de Minas",
    ],
  },
  copyrightYear: 2026,
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

/* Derivados — não editar. */

export const hasWhatsapp = contact.whatsapp.replace(/\D/g, "").length >= 12;

export const crmLabel = doctor.crm ? `CRM-${doctor.crmState} ${doctor.crm}` : null;
export const rqeLabel = doctor.rqe ? `RQE ${doctor.rqe}` : null;

export const addressLine = [
  [contact.address.street, contact.address.complement].filter(Boolean).join(", "),
  contact.address.district,
]
  .filter(Boolean)
  .join(" – ");

export const hasAddress = Boolean(contact.address.street);
export const cityLine = `${contact.address.city} – ${contact.address.state}${contact.address.zip ? `, ${contact.address.zip}` : ""}`;
export const fullAddress = hasAddress ? `${addressLine}, ${cityLine}` : null;
/** Endereço em texto simples (hífens comuns) para busca no Google Maps. */
export const mapsAddress = hasAddress
  ? `${contact.address.street} - ${contact.address.district}, ${contact.address.city} - ${contact.address.state}, ${contact.address.zip}`
  : null;
