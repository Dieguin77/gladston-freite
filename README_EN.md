<div align="center">

  <img src="img/logo gladston2.png" alt="Gladston Freire Logo" width="130" />

  <h1>Gladston Freire — Official Website</h1>

  <p>
    Institutional website and personal brand landing page for<br>
    <strong>Gladston Freire</strong> — Minister of the Gospel · Author · Attorney · Speaker
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
      <img src="https://img.shields.io/badge/🌐_Live_Site-gladstonfreire.com.br-gold?style=for-the-badge" alt="Live Site">
    </a>
    <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="v1.0.0">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT">
  </p>

  <p>
    <a href="README.md">🇧🇷 Leia em Português</a>
  </p>

</div>

---

## Preview

| Desktop | Mobile |
|:---:|:---:|
| ![Desktop](docs/screenshots/desktop-home.png) | ![Mobile](docs/screenshots/mobile-home.png) |

> **Live at:** [gladstonfreire.com.br](https://gladstonfreire.com.br)

---

## About the Project

Gladston Freire is a Minister of the Gospel, Author, Attorney, and Speaker with over 15 years of ministry, having served churches, conferences, and Christian congresses throughout Brazil.

This project centralizes his digital presence into a single authoritative point: an institutional website that showcases the author, promotes his book *"Não Desça Mais Nenhum Degrau"* (Don't Go Down Another Step), features video sermons, publishes articles via a headless CMS, and manages ministry invitation requests through a structured form.

### Problem Solved

| Before | After |
|---|---|
| Contact scattered across social media | Single professional channel with a booking form |
| No owned editorial platform | Blog integrated with Sanity.io and SEO optimization |
| Book info with no conversion path | Direct CTA to purchase on Hotmart |
| No visible social proof | Testimonials from pastors and ministry leaders |
| No impact metrics | Animated counter with ministry numbers |

---

## Features

### User Experience
- **Hero section** with parallax background, identity badges, and two primary CTAs
- **Animated impact counter** — numbers activated by `IntersectionObserver` on viewport entry
- **Scroll Reveal** — smooth entrance animations (fade up, slide left/right)
- **Responsive hamburger menu** with overlay and scroll lock
- **Adaptive header** — transparent at top, solid with blur on scroll
- **Back-to-top button** with progressive appearance on scroll
- **Floating WhatsApp button** with pulse animation and Analytics hooks

### Content
- **Sermons** — 3-video YouTube embed grid with lazy loading
- **Ministry moments gallery** with animated hover effects
- **Book section** — launch highlight, author photo gallery, thematic videos and Hotmart CTA
- **Testimonials** from pastors and ministry leaders with real quotes
- **Ministry agenda** — complete modal with multi-step form (church · event · contact) and WhatsApp confirmation
- **Ministry map** — churches and conferences served across Brazil
- **Blog** with dynamic articles loaded from Sanity.io (skeleton loading during fetch)
- **Media Kit** — dedicated press page with high-res photos and bio
- **Admin panel** — booking management with status tracking and filters

### SEO & Performance
- Structured Schema.org for `Person` and `Book` (JSON-LD)
- Open Graph and Twitter Card on every page
- `sitemap.xml` with all main URLs
- `robots.txt` enabling full crawl
- `preload` for critical CSS and hero image
- `preconnect` for Google Fonts, Font Awesome, YouTube, and Sanity CDN
- `loading="lazy"` on all images and iframes with smooth fade-in
- `@media (prefers-reduced-motion)` for accessibility
- Print styles configured

### Accessibility
- Skip link to jump to main content
- `aria-label` on all interactive elements
- Visible focus states with branded ring
- Semantic roles (`role="banner"`, `aria-modal`, etc.)
- Adequate text contrast throughout

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| **HTML5** | — | Semantic multi-page structure |
| **CSS3** | — | Styling, animations, responsiveness (custom properties, media queries) |
| **JavaScript ES6+** | — | Interactivity — menu, scroll reveal, animated counter, agenda modal |
| **Sanity.io** | Headless CMS | Blog article management and publishing |
| **@sanity/client** | ^7.13.1 | SDK for GROQ queries to the Sanity API |
| **Supabase** | REST API | Database for persisting agenda booking requests |
| **EmailJS** | Browser SDK | Email notification on new agenda submission |
| **Font Awesome** | 6.4.0 | UI icons |
| **Google Fonts** | — | Typography — Inter + Playfair Display |
| **GitHub Pages** | — | Static hosting with custom domain |

---

## Project Structure

```
📦 gladston-freire
 ┣ 📂 docs                        # Repository documentation and assets
 ┃ ┣ 📂 screenshots               # README screenshots
 ┃ ┃ ┣ 🖼️  desktop-home.png
 ┃ ┃ └ 🖼️  mobile-home.png
 ┃ └ 📄 MANUAL_ADMINISTRADOR.md   # Admin panel user guide (PT-BR)
 ┣ 📂 img                         # Site images
 ┣ 📂 js                          # JavaScript modules
 ┃ ┣ 📄 main.js                   # Common UI behaviors (menu, scroll, reveal)
 ┃ ┣ 📄 sanityClient.js           # Sanity.io client configuration (GROQ)
 ┃ ┣ 📄 agenda.js                 # Ministry agenda modal and form logic
 ┃ ┣ 📄 config.js                 # Service configuration (Supabase, EmailJS)
 ┃ └ 📄 admin.js                  # Admin panel logic
 ┣ 📂 video                       # Sermon and testimony videos
 ┣ 📄 index.html                  # Main landing page
 ┣ 📄 sobre.html                  # About the ministry
 ┣ 📄 contato.html                # Contact form
 ┣ 📄 post.html                   # Single article template (dynamic via Sanity)
 ┣ 📄 media-kit.html              # Press media kit
 ┣ 📄 admin.html                  # Admin panel
 ┣ 📄 style.css                   # Global stylesheet (2,600+ lines)
 ┣ 📄 sitemap.xml
 ┣ 📄 robots.txt
 ┣ 📄 CNAME                       # Custom domain — gladstonfreire.com.br
 ┣ 📄 .gitignore
 ┣ 📄 package.json
 ┣ 📄 LICENSE
 ┗ 📄 README.md
```

---

## Pages

| Route | Title | Description |
|---|---|---|
| `/` | Gladston Freire \| Minister, Author, Attorney | Main landing page with hero, impact, sermons, book, agenda, and blog |
| `/sobre.html` | About the Ministry | Ministry history, mission, and vision |
| `/contato.html` | Contact | Contact form with mailto fallback + direct WhatsApp |
| `/post.html?slug=...` | Article \| Gladston Freire | Dynamic Sanity article template with Portable Text |
| `/media-kit.html` | Media Kit | High-res photos, bio, and topics for press |
| `/admin.html` | Admin Panel | Booking management with table, filters, and status updates |

---

## Local Setup

No build step required — pure static site. Three ways to run locally:

```bash
# 1. Python
python -m http.server 8080

# 2. Node.js
npx serve .

# 3. VS Code — Live Server extension
# Click "Go Live" in the bottom bar
```

Open `http://localhost:8080`

> **Note:** The Articles section and Admin panel require internet access to reach Sanity.io and Supabase.

---

## Deploy

Hosted via **GitHub Pages** with a custom domain configured in `CNAME`:

```
gladstonfreire.com.br
```

Every push to `main` reflects in production automatically.

---

## Roadmap

- [ ] Configure Supabase and EmailJS in production
- [ ] Enable Google Analytics 4 and Meta Pixel
- [ ] Add full articles listing page (`/blog.html`)
- [ ] Integrate comments system for posts
- [ ] Build dedicated book sales page
- [ ] Add PWA support (service worker + manifest)
- [ ] Implement article search
- [ ] Move admin password to environment variable

---

## Author

<div align="center">

**Built by [Diego Batista](https://diegodev.dev.br)**

Personal brand and digital presence project for **Gladston Freire**.

<br>

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/gladstonfreire)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@gladstonfreire)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5527995004900)

</div>

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>© 2026 Gladston Freire · Built by <a href="https://diegodev.dev.br">Diego Batista</a></sub>
</div>
