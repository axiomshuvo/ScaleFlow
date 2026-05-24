export const PricingCard = ({ name, price, features, featured }) => {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-6 ${
        featured
          ? "bg-indigo-900 text-white"
          : "bg-white border border-slate-200 text-slate-900"
      }`}
    >
      <div>
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
            featured ? "text-indigo-300" : "text-indigo-600"
          }`}
        >
          {name}
        </p>
        <p className="text-5xl font-black">
          {price}
          <span
            className={`text-lg font-medium ml-1 ${
              featured ? "text-indigo-300" : "text-slate-400"
            }`}
          >
            /mo
          </span>
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                featured
                  ? "bg-yellow-400 text-indigo-900"
                  : "bg-indigo-100 text-indigo-700"
              }`}
            >
              ✓
            </span>
            <span className={featured ? "text-indigo-200" : "text-slate-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl font-bold text-sm transition ${
          featured
            ? "bg-yellow-400 text-indigo-900 hover:bg-yellow-300"
            : "bg-indigo-900 text-white hover:bg-indigo-800"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};
