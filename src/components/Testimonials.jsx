import { TESTIMONIALS } from "../utils/constants";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl md:text-5xl font-black text-indigo-900 mb-12">
        Client Testimonials.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <TestimonialCard
            key={idx}
            name={t.name}
            role={t.role}
            text={t.text}
          />
        ))}
      </div>
    </section>
  );
};
