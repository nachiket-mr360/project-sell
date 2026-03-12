import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/ctaUtils';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(`#${sectionId}`, 1.0);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your academic project services.');
    window.open(`https://wa.me/918217204054?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+918217204054';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:nachiketmr.360@gmail.com';
  };

  const handleGetInTouch = () => {
    handleWhatsAppClick(); // Prefer WhatsApp for quick response
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AcademicProjects
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Helping students succeed with quality academic projects, complete explanations, and comprehensive support.
            </p>
            <div className="flex gap-4">
             
              <a
                href="https://www.linkedin.com/in/nachiket-mr360/"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('technologies-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  Technologies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('pricing-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  Mini Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  Major Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  Custom Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing-section')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-left w-full"
                >
                  Viva Preparation
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 AcademicProjects. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 z-50 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
}
