import { FAQ_ITEMS } from "../utils/constants";
import { FaqItem } from "./FaqItem";

export const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <h2 className="text-4xl md:text-5xl font-black text-indigo-900 mb-12">
        FAQ.
      </h2>
      <div className="max-w-2xl">
        {FAQ_ITEMS.map((item, idx) => (
          <FaqItem key={idx} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
};
