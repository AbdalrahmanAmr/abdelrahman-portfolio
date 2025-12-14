import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type React from 'react'
import {
  TrophyIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

interface Achievement {
  icon: React.ElementType
  title: string
  description: string
  count?: string
}

const achievements: Achievement[] = [
  {
    icon: TrophyIcon,
    title: 'Achievements',
    description:
      'Multiple awards and recognitions in technology and software development excellence',
    count: '10+',
  },
  {
    icon: CodeBracketIcon,
    title: 'Projects Delivered',
    description:
      'Successfully completed and deployed production-ready applications across various domains',
    count: '25+',
  },
  {
    icon: DocumentTextIcon,
    title: 'Certifications',
    description:
      'Professional certifications in cutting-edge technologies and development practices',
    count: '8+',
  },
  {
    icon: AcademicCapIcon,
    title: 'Years Experience',
    description:
      'Continuous learning and professional growth in software engineering and development',
    count: '3+',
  },
]

const Achievements = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  })

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary">
            Key <span className="text-gradient">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-hover mx-auto mb-4"></div>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            A showcase of milestones and accomplishments throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                className="bg-theme-tertiary border border-theme-primary rounded-lg p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-accent-primary to-accent-hover"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {achievement.count && (
                  <motion.div
                    className="text-4xl font-bold text-accent-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  >
                    {achievement.count}
                  </motion.div>
                )}

                <h3 className="text-xl font-bold mb-3 text-theme-primary group-hover:text-accent-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-theme-secondary text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements

