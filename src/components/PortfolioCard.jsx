export const PortfolioCard = ({ item, idx }) => {
  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl h-64 bg-gradient-to-br ${item.color}`}
      style={{
        transform: `rotate(${idx === 1 ? 0 : idx % 2 === 0 ? -2 : 2}deg)`,
      }}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex flex-col justify-end p-6">
        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-white/80">{item.desc}</p>
      </div>
    </div>
  );
};
