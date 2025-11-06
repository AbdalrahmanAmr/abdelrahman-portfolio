import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  size: number;
  speed: number;
}

interface ParticlesBackgroundProps {
  starCount?: number;
  mouseInfluence?: number;
}

const ParticlesBackground = ({
  starCount = 150,
  mouseInfluence = 0.3,
}: ParticlesBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Initialize stars
  useEffect(() => {
    const stars: Star[] = [];
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1000,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
      });
    }
    starsRef.current = stars;
  }, [starCount]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Reinitialize stars on resize
      starsRef.current.forEach((star) => {
        star.baseX = Math.random() * width;
        star.baseY = Math.random() * height;
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = Math.min((currentTime - lastTime) / 16, 2); // Cap delta for smoothness
      lastTime = currentTime;

      // Clear canvas (using logical coordinates since context is scaled)
      ctx.clearRect(0, 0, width, height);

      // Star color based on dark mode - more visible
      const starColor = isDarkMode
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(0, 0, 0, 0.5)";

      const centerX = width / 2;
      const centerY = height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

      starsRef.current.forEach((star) => {
        // Slow drift movement (parallax effect)
        star.z -= star.speed * deltaTime;
        if (star.z <= 0) {
          star.z = 1000;
          star.baseX = Math.random() * width;
          star.baseY = Math.random() * height;
        }

        // Calculate position with perspective
        const k = 128 / star.z;
        const px = star.baseX * k;
        const py = star.baseY * k;

        // Mouse influence (gentle reaction)
        const dx = mouseRef.current.x - centerX;
        const dy = mouseRef.current.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const influence = (1 - normalizedDistance) * mouseInfluence;

        const x = px + dx * influence * k;
        const y = py + dy * influence * k;

        // Draw star with better visibility
        const size = Math.max(star.size * k, 0.4);

        // Draw glow first for better visibility
        if (isDarkMode) {
          const glowSize = size * 2.5;
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
          gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw main star
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        // Add bright center for larger stars
        if (size > 1) {
          ctx.fillStyle = isDarkMode
            ? "rgba(255, 255, 255, 1)"
            : "rgba(0, 0, 0, 0.8)";
          ctx.beginPath();
          ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDarkMode, mouseInfluence]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ParticlesBackground;
