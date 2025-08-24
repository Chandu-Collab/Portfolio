import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: 1.2;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize.base};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  input, textarea {
    font-family: inherit;
    outline: none;
    border: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  /* Selection */
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Utility Classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 ${({ theme }) => theme.spacing.sm};
    }
  }

  .section {
    padding: ${({ theme }) => theme.spacing['4xl']} 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: ${({ theme }) => theme.spacing['3xl']} 0;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: ${({ theme }) => theme.spacing['2xl']} 0;
    }
  }

  .text-gradient {
    background: ${({ theme }) => theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-effect {
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(148, 163, 184, 0.1);
  }
`;

export default GlobalStyles;
