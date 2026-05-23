import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} className="text-slate-700" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </button>
  );
};
