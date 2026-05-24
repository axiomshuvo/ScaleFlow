import { STATS } from "../utils/constants";
import { StatItem } from "./StatCard";

export const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-indigo-900 rounded-3xl text-white px-8 md:px-14 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — heading + pile of colorful CSS blocks */}
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-tight">
            About Us.
          </h2>
          {/* Colorful block pile */}
          <div className="relative h-52 max-w-xs pointer-events-none select-none">
            <div className="absolute bottom-0 left-0 w-20 h-14 bg-yellow-400 rounded-xl rotate-[-8deg]" />
            <div className="absolute bottom-0 left-14 w-16 h-12 bg-red-400 rounded-xl rotate-[6deg]" />
            <div className="absolute bottom-0 left-28 w-18 h-14 bg-blue-400 rounded-xl rotate-[-4deg]" />
            <div className="absolute bottom-12 left-4 w-16 h-12 bg-green-400 rounded-xl rotate-[10deg]" />
            <div className="absolute bottom-10 left-20 w-20 h-14 bg-orange-400 rounded-xl rotate-[-6deg]" />
            <div className="absolute bottom-10 left-36 w-14 h-12 bg-pink-400 rounded-xl rotate-[8deg]" />
            <div className="absolute bottom-22 left-8 w-14 h-12 bg-cyan-400 rounded-xl rotate-[-12deg]" />
            <div className="absolute bottom-22 left-24 w-16 h-12 bg-lime-400 rounded-xl rotate-[5deg]" />
            <div className="absolute bottom-34 left-16 w-18 h-14 bg-yellow-300 rounded-xl rotate-[-3deg]" />
          </div>
        </div>

        {/* Right — description + stats with dividers */}
        <div className="flex flex-col gap-6">
          <p className="text-white text-lg leading-relaxed">
            We are a digital marketing agency committed to delivering innovative
            strategies that elevate your brand, increase engagement, and drive
            measurable growth.
          </p>
          <div className="flex flex-col">
            {STATS.map((stat, i) => (
              <div key={stat.headline}>
                {i > 0 && <hr className="border-indigo-700 my-5" />}
                <StatItem
                  prefix={stat.prefix}
                  value={stat.value}
                  suffix={stat.suffix}
                  headline={stat.headline}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
