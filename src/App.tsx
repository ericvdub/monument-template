import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { ProcessSteps } from './components/ProcessSteps';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      {/* <About /> */}
      <ProcessSteps />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}