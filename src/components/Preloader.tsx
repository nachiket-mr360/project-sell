import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Code } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textLinesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Add a small delay before calling onComplete
        setTimeout(onComplete, 300);
      }
    });

    // Initial setup
    gsap.set([logoRef.current, textRef.current], { opacity: 0 });
    gsap.set(textLinesRef.current, { y: 50, opacity: 0 });

    // Logo reveal animation
    tl.to(logoRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    .fromTo(logoRef.current, 
      { 
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" 
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "expo.inOut"
      },
      "<0.3"
    )
    .to(logoRef.current, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    }, "-=0.3");

    // Text reveal with stagger
    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.8")
    .to(textLinesRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.3");

    // Glow effect
    tl.to(logoRef.current, {
      boxShadow: "0 0 60px rgba(34, 211, 238, 0.7)",
      duration: 0.8,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut"
    }, "-=1.5");

    // Final fade out
    tl.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.inOut"
    });

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center">
        {/* Logo */}
        <div 
          ref={logoRef}
          className="mb-12 relative"
        >
          <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-2xl">
            <Code className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Text */}
        <div 
          ref={textRef}
          className="overflow-hidden"
        >
          <div 
            ref={(el) => textLinesRef.current[0] = el}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            CodeCraft
          </div>
          <div 
            ref={(el) => textLinesRef.current[1] = el}
            className="text-xl md:text-2xl text-gray-300 mb-2"
          >
            Academic Projects
          </div>
          <div 
            ref={(el) => textLinesRef.current[2] = el}
            className="text-lg text-cyan-400"
          >
            Learning Through Building
          </div>
        </div>

        {/* Loading indicator */}
        <div className="mt-16 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-cyan-400 rounded-full"
              style={{
                animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}