// @ts-nocheck
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  darkMode: boolean
  toggleTheme: () => void
}

const Navbar = ({ darkMode, toggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 150 // Offset for navbar height + padding
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset
          if (sectionTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      }
      
      // If scrolled to top, set hero as active
      if (window.scrollY < 100) {
        setActiveSection('hero')
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-theme-secondary/90 backdrop-blur-md shadow-lg border-b border-theme-primary'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg md:text-xl font-bold text-gradient transition-transform cursor-pointer inline-block whitespace-nowrap"
          >
            Glad to see you here!
          </motion.button>
          <div className="hidden md:flex space-x-8">
            {navItems.slice(1).map((item) => (
              <motion.button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`font-medium transition-colors cursor-pointer ${
                  activeSection === item.sectionId
                    ? 'text-accent-primary'
                    : 'text-theme-secondary hover:text-accent-primary'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
