import { Search } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "../utils/constants";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [active, setActive] = useState(NAV_LINKS[0].href);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-black text-indigo-900 tracking-tight"
          onClick={() => setActive("#")}
        >
          <span className="inline-block w-4 h-4 bg-indigo-900 rotate-45 rounded-sm shrink-0" />
          SolverCorp<span className="text-yellow-400">.</span>
        </a>

        {/* Nav — indigo pill container */}
        <nav className="hidden md:flex items-center bg-indigo-900 rounded-full px-2 py-1.5 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.href)}
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
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="bg-indigo-900 rounded-full p-2.5 hover:bg-indigo-800 transition"
          >
            <Search size={18} className="text-yellow-400" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
