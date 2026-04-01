export const Hero = () => {
  return (
    <section className="py-20 text-center space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Digital Growth Studio
        </p>
        <h1 className="text-5xl md:text-7xl font-black leading-tight text-indigo-900">
          We Crafting Real Results
          <br />
          More Traffic, More Leads,
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 px-4 py-2 inline-block rounded-lg">
            More Growth!
          </span>
        </h1>
      </div>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Agency-level digital marketing built for fast-moving brands. Data-led
        strategy, creative execution, and measurable conversions.
      </p>
      <button className="mx-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
        Get Started
      </button>
    </section>
  );
};
