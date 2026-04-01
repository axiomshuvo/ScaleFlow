export const ServiceCard = ({ service, idx }) => {
  return (
    <div
      className={`p-6 rounded-2xl bg-gradient-to-br ${service.color} text-white font-bold text-lg hover:shadow-lg transition group cursor-pointer`}
      style={{
        transform: `rotate(${idx % 3 === 0 ? -3 : 3}deg)`,
      }}
    >
      <div className="text-3xl mb-3">{service.icon}</div>
      <div className="group-hover:translate-x-1 transition">{service.name}</div>
    </div>
  );
};
