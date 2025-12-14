// @ts-nocheck
import { useRef } from "react";
import type React from "react";
import { useAboutData } from "../hooks/usePortfolioData";
import LoadingSpinner from "./LoadingSpinner";
import ErrorDisplay from "./ErrorDisplay";
import { motion, useInView } from "framer-motion";

const About = () => {
  const { data, isLoading, error } = useAboutData();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.3,
  });

  if (isLoading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
        <LoadingSpinner />
      </section>
    );
  }
  if (error) {
    console.error("About error:", error);
    return (
      <ErrorDisplay
        error={error as Error}
        message="Failed to load about data"
      />
    );
  }
  if (!data) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-theme-secondary">No data available.</p>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
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
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-hover mx-auto mb-4"></div>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            Discover the journey, passion, and expertise that drive innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "visible"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg text-theme-primary"
          >
            {data.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                whileHover={{ x: 5 }}
                className="cursor-default"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-hover rounded-lg transform rotate-3 opacity-20"></div>
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                rotate: 0.5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3
                }
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="relative bg-theme-tertiary rounded-lg p-8 shadow-xl border border-theme-primary"
            >
              <div className="grid grid-cols-2 gap-6">
                {data.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 1, scale: 1 }
                    }
                    // transition={{ 
                    //   delay: index * 0.1 + 0.5,
                    //   type: "spring",
                    //   stiffness: 400,
                    //   damping: 25
                    // }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        duration: 0.2
                      }
                    }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-center p-4 rounded-lg bg-theme-secondary border border-theme-primary cursor-pointer transition-transform duration-200 ease-out"
                  >
                    <motion.div
                      className={`text-3xl font-bold ${
                        index % 2 === 0
                          ? "text-accent-primary"
                          : "text-accent-hover"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-theme-secondary mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
