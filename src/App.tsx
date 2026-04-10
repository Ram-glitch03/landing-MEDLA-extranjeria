import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
import StickyScroll from "./components/StickyScroll";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent/30 selection:text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <Companies />
        <About />
        <StickyScroll />
        <Services />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
