const FOOTER_COLS = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Case Studies", "Changelog"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    heading: "Services",
    links: ["SEO", "PPC", "Social Media", "Content"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-slate-300 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-indigo-900">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl font-black text-white mb-2">
              SolverCorp<span className="text-yellow-400">.</span>
            </p>
            <p className="text-sm text-indigo-400 leading-relaxed">
              Drive quality leads, maximize growth, convert more customers.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-5 py-2 border border-indigo-600 text-indigo-300 text-sm font-semibold rounded-lg hover:bg-indigo-800 transition"
            >
              Contact Us →
            </a>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-indigo-600 pt-6 text-center">
          © 2026 SolverCorp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
