import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    filter: "blur(10px)"
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
      staggerChildren: 0.1
    }
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    filter: "blur(5px)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.6, 1] as const
    }
  }
};

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className={className}
        style={{ 
          width: '100%',
          minHeight: '100vh',
          willChange: 'transform, opacity'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
