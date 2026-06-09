import { useEffect, useState } from "react";
import {
  About,
  CaseStudies,
  Contact,
  CTA,
  FAQ,
  Footer,
  Header,
  Hero,
  Portfolio,
  PortfolioDetail,
  Pricing,
  Services,
  Testimonials,
} from "./components";

function App() {
  const [hash, setHash] = useState(
    typeof window !== "undefined" ? window.location.hash || "#" : "#",
  );

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || "#");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isPortfolioDetail = hash.startsWith("#portfolio-");

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        {isPortfolioDetail ? (
          <PortfolioDetail hash={hash} />
        ) : (
          <>
            <Hero />
            <About />
            <Portfolio />
            <CaseStudies />
            <Services />
            <Pricing />
            <FAQ />
            <Testimonials />
            <Contact />
            <CTA />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
