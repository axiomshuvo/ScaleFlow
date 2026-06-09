import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { PORTFOLIO } from "../utils/constants";

export const PortfolioDetail = ({ hash }) => {
  const match = hash.match(/^#portfolio-(\d+)$/);
  const projectId = match ? Number(match[1]) : null;
  const idx = PORTFOLIO.findIndex((item) => item.id === projectId);
  const project = idx >= 0 ? PORTFOLIO[idx] : null;

  const len = PORTFOLIO.length;
  const prev = idx >= 0 ? PORTFOLIO[(idx - 1 + len) % len] : null;
  const next = idx >= 0 ? PORTFOLIO[(idx + 1) % len] : null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft" && prev) {
        window.location.hash = `#portfolio-${prev.id}`;
      }
      if (e.key === "ArrowRight" && next) {
        window.location.hash = `#portfolio-${next.id}`;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (!project) {
    return (
      <section className="py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Project not found
          </p>
          <h2 className="mt-6 text-3xl font-black text-indigo-900">We couldn’t find that portfolio page.</h2>
          <p className="mt-4 text-slate-600">Return to the portfolio grid to choose another project.</p>
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
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#work" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-900 hover:text-yellow-400">
            <ArrowLeft size={16} /> Back to portfolio
          </a>
          <div className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
            {project.label}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-500 mr-4">{project.date}</div>
          <a
            href={`#portfolio-${prev.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            aria-label="Previous project"
          >
            <ArrowLeft size={16} /> Prev
          </a>
          <a
            href={`#portfolio-${next.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-900 bg-indigo-900 px-3 py-2 text-sm font-semibold text-white hover:opacity-90 ml-2"
            aria-label="Next project"
          >
            Next <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.25fr,0.75fr] items-start">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black text-indigo-900 sm:text-5xl">{project.name}</h1>
          <p className="text-lg leading-8 text-slate-600">{project.desc}</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-indigo-900">The challenge</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-indigo-900">Our approach</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-base font-semibold uppercase tracking-[0.24em] text-slate-500">Results</h3>
            <ul className="mt-6 space-y-3 text-slate-700">
              {project.results.map((result, index) => (
                <li key={index} className="rounded-2xl bg-white p-4 text-sm shadow-sm">{result}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">Tip: use ← and → keys to navigate between projects.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
          </div>
        </aside>
      </div>
    </section>
  );
};
