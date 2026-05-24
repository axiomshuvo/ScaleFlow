import { CASE_STUDIES } from "../utils/constants";
import { CaseStudyRow } from "./PortfolioCard";

export const CaseStudies = () => {
  return (
    <section id="cases" className="py-20">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-black text-indigo-900 leading-tight">
          Showcasing <span className="text-yellow-400">Creativity</span>
          <br />
          Inspiring <span className="text-yellow-400">Possibilities.</span>
        </h2>
      </div>

      {/* Case study rows */}
      <div className="mb-10">
        {CASE_STUDIES.map((study) => (
          <CaseStudyRow
            key={study.id}
            name={study.name}
            date={study.date}
            desc={study.desc}
            color={study.color}
          />
        ))}
      </div>

      {/* Colorful decorative banner */}
      <div className="grid grid-cols-6 gap-2 rounded-2xl overflow-hidden h-20">
        <div className="bg-green-400" />
        <div className="bg-yellow-400" />
        <div className="bg-red-400" />
        <div className="bg-blue-500" />
        <div className="bg-orange-400" />
        <div className="bg-pink-400" />
      </div>
    </section>
  );
};
