import { STATS } from "../utils/constants";
import { StatCard } from "./StatCard";

export const WhyUs = () => {
  return (
    <section id="why" className="mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-6 py-3 bg-lime-300 text-slate-900 font-black text-2xl -rotate-3 mb-8">
            why us?
          </div>
          <p className="text-lg text-slate-300 mb-8">
            Recognize success, strive for more.
          </p>
          <button className="px-6 py-2 bg-white text-slate-900 font-bold rounded">
            Start a Project
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 relative">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
