export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 text-center">
      {/* Decorative CSS blocks — replace LEGO illustrations */}
      <div className="pointer-events-none select-none">
        <div className="absolute top-10 left-6 md:left-16 w-16 h-11 bg-green-400 rounded-lg rotate-12 opacity-75" />
        <div className="absolute top-6 left-28 md:left-40 w-10 h-14 bg-yellow-400 rounded-lg -rotate-6 opacity-70" />
        <div className="absolute top-16 right-8 md:right-20 w-14 h-10 bg-red-400 rounded-lg rotate-6 opacity-75" />
        <div className="absolute top-4 right-28 md:right-48 w-10 h-16 bg-blue-400 rounded-lg -rotate-12 opacity-65" />
        <div className="absolute bottom-16 left-8 md:left-24 w-12 h-12 bg-orange-400 rounded-lg rotate-3 opacity-70" />
        <div className="absolute bottom-10 left-32 md:left-52 w-8 h-10 bg-pink-400 rounded-lg -rotate-3 opacity-65" />
        <div className="absolute bottom-12 right-10 md:right-28 w-14 h-9 bg-green-500 rounded-lg -rotate-6 opacity-70" />
        <div className="absolute bottom-20 right-32 md:right-56 w-9 h-13 bg-yellow-500 rounded-lg rotate-8 opacity-65" />
        <div className="absolute top-1/2 left-2 md:left-6 w-7 h-11 bg-blue-500 rounded-lg rotate-2 opacity-60" />
        <div className="absolute top-1/3 right-2 md:right-6 w-11 h-7 bg-red-500 rounded-lg -rotate-4 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto px-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
          Digital Growth Studio
        </p>
        <h1 className="text-5xl md:text-7xl font-black leading-tight text-indigo-900 dark:text-indigo-100">
          We Crafting <span className="text-yellow-400">Real Results</span>
          <br />
          More Traffic, More Leads,
          <br />
          More Growth!
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Agency-level digital marketing built for fast-moving brands. Data-led
          strategy, creative execution, measurable conversions.
        </p>
        <a
          href="#about"
          className="inline-block px-10 py-4 bg-yellow-400 text-indigo-900 font-black rounded-xl hover:bg-yellow-300 transition text-sm uppercase tracking-widest"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};
