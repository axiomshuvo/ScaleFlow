export const StatItem = ({ prefix, value, suffix, headline }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-indigo-300">
        {prefix && <span>{prefix}</span>}
        <span className="font-bold text-white">{value}</span>
        {suffix && <span>{suffix}</span>}
      </p>
      <p className="text-xl md:text-2xl font-black text-yellow-400 leading-snug">
        {headline}
      </p>
    </div>
  );
};
