import { Code2, Database, Globe, Server } from "lucide-react";
import Marquee from "./magicui/marquee";
import { cn } from "../lib/utils";

const technologies = [
  {
    name: "React",
    icon: <Code2 className="h-8 w-8" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <Code2 className="h-8 w-8" />,
    category: "Language",
  },
  {
    name: "Node.js",
    icon: <Server className="h-8 w-8" />,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="h-8 w-8" />,
    category: "Database",
  },
  {
    name: "Next.js",
    icon: <Globe className="h-8 w-8" />,
    category: "Framework",
  },
  {
    name: "Hono",
    icon: <Server className="h-8 w-8" />,
    category: "Backend",
  },
];

const TechCard = ({ name, icon, category }: { name: string; icon: React.ReactNode; category: string }) => {
  return (
    <div className={cn(
      "relative cursor-pointer overflow-hidden rounded-xl border p-4",
      "bg-white dark:bg-slate-900",
      "hover:bg-slate-50 dark:hover:bg-slate-800",
      "transition-all duration-300"
    )}>
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-xs text-muted-foreground">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default function Technologies() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-6">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
        <Marquee pauseOnHover className="[--duration:20s]">
          {technologies.map((tech, idx) => (
            <TechCard key={idx} {...tech} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
