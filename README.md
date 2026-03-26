# R86 Ar Condicionado Automotivo

Site institucional da **R86 Ar Condicionado Automotivo**, especialidade de **Renan Camurça** em climatização automotiva em Ibiúna — SP.

**Site ao vivo:** [rcvdigo.github.io/r86](https://rcvdigo.github.io/r86)

---

## Sobre o projeto

Landing page desenvolvida para apresentar os serviços da R86, gerar contato direto via WhatsApp e posicionar a marca nos mecanismos de busca com SEO técnico completo.

## Stack

- [Next.js 16](https://nextjs.org/) — framework React com export estático
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização
- [shadcn/ui](https://ui.shadcn.com/) — componentes base
- [Lucide React](https://lucide.dev/) — ícones
- Hospedagem via **GitHub Pages** com deploy automático por GitHub Actions

## Estrutura

```
app/
  layout.tsx       # Metadados, OpenGraph, JSON-LD
  page.tsx         # Página principal
components/
  navbar.tsx
  hero-section.tsx
  services-section.tsx
  about-section.tsx
  benefits-section.tsx
  contact-section.tsx
  footer.tsx
  whatsapp-button.tsx
public/
  images/          # Imagens do site
  robots.txt
  sitemap.xml
.github/
  workflows/
    deploy.yml     # Deploy automático no GitHub Pages
```

## Seções do site

| Seção | ID | Descrição |
|---|---|---|
| Hero | — | Apresentação principal com CTA |
| Serviços | `#servicos` | 8 serviços oferecidos |
| Sobre | `#sobre` | Renan Camurça e a história da R86 |
| Diferenciais | `#diferenciais` | 6 diferenciais competitivos |
| Contato | `#contato` | CTA direto para WhatsApp |

## SEO implementado

- Título e descrição otimizados para conversão local
- **OpenGraph** e **Twitter Cards** para compartilhamento no WhatsApp e redes sociais
- **JSON-LD `AutoRepair`** (Schema.org) com dados do negócio, especialista, horários e área de atuação
- `robots.txt` e `sitemap.xml` na pasta `public/`
- Hierarquia de headings semântica (h1 → h2 → h3)
- Alt texts descritivos em todas as imagens

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [localhost:3000/r86](http://localhost:3000/r86)

## Deploy

O deploy é automático via GitHub Actions a cada `push` na branch `main`. O workflow está em `.github/workflows/deploy.yml`.

Para publicar manualmente:

```bash
git add .
git commit -m "sua mensagem"
git push
```

## Contato do negócio

- **WhatsApp:** [(11) 97192-2305](https://wa.me/5511971922305)
- **Localização:** Ibiúna — SP
- **Horário:** Segunda a Sexta, 8h–18h
