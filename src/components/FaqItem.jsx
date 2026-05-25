export const FaqItem = ({ q, a }) => {
  return (
    <details className="group border-b border-slate-100 dark:border-slate-700 py-1">
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
        <span className="font-semibold text-slate-900 dark:text-slate-100 pr-4 text-sm md:text-base">
          {q}
        </span>
        <span className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-500 text-indigo-700 dark:text-white flex items-center justify-center shrink-0 font-bold text-lg transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {a}
      </p>
    </details>
  );
};
