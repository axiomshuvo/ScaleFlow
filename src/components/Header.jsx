import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "../utils/constants";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [active, setActive] = useState(NAV_LINKS[0].href);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-100 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-black text-indigo-900 dark:text-indigo-100 tracking-tight"
          onClick={() => handleNav("#")}
        >
          <span className="inline-block w-4 h-4 bg-indigo-900 dark:bg-indigo-400 rotate-45 rounded-sm shrink-0" />
          SolverCorp<span className="text-yellow-400">.</span>
        </a>

        {/* Desktop Nav — indigo pill */}
        <nav className="hidden md:flex items-center bg-indigo-900 rounded-full px-2 py-1.5 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNav(link.href)}
              className={
                active === link.href
                  ? "rounded-full px-4 py-1.5 text-sm font-semibold bg-white text-indigo-900"
                  : "rounded-full px-4 py-1.5 text-sm font-medium text-white hover:text-yellow-400 transition"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg text-indigo-900 dark:text-indigo-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNav(link.href)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active === link.href
                  ? "bg-indigo-900 text-white"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
