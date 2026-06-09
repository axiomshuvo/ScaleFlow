export const PortfolioCard = ({ item }) => {
  return (
    <a
      href={`#portfolio-${item.id}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
    >
      <div className="h-56 overflow-hidden rounded-t-3xl">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="text-sm uppercase tracking-[0.24em] text-slate-500">
          {item.label}
        </div>
        <h3 className="text-xl font-black text-indigo-900">{item.name}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{item.date}</span>
          <span className="font-semibold text-indigo-900">View case</span>
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
