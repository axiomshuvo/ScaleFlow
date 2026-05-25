import { TESTIMONIALS } from "../utils/constants";
import { Reveal } from "./Reveal";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="py-20">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-black text-indigo-900 dark:text-indigo-100 mb-12 text-center">
          Client Testimonials.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <TestimonialCard
              key={idx}
              name={t.name}
              role={t.role}
              text={t.text}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
