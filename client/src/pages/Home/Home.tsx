import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import Skills from '../../components/Skills/Skills';
import Services from '../../components/Services/Services';
import Blog from '../../components/Blog/Blog';

const HomeContainer = styled.div`
  padding-top: 80px; // Account for fixed navbar
`;

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ScrollText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const ScrollArrow = styled(motion.div)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const Home: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HomeContainer>
      <Hero />
      
      {showScrollIndicator && (
        <ScrollIndicator
          onClick={scrollToSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <ScrollText>Scroll</ScrollText>
          <ScrollArrow
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
          </ScrollArrow>
        </ScrollIndicator>
      )}

      <FeaturedProjects />
      <Skills />
      <Services />
      <Blog />
    </HomeContainer>
  );
};

export default Home;
