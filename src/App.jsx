import {
  About,
  CaseStudies,
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <Hero />
        <About />
        <CaseStudies />
        <Services />
        <Pricing />
        <FAQ />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
