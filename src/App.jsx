import {
  About,
  CaseStudies,
  CTA,
  FAQ,
  Footer,
  Header,
  Hero,
  Pricing,
  Services,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <Hero />
        <About />
        <CaseStudies />
        <Services />
        <Pricing />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
