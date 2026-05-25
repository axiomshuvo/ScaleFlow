import { FAQ_ITEMS } from "../utils/constants";
import { FaqItem } from "./FaqItem";
import { Reveal } from "./Reveal";

export const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-black text-indigo-900 dark:text-indigo-100 mb-12 text-center">
          FAQ.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="max-w-2xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => (
            <FaqItem key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};
