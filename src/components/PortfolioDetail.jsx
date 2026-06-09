import { ArrowLeft } from "lucide-react";
import { PORTFOLIO } from "../utils/constants";

export const PortfolioDetail = ({ hash }) => {
  const match = hash.match(/^#portfolio-(\d+)$/);
  const projectId = match ? Number(match[1]) : null;
  const project = PORTFOLIO.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Project not found
          </p>
          <h2 className="mt-6 text-3xl font-black text-indigo-900">
            We couldn’t find that portfolio page.
          </h2>
          <p className="mt-4 text-slate-600">
            Return to the portfolio grid to choose another project.
          </p>
          <a
            href="#work"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-indigo-900 px-5 py-3 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-900 hover:text-white"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id={`portfolio-${project.id}`} className="py-20">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-900 hover:text-yellow-400"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </a>
          <div className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
            {project.label}
          </div>
        </div>
        <p className="text-sm text-slate-500">{project.date}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black text-indigo-900 sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-lg leading-8 text-slate-600">{project.desc}</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-indigo-900">
                The challenge
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-indigo-900">
                Our approach
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-base font-semibold uppercase tracking-[0.24em] text-slate-500">
              Results
            </h3>
            <ul className="mt-6 space-y-3 text-slate-700">
              {project.results.map((result, index) => (
                <li
                  key={index}
                  className="rounded-2xl bg-white p-4 text-sm shadow-sm"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
