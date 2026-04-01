export const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-black text-indigo-800">SolverCorp</div>

        <nav className="hidden gap-6 text-white font-light rounded-full md:flex items-center bg-indigo-800 px-4 py-2 rounded-lg">
          <a href="#about" className="active ">
            Home
          </a>
          <a href="#about" className=" ">
            About
          </a>
          <a href="#services" className=" ">
            Services
          </a>
          <a href="#pricing" className=" ">
            Pricing
          </a>
          <a href="#faq" className=" ">
            FAQ
          </a>
        </nav>
        <button className="px-4 py-2 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-700 transition text-sm">
          Get Started
        </button>
      </div>
    </header>
  );
};
