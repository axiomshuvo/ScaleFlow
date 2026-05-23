# ⚡ ScaleFlow — Digital Marketing Landing Page

A sleek, fast, and fully responsive single-page marketing site for a digital growth agency. Built with React 18, Vite, Tailwind CSS, and DaisyUI — with a buttery-smooth dark/light theme toggle. 🌙☀️

---

## ✨ Features

- 🎨 **Dark / Light theme toggle** — icon-only, persists across page reloads via `localStorage`
- 📱 **Fully responsive** — mobile-first layout with Tailwind CSS breakpoints
- 🧩 **Component-based** — clean, modular React components
- 🚀 **Blazing fast** — powered by Vite with HMR
- 💅 **DaisyUI v3** — semantic color tokens for effortless theming
- 🗂️ **Sections**: Hero · About · Case Studies · Services · Pricing · FAQ · Testimonials · Footer

---

## 🛠️ Tech Stack

| Tool | Version |
|---|---|
| React | ^18.3.1 |
| Vite | ^8.0.3 |
| Tailwind CSS | ^3.4.3 |
| DaisyUI | ^3.2.2 |
| lucide-react | ^1.16.0 |

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
├── App.jsx               # Root layout
├── main.jsx              # React entry point
├── index.css             # Global styles + Tailwind directives
├── components/
│   ├── ThemeToggle.jsx   # Dark/light theme icon toggle
│   ├── Header.jsx        # Sticky nav with theme toggle
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # About section
│   ├── CaseStudies.jsx   # Case studies
│   ├── Services.jsx      # Services section
│   ├── Pricing.jsx       # Pricing plans
│   ├── FAQ.jsx           # FAQ accordion
│   ├── Testimonials.jsx  # Client testimonials
│   ├── Footer.jsx        # Footer
│   └── index.js          # Barrel exports
└── utils/
    └── constants.js      # Static data (services, pricing, FAQs, etc.)
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📝 License

MIT

---

Made with ❤️ by [Pradipta Sarker](https://github.com/axiomshuvo)
