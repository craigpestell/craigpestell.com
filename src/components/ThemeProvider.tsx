'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

// The site has a single theme (Readout, applied statically via the <html
// data-theme="readout"> attribute in layout.tsx) with light/dark variants
// selected by the .dark class this provider toggles. Fonts are set
// statically via next/font in layout.tsx.
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
    localStorage.setItem('selected-dark-mode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  };

  useEffect(() => {
    // Load the saved preference only after hydration
    const savedDarkMode = localStorage.getItem('selected-dark-mode');
    const darkModeToApply = savedDarkMode !== null
      ? savedDarkMode === 'true'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDarkMode(darkModeToApply);
    if (darkModeToApply) {
      document.documentElement.classList.add('dark');
    }

    setIsHydrated(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode, isHydrated }}>
      {children}
    </ThemeContext.Provider>
  );
}
