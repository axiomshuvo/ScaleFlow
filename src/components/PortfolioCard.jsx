export const CaseStudyRow = ({ name, date, desc, image }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 border-b border-slate-100 dark:border-slate-800 last:border-0">
      {/* Thumbnail */}
      <div className="w-full sm:w-64 h-48 sm:h-44 rounded-xl overflow-hidden shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Name + date */}
      <div className="shrink-0">
        <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">
          {name}
        </h3>
        <p className="font-bold text-indigo-900 dark:text-indigo-100 mt-1">
          {date}
        </p>
      </div>
      {/* Description */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};
