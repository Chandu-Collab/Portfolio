import { Variants } from 'framer-motion';

// Enhanced animation variants for consistent, smooth animations
export const smoothAnimations = {
  // Page transitions
  pageTransition: {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "blur(10px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.02,
      filter: "blur(5px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.6, 1]
      }
    }
  } as Variants,

  // Navbar animations
  navbarContainer: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  } as Variants,

  navItem: {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  } as Variants,

  // Mobile menu animations
  mobileMenu: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 90,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.6, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  } as Variants,

  mobileMenuItem: {
    hidden: {
      opacity: 0,
      x: -50,
      rotateY: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8
      }
    },
    exit: {
      opacity: 0,
      x: 50,
      rotateY: 90,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.6, 1]
      }
    }
  } as Variants,

  // Footer animations
  footerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  } as Variants,

  footerSection: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  } as Variants,

  // Social links
  socialLink: {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    })
  } as Variants,

  // Loading animations
  loadingContainer: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  } as Variants,

  loadingDot: {
    hidden: { y: 0, scale: 1 },
    visible: {
      y: [-10, 0, -10],
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  } as Variants,

  // Card animations
  card: {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  } as Variants,

  // Button animations
  button: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  } as Variants,

  // Text animations
  textReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  } as Variants,

  // Stagger animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as Variants,

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  } as Variants
};

// Common transition presets
export const transitions = {
  smooth: {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1]
  },
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 20
  },
  fast: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1]
  },
  slow: {
    duration: 1,
    ease: [0.4, 0, 0.2, 1]
  }
};

// Hover effects
export const hoverEffects = {
  scale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
  lift: {
    whileHover: { y: -5 },
    whileTap: { y: -2 }
  },
  glow: {
    whileHover: {
      boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
    }
  },
  rotate: {
    whileHover: { rotate: 5 },
    whileTap: { rotate: 0 }
  }
};

// Reduced motion preferences
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Get appropriate animation based on user preference
export const getAnimation = (animation: any) => {
  if (prefersReducedMotion()) {
    return {
      ...animation,
      transition: { duration: 0.1 }
    };
  }
  return animation;
};

export default {
  smoothAnimations,
  transitions,
  hoverEffects,
  prefersReducedMotion,
  getAnimation
};
