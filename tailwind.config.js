/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Shared accent color - used across both themes
        accent: {
          primary: "#7c3aed", // Elite purple - main accent
          hover: "#8b5cf6", // Lighter shade for hover states
          light: "#a78bfa", // Very light for subtle highlights
          dark: "#6d28d9", // Darker shade for depth
        },
        // Elite Dark Mode Theme
        elite: {
          // Backgrounds - deep neutral
          background: {
            primary: "#0f0f0f", // Deep black background
            secondary: "#1a1a1a", // Slightly lighter for cards
            tertiary: "#252525", // Even lighter for nested elements
          },
          // Text - soft contrast
          text: {
            primary: "#f5f5f5", // Soft white for main text
            secondary: "#d4d4d4", // Muted gray for secondary text
            tertiary: "#a3a3a3", // Very muted for less important text
            accent: "#a78bfa", // Accent color for highlights
          },
          // Borders and dividers
          border: {
            primary: "#2a2a2a", // Subtle borders
            secondary: "#3a3a3a", // More visible borders
          },
          // Interactive elements
          interactive: {
            hover: "#1f1f1f", // Hover state background
            active: "#2a2a2a", // Active state background
          },
        },
        // Modern Light Mode Theme
        modern: {
          // Backgrounds - neutral light
          background: {
            primary: "#ffffff", // Pure white
            secondary: "#f9fafb", // Very light gray for cards
            tertiary: "#f3f4f6", // Light gray for nested elements
          },
          // Text - readable dark
          text: {
            primary: "#111827", // Deep dark for main text
            secondary: "#4b5563", // Medium gray for secondary text
            tertiary: "#6b7280", // Lighter gray for less important text
            accent: "#7c3aed", // Accent color for highlights
          },
          // Borders and dividers
          border: {
            primary: "#e5e7eb", // Light borders
            secondary: "#d1d5db", // More visible borders
          },
          // Interactive elements
          interactive: {
            hover: "#f3f4f6", // Hover state background
            active: "#e5e7eb", // Active state background
          },
        },
      },
      backgroundColor: {
        // Theme-aware backgrounds
        'theme-primary': 'var(--bg-primary)',
        'theme-secondary': 'var(--bg-secondary)',
        'theme-tertiary': 'var(--bg-tertiary)',
      },
      textColor: {
        // Theme-aware text
        'theme-primary': 'var(--text-primary)',
        'theme-secondary': 'var(--text-secondary)',
        'theme-tertiary': 'var(--text-tertiary)',
        'theme-accent': 'var(--text-accent)',
      },
      borderColor: {
        // Theme-aware borders
        'theme-primary': 'var(--border-primary)',
        'theme-secondary': 'var(--border-secondary)',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "theme-transition": "themeTransition 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        themeTransition: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
