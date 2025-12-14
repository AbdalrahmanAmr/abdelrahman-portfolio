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
        skills: ["React", "TypeScript", "Next.js", "Tailwind", "JavaScript"],
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
        title: "ClassyAds - Modern Classified Platform",
        description:
          "A comprehensive classified ads marketplace featuring advanced search, category filtering, and user authentication. Built with modern UI/UX principles for seamless buying and selling experiences.",
        tech: ["React", "TypeScript", "Tailwind", "REST API"],
        image: "/images/classyads-preview.png",
        projectUrl: "https://modern-classified-ad-pl3m.bolt.host/",
      },
      {
        title: "E-Commerce Store",
        description:
          "Full-featured e-commerce platform with multi-language support, dark mode, shopping cart, wishlist functionality, and product filtering. Includes secure payment integration and real-time inventory management.",
        tech: ["React", "TypeScript", "Next.js", "Tailwind"],
        image: "/images/ecommerce-store-preview.png",
        projectUrl: "https://e-comm-a-e-vers.vercel.app/",
      },
      {
        title: "Wardity - Flower & Gift Delivery",
        description:
          "Elegant e-commerce platform for flower and gift delivery in Cairo and Giza. Features occasion-based browsing, same-day delivery, wishlist management, and beautiful product showcases with Egyptian pound pricing.",
        tech: ["React", "TypeScript", "Tailwind", "Vercel"],
        image: "/images/wardity-preview.png",
        projectUrl: "https://wardity-pi.vercel.app/",
      },
      {
        title: "Overclocked - Tech Store",
        description:
          "Modern tech and accessories e-commerce platform with advanced search, wishlist, shopping cart, and user account management. Features multi-language support and responsive design for optimal shopping experience.",
        tech: ["React", "TypeScript", "Tailwind", "Netlify"],
        image: "/images/overclocked-preview.png",
        projectUrl: "https://s-overclocked.netlify.app/",
      },
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        projectUrl: "https://e-commerce-two-ecru-95.vercel.app/",
        sourceUrl: "https://github.com/AbdalrahmanAmr/E-commerce",
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
        image:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        projectUrl: "#",
        sourceUrl: "#",
      },
      {
        title: "Social Media Dashboard",
        description:
          "Analytics dashboard for social media metrics with beautiful visualizations and real-time data updates.",
        tech: ["React", "D3.js", "Express", "REST API"],
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        projectUrl: "#",
        sourceUrl: "#",
      },
      {
        title: "Portfolio Website",
        description:
          "Modern, responsive portfolio website with dark mode, smooth animations, and optimized performance.",
        tech: ["React", "Tailwind", "Vite"],
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        projectUrl: "#",
        sourceUrl: "#",
      },
    ],
  };
}
