import { Search } from "lucide-react";
import { NAV_LINKS } from "../utils/constants";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-black text-indigo-900 tracking-tight"
        >
          SolverCorp<span className="text-yellow-400">.</span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="p-2 rounded-full hover:bg-slate-100 transition"
          >
            <Search size={18} className="text-slate-600" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
