export const FaqItem = ({ q, a }) => {
  return (
    <details className="group border-b border-slate-100 py-1">
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
        <span className="font-semibold text-slate-900 pr-4 text-sm md:text-base">
          {q}
        </span>
        <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold text-lg transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="pb-5 text-sm text-slate-500 leading-relaxed">{a}</p>
    </details>
  );
};
