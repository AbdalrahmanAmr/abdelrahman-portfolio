import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiPostgresql,
  SiExpress,
  SiD3Dotjs,
  SiVite,
  SiVercel,
  SiNetlify,
  SiSocketdotio,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import type { IconType } from "react-icons";

interface TechIconMapping {
  [key: string]: {
    icon: IconType;
    color: string;
  };
}

const techIcons: TechIconMapping = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Stripe: { icon: SiStripe, color: "#008CDD" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Express: { icon: SiExpress, color: "#000000" },
  "D3.js": { icon: SiD3Dotjs, color: "#F9A03C" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Vercel: { icon: SiVercel, color: "#000000" },
  Netlify: { icon: SiNetlify, color: "#00C7B7" },
  WebSocket: { icon: SiSocketdotio, color: "#010101" },
  "REST API": { icon: FaCode, color: "#FF6B6B" },
};

interface TechIconProps {
  tech: string;
  className?: string;
  showTooltip?: boolean;
}

export const TechIcon = ({
  tech,
  className = "",
  showTooltip = true,
}: TechIconProps) => {
  const techData = techIcons[tech] || { icon: FaCode, color: "#999999" };
  const Icon = techData.icon;

  return (
    <div className={`relative group ${className}`}>
      <div className="p-3 bg-theme-secondary rounded-lg border border-theme-primary hover:border-accent-primary transition-all duration-300 hover:scale-110 hover:shadow-lg">
        <Icon
          className="w-7 h-7"
          style={{ color: techData.color }}
          aria-label={tech}
        />
      </div>
      {showTooltip && (
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
          <span className="text-[10px] font-normal bg-theme-secondary text-theme-secondary px-2 py-0.5 rounded border border-theme-primary">
            {tech}
          </span>
        </div>
      )}
    </div>
  );
};

export default TechIcon;
