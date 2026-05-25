import { PRICING_PLANS } from "../utils/constants";
import { PricingCard } from "./PricingCard";
import { Reveal } from "./Reveal";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <Reveal>
        <div className="mb-12 text-center mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-indigo-900 dark:text-indigo-100 leading-tight">
            Upgrade Today – Unlock
            <br />
            More Features,{" "}
            <span className="bg-yellow-400 text-indigo-900 px-2">
              More Power,
            </span>
            <br />
            More Growth!
          </h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan, idx) => (
          <Reveal key={plan.name} delay={idx * 100}>
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              desc={plan.desc}
              features={plan.features}
              featured={plan.featured}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
