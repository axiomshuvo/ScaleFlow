import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "../utils/constants";
import { ServiceItem } from "./ServiceCard";

const SLIDE_DECOR = [
  {
    left: "bg-white border-2 border-slate-200 -left-10 top-6 w-14 h-10 -rotate-12",
    right: "bg-green-400 -right-12 bottom-10 w-16 h-11 rotate-6",
    bottom: "bg-yellow-400 -left-8 bottom-16 w-10 h-8 rotate-12",
  },
  {
    left: "bg-blue-400 -left-12 top-10 w-12 h-9 -rotate-6",
    right: "bg-red-400 -right-10 bottom-12 w-14 h-10 rotate-12",
    bottom:
      "bg-white border-2 border-slate-200 -left-6 bottom-10 w-11 h-8 rotate-6",
  },
  {
    left: "bg-yellow-300 -left-10 top-8 w-[3.25rem] h-9 -rotate-12",
    right: "bg-emerald-400 -right-12 bottom-8 w-[3.75rem] h-10 rotate-6",
    bottom: "bg-indigo-200 -left-7 bottom-14 w-10 h-8 rotate-12",
  },
];

export const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = SERVICES.length;
  const activeService = SERVICES[activeSlide];
  const activeDecor = SLIDE_DECOR[activeSlide] ?? SLIDE_DECOR[0];

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

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

        {/* Woman photo carousel with decorative CSS blocks */}
        <div className="mb-12">
          <div className="relative mx-auto w-fit">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8498310/pexels-photo-8498310.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt={activeService.title}
                className="w-52 h-72 object-cover rounded-2xl relative z-10 transition-all duration-300"
              />
              <div
                className={`absolute rounded-lg z-0 pointer-events-none ${activeDecor.left}`}
              />
              <div
                className={`absolute rounded-lg z-0 pointer-events-none ${activeDecor.right}`}
              />
              <div
                className={`absolute rounded-lg z-0 pointer-events-none ${activeDecor.bottom}`}
              />
            </div>

            <div className="absolute inset-y-0 -left-14 hidden sm:flex items-center">
              <button
                type="button"
                onClick={goPrev}
                className="btn btn-circle btn-sm bg-white border border-slate-200 text-indigo-900 hover:bg-slate-50"
                aria-label="Previous service slide"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
            <div className="absolute inset-y-0 -right-14 hidden sm:flex items-center">
              <button
                type="button"
                onClick={goNext}
                className="btn btn-circle btn-sm bg-white border border-slate-200 text-indigo-900 hover:bg-slate-50"
                aria-label="Next service slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs tracking-[0.2em] font-semibold text-slate-400">
                {String(activeSlide + 1).padStart(2, "0")}
              </p>
              <p className="text-lg font-bold text-indigo-900 mt-1">
                {activeService.title}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={goPrev}
                className="btn btn-circle btn-xs bg-white border border-slate-200 text-indigo-900 hover:bg-slate-50"
                aria-label="Previous service slide"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="btn btn-circle btn-xs bg-white border border-slate-200 text-indigo-900 hover:bg-slate-50"
                aria-label="Next service slide"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {SERVICES.map((service, idx) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to ${service.title} slide`}
                  aria-current={activeSlide === idx ? "true" : "false"}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    activeSlide === idx
                      ? "w-8 bg-indigo-900"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
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
