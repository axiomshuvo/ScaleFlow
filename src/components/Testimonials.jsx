import { TESTIMONIALS } from "../utils/constants";

export const Testimonials = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-black text-indigo-900 mb-12 text-center">
        Client Testimonials.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <p className="text-slate-600 text-sm mb-4">"{testimonial.text}"</p>
            <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
            <p className="text-sm text-slate-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
