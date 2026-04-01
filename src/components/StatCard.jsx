export const StatCard = ({ stat, idx }) => {
  return (
    <div
      className="p-6 bg-white/10 backdrop-blur border border-cyan-400/20 rounded-2xl hover:bg-white/20 transition group"
      style={{
        transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)`,
      }}
    >
      <div className="text-3xl font-black text-lime-300 group-hover:text-cyan-300 transition">
        {stat.value}
      </div>
      <p className="text-sm text-slate-300 mt-2">{stat.label}</p>
    </div>
  );
};
