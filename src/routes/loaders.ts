// Type definitions for loader data
export interface HomeData {
  title: string;
  subtitle: string;
  description: string;
  name: string;
}

export interface AboutData {
  paragraphs: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: "elite" | "accent";
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  projectUrl?: string;
  sourceUrl?: string;
}

export interface ProjectsData {
  projects: Project[];
}

// Loaders
export async function homeLoader(): Promise<HomeData> {
  return {
    title: "Hi, I'm",
    subtitle: "Full Stack Developer & Creative Problem Solver",
    description:
      "I craft beautiful, functional, and user-centered digital experiences. Passionate about building innovative solutions that make a difference.",
    name: "Abdelrahman Elsmeay",
  };
}

export async function aboutLoader(): Promise<AboutData> {
  return {
    paragraphs: [
      "I'm a passionate developer with a love for creating elegant solutions to complex problems. With expertise in modern web technologies, I bring ideas to life through clean, efficient code.",
      "My journey in tech started with curiosity and has evolved into a commitment to continuous learning and innovation. I believe in writing code that not only works but also tells a story.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    ],
    stats: [
      { label: "Projects", value: "50+" },
      { label: "Years Experience", value: "3+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Dedication", value: "100%" },
    ],
  };
}

export async function skillsLoader(): Promise<SkillsData> {
  return {
    categories: [
      {
        title: "Frontend",
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "JavaScript",
        ],
        color: "elite",
      },
      {
        title: "Backend",
        skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"],
        color: "elite",
      },
      {
        title: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
        color: "accent",
      },
    ],
  };
}

export async function projectsLoader(): Promise<ProjectsData> {
  return {
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "🛒",
        projectUrl: "#",
        sourceUrl: "#",
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
        image: "📋",
        projectUrl: "#",
        sourceUrl: "#",
      },
      {
        title: "Social Media Dashboard",
        description:
          "Analytics dashboard for social media metrics with beautiful visualizations and real-time data updates.",
        tech: ["React", "D3.js", "Express", "REST API"],
        image: "📊",
        projectUrl: "#",
        sourceUrl: "#",
      },
      {
        title: "Portfolio Website",
        description:
          "Modern, responsive portfolio website with dark mode, smooth animations, and optimized performance.",
        tech: ["React", "Tailwind CSS", "Vite"],
        image: "💼",
        projectUrl: "#",
        sourceUrl: "#",
      },
    ],
  };
}
