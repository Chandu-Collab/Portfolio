import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for managing loading states
export const useAsyncState = <T>(
  asyncFn: () => Promise<T>,
  immediate = true
) => {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: Error | null;
  }>({
    data: null,
    loading: immediate,
    error: null
  });

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await asyncFn();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error instanceof Error ? error : new Error('Unknown error') 
      });
    }
  }, [asyncFn]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
};

// Custom hook for scroll-based animations
export const useScrollAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true
  });

  return { ref, inView };
};

// Custom hook for managing navigation state
export const useNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  };
};

// Custom hook for managing theme preferences
export const useThemePreference = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev: boolean) => !prev);
  }, []);

  return { isDarkMode, toggleTheme };
};

// Custom hook for managing form state
export const useFormState = <T extends Record<string, any>>(
  initialState: T,
  validationRules?: Partial<Record<keyof T, (value: any) => string | null>>
) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setFieldTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = useCallback(<K extends keyof T>(
    field: K,
    value: T[K]
  ) => {
    setValues(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const setTouched = useCallback(<K extends keyof T>(field: K) => {
    setFieldTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const validate = useCallback(() => {
    if (!validationRules) return true;

    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.keys(validationRules).forEach(field => {
      const rule = validationRules[field as keyof T];
      if (rule) {
        const error = rule(values[field as keyof T]);
        if (error) {
          newErrors[field as keyof T] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationRules]);

  const reset = useCallback(() => {
    setValues(initialState);
    setErrors({});
    setFieldTouched({});
    setIsSubmitting(false);
  }, [initialState]);

  const handleSubmit = useCallback(async (
    onSubmit: (values: T) => Promise<void> | void
  ) => {
    setIsSubmitting(true);
    
    if (!validate()) {
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(values);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validate, reset]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setTouched,
    validate,
    reset,
    handleSubmit
  };
};

// Custom hook for managing local storage
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

// Custom hook for debouncing values
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Custom hook for managing focus trap
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);

  return containerRef;
};

// Custom hook for managing performance metrics
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<{
    loadTime: number | null;
    renderTime: number | null;
  }>({
    loadTime: null,
    renderTime: null
  });

  useEffect(() => {
    const startTime = performance.now();

    // Measure load time
    if (document.readyState === 'complete') {
      const loadTime = performance.now() - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    } else {
      window.addEventListener('load', () => {
        const loadTime = performance.now() - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      });
    }

    // Measure render time
    requestAnimationFrame(() => {
      const renderTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, renderTime }));
    });
  }, []);

  return metrics;
};

export default {
  useAsyncState,
  useScrollAnimation,
  useNavigation,
  useThemePreference,
  useFormState,
  useLocalStorage,
  useDebounce,
  useFocusTrap,
  usePerformanceMetrics
};
