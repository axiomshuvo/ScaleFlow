import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "../utils/constants";
import { Reveal } from "./Reveal";

const INFO_ICONS = { Email: Mail, Phone: Phone, Office: MapPin };

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only feedback for v1 — no backend wired yet
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20">
      {/* Heading */}
      <Reveal>
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 dark:text-indigo-300 mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-900 dark:text-indigo-100 leading-tight">
            Let&apos;s{" "}
            <span className="bg-yellow-400 text-indigo-900 px-2">Talk.</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Tell us about your goals and we&apos;ll map out a strategy that
            moves the needle.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left — contact info cards */}
        <Reveal delay={100}>
          <div className="space-y-4">
            {CONTACT_INFO.map(({ label, value }) => {
              const Icon = INFO_ICONS[label];
              return (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-5"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-900 text-white flex items-center justify-center">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                      {value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Decorative accent block */}
            <div className="relative mt-6 hidden md:block">
              <div className="w-full h-32 bg-indigo-900 rounded-2xl flex items-center justify-center overflow-hidden">
                <p className="text-white font-black text-2xl text-center leading-tight px-6">
                  Ready to <span className="text-yellow-400">Scale?</span>
                </p>
                {/* Decorative CSS blocks */}
                <div className="absolute -right-4 top-4 w-14 h-10 bg-yellow-400 rounded-lg -rotate-12 pointer-events-none" />
                <div className="absolute -left-3 bottom-3 w-10 h-8 bg-green-400 rounded-lg rotate-6 pointer-events-none" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — contact form */}
        <Reveal delay={200}>
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-bold uppercase tracking-widest text-slate-400"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Alex Johnson"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-sm text-indigo-900 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 transition"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-bold uppercase tracking-widest text-slate-400"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-sm text-indigo-900 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-bold uppercase tracking-widest text-slate-400"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, or questions..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-sm text-indigo-900 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-indigo-900 text-white font-black rounded-xl hover:bg-indigo-800 transition text-sm uppercase tracking-widest"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-center text-sm font-semibold text-green-600 animate-pulse">
                ✓ Message sent! We&apos;ll be in touch within 24 hours.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};
