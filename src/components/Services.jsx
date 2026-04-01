import { SERVICES } from "../utils/constants";

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl font-black text-indigo-900 mb-4">
        Digital Solutions
      </h2>
      <p className="text-xl text-slate-600 mb-12">
        <span className="text-indigo-900">for Business Growth.</span>
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
