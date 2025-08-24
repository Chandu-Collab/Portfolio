export const theme = {
  colors: {
    primary: '#6366f1', // Indigo
    secondary: '#f59e0b', // Amber
    accent: '#ec4899', // Pink
    background: '#0f172a', // Dark blue
    surface: '#1e293b', // Slate
    text: {
      primary: '#f1f5f9', // Light gray
      secondary: '#94a3b8', // Slate gray
      muted: '#64748b' // Darker slate
    },
    gradients: {
      primary: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      secondary: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      dark: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
    }
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)'
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  }
};
