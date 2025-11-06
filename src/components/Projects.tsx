// @ts-nocheck
import { useState, useRef } from 'react'
import type React from 'react'
import { useProjectsData } from '../hooks/usePortfolioData'
import LoadingSpinner from './LoadingSpinner'
import ErrorDisplay from './ErrorDisplay'
import { motion, useInView } from 'framer-motion'
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon 
} from '@heroicons/react/24/outline'

const Projects = () => {
  const { data, isLoading, error } = useProjectsData()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 })

  if (isLoading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
        <LoadingSpinner />
      </section>
    )
  }
  if (error) {
    console.error('Projects error:', error)
    return <ErrorDisplay error={error as Error} message="Failed to load projects" />
  }
  if (!data || !data.projects || data.projects.length === 0) {
    return (
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-theme-secondary">No projects available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-hover mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group bg-theme-tertiary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-theme-primary"
            >
              <motion.div
                className="h-48 bg-gradient-to-br from-accent-primary to-accent-hover flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <motion.span 
                  className="relative z-10 text-6xl md:text-7xl select-none"
                  animate={hoveredIndex === index ? { 
                    scale: 1.1,
                    rotate: [0, -3, 3, -3, 0],
                  } : { scale: 1 }}
                  transition={{
                    scale: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.6
                    },
                    rotate: {
                      duration: 0.8,
                      ease: "easeInOut"
                    }
                  }}
                  style={{
                    filter: hoveredIndex === index 
                      ? "drop-shadow(0 0 15px rgba(255, 255, 255, 0.4))" 
                      : "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                    transition: "filter 0.5s ease"
                  }}
                >
                  {project.image}
                </motion.span>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-accent-hover/50 to-accent-dark/50 backdrop-blur-sm flex items-center justify-center"
                  />
                )}
              </motion.div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-accent-primary">
                  {project.title}
                </h3>
                <p className="text-theme-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-theme-secondary text-theme-primary rounded-full text-sm font-medium border border-theme-primary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.projectUrl && (
                    <motion.a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-accent-primary hover:text-accent-hover font-semibold flex items-center gap-2 cursor-pointer"
                    >
                      View Project
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.sourceUrl && (
                    <motion.a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-theme-secondary hover:text-accent-primary font-semibold flex items-center gap-2 cursor-pointer"
                    >
                      Source Code
                      <CodeBracketIcon className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
