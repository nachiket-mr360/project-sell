import { MessageCircle, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { addRippleEffect, addMagneticEffect, addPulseAnimation, makeStickyOnMobile } from '../utils/ctaUtils';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whatsappButtonRef = useRef<HTMLButtonElement>(null);
  const callButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Add effects to WhatsApp button
    if (whatsappButtonRef.current) {
      addRippleEffect(whatsappButtonRef.current);
      addMagneticEffect(whatsappButtonRef.current);
      addPulseAnimation(whatsappButtonRef.current, 'green');
      makeStickyOnMobile(whatsappButtonRef.current);
    }
    
    // Add effects to Call button
    if (callButtonRef.current) {
      addRippleEffect(callButtonRef.current);
      addMagneticEffect(callButtonRef.current);
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      hero.style.setProperty('--mouse-x', `${x * 20}px`);
      hero.style.setProperty('--mouse-y', `${y * 20}px`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your academic project services.');
    window.open(`https://wa.me/918217204054?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918217204054';
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="floating-shape absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="floating-shape absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="hero-content">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 leading-tight animate-text-reveal">
            Premium Academic Projects
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-text-reveal-delay">
            That Actually Help You <span className="text-cyan-400">Understand</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up">
            Mini & Major Projects with Full Explanation, Source Code & Documentation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay">
            <button
              ref={whatsappButtonRef}
              onClick={handleWhatsApp}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 magnetic-btn relative overflow-hidden"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Contact on WhatsApp
              </span>
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
            </button>

            <button
              ref={callButtonRef}
              onClick={handleCall}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 magnetic-btn relative overflow-hidden"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Call Now
              </span>
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
            </button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500">
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center flex-1 min-w-[150px]">
                <div className="text-2xl font-bold text-cyan-400 mb-2">Clear Explanations</div>
                <div className="text-gray-400 text-sm">Detailed explanation about the project</div>
              </div>
              <div className="text-center flex-1 min-w-[150px]">
                <div className="text-2xl font-bold text-purple-400 mb-2">Step-by-Step Guidance</div>
                <div className="text-gray-400 text-sm">From setup to viva preparation</div>
              </div>
              <div className="text-center flex-1 min-w-[150px]">
                <div className="text-2xl font-bold text-blue-400 mb-2">Proper Documentation</div>
                <div className="text-gray-400 text-sm">Ready for submission and presentation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
