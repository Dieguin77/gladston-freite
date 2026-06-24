<div align="center">

  <img src="img/logo gladston2.png" alt="Logo Gladston Freire" width="130" />

  <h1>Gladston Freire | Site Oficial</h1>

  <p>
    Site institucional e landing page de marca pessoal para<br>
    <strong>Gladston Freire</strong> — Ministro do Evangelho · Escritor · Advogado · Palestrante
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/Sanity.io-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity.io">
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
    <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
  </p>

  <p>
    <a href="https://gladstonfreire.com.br">
      <img src="https://img.shields.io/badge/🌐_Site_em_Produção-gladstonfreire.com.br-gold?style=for-the-badge" alt="Site em produção">
    </a>
    <img src="https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge" alt="v1.0.0">
    <img src="https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge" alt="MIT">
  </p>

  <p>
    <a href="README_EN.md">🇺🇸 Read in English</a>
  </p>

</div>

---

## Preview

| Desktop | Mobile |
|:---:|:---:|
| ![Desktop](docs/screenshots/desktop-home.png) | ![Mobile](docs/screenshots/mobile-home.png) |

> **Acesse ao vivo:** [gladstonfreire.com.br](https://gladstonfreire.com.br)

---

## Sobre o Projeto

Gladston Freire é Ministro do Evangelho, Escritor, Advogado e Palestrante com mais de 15 anos de ministério, tendo alcançado igrejas, conferências e congressos cristãos por todo o Brasil.

Este projeto centraliza sua presença digital em um único ponto de autoridade: um site institucional que apresenta o autor, promove seu livro *"Não Desça Mais Nenhum Degrau"*, exibe pregações em vídeo, publica artigos via CMS headless e gerencia convites de agenda ministerial por meio de um formulário estruturado.

### Problema que resolve

| Antes | Depois |
|---|---|
| Contato disperso em redes sociais | Canal único e profissional com formulário de agenda |
| Sem presença editorial própria | Blog integrado ao Sanity.io com SEO otimizado |
| Informações do livro sem conversão | CTA direto para compra na Hotmart |
| Sem prova social visível | Seção de depoimentos de líderes e pastores |
| Sem métricas de impacto | Contador animado com números do ministério |

---

## Funcionalidades

### Experiência do Usuário
- **Hero section** com imagem de fundo parallax, badges de identidade e dois CTAs principais (Assistir Pregações / Agendar Convite)
- **Contador de impacto animado** — números ativados por `IntersectionObserver` ao entrar na viewport
- **Scroll Reveal** — elementos com animação de entrada suave (fade up, slide left/right)
- **Menu hambúrguer** responsivo com overlay e bloqueio de scroll
- **Header adaptativo** — transparente no topo, sólido com blur ao rolar
- **Botão voltar ao topo** com aparição progressiva via scroll
- **Botão WhatsApp flutuante** com animação pulse e hooks para Analytics

### Conteúdo
- **Pregações** — grid de 3 vídeos embed do YouTube com lazy loading
- **Galeria de momentos** ministeriais com hover animado
- **Seção do livro** — destaque de lançamento, galeria de fotos, vídeos temáticos e CTA para Hotmart
- **Depoimentos** de líderes e pastores com citações reais
- **Agenda ministerial** — modal completo com formulário multi-etapa (igreja · evento · contato) e confirmação via WhatsApp
- **Mapa de ministérios** — igrejas e conferências atendidas em todo o Brasil
- **Blog** com artigos dinâmicos carregados do Sanity.io (skeleton loading durante fetch)
- **Media Kit** — página dedicada para imprensa
- **Painel administrativo** — gestão de convites de agenda com filtros e atualização de status

### SEO & Performance
- Schema.org estruturado para `Person` e `Book` (JSON-LD)
- Open Graph e Twitter Card configurados em todas as páginas
- `sitemap.xml` com as URLs principais
- `robots.txt` habilitando indexação completa
- `preload` de CSS e imagem hero
- `preconnect` para Google Fonts, Font Awesome, YouTube e Sanity CDN
- `loading="lazy"` em todas as imagens e iframes com fade-in suave
- `@media (prefers-reduced-motion)` para acessibilidade em animações
- Print styles configurados

### Acessibilidade
- Skip link para pular ao conteúdo principal
- `aria-label` em todos os elementos interativos
- Focus states visíveis com anel vermelho (#b71c1c)
- Roles semânticos (`role="banner"`, `aria-modal`, etc.)
- Contraste de texto adequado em todo o layout

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| **HTML5** | — | Estrutura semântica multi-página |
| **CSS3** | — | Estilização, animações, responsividade (custom properties, media queries) |
| **JavaScript ES6+** | — | Interatividade — menu, scroll reveal, contador animado, modal de agenda |
| **Sanity.io** | CMS headless | Publicação e gestão de artigos/posts do blog |
| **@sanity/client** | ^7.13.1 | SDK para consultas GROQ à API do Sanity |
| **Supabase** | REST API | Banco de dados para persistir solicitações de agenda |
| **EmailJS** | Browser SDK | Notificação por e-mail ao receber nova agenda |
| **Font Awesome** | 6.4.0 | Ícones de interface |
| **Google Fonts** | — | Tipografia — Inter + Playfair Display |
| **GitHub Pages** | — | Hospedagem estática com domínio customizado |

---

## Estrutura do Projeto

```
📦 gladston-freire
 ┣ 📂 docs                        # Documentação e assets do repositório
 ┃ ┣ 📂 screenshots               # Capturas de tela para o README
 ┃ ┃ ┣ 🖼️  desktop-home.png
 ┃ ┃ └ 🖼️  mobile-home.png
 ┃ └ 📄 MANUAL_ADMINISTRADOR.md   # Manual de uso do painel admin
 ┣ 📂 img                         # Imagens do site
 ┃ ┣ 🖼️  autor.jpg
 ┃ ┣ 🖼️  livro-rosto.jpg
 ┃ ┣ 🖼️  logo gladston2.png
 ┃ └ 🖼️  ...
 ┣ 📂 js                          # Scripts JavaScript
 ┃ ┣ 📄 main.js                   # Comportamentos de UI comuns (menu, scroll, reveal)
 ┃ ┣ 📄 sanityClient.js           # Configuração do cliente Sanity.io (GROQ)
 ┃ ┣ 📄 agenda.js                 # Modal e formulário de agenda ministerial
 ┃ ┣ 📄 config.js                 # Configurações de serviços (Supabase, EmailJS)
 ┃ └ 📄 admin.js                  # Lógica do painel administrativo
 ┣ 📂 video                       # Vídeos de pregações e testemunhos
 ┣ 📄 index.html                  # Landing page principal
 ┣ 📄 sobre.html                  # Sobre o ministério
 ┣ 📄 contato.html                # Formulário de contato
 ┣ 📄 post.html                   # Template de artigo individual (dinâmico via Sanity)
 ┣ 📄 media-kit.html              # Kit de imprensa
 ┣ 📄 admin.html                  # Painel administrativo
 ┣ 📄 style.css                   # Folha de estilos global (2 600+ linhas)
 ┣ 📄 sitemap.xml                 # Mapa do site para indexação
 ┣ 📄 robots.txt                  # Diretivas para crawlers
 ┣ 📄 CNAME                       # Domínio customizado — gladstonfreire.com.br
 ┣ 📄 .gitignore
 ┣ 📄 package.json
 ┣ 📄 LICENSE
 ┗ 📄 README.md
```

---

## Páginas

| Rota | Título | Descrição |
|---|---|---|
| `/` | Gladston Freire \| Ministro, Escritor e Advogado | Landing page principal com hero, impacto, pregações, livro, agenda e blog |
| `/sobre.html` | Sobre o Ministério | História, missão e visão do ministério |
| `/contato.html` | Contato | Formulário de contato com envio via mailto + WhatsApp direto |
| `/post.html?slug=...` | Artigo \| Gladston Freire | Template dinâmico para artigos do Sanity com Portable Text |
| `/media-kit.html` | Media Kit | Fotos em alta resolução, bio e temas para imprensa |
| `/admin.html` | Painel Admin | Gestão de convites de agenda com tabela e filtros |

---

## Configuração de Serviços

### Sanity.io — Blog / CMS

Artigos gerenciados via Sanity Studio. Credenciais em `js/sanityClient.js`:

```js
createClient({
  projectId: 'eat9cs7j',
  dataset:   'production',
  useCdn:    true,
  apiVersion: '2023-05-03'
})
```

### Sistema de Agenda Ministerial

O formulário de agenda envia dados simultaneamente para Supabase (banco) e EmailJS (e-mail). Configurar em `js/config.js`:

```js
const MINISTERIO_CONFIG = {
    supabase: {
        url:     'https://SEU_PROJETO.supabase.co',
        anonKey: 'SUA_ANON_KEY'
    },
    emailjs: {
        publicKey:  'SUA_PUBLIC_KEY',
        serviceId:  'SEU_SERVICE_ID',
        templateId: 'SEU_TEMPLATE_ID'
    }
}
```

> **Fallback:** enquanto não configurados, o sistema exibe a tela de sucesso e redireciona ao WhatsApp sem quebrar o fluxo.

### Analytics (Opcional)

Descomentar os blocos no `<head>` de `index.html` para ativar:
- **Google Analytics 4** — substituir `G-XXXXXXXXXX` pelo Measurement ID
- **Meta Pixel** — substituir `XXXXXXXXXXXXXXX` pelo Pixel ID

---

## Instalação e Execução Local

Site estático — nenhum build necessário. Três formas de rodar localmente:

```bash
# 1. Python (qualquer sistema)
python -m http.server 8080

# 2. Node.js
npx serve .

# 3. VS Code — extensão Live Server
# Clique em "Go Live" na barra inferior
```

Acesse em `http://localhost:8080`

> **Nota:** A seção de Artigos e o painel Admin precisam de conexão com a internet para acessar o Sanity.io e o Supabase.

---

## Deploy

Hospedado via **GitHub Pages** com domínio customizado configurado no arquivo `CNAME`:

```
gladstonfreire.com.br
```

Qualquer push na branch `main` reflete em produção automaticamente.

---

## Aviso de Segurança

> `js/config.js` contém chaves de serviços (Supabase, EmailJS) e senha do painel admin.
> **Nunca commite credenciais reais** — adicione o arquivo ao `.gitignore` ou use variáveis de ambiente via build tool antes de publicar em repositório público.

---

## Roadmap — Melhorias Futuras

- [ ] Configurar Supabase e EmailJS em produção
- [ ] Ativar Google Analytics 4 e Meta Pixel
- [ ] Adicionar página de todos os artigos (`/blog.html`)
- [ ] Integrar sistema de comentários nos posts
- [ ] Criar página de vendas dedicada para o livro
- [ ] Adicionar PWA (service worker + manifest)
- [ ] Implementar busca de artigos
- [ ] Mover senha do admin para variável de ambiente

---

## Autor

<div align="center">

**Desenvolvido por [Diego Batista](https://diegodev.dev.br)**

Projeto de marca pessoal e presença digital para **Gladston Freire**.

<br>

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/gladstonfreire)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@gladstonfreire)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5527995004900)

</div>

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

<div align="center">
  <sub>© 2026 Gladston Freire · Desenvolvido por <a href="https://diegodev.dev.br">Diego Batista</a></sub>
</div>
