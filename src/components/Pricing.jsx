import { PRICING_PLANS } from "../utils/constants";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-black text-indigo-900 leading-tight">
          Upgrade Today – Unlock
          <br />
          <span className="text-yellow-400">More Features, More Power,</span>
          <br />
          More Growth!
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
        {PRICING_PLANS.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            featured={plan.featured}
          />
        ))}
      </div>
    </section>
  );
};
