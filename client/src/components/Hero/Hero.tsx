import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';

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
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 1;
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleResumeDownload = () => {
    // Replace with your resume download logic
    console.log('Downloading resume...');
  };

  const handleContactScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
              Your Name
            </Name>
            
            <Title variants={itemVariants}>
              Full Stack Developer
            </Title>
            
            <Description variants={itemVariants}>
              I create beautiful, functional, and user-friendly applications using modern 
              technologies. Passionate about clean code and innovative solutions.
            </Description>
            
            <ActionButtons variants={itemVariants}>
              <PrimaryButton
                onClick={handleContactScroll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </PrimaryButton>
              
              <SecondaryButton
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Resume
              </SecondaryButton>
            </ActionButtons>
            
            <SocialLinks variants={itemVariants}>
              <SocialLink
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </SocialLink>
              
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </SocialLink>
              
              <SocialLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </TextContent>

        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ProfileImage>
            {/* Replace with your actual profile image */}
            <div style={{ 
              width: '90%', 
              height: '90%', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '4rem',
              fontWeight: 'bold',
              position: 'relative',
              zIndex: 1
            }}>
              YN
            </div>
          </ProfileImage>
          
          <FloatingElements>
            {[...Array(5)].map((_, i) => (
              <FloatingElement
                key={i}
                top={`${Math.random() * 80 + 10}%`}
                left={`${Math.random() * 80 + 10}%`}
                delay={i * 0.5}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
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
