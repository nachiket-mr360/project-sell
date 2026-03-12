import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { animationManager } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize all scroll animations after component mounts
    const initAnimations = () => {
      animationManager.initScrollAnimations();
    };
    
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(initAnimations, 100);
    
    return () => {
      clearTimeout(timer);
      animationManager.cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Pricing />
      <Features />
      <WhyChooseUs />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
