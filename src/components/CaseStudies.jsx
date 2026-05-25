import { CASE_STUDIES } from "../utils/constants";
import { CaseStudyRow } from "./PortfolioCard";

export const CaseStudies = () => {
  return (
    <section id="cases" className="py-20">
      {/* Heading */}
      <div className="mb-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-indigo-900 dark:text-indigo-100 leading-tight">
          Showcasing{" "}
          <span className="bg-yellow-400 text-indigo-900 px-2">Creativity</span>
          <br />
          Inspiring Possibilities.
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-center text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto mb-12">
        We are a digital marketing agency committed to delivering innovative
        strategies that elevate your brand, increase engagement, and drive
        measurable growth.
      </p>

      {/* Case study rows */}
      <div>
        {CASE_STUDIES.map((study) => (
          <CaseStudyRow
            key={study.id}
            name={study.name}
            date={study.date}
            desc={study.desc}
            image={study.image}
          />
        ))}
      </div>
    </section>
  );
};
