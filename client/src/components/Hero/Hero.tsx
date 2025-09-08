import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    text-align: center;
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const TextContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const Greeting = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Name = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
  }
`;

const ActionButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)<{ top: string; left: string; delay: number }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.secondary};
  opacity: 0.1;
`;

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  };

  const handleResumeDownload = () => {
  // Open resume PDF from public folder for static hosting
  window.open('/Portfolio/UpdatedResume.pdf', '_blank');
  };

  const handleContactScroll = () => {
    // Navigate to the contact page
    navigate('/contact');
  };

  return (
    <HeroSection>
      <HeroContent>
        <TextContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Greeting variants={itemVariants}>
              Hi, I'm
            </Greeting>
            
            <Name variants={itemVariants}>
              Madduri Chandra Hasa Reddy
            </Name>
            
            <Title variants={itemVariants}>
              Full Stack Developer
            </Title>
            
            <Description variants={itemVariants}>
              BE (ECE) graduate and Full-Stack Developer passionate about building innovative 
              mobile and web applications. I've developed comprehensive solutions including 
              AI-powered school management systems, admin portals for job automation platforms, 
              and e-commerce applications using React, Node.js, Flutter, and Firebase.
            </Description>
            
            <ActionButtons variants={itemVariants}>
              <PrimaryButton
                onClick={handleContactScroll}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 35px -5px rgba(99, 102, 241, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                Get In Touch
              </PrimaryButton>
              
              <SecondaryButton
                onClick={handleResumeDownload}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(99, 102, 241, 1)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <FaDownload />
                View Resume
              </SecondaryButton>
            </ActionButtons>
            
            <SocialLinks variants={itemVariants}>
              <SocialLink
                href="https://github.com/Chandu-Collab"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  y: -3,
                  rotate: [0, 10],
                  color: "#6366f1"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <FaGithub />
              </SocialLink>
              
              <SocialLink
                href="https://www.linkedin.com/in/chandra-hasa-reddy-729429240/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  y: -3,
                  rotate: [0, 10],
                  color: "#0077b5"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <FaLinkedin />
              </SocialLink>
              
              <SocialLink
                href="https://www.instagram.com/chessmen_67/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  y: -3,
                  rotate: [0, 10],
                  color: "#e4405f"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <AiFillInstagram />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </TextContent>

        <ImageContainer
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <ProfileImage>
            <img 
              src={require('../../assets/WhatsApp Image 2025-07-08 at 00.12.26.jpeg')} 
              alt="Madduri Chandra Hasa Reddy"
            />
          </ProfileImage>
          
          <FloatingElements>
            {[...Array(6)].map((_, i) => (
              <FloatingElement
                key={i}
                top={`${Math.random() * 80 + 10}%`}
                left={`${Math.random() * 80 + 10}%`}
                delay={i * 0.3}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                  type: "tween"
                }}
              />
            ))}
          </FloatingElements>
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
