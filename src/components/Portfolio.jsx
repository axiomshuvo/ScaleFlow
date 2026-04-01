import { PORTFOLIO } from "../utils/constants";
import { PortfolioCard } from "./PortfolioCard";

export const Portfolio = () => {
  return (
    <section id="work" className="mb-24">
      <div className="mb-12">
        <div className="inline-block px-8 py-4 bg-lime-300 text-slate-900 font-black text-3xl rotate-1">
          our work
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {PORTFOLIO.map((item, idx) => (
          <PortfolioCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
};
