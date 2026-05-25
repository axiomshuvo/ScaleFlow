import { ArrowUpRight } from "lucide-react";

export const PricingCard = ({ name, price, desc, features, featured }) => {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-5 ${
        featured
          ? "bg-indigo-900 text-white"
          : "bg-white border border-slate-200 text-slate-900"
      }`}
    >
      {/* Plan name */}
      <p
        className={`text-xs font-bold uppercase tracking-widest ${
          featured ? "text-indigo-300" : "text-indigo-600"
        }`}
      >
        {name}
      </p>

      {/* Price + desc */}
      <div>
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
        {desc && (
          <p
            className={`text-sm mt-3 leading-relaxed ${
              featured ? "text-indigo-300" : "text-slate-500"
            }`}
          >
            {desc}
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span
              className={`shrink-0 mt-0.5 ${
                featured ? "text-yellow-400" : "text-indigo-600"
              }`}
            >
              ↗
            </span>
            <span className={featured ? "text-indigo-200" : "text-slate-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`w-full py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-widest transition flex items-center justify-between ${
          featured
            ? "bg-yellow-400 text-indigo-900 hover:bg-yellow-300"
            : "bg-slate-100 text-indigo-900 hover:bg-slate-200"
        }`}
      >
        <span>Get Started</span>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
            featured ? "bg-indigo-900 text-yellow-400" : "bg-indigo-900 text-white"
          }`}
        >
          <ArrowUpRight size={14} />
        </span>
      </button>
    </div>
  );
};
