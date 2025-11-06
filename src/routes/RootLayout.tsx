import { useState, useEffect, useRef, type ReactNode } from "react";
import Navbar from "../components/Navbar";
import CursorBackground from "../components/CursorBackground";
import ParticlesBackground from "../components/ParticlesBackground";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const hasUserPreference = useRef(false);

  // Initialize theme based on browser preference on first visit, or saved preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      hasUserPreference.current = true;
      return saved === "true";
    }
    // No saved preference - use browser preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark;
  });

  // Apply theme immediately on mount and when it changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Only save to localStorage if user has explicitly changed the theme
    if (hasUserPreference.current) {
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode]);

  // Listen to browser preference changes (only if user hasn't set a preference)
  useEffect(() => {
    if (hasUserPreference.current) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const toggleTheme = () => {
    hasUserPreference.current = true;
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-theme-primary relative transition-colors duration-300">
      <ParticlesBackground />
      <CursorBackground />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="relative z-[10]">
        {children}
      </main>
    </div>
  );
}
