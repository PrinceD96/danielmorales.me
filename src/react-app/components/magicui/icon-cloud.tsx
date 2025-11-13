import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export interface IconCloudProps {
  iconSlugs: string[];
  className?: string;
}

export default function IconCloud({ iconSlugs, className }: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    const loadedIcons = iconSlugs.map(
      (slug) => `https://cdn.simpleicons.org/${slug}`
    );
    setIcons(loadedIcons);
  }, [iconSlugs]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 p-8">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="group relative transition-all duration-300 hover:scale-110"
            style={{
              animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <img
              src={icon}
              alt={iconSlugs[index]}
              className="h-12 w-12 opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
