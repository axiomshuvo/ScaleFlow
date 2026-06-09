export const PortfolioCard = ({ item }) => {
  const excerpt = item.excerpt ?? (item.desc.length > 120 ? item.desc.slice(0, 120) + "…" : item.desc);

  return (
    <a
      href={`#portfolio-${item.id}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
      aria-label={`Open portfolio case study: ${item.name}`}>
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
      </div>

      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</div>
          <div className="text-xs text-slate-400">{item.date}</div>
        </div>

        <h3 className="text-xl font-black text-indigo-900">{item.name}</h3>

        <p className="text-sm text-slate-600 leading-relaxed">{excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">{item.kpis ?? ""}</span>
          <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-indigo-900 px-4 py-2 text-sm font-semibold text-white">
            View case
          </span>
        </div>
      </div>
    </a>
  );
};

export const CaseStudyRow = ({ name, date, desc, image }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <div className="w-full sm:w-64 h-48 sm:h-44 rounded-xl overflow-hidden shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="shrink-0">
        <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">
          {name}
        </h3>
        <p className="font-bold text-indigo-900 dark:text-indigo-100 mt-1">
          {date}
        </p>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};
