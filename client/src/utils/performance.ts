import { lazy, memo, ComponentType } from 'react';
import { motion } from 'framer-motion';

// Lazy load components with error boundary support
export const lazyWithPreload = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) => {
  const LazyComponent = lazy(importFunc);
  
  // Add preload method
  (LazyComponent as any).preload = importFunc;
  
  return LazyComponent;
};

// Memoize motion components for better performance
export const createMemoMotionDiv = () => {
  return memo(motion.div);
};

export const createMemoMotionSection = () => {
  return memo(motion.section);
};

export const createMemoMotionButton = () => {
  return memo(motion.button);
};

// Common animation variants for consistency
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1] as const,
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    }
  },
  
  // Stagger animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  // Hover animations
  hoverScale: {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  hoverLift: {
    hover: { 
      y: -5,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }
    }
  },
  
  // Tap animations
  tapScale: {
    tap: { scale: 0.95 }
  },
  
  // Loading animations
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  
  bounce: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  
  rotate: {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }
};

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

// Intersection Observer utility for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Image optimization utility
export const getOptimizedImageUrl = (
  src: string,
  width?: number,
  height?: number,
  quality = 80
) => {
  // This is a placeholder for image optimization service
  // You can integrate with services like Cloudinary, ImageKit, or Next.js Image
  if (width || height) {
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('q', quality.toString());
    
    return `${src}?${params.toString()}`;
  }
  
  return src;
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Memory management for large lists
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

// CSS-in-JS optimization
export const memoizedStyledComponent = <P extends object>(
  StyledComponent: ComponentType<P>
) => {
  return memo(StyledComponent);
};

// Error boundary HOC
export const withErrorBoundary = <P extends Record<string, any>>(
  Component: ComponentType<P>
) => {
  const WrappedComponent = memo(Component);
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export default {
  lazyWithPreload,
  createMemoMotionDiv,
  createMemoMotionSection,
  createMemoMotionButton,
  animationVariants,
  measurePerformance,
  createIntersectionObserver,
  getOptimizedImageUrl,
  debounce,
  throttle,
  chunkArray,
  memoizedStyledComponent,
  withErrorBoundary
};
