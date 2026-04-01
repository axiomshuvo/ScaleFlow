import { PRICING_PLANS } from "../utils/constants";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 text-center">
      <h2 className="text-4xl font-black text-indigo-900 mb-12">
        Upgrade Today – Unlock
        <br />
        <span className="text-yellow-400">More Features, More Power,</span>
        <br />
        More Growth!
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {PRICING_PLANS.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-8 transition ${
              plan.featured
                ? "bg-gradient-to-br from-indigo-700 to-indigo-900 text-white shadow-xl"
                : "bg-white border-2 border-slate-200"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-4`}>{plan.name}</h3>
            <p className={`text-4xl font-black mb-6`}>{plan.price}</p>
            <ul
              className={`space-y-3 text-left mb-8 ${plan.featured ? "text-indigo-100" : "text-slate-600"}`}
            >
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-lg">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 font-bold rounded-lg transition ${
                plan.featured
                  ? "bg-yellow-400 text-indigo-900 hover:bg-yellow-300"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
