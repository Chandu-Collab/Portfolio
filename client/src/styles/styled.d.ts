import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      surface: string;
      text: {
        primary: string;
        secondary: string;
        muted: string;
      };
      gradients: {
        primary: string;
        secondary: string;
        dark: string;
      };
    };
    typography: {
      fontFamily: {
        primary: string;
        heading: string;
        mono: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
      };
      fontWeight: {
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      glow: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}
