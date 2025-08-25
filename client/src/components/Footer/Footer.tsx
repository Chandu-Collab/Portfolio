import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, 
    rgba(15, 23, 42, 0.98) 0%, 
    rgba(30, 41, 59, 0.95) 50%, 
    rgba(15, 23, 42, 0.98) 100%
  );
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  padding: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.md};
  position: relative;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.xl};
  backdrop-filter: blur(20px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.primary};
    opacity: 0.03;
    z-index: 0;
  }

  /* Enhanced animated background */
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
    animation: footerFloat 30s linear infinite;
    z-index: 0;
  }

  @keyframes footerFloat {
    0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
    50% { transform: rotate(180deg) scale(1.1); opacity: 0.1; }
    100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const FooterContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const BrandSection = styled(FooterSection)`
  .logo-container {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-2px);
      
      .logo-text {
        background: linear-gradient(45deg, #6366f1, #8b5cf6, #06b6d4);
        background-size: 200% 200%;
        animation: gradientShift 2s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .logo-icon {
      width: 50px;
      height: 50px;
      background: ${({ theme }) => theme.colors.gradients.primary};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: rotate(45deg);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
      }
      
      &:hover::before {
        opacity: 1;
        animation: shine 1.5s ease-in-out;
      }
      
      @keyframes shine {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
      }
    }
    
    .logo-text {
      font-family: ${({ theme }) => theme.typography.fontFamily.heading};
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
      background: ${({ theme }) => theme.colors.gradients.primary};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .brand-description {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.gradients.primary};
      transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover::after {
      width: 100%;
    }
  }

  .brand-tagline {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    font-style: italic;
    position: relative;
    display: inline-block;
    
    &::before {
      content: '"';
      position: absolute;
      left: -15px;
      top: -5px;
      font-size: 2em;
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.3;
    }
    
    &::after {
      content: '"';
      position: absolute;
      right: -15px;
      bottom: -10px;
      font-size: 2em;
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.3;
    }
  }
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;

const FooterLink = styled(motion.div)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all 0.3s ease;
  cursor: pointer;
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradients.primary};
    transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover {
    color: white;
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 
      0 8px 25px rgba(99, 102, 241, 0.4),
      0 0 20px rgba(99, 102, 241, 0.2);
    transform: translateY(-3px) scale(1.1);

    &::before {
      left: 0;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  .contact-item {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(99, 102, 241, 0.1);
      transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: -1;
    }
    
    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
      transform: translateX(5px);
      background: rgba(255, 255, 255, 0.05);
      
      &::before {
        left: 0;
      }
      
      .contact-icon {
        transform: scale(1.2) rotate(5deg);
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    
    .contact-icon {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      min-width: 20px;
    }
    
    .contact-text {
      flex: 1;
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const BackToTop = styled(motion.button)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: white;
  border: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.15) rotate(5deg);
    box-shadow: 
      0 20px 40px rgba(99, 102, 241, 0.6),
      0 0 30px rgba(99, 102, 241, 0.3);

    &::before {
      opacity: 1;
      animation: pulse 1.5s infinite;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: translateY(-5px) scale(1.1);
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.4); opacity: 0; }
  }
`;

const FooterBottom = styled(motion.div)`
  padding-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  margin: 0 -${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  .highlight {
    background: ${({ theme }) => theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }
`;

const HeartIcon = styled(motion.span)`
  color: ${({ theme }) => theme.colors.accent};
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 400,
        damping: 20
      }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };

  const contactVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
        type: "spring" as const,
        stiffness: 300,
        damping: 25
      }
    })
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'API Development',
    'Consulting'
  ];

  return (
    <FooterContainer ref={footerRef}>
      <Container>
        <FooterContent
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <BrandSection variants={sectionVariants}>
            <motion.div 
              className="logo-container"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="logo-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 15px 35px rgba(99, 102, 241, 0.6)"
                }}
              >
                <HiOutlineRocketLaunch />
              </motion.div>
              <span className="logo-text">Chandra Hasa Reddy</span>
            </motion.div>
            
            <motion.p 
              className="brand-description"
              variants={textVariants}
              custom={0.2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Full-Stack Developer passionate about creating innovative web and mobile applications 
              with modern technologies. Transforming ideas into digital reality.
            </motion.p>
            
            <motion.p 
              className="brand-tagline"
              variants={textVariants}
              custom={0.4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.05,
                color: "#8b5cf6"
              }}
            >
              Code with passion, build with purpose
            </motion.p>
            
            <SocialLinks>
              {[
                { href: "https://github.com/Chandu-Collab", icon: FaGithub, color: "#333" },
                { href: "https://www.linkedin.com/in/chandra-hasa-reddy-729429240/", icon: FaLinkedin, color: "#0077b5" },
                { href: "https://www.instagram.com/chessmen_67/", icon: AiFillInstagram, color: "#e4405f" }
              ].map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={socialVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.3, 
                    y: -8,
                    rotate: [0, 10],
                    boxShadow: `0 15px 30px ${social.color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <social.icon />
                  </motion.div>
                </SocialLink>
              ))}
            </SocialLinks>
          </BrandSection>

          <FooterSection variants={sectionVariants}>
            <SectionTitle>Quick Links</SectionTitle>
            <QuickLinks>
              {quickLinks.map((link, index) => (
                <FooterLink
                  key={index}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={link.path}>{link.label}</Link>
                </FooterLink>
              ))}
            </QuickLinks>
          </FooterSection>

          <FooterSection variants={sectionVariants}>
            <SectionTitle>Services</SectionTitle>
            <QuickLinks>
              {services.map((service, index) => (
                <FooterLink
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <span>{service}</span>
                </FooterLink>
              ))}
            </QuickLinks>
          </FooterSection>

          <FooterSection variants={sectionVariants}>
            <SectionTitle>Contact Info</SectionTitle>
            <ContactInfo>
              {[
                { icon: FaEnvelope, text: 'chandrahasareddy65@gmail.com', type: 'email' },
                { icon: FaPhone, text: '+91 9704718538', type: 'phone' },
                { icon: FaMapMarkerAlt, text: 'Bengaluru, India', type: 'location' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  custom={index}
                  variants={contactVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{
                    scale: 1.02,
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (contact.type === 'email') {
                      window.open(`mailto:${contact.text}`);
                    } else if (contact.type === 'phone') {
                      window.open(`tel:${contact.text}`);
                    }
                  }}
                >
                  <motion.div
                    className="contact-icon"
                    animate={{
                      rotate: [0, 10],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      type: "tween",
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <contact.icon />
                  </motion.div>
                  <span className="contact-text">{contact.text}</span>
                </motion.div>
              ))}
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Copyright>
            <span>© {currentYear} <span className="highlight">Madduri Chandra Hasa Reddy</span>. All rights reserved.</span>
            <span>
              Made with{' '}
              <HeartIcon
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10]
                }}
                transition={{ 
                  duration: 2, 
                  type: "tween", 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart />
              </HeartIcon>{' '}
              and React
            </span>
          </Copyright>
        </FooterBottom>
      </Container>

      {showBackToTop && (
        <BackToTop
          onClick={scrollToTop}
          whileHover={{ 
            scale: 1.15,
            y: -8,
            rotate: 5,
            boxShadow: "0 20px 40px rgba(99, 102, 241, 0.6)"
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 20
          }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowUp />
          </motion.div>
        </BackToTop>
      )}
    </FooterContainer>
  );
};

export default Footer;
