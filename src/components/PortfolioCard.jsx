export const CaseStudyRow = ({ name, date, desc, image }) => {
  return (
    <div className="flex items-center gap-8 py-8">
      {/* Thumbnail */}
      <img
        src={image}
        alt={name}
        className="w-64 h-44 rounded-xl object-cover shrink-0"
      />
      {/* Name + date */}
      <div className="shrink-0">
        <h3 className="text-lg font-bold text-indigo-900">{name}</h3>
        <p className="font-bold text-indigo-900 mt-1">{date}</p>
      </div>
      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
};
