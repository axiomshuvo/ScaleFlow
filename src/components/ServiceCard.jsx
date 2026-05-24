export const ServiceItem = ({ number, title, desc }) => {
  return (
    <div className="flex items-start gap-6 py-6 border-b border-indigo-700 last:border-0">
      <span className="text-5xl font-black text-indigo-500 leading-none select-none">
        {number}
      </span>
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-indigo-300 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};
