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
          {/* Colorful blocks photo — Pexels free license */}
          <img
            src="https://images.pexels.com/photos/4491701/pexels-photo-4491701.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Vibrant assortment of colorful plastic building blocks"
            className="w-full rounded-2xl object-cover max-h-72"
          />
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
