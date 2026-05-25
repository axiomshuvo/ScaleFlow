export const ServiceItem = ({ number, title, desc, featured }) => {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col gap-3 ${
        featured
          ? "bg-indigo-900 text-white"
          : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
      }`}
    >
      <p
        className={`text-sm font-medium ${
          featured ? "text-indigo-400" : "text-slate-400"
        }`}
      >
        {number}
      </p>
      <h3
        className={`text-xl font-bold leading-snug ${
          featured ? "text-white" : "text-indigo-900 dark:text-indigo-100"
        }`}
      >
        {title}.
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          featured ? "text-indigo-300" : "text-slate-500 dark:text-slate-400"
        }`}
      >
        {desc}
      </p>
    </div>
  );
};
