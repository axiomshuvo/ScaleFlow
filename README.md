# ⚡ ScaleFlow — Digital Marketing Landing Page

A sleek, fast, and fully responsive single-page marketing site for a digital growth agency. Built with React 19, Vite 8, Tailwind CSS v4, and DaisyUI v5 — with a buttery-smooth dark/light theme toggle and a bold, colorful design inspired by a real reference layout. 🌙☀️🎨

---

## ✨ Features

- 🎨 **Dark / Light theme toggle** — icon-only, persists across page reloads via `localStorage`
- 📱 **Fully responsive** — mobile-first layout with Tailwind CSS v4 breakpoints
- 🧩 **Small, named components** — every repeated UI element is its own named sub-component for easy identification in React DevTools
- 🚀 **Blazing fast** — Vite 8 + `@tailwindcss/vite` plugin (no PostCSS config needed)
- 💅 **DaisyUI v5** — semantic color tokens with `@plugin "daisyui"` CSS-native config
- 🎯 **Colorful CSS block decorations** — placeholder illustrations ready to swap for real assets
- 🔗 **Smooth scroll** — anchor-based navigation with `scroll-behavior: smooth`
- 🗂️ **Sections**: Hero · About · Case Studies · Services · Pricing · FAQ · Testimonials · CTA · Footer

---

## 🛠️ Tech Stack

| Tool              | Version  |
| ----------------- | -------- |
| React             | ^19.2.6  |
| Vite              | ^8.0.14  |
| Tailwind CSS      | ^4.3.0   |
| DaisyUI           | ^5.5.20  |
| @tailwindcss/vite | ^4.3.0   |
| lucide-react      | ^1.16.0  |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root layout — composes all sections
├── main.jsx                 # React 19 entry point
├── index.css                # Global styles — Tailwind v4 @import + DaisyUI @plugin
├── components/
│   ├── index.js             # Barrel exports for all components
│   │
│   ├── ── Section components ──
│   ├── Header.jsx           # Sticky nav — logo · anchor links · search icon · theme toggle
│   ├── Hero.jsx             # Hero — bold headline + scattered CSS color blocks
│   ├── About.jsx            # About — dark indigo split, stacked blocks, stats
│   ├── CaseStudies.jsx      # Case studies list + colorful banner
│   ├── Services.jsx         # Numbered services in dark card
│   ├── Pricing.jsx          # Two pricing plan cards
│   ├── FAQ.jsx              # Native <details> accordion
│   ├── Testimonials.jsx     # 3-column testimonial grid
│   ├── CTA.jsx              # Dark indigo CTA banner
│   ├── Footer.jsx           # Multi-column dark footer
│   │
│   ├── ── Sub-components (named, reusable) ──
│   ├── StatCard.jsx         # exports StatItem — big colored number + label
│   ├── ServiceCard.jsx      # exports ServiceItem — zero-padded number + title + desc
│   ├── PortfolioCard.jsx    # exports CaseStudyRow — thumbnail + name + date + desc
│   ├── TestimonialCard.jsx  # exports TestimonialCard — avatar initials + quote
│   ├── PricingCard.jsx      # exports PricingCard — plan card with featured variant
│   ├── FaqItem.jsx          # exports FaqItem — single accordion item
│   └── ThemeToggle.jsx      # exports ThemeToggle — moon/sun toggle button
└── utils/
    └── constants.js         # Static data — NAV_LINKS, STATS, CASE_STUDIES, SERVICES,
                             #               PRICING_PLANS, FAQ_ITEMS, TESTIMONIALS
```

---

## 🎨 Design Notes

- **Color palette**: White background · indigo-900 for dark sections (About, Services, CTA, Footer) · yellow-400 for highlights and CTA buttons
- **Decorative elements**: Colorful CSS `<div>` blocks replace LEGO-brick illustrations — swap with real assets when available
- **Typography**: Poppins font (100–900), loaded from Google Fonts
- **Tailwind v4**: No `tailwind.config.js` — configuration lives in `src/index.css` via `@import "tailwindcss"` and `@plugin "daisyui"`

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📝 License

MIT

---

Made with ❤️ by [Pradipta Sarker](https://github.com/axiomshuvo)
