# Dr. Daniel de Castro — Cirurgia Plástica · Montes Claros – MG

Site institucional (landing page com âncoras) em Next.js 16, TypeScript, Tailwind CSS 4, Motion e Lucide.
Projeto independente — não misturar com outros clientes.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3400
npm run build    # build de produção
npm run start    # serve o build em http://localhost:3400
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, CRM, RQE, formação | `src/content/site.ts` → `doctor` |
| WhatsApp, telefone, Instagram, endereço, horários | `src/content/site.ts` → `contact` |
| Domínio e textos de SEO | `src/content/site.ts` → `site` |
| Textos das seções, procedimentos, FAQ, galeria | `src/content/content.ts` |
| Cores, fontes e estilos base | `src/app/globals.css` (`@theme`) |

Campos vazios (`""`, `null`, `[]`) aparecem no site como marcador tracejado **“a confirmar”** e são omitidos do SEO.
Basta preencher o campo — nenhum componente precisa ser alterado.

**Fotografias:** coloque os arquivos em `public/fotos/` e informe o caminho no `src` correspondente em
`content.ts` (ex.: `"/fotos/recepcao.jpg"`). Usar somente fotos reais do Dr. Daniel e do consultório.

**WhatsApp:** número só com dígitos, com DDI e DDD (ex.: `5538999999999`). Todos os botões usam esse número e a
mensagem padrão. Enquanto estiver vazio, os botões levam à seção de contato.

## Publicação

1. Definir `NEXT_PUBLIC_SITE_URL=https://dominio-definitivo` (canonical, sitemap, Open Graph, dados estruturados).
2. Definir `NEXT_PUBLIC_ALLOW_INDEXING=true` — sem ela o site fica com `noindex` e o `robots.txt` bloqueia tudo.
3. Não publicar sem autorização e sem os dados obrigatórios abaixo.

## Avaliações de pacientes

Ficam em `src/content/testimonials.ts`, com os textos originais preservados. As 6 atuais foram aprovadas pelo usuário em 2026-10-28 e estão publicadas. Novas avaliações só aparecem ao receber
`approved: true` após revisão de conformidade (CFM), autorização de uso e confirmação da origem (`source`).
Em `npm run dev` a seção aparece como prévia (sem avisos no layout); no build de produção ela some por completo.
Retirados a pedido (2026-10-28): os relatos incompletos (Daniele, Nayaramotta) e o muito longo (Marcella). Restam 6.
Itens com `reviewNote` mencionam resultado, procedimento ou comparação com outros profissionais e exigem atenção.

## Vídeos dos procedimentos

Os 3 cards de procedimento usam vídeos otimizados (sem áudio, 600 px) em `public/media/`; originais em `public/videos/`.
Como mostram pacientes, só aparecem na versão publicada com `videoApproved = true` em `src/content/content.ts`,
após confirmar o consentimento por escrito de cada paciente e a revisão de conformidade (CFM). Em `npm run dev` aparecem sempre.
Atenção: o vídeo de mastopexia mostra uma tatuagem da paciente, que pode identificá-la.
Para recodificar: `node_modules/ffmpeg-static/ffmpeg.exe` (dependência de desenvolvimento).

## Fotos

Os originais enviados ficam intactos em `public/fotos/`; `public/img/` tem cópias sem recompressão das melhores versões, e o next/image gera AVIF/WebP (qualidade 85) uma única vez.
Antes de publicar, mover `public/fotos/` e `public/videos/` para fora de `public/` (hoje os originais também são servidos pelo site).

## Pendências (informações a fornecer)

**Confirmados em 2026-10-28:** CRM-MG 86788, RQE 63522, áreas de atuação, endereço, WhatsApp, horários, fotos do médico e do consultório.

- [ ] Revisão e autorização das avaliações (ver seção acima)
- [x] Consentimento das pacientes para os 3 vídeos confirmado pelo usuário em 2026-10-28 (`videoApproved = true`)
- [ ] (Opcional) Arquivos originais da câmera: as fotos atuais do retrato e do consultório são versões ampliadas digitalmente
- [ ] Imagens institucionais para os cards de procedimento (sem fotos de pacientes) — opcional
- [x] Formação informada em 2026-10-28 (`doctor.education`)
- [ ] Instagram e e-mail para assuntos de privacidade (opcionais; hoje a política indica o WhatsApp)
- [ ] Domínio definitivo

## Estado do projeto

- 2026-10-28 — Site completo, build sem erros, rodando localmente. Sem deploy. Todos os dados do médico pendentes.
- 2026-10-28 — Dados profissionais, endereço, WhatsApp, horários, fotos e 4 áreas de atuação aplicados; seção de avaliações criada (só prévia local).
