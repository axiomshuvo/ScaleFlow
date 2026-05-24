export const StatItem = ({ value, label }) => {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-black text-yellow-400">{value}</span>
      <span className="text-sm font-medium text-indigo-200 mt-1">{label}</span>
    </div>
  );
};
