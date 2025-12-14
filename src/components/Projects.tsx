import { useState, useRef } from "react";
import type React from "react";
import { useProjectsData } from "../hooks/usePortfolioData";
import LoadingSpinner from "./LoadingSpinner";
import ErrorDisplay from "./ErrorDisplay";
import { motion, useInView } from "framer-motion";
import TechIcon from "./TechIcon";
import MaintenanceModal from "./MaintenanceModal";

const Projects = () => {
  const { data, isLoading, error } = useProjectsData();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.2,
  });

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  // Check if project is under maintenance
  const isUnderMaintenance = (projectTitle: string) => {
    const maintenanceProjects = ["Task Management App", "Social Media Dashboard"];
    return maintenanceProjects.includes(projectTitle);
  };

  // Handle project click
  const handleProjectClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectTitle: string
  ) => {
    if (isUnderMaintenance(projectTitle)) {
      e.preventDefault();
      setIsMaintenanceModalOpen(true);
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-theme-secondary">
        <LoadingSpinner />
      </section>
    );
  }
  if (error) {
    console.error("Projects error:", error);
    return (
      <ErrorDisplay error={error as Error} message="Failed to load projects" />
    );
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
          <p className="text-theme-secondary">
            No projects available at the moment.
          </p>
        </div>
      </section>
    );
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
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-hover mx-auto mb-4"></div>
          <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
            Explore captivating projects showcasing innovation and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleProjectClick(e, project.title)}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group bg-theme-tertiary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-theme-primary flex flex-col h-full"
            >
              <motion.div
                className="h-48 relative overflow-hidden bg-theme-primary"
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {imageErrors.has(index) ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-primary/20 to-accent-hover/20">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-2">📷</div>
                      <p className="text-theme-secondary text-sm">
                        {project.title}
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-hover/20 group-hover:from-accent-primary/10 group-hover:to-accent-hover/10 transition-colors duration-300"></div>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-accent-hover/50 to-accent-dark/50 flex items-center justify-center"
                  />
                )}
              </motion.div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 text-accent-primary">
                  {project.title}
                </h3>
                <p className="text-theme-secondary mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-5">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 1, scale: 1 }
                      }
                      transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                    >
                      <TechIcon tech={tech} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Maintenance Modal */}
      <MaintenanceModal
        isOpen={isMaintenanceModalOpen}
        onClose={() => setIsMaintenanceModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
