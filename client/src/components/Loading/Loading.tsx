import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SpinnerRing = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(99, 102, 241, 0.1);
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Dot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
`;

interface LoadingProps {
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ text = "Loading..." }) => {
  const dotVariants = {
    initial: { y: 0, scale: 1 },
    animate: { 
      y: [-10, 0, -10], 
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <LoaderContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <SpinnerRing />
      </motion.div>
      <LoadingText>{text}</LoadingText>
      <DotsContainer>
        {[0, 1, 2].map((index) => (
          <Dot
            key={index}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          />
        ))}
      </DotsContainer>
    </LoaderContainer>
  );
};

export default Loading;
