import { STATS } from "../utils/constants";
import { StatItem } from "./StatCard";

export const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-indigo-900 rounded-3xl text-white px-8 md:px-14 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — heading + decorative blocks */}
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-yellow-400 mb-10 leading-tight">
            About Us.
          </h2>
          {/* Colorful stacked CSS blocks */}
          <div className="grid grid-cols-3 gap-2 max-w-xs">
            <div className="h-14 bg-green-400 rounded-lg" />
            <div className="h-14 bg-yellow-400 rounded-lg" />
            <div className="h-14 bg-red-400 rounded-lg" />
            <div className="h-14 bg-blue-400 rounded-lg" />
            <div className="h-14 bg-orange-400 rounded-lg" />
            <div className="h-14 bg-pink-400 rounded-lg" />
          </div>
        </div>

        {/* Right — description + stats */}
        <div className="flex flex-col gap-8">
          <p className="text-indigo-200 text-lg leading-relaxed">
            We are a digital marketing agency committed to delivering innovative
            strategies that elevate your brand, increase engagement, and drive
            measurable growth across every channel.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
