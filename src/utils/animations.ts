import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export class AnimationManager {
  private static instance: AnimationManager;
  private animations: gsap.core.Tween[] = [];

  private constructor() {}

  static getInstance(): AnimationManager {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager();
    }
    return AnimationManager.instance;
  }

  // Initialize all scroll animations
  initScrollAnimations() {
    // Check if on mobile device
    const isMobile = window.innerWidth <= 768;
    
    // Reduce animation intensity on mobile
    if (isMobile) {
      gsap.globalTimeline.timeScale(0.8);
    }
    
    // Hero section animations
    this.animateHeroSection();
    
    // About section animations
    this.animateAboutSection();
    
    // Features section animations
    this.animateFeaturesSection();
    
    // Why Choose Us section animations
    this.animateWhyChooseUsSection();
    
    // Pricing section animations
    this.animatePricingSection();
    
    // Technologies section animations
    this.animateTechnologiesSection();
    
    // Contact section animations
    this.animateContactSection();
    
    // Add floating particles
    const heroSection = document.querySelector('section');
    if (heroSection) {
      this.addFloatingParticles(heroSection as HTMLElement, isMobile ? 8 : 15);
    }
  }

  // Hero section with layered animations
  private animateHeroSection() {
    const hero = document.querySelector('.hero-content');
    const floatingShapes = document.querySelectorAll('.floating-shape');
    const glassCard = document.querySelector('.glass-card');

    if (hero) {
      // Main hero content animation
      gsap.fromTo(hero, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: hero,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // Floating shapes parallax effect
    floatingShapes.forEach((shape, index) => {
      gsap.to(shape, {
        y: (index + 1) * 20,
        x: (index % 2 === 0 ? 1 : -1) * 15,
        rotation: (index + 1) * 15,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: shape,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
          toggleActions: "play reverse play reverse"
        }
      });
    });

    if (glassCard) {
      // Glass card 3D tilt effect
      this.add3DTiltEffect(glassCard as HTMLElement);
      
      // Glass card entrance animation
      gsap.fromTo(glassCard,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: glassCard,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
  }

  // About section timeline animations
  private animateAboutSection() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      const icon = item.querySelector('div > div:first-child');
      const content = item.querySelector('div > div:last-child');
      
      if (icon && content) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        });
        
        tl.fromTo(icon,
          {
            opacity: 0,
            scale: 0.5,
            rotation: -15
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
          }
        ).fromTo(content,
          {
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
          },
          "-=0.4"
        );
      }
    });
  }

  // Features section grid animations
  private animateFeaturesSection() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
      this.add3DTiltEffect(card as HTMLElement);
      
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          },
          delay: index * 0.1
        }
      );
    });
  }

  // Why Choose Us section animations
  private animateWhyChooseUsSection() {
    const statCards = document.querySelectorAll('.stat-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Stat cards animations
    statCards.forEach((card, index) => {
      this.add3DTiltEffect(card as HTMLElement);
      
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 30,
          rotationX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          },
          delay: index * 0.15
        }
      );
    });
    
    // Testimonial animations
    testimonialCards.forEach((card) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });
  }

  // Pricing section animations
  private animatePricingSection() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach((card, index) => {
      this.add3DTiltEffect(card as HTMLElement);
      
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          },
          delay: index * 0.2
        }
      );
    });
  }

  // Technologies section animations
  private animateTechnologiesSection() {
    const techBadges = document.querySelectorAll('.tech-badge');
    
    techBadges.forEach((badge, index) => {
      gsap.fromTo(badge,
        {
          opacity: 0,
          scale: 0,
          rotation: -180
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: badge,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
          },
          delay: index * 0.05
        }
      );
    });
  }

  // Contact section animations
  private animateContactSection() {
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');
    
    if (contactForm) {
      gsap.fromTo(contactForm,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactForm,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
    
    if (contactInfo) {
      gsap.fromTo(contactInfo,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactInfo,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
  }

  // Add 3D tilt effect to elements
  add3DTiltEffect(element: HTMLElement) {
    if (!element) return;
    
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      gsap.to(element, {
        rotationX: rotateX,
        rotationY: rotateY,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    });
  }

  // Add gradient glow effect
  addGradientGlow(element: HTMLElement, colors: string[] = ['cyan', 'purple']) {
    if (!element) return;
    
    const gradient = `linear-gradient(45deg, ${colors.map(color => `var(--${color}-500)`).join(', ')})`;
    
    gsap.to(element, {
      background: gradient,
      boxShadow: `0 0 30px ${colors[0]}40`,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  // Add floating particles
  addFloatingParticles(container: HTMLElement, count: number = 15) {
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white/10';
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(particle);
      
      gsap.to(particle, {
        y: -100,
        opacity: 0,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        delay: Math.random() * 5,
        ease: "none"
      });
    }
  }

  // Cleanup all animations
  cleanup() {
    this.animations.forEach(anim => anim.kill());
    this.animations = [];
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}

// Performance optimization utilities
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  } as T;
}

// Export singleton instance
export const animationManager = AnimationManager.getInstance();