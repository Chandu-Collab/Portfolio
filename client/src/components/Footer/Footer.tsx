import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const FooterLeft = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const FooterCenter = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 3;
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const BackToTop = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  padding-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const HeartIcon = styled(motion.span)`
  color: ${({ theme }) => theme.colors.accent};
  display: inline-flex;
  align-items: center;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterLeft>
            <Logo>Portfolio</Logo>
          </FooterLeft>

          <FooterCenter>
            <SocialLinks>
              <SocialLink
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialLink>
              
              <SocialLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </FooterCenter>

          <FooterRight>
            <BackToTop
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <FaArrowUp />
            </BackToTop>
          </FooterRight>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            <span>© {currentYear} Your Name. All rights reserved.</span>
            <span>
              Made with{' '}
              <HeartIcon
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart />
              </HeartIcon>{' '}
              and lots of coffee
            </span>
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
