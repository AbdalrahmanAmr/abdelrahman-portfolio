// @ts-nocheck
import { useHomeData } from '../hooks/usePortfolioData'
import LoadingSpinner from './LoadingSpinner'
import ErrorDisplay from './ErrorDisplay'
import TypingText from './TypingText'
import { motion } from 'framer-motion'

const Hero = () => {
  const { data, isLoading, error } = useHomeData()

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

  if (isLoading) return <LoadingSpinner />
  if (error) {
    console.error('Hero error:', error)
    return <ErrorDisplay error={error as Error} message="Failed to load home data" />
  }
  if (!data) return null

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-theme-primary relative overflow-hidden"
    >
      {/* Static background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-hover rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-light rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block px-4 py-2 rounded-full bg-theme-secondary text-theme-accent text-sm font-semibold mb-6 border border-theme-primary"
          >
            Let's Begin Building a Vision
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gradient inline-block">
            <TypingText text={data.name} speed={150} />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl text-theme-secondary mb-8 min-h-[3rem]"
        >
          <TypingText text={data.subtitle} speed={50} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg text-theme-tertiary mb-12 max-w-2xl mx-auto"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-accent-primary hover:bg-accent-hover text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute inset-0 bg-accent-hover transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary hover:text-white transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
