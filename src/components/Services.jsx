import { SERVICES } from "../utils/constants";
import { ServiceItem } from "./ServiceCard";

export const Services = () => {
  return (
    <section id="services" className="py-20 space-y-14">
      {/* Division 1 — image only */}
      <img
        src="https://images.pexels.com/photos/4491701/pexels-photo-4491701.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Colorful building blocks"
        className="w-full h-72 object-cover rounded-2xl"
      />

      {/* Division 2 — tagline + woman photo + 3 cards */}
      <div>
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-black text-indigo-900 leading-tight mb-10">
          Digital Solutions
          <br />
          for{" "}
          <span className="bg-yellow-400 text-indigo-900 px-2">
            Business Growth.
          </span>
        </h2>

        {/* Woman photo with decorative CSS blocks */}
        <div className="relative flex justify-center mb-12">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8498310/pexels-photo-8498310.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Digital marketing professional"
              className="w-52 h-72 object-cover rounded-2xl relative z-10"
            />
            {/* Decorative LEGO-style blocks */}
            <div className="absolute -left-10 top-6 w-14 h-10 bg-white border-2 border-slate-200 rounded-lg -rotate-12 z-0 pointer-events-none" />
            <div className="absolute -right-12 bottom-10 w-16 h-11 bg-green-400 rounded-lg rotate-6 z-0 pointer-events-none" />
            <div className="absolute -left-8 bottom-16 w-10 h-8 bg-yellow-400 rounded-lg rotate-12 z-0 pointer-events-none" />
          </div>
        </div>

        {/* 3 service cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {SERVICES.map((service, idx) => (
            <ServiceItem
              key={service.title}
              number={String(idx + 1).padStart(2, "0")}
              title={service.title}
              desc={service.desc}
              featured={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
