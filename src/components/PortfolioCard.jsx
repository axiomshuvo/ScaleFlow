export const CaseStudyRow = ({ name, date, desc, color }) => {
  return (
    <div className="flex items-center gap-6 py-5 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition rounded-xl px-2">
      <div
        className={`w-14 h-14 rounded-xl shrink-0 ${color} flex items-center justify-center`}
      >
        <span className="text-white font-black text-lg">{name.charAt(0)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <span className="text-xs text-slate-400">{date}</span>
        </div>
        <p className="text-sm text-slate-500 truncate">{desc}</p>
      </div>
      <span className="text-slate-300 group-hover:text-indigo-600 transition font-bold text-xl">
        →
      </span>
    </div>
  );
};
