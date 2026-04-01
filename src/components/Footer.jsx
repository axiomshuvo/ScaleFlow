export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-white">SolverCorp</h3>
            <p className="text-sm text-slate-400 mt-2">
              Drive quality leads, maximize growth, convert more customers.
            </p>
          </div>
          <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition text-sm">
            Get Started
          </button>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © 2026 SolverCorp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
