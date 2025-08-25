import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { useInView } from 'react-intersection-observer';

const NavbarContainer = styled(motion.nav)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ theme, scrolled }) => scrolled ? theme.spacing.xs : theme.spacing.sm} 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ scrolled, theme }) => 
    scrolled 
      ? 'rgba(15, 23, 42, 0.98)' 
      : 'rgba(15, 23, 42, 0.1)'
  };
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(20px)' : 'blur(5px)'};
  border-bottom: ${({ scrolled, theme }) => 
    scrolled 
      ? `1px solid rgba(99, 102, 241, 0.1)` 
      : '1px solid transparent'
  };
  box-shadow: ${({ scrolled }) => 
    scrolled 
      ? '0 4px 20px rgba(0, 0, 0, 0.05)' 
      : 'none'
  };
  height: ${({ scrolled }) => scrolled ? '70px' : '80px'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: ${({ scrolled }) => scrolled ? '60px' : '70px'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: ${({ scrolled }) => scrolled ? '55px' : '60px'};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradients.primary};
    opacity: ${({ scrolled }) => scrolled ? '0.03' : '0'};
    transition: opacity 0.4s ease;
  }

  /* Enhanced glass morphism effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.02) 100%
    );
    opacity: ${({ scrolled }) => scrolled ? '1' : '0'};
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  cursor: pointer;
  
  .logo-icon {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }
  
  .logo-text {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    background: ${({ theme }) => theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }
`;

const DesktopNav = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xs};
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled(Link)<{ active: boolean }>`
  color: ${({ active, theme }) => 
    active ? '#ffffff' : theme.colors.text.secondary
  };
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ active, theme }) => 
    active ? theme.colors.gradients.primary : 'transparent'
  };
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    color: #ffffff;
    background: ${({ active, theme }) => 
      active ? theme.colors.gradients.primary : 'rgba(99, 102, 241, 0.2)'
    };
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: ${({ active }) => active ? '0' : '0.3'};
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  z-index: 999;
  
  /* Enhanced overlay effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.primary};
    opacity: 0.05;
  }

  /* Animated background pattern */
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 70%, 
      rgba(99, 102, 241, 0.1) 0%, 
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 30%, 
      rgba(139, 92, 246, 0.1) 0%, 
      transparent 50%
    );
    animation: float 20s ease-in-out infinite;
    z-index: 0;
  }

  @keyframes float {
    0%, 100% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
  }
`;

const MobileNavContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  z-index: 1;
`;

const MobileNavLink = styled(motion.div)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all 0.3s ease;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradients.primary};
    transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  &:hover {
    color: white;
    border-color: rgba(99, 102, 241, 0.5);
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);

    &::before {
      left: 0;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const NavIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  z-index: 0;
`;

const navItems = [
  { label: 'Home', path: '/', icon: '🏠' },
  { label: 'About', path: '/about', icon: '👨‍💻' },
  { label: 'Projects', path: '/projects', icon: '🚀' },
  { label: 'Services', path: '/services', icon: '⚙️' },
  { label: 'Blog', path: '/blog', icon: '📝' },
  { label: 'Contact', path: '/contact', icon: '📬' }
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.1, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };

  const mobileMenuVariants = {
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
        type: "spring" as const,
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
        ease: [0.4, 0, 0.6, 1] as const,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
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
        type: "spring" as const,
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
        ease: [0.4, 0, 0.6, 1] as const
      }
    }
  };

  return (
    <>
      <NavbarContainer
        scrolled={scrolled}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <NavContent>
          <Logo
            as={Link}
            to="/"
            variants={logoVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="logo-icon"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <VscCode />
            </motion.div>
            <span className="logo-text">Chandra Hasa Reddy</span>
          </Logo>
          
          <DesktopNav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {navItems.map((item, index) => (
              <NavItem
                key={item.path}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <NavLink 
                  to={item.path} 
                  active={location.pathname === item.path}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </DesktopNav>

          <MobileMenuButton
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <FaBars />
          </MobileMenuButton>
        </NavContent>
      </NavbarContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileNav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CloseButton 
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ 
                scale: 1.1, 
                rotate: 90,
                backgroundColor: "rgba(239, 68, 68, 0.2)" 
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close mobile menu"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaTimes />
            </CloseButton>
            
            <MobileNavContent>
              {navItems.map((item, index) => (
                <MobileNavLink
                  key={item.path}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={item.path}>
                    <motion.span 
                      style={{ fontSize: '1.2em' }}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </MobileNavLink>
              ))}
            </MobileNavContent>
          </MobileNav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
