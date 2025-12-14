import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type React from 'react'

interface TimelineItem {
  year: string
  title: string
  description: string
}

const defaultTimeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'A Year of Innovation',
    description: 'Continuing to push boundaries in technology, delivering cutting-edge solutions and exploring new frontiers in software development. Focused on creating impactful applications that solve real-world problems.',
  },
  {
    year: '2023',
    title: 'Professional Growth & Expansion',
    description: 'Advanced technical expertise across multiple frameworks and technologies. Led significant projects, mentored junior developers, and contributed to open-source communities.',
  },
  {
    year: '2022',
    title: 'The Journey Begins',
    description: 'Started professional career in software development. Built foundational skills in modern web technologies, collaborated on diverse projects, and established a strong portfolio of work.',
  },
  {
    year: '2021',
    title: 'Education & Foundation',
    description: 'Completed comprehensive education in computer science and software engineering. Participated in hackathons, coding competitions, and built numerous personal projects to hone skills.',
  },
]

const Timeline = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  })

  return (
    <section
      id="timeline"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-primary relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-accent-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent-hover rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-primary">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-hover mx-auto mb-4"></div>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            A timeline of milestones, achievements, and continuous growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-hover to-accent-primary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {defaultTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Year badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-hover rounded-full flex items-center justify-center shadow-lg border-4 border-theme-primary">
                    <span className="text-white font-bold text-sm">
                      {item.year}
                    </span>
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`ml-28 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-theme-secondary border border-theme-primary rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-accent-primary">
                      {item.title}
                    </h3>
                    <p className="text-theme-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

