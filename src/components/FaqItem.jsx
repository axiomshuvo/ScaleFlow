import { useState } from "react";

export const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 dark:border-slate-700 py-1">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-slate-900 dark:text-slate-100 pr-4 text-sm md:text-base">
          {q}
        </span>
        <span
          className={`w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-500 text-indigo-700 dark:text-white flex items-center justify-center shrink-0 font-bold text-lg transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
};
