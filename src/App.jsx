import { useState } from "react";

const faqItems = [
  {
    q: "What services does your digital marketing agency offer?",
    a: "SEO, PPC, social media management, content marketing, CRO, and creative branding services for growth-focused teams.",
  },
  {
    q: "How can digital marketing benefit my business?",
    a: "It increases traffic, improves lead quality, widens reach, and boosts conversions with data-driven campaigns.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see measurable performance improvements in 30-90 days depending on campaign scope.",
  },
  {
    q: "Do you offer customized marketing strategies?",
    a: "Yes. Every engagement starts with strategy alignment and roadmap planning for your industry and goals.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Tech, SaaS, e-commerce, finance, B2B services, healthcare and local businesses.",
  },
];

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Marketing Leader",
    text: "The team transformed our lead generation pipeline and gave us clear ROI metrics.",
  },
  {
    name: "Aida Doe",
    role: "VP, Sales",
    text: "Highly strategic and execution-focused; consistent results quarter after quarter.",
  },
  {
    name: "Helga Rodriguez",
    role: "Founder",
    text: "A talented group who are easy to work with and deeply understand performance marketing.",
  },
];

function App() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black text-indigo-700">SolverCorp</div>
          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#services" className="hover:text-indigo-600">
              Services
            </a>
            <a href="#pricing" className="hover:text-indigo-600">
              Pricing
            </a>
            <a href="#faq" className="hover:text-indigo-600">
              FAQ
            </a>
          </nav>
          <button className="btn btn-sm btn-primary">Get Started</button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-700">
              Digital Growth Studio
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              We Crafting Real Results
              <br />
              More Traffic, More Leads, More Growth!
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Agency-level digital marketing built for fast-moving brands.
              Data-led strategy, creative execution, and measurable conversions.
            </p>
            <button className="btn btn-wide btn-primary">Get Started</button>
          </div>
          <div className="flex justify-center">
            <div className="mockup-window bg-base-200 p-6">
              <div className="flex h-64 w-80 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-200 to-purple-300 text-white font-bold">
                Hero visual placeholder
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-16 rounded-3xl bg-indigo-700 p-8 text-white shadow-lg md:p-12"
        >
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 max-w-3xl text-xl text-slate-100">
            We are a digital marketing agency committed to delivering innovative
            strategies that elevate your brand, increase engagement, and drive
            measurable growth.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-indigo-800 p-5">
              <h3 className="text-lg font-bold">
                Data-backed performance marketing
              </h3>
              <p className="mt-2 text-slate-200">
                Proven bidding, audience, and funnel optimization.
              </p>
            </div>
            <div className="rounded-xl bg-indigo-800 p-5">
              <h3 className="text-lg font-bold">High-quality prospects</h3>
              <p className="mt-2 text-slate-200">
                Focused on intent and conversion-ready traffic.
              </p>
            </div>
            <div className="rounded-xl bg-indigo-800 p-5">
              <h3 className="text-lg font-bold">A decade of experience</h3>
              <p className="mt-2 text-slate-200">
                Cross-industry campaigns with reliable scaling.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Digital Solutions for Business Growth
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">SEO & Content Marketing</h3>
                <p>
                  Organic visibility, keyword and content campaigns built for
                  consistent lead flow.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Pay-Per-Click Advertising</h3>
                <p>
                  ROI-driven paid acquisition across search and social channels.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title">Social Media Management</h3>
                <p>
                  Creative ad design, community growth, and performance
                  tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-16 text-center">
          <h2 className="text-3xl font-bold">
            Upgrade Today — Unlock More Features, More Power, More Growth!
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="card shadow-xl border border-indigo-200">
              <div className="card-body">
                <h3 className="card-title">Standard Plan</h3>
                <p className="text-3xl font-black">$40</p>
                <ul className="list-disc pl-5 text-left text-sm text-slate-600">
                  <li>Site audit & roadmap</li>
                  <li>Basic SEO optimization</li>
                  <li>Bullet point campaigns</li>
                </ul>
                <button className="btn btn-primary mt-4">Get Started</button>
              </div>
            </div>
            <div className="card shadow-xl bg-indigo-700 text-white">
              <div className="card-body">
                <h3 className="card-title">Premium</h3>
                <p className="text-3xl font-black">$80</p>
                <ul className="list-disc pl-5 text-left text-sm">
                  <li>All Standard features</li>
                  <li>Advanced KPI tracking</li>
                  <li>Dedicated analyst</li>
                  <li>Growth plan & execution</li>
                </ul>
                <button className="btn btn-warning mt-4">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-16">
          <h2 className="text-3xl font-bold text-center">FAQ</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {faqItems.map((item, idx) => (
              <button
                key={item.q}
                onClick={() => setActiveFaq(idx === activeFaq ? -1 : idx)}
                className="w-full px-5 py-4 text-left"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{item.q}</span>
                  <span>{activeFaq === idx ? "-" : "+"}</span>
                </div>
                {activeFaq === idx && (
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                )}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">
            Client Testimonials
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card rounded-none shadow-lg">
                <div className="card-body">
                  <p className="text-sm text-slate-600">"{t.text}"</p>
                  <h3 className="mt-4 font-bold">{t.name}</h3>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">SolverCorp</h3>
            <p className="text-sm">
              Drive quality leads, maximize growth, convert more customers.
            </p>
          </div>
          <button className="btn btn-primary btn-sm">Get Started</button>
        </div>
        <div className="border-t border-slate-800 px-8 py-4 text-xs text-slate-500">
          © 2026 SolverCorp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
