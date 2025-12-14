// @ts-nocheck
import { useRef } from 'react'
import type React from 'react'
import { useSkillsData } from '../hooks/usePortfolioData'
import LoadingSpinner from './LoadingSpinner'
import ErrorDisplay from './ErrorDisplay'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
  const { data, isLoading, error } = useSkillsData()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 })

  if (isLoading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-tertiary">
        <LoadingSpinner />
      </section>
    )
  }
  if (error) {
    console.error('Skills error:', error)
    return <ErrorDisplay error={error as Error} message="Failed to load skills data" />
  }
  if (!data) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-tertiary">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-theme-secondary">No data available.</p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-tertiary"
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
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-hover mx-auto mb-4"></div>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build exceptional solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-theme-secondary rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-theme-primary"
            >
              <h3 className="text-2xl font-bold mb-6 text-accent-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const width = 85 + Math.random() * 10
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 1 }}
                      transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-theme-primary font-medium">
                        {skill}
                      </span>
                      <div className="flex-1 mx-4 h-2 bg-theme-tertiary rounded-full overflow-hidden border border-theme-primary">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${
                            category.color === 'elite'
                              ? 'from-accent-primary to-accent-hover'
                              : 'from-accent-hover to-accent-light'
                          } rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${width}%` } : { width: `${width}%` }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.3, duration: 1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
