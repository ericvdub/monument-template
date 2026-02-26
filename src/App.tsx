import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { ProcessSteps } from './components/ProcessSteps';
import { OnlineDesignerCTA } from './components/OnlineDesignerCTA';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <ProcessSteps />
      <OnlineDesignerCTA />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
