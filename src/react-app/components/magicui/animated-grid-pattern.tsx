import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
  strokeDasharray?: number;
}

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  strokeDasharray = 0,
  className,
}: AnimatedGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
          });
        }
      };

      updateDimensions();
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(containerRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const newSquares = Array.from({ length: numSquares }, (_, i) => ({
        id: i,
        x: Math.floor(Math.random() * (dimensions.width / width)) * width,
        y: Math.floor(Math.random() * (dimensions.height / height)) * height,
      }));
      setSquares(newSquares);
    }
  }, [dimensions, numSquares, width, height]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full overflow-hidden",
        className
      )}
    >
      <svg className="absolute h-full w-full">
        <defs>
          <pattern
            id="grid-pattern"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray={strokeDasharray || undefined}
              className="stroke-muted-foreground/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {squares.map((square, index) => (
          <motion.rect
            key={square.id}
            x={square.x}
            y={square.y}
            width={width}
            height={height}
            fill="currentColor"
            className="fill-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay,
              delay: index * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
