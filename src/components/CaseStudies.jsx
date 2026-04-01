import { CASE_STUDIES } from "../utils/constants";

export const CaseStudies = () => {
  return (
    <section className="py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-indigo-900 mb-4">
          Showcasing Creativity
        </h2>
        <p className="text-xl text-slate-600">
          <span className="font-bold">Inspiring Possibilities.</span>
        </p>
      </div>
      <div className="space-y-6">
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={study.id}
            className="flex items-start gap-6 group cursor-pointer"
          >
            <div
              className={`${study.color} w-20 h-20 rounded-lg flex-shrink-0 group-hover:shadow-lg transition`}
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-indigo-900">
                {study.name}
              </h3>
              <p className="text-sm text-slate-500">{study.date}</p>
              <p className="text-slate-700 mt-2">{study.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
