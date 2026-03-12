import gsap from 'gsap';

// Smooth scroll to element with GSAP
export function smoothScrollTo(element: HTMLElement | string, duration: number = 1.0) {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  
  if (!target) {
    console.warn('Target element not found for smooth scroll');
    return;
  }

  gsap.to(window, {
    duration: duration,
    scrollTo: {
      y: target,
      offsetY: 80 // Offset for fixed header if needed
    },
    ease: "power2.inOut"
  });
}

// Add ripple effect to buttons
export function addRippleEffect(button: HTMLElement) {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

// Add glow effect to elements
export function addGlowEffect(element: HTMLElement, color: string = 'cyan') {
  const originalBoxShadow = getComputedStyle(element).boxShadow;
  
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      boxShadow: `0 0 20px rgba(${getColorValues(color)}, 0.6), 0 0 30px rgba(${getColorValues(color)}, 0.4)`,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      boxShadow: originalBoxShadow,
      duration: 0.3,
      ease: "power2.out"
    });
  });
}

// Add pulse animation
export function addPulseAnimation(element: HTMLElement, color: string = 'cyan') {
  gsap.to(element, {
    boxShadow: `0 0 0 0 rgba(${getColorValues(color)}, 0.7)`,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

// Add magnetic hover effect
export function addMagneticEffect(element: HTMLElement) {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / 10;
    const angleY = (centerX - x) / 10;
    
    gsap.to(element, {
      rotationX: angleX,
      rotationY: angleY,
      duration: 0.2,
      ease: "power2.out"
    });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  });
}

// Helper function to get color values
function getColorValues(color: string): string {
  const colors: Record<string, string> = {
    'cyan': '34, 211, 238',
    'purple': '168, 85, 247',
    'blue': '59, 130, 246',
    'green': '34, 197, 94',
    'red': '239, 68, 68'
  };
  
  return colors[color] || colors.cyan;
}

// Make element sticky on mobile
export function makeStickyOnMobile(element: HTMLElement, breakpoint: number = 768) {
  const handleScroll = () => {
    if (window.innerWidth <= breakpoint) {
      element.classList.add('sticky', 'bottom-4', 'left-4', 'right-4', 'z-50');
    } else {
      element.classList.remove('sticky', 'bottom-4', 'left-4', 'right-4', 'z-50');
    }
  };
  
  window.addEventListener('resize', handleScroll);
  handleScroll();
}

// Add highlight animation when element is in viewport
export function addViewportHighlight(element: HTMLElement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(element, {
          backgroundColor: 'rgba(34, 211, 238, 0.1)',
          borderColor: 'rgba(34, 211, 238, 0.5)',
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        gsap.to(element, {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(element);
}