export const TestimonialCard = ({ name, role, text }) => {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col gap-4">
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
};
