export const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-3xl text-white px-8 md:px-12"
    >
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-xl text-indigo-100 mb-8 max-w-3xl">
        We are a digital marketing agency committed to delivering innovative
        strategies that elevate your brand, increase engagement, and drive
        measurable growth.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-indigo-800/50 rounded-xl p-6 backdrop-blur">
          <h3 className="font-bold text-lg mb-2">
            Data-backed performance marketing
          </h3>
          <p className="text-indigo-200">
            Proven bidding, audience, and funnel optimization.
          </p>
        </div>
        <div className="bg-indigo-800/50 rounded-xl p-6 backdrop-blur">
          <h3 className="font-bold text-lg mb-2">High-quality prospects</h3>
          <p className="text-indigo-200">
            Focused on intent and conversion-ready traffic.
          </p>
        </div>
        <div className="bg-indigo-800/50 rounded-xl p-6 backdrop-blur">
          <h3 className="font-bold text-lg mb-2">
            A decade of driving digital success
          </h3>
          <p className="text-indigo-200">
            Cross-industry campaigns with reliable scaling.
          </p>
        </div>
      </div>
    </section>
  );
};
