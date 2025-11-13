import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number;
  duration?: number;
  reverse?: boolean;
  speed?: number;
  iconSize?: number;
  startAngle?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 50,
  speed = 1,
  iconSize = 20,
  startAngle = 0,
  path = false,
  ...props
}: OrbitingCirclesProps) {
  const [currentAngle, setCurrentAngle] = useState(startAngle);

  useEffect(() => {
    let animationFrameId: number;
    const rotationSpeed = (360 / (duration * 60)) * speed;

    const animate = () => {
      setCurrentAngle((prev) => {
        const newAngle = reverse
          ? prev - rotationSpeed
          : prev + rotationSpeed;
        return newAngle % 360;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration, reverse, speed]);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="stroke-foreground/10"
          />
        </svg>
      )}

      <div
        style={{
          transform: `rotate(${currentAngle}deg) translateY(${radius}px) rotate(-${currentAngle}deg)`,
          width: `${iconSize}px`,
          height: `${iconSize}px`,
        }}
        className={cn(
          "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-transform transform-gpu",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}
