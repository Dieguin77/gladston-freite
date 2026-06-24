<h1 align="center">
  <br>
  <img src="img/logo gladston2.png" alt="Logo Gladston Freire" width="120">
  <br><br>
  Gladston Freire — Site Oficial
  <br>
</h1>

<p align="center">
  Site institucional e landing page de marca pessoal para Gladston Freire — Ministro do Evangelho, Escritor, Advogado e Palestrante. Apresenta o autor, seu livro, agenda ministerial e canais de contato através de uma interface moderna, responsiva e otimizada para SEO.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Sanity.io-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white" alt="Font Awesome">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
</p>

<p align="center">
  <a href="https://gladstonfreire.com.br" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Acessar_Site-gladstonfreire.com.br-gold?style=for-the-badge" alt="Demo ao vivo">
  </a>
</p>

---

## Preview

> **Acesse ao vivo:** [gladstonfreire.com.br](https://gladstonfreire.com.br)

| Desktop | Mobile |
|---|---|
| ![](img/readme/desktop-home.png) | ![](img/readme/mobile-home.png) |

---

## Sobre o Projeto

Gladston Freire é Ministro do Evangelho, Escritor, Advogado e Palestrante com mais de 15 anos de ministério, tendo alcançado mais de 50.000 pessoas em igrejas, conferências e congressos cristãos por todo o Brasil.

O projeto resolve a necessidade de centralizar sua presença digital em um único ponto de autoridade: um site institucional que apresenta o autor de forma profissional, promove seu livro *"Não Desça Mais Nenhum Degrau"*, exibe pregações em vídeo, publica artigos teológicos via CMS headless e facilita o agendamento de convites para ministrações.

**Objetivos:**
- Estabelecer autoridade digital para o ministério
- Converter visitantes em leitores do livro e em contatos para agenda
- Centralizar conteúdo (pregações, artigos, vídeos) em uma plataforma própria
- Substituir contato informal por um fluxo estruturado de solicitação de agenda

---

## Funcionalidades

- **Hero section** com foto de fundo, badges de identidade (Ministro · Escritor · Advogado · Palestrante) e dois CTAs principais
- **Contador de impacto animado** — 150+ igrejas, 300+ eventos, 50.000+ pessoas alcançadas, 15+ anos de ministério (IntersectionObserver)
- **Galeria de momentos** com fotos do ministério
- **Seção de pregações** com vídeos embed do YouTube (lazy loading)
- **Seção do livro** — destaque de lançamento com capa, descrição e link direto para compra na Hotmart, galeria de fotos do autor e vídeos temáticos
- **Depoimentos** de líderes e pastores sobre o livro
- **Agenda ministerial** com modal de formulário completo (dados da igreja, do evento e contato) + confirmação via WhatsApp
- **Mapa de ministérios** — listagem de igrejas e conferências atendidas
- **Blog / Artigos** integrado ao Sanity.io (CMS headless), com skeleton loading e renderização de Portable Text
- **Botão WhatsApp flutuante** com hooks para Google Analytics e Meta Pixel (integrações preparadas no código, ativadas ao configurar os IDs)
- **Formulário de contato** com fallback mailto
- **Menu hambúrguer** responsivo com overlay
- **Botão voltar ao topo** com aparição progressiva via scroll
- **Header com efeito scroll** (transparente → sólido)
- **SEO completo** — meta tags, Open Graph, Twitter Card, Schema.org (Person + Book), sitemap.xml, robots.txt
- **Acessibilidade** — skip link, ARIA labels, focus states, roles semânticos
- **Performance** — preload de recursos críticos, preconnect, lazy loading de imagens e iframes
- **Media Kit** — página dedicada para imprensa
- **Painel admin** — interface administrativa para gestão de conteúdo

---

## Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Estilização, animações, responsividade (media queries, custom properties) |
| **JavaScript Vanilla** | Interatividade — menu, scroll reveal, contador animado, modal de agenda |
| **Sanity.io** | CMS headless para publicação de artigos e posts do blog |
| **@sanity/client** | SDK JavaScript para consulta à API do Sanity (GROQ) |
| **Font Awesome 6** | Ícones de interface |
| **Google Fonts** | Tipografia — Inter + Playfair Display |
| **Supabase** | Banco de dados para persistir solicitações de agenda (REST API via `fetch`) |
| **EmailJS** | Envio de e-mail automático ao submeter agenda (integração implementada, requer configuração) |
| **GitHub Pages** | Hospedagem estática com domínio customizado |

---

## Estrutura do Projeto

```bash
📦 gladston-freire
 ┣ 📂 img                    # Imagens do autor, livro e momentos ministeriais
 ┃ ┣ 📄 autor.jpg
 ┃ ┣ 📄 livro-rosto.jpg
 ┃ ┣ 📄 logo gladston2.png
 ┃ ┗ 📄 ...
 ┣ 📂 js                     # Scripts JavaScript
 ┃ ┣ 📄 sanityClient.js      # Configuração e cliente do Sanity.io
 ┃ ┣ 📄 agenda.js            # Lógica do modal e formulário de agenda
 ┃ ┣ 📄 config.js            # Configurações gerais (Supabase, EmailJS, WhatsApp, admin)
 ┃ ┗ 📄 admin.js             # Painel administrativo
 ┣ 📂 video                  # Vídeos locais de pregações e testemunhos
 ┣ 📄 index.html             # Página principal (landing page)
 ┣ 📄 sobre.html             # Sobre o ministério
 ┣ 📄 contato.html           # Formulário de contato
 ┣ 📄 post.html              # Template de artigo individual (Sanity)
 ┣ 📄 media-kit.html         # Página de mídia para imprensa
 ┣ 📄 admin.html             # Painel administrativo
 ┣ 📄 style.css              # Folha de estilos global
 ┣ 📄 sitemap.xml            # Mapa do site para indexação
 ┣ 📄 robots.txt             # Diretivas para crawlers
 ┣ 📄 CNAME                  # Domínio customizado — gladstonfreire.com.br
 ┗ 📄 README.md
```

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Landing page principal |
| `/sobre.html` | Apresentação do ministério |
| `/contato.html` | Formulário de contato e convites |
| `/post.html?slug=...` | Artigo dinâmico carregado do Sanity |
| `/media-kit.html` | Kit de imprensa |
| `/admin.html` | Painel administrativo |

---

## SEO & Performance

- **Schema.org** estruturado para `Person` e `Book` (JSON-LD)
- **Open Graph** e **Twitter Card** configurados
- **sitemap.xml** com as 4 URLs principais
- **robots.txt** habilitando indexação completa
- `preload` de CSS e imagem hero
- `preconnect` para Google Fonts, Font Awesome, YouTube e Sanity CDN
- `loading="lazy"` em todas imagens e iframes
- **IntersectionObserver** para animações só quando visíveis

---

## Instalação e Execução Local

Este é um site estático — basta abrir o arquivo `index.html` em qualquer navegador moderno, ou servir localmente:

```bash
# Com Python (disponível em qualquer sistema)
python -m http.server 8080

# Com Node.js / npx
npx serve .

# Acesse em
http://localhost:8080
```

> **Nota:** A seção de Artigos requer conexão com a internet para buscar conteúdo do Sanity.io.

---

## Configuração do CMS (Sanity)

Os artigos são gerenciados via [Sanity.io](https://sanity.io). As credenciais estão em `js/sanityClient.js`:

```js
// js/sanityClient.js
projectId: 'eat9cs7j'
dataset:   'production'
```

Para publicar um novo artigo, acesse o Sanity Studio do projeto e crie um documento do tipo `post` com os campos `title`, `slug`, `mainImage` e `publishedAt`.

---

## Configuração do Sistema de Agenda

O formulário de agenda envia os dados para dois destinos simultaneamente, ambos configurados em `js/config.js`:

**1. Supabase** (banco de dados):
```js
supabase: {
    url:     'https://SEU_PROJETO.supabase.co',
    anonKey: 'SUA_ANON_KEY'
}
```

**2. EmailJS** (notificação por e-mail):
```js
emailjs: {
    publicKey:  'SUA_PUBLIC_KEY',
    serviceId:  'SEU_SERVICE_ID',
    templateId: 'SEU_TEMPLATE_ID'
}
```

**3. Confirmação via WhatsApp** — após o envio, o formulário gera um link pré-preenchido com todos os dados do evento para confirmação manual.

> Enquanto Supabase e EmailJS não estiverem configurados, o sistema exibe a tela de sucesso e redireciona para WhatsApp normalmente — sem quebrar o fluxo do usuário.

---

## Deploy

O site é publicado automaticamente via **GitHub Pages** com domínio customizado configurado no arquivo `CNAME`:

```
gladstonfreire.com.br
```

Qualquer push na branch `main` reflete no site em instantes.

---

## Aviso de Segurança

> **Antes de publicar no repositório público**, certifique-se de que `js/config.js` **não contém credenciais reais** (chaves do Supabase, EmailJS ou senha do admin). Adicione o arquivo ao `.gitignore` ou use variáveis de ambiente via build tool se necessário.

---

## Autor & Créditos

**Desenvolvido por [Diego Batista](https://diegodev.dev.br)**

Projeto de marca pessoal e presença digital para **Gladston Freire** — Ministro do Evangelho, Escritor, Advogado e Palestrante.

---

<p align="center">
  <a href="https://instagram.com/gladstonfreire">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
  <a href="https://youtube.com/@gladstonfreire">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
  </a>
  <a href="https://wa.me/5527995004900">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>
</p>
