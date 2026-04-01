import { useState } from "react";
import { FAQ_ITEMS } from "../utils/constants";

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-20">
      <h2 className="text-4xl font-black text-indigo-900 mb-12 text-center">
        FAQ.
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded-xl bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-50 transition"
            >
              <span className="font-semibold text-slate-900">{item.q}</span>
              <span className="text-2xl text-indigo-600">
                {openIdx === idx ? "−" : "+"}
              </span>
            </button>
            {openIdx === idx && (
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                <p className="text-slate-600">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
