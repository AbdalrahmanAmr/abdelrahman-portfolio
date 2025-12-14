import { motion } from 'framer-motion'
import { HeartIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-theme-tertiary border-t border-theme-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient cursor-default"
            >
              Portfolio
            </motion.h3>
            <p className="text-theme-secondary text-sm leading-relaxed">
              Crafting exceptional digital experiences through innovative
              solutions and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-theme-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['hero', 'about', 'skills', 'projects', 'contact'].map(
                (section) => (
                  <li key={section}>
                    <motion.button
                      onClick={() => scrollToSection(section)}
                      whileHover={{ x: 5 }}
                      className="text-theme-secondary hover:text-accent-primary transition-colors duration-300 capitalize cursor-pointer text-left"
                    >
                      {section === 'hero' ? 'Home' : section}
                    </motion.button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Mission Statement */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-theme-primary">
              Mission
            </h4>
            <p className="text-theme-secondary text-sm leading-relaxed">
              Empowering businesses and individuals through innovative software
              solutions that make a lasting impact.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-theme-primary mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-theme-secondary text-sm flex items-center gap-2">
            <span>Copyright © {currentYear}</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <HeartIcon className="w-4 h-4 text-accent-primary" /> by
              Developer
            </span>
          </p>

          <p className="text-theme-tertiary text-xs">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

