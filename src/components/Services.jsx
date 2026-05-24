import { SERVICES } from "../utils/constants";
import { ServiceItem } from "./ServiceCard";

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="bg-indigo-900 rounded-3xl px-8 md:px-14 py-14 grid md:grid-cols-2 gap-10 items-start overflow-hidden">
        {/* Left — heading + numbered services */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-10">
            Digital Solutions
            <br />
            for <span className="text-yellow-400">Business Growth.</span>
          </h2>
          <div>
            {SERVICES.map((service, idx) => (
              <ServiceItem
                key={service.title}
                number={String(idx + 1).padStart(2, "0")}
                title={service.title}
                desc={service.desc}
              />
            ))}
          </div>
        </div>

        {/* Right — decorative CSS block (person placeholder) */}
        <div className="hidden md:flex items-end justify-center h-full pt-4">
          <div className="relative w-52">
            {/* Body */}
            <div className="w-40 h-56 bg-yellow-400 rounded-t-full mx-auto relative">
              {/* Head */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-300 rounded-full border-4 border-yellow-500" />
            </div>
            {/* Decorative blocks behind */}
            <div className="absolute bottom-0 left-0 w-12 h-20 bg-red-400 rounded-lg -rotate-6" />
            <div className="absolute bottom-4 right-0 w-10 h-16 bg-blue-400 rounded-lg rotate-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
