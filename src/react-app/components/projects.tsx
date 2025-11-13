import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./magicui/fade-in";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team workspaces.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualizations.",
    tags: ["React", "D3.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border bg-background dark:bg-black p-6">
      <h3 className="text-3xl font-bold mb-6 tracking-tight">Featured Projects</h3>
      <div className="flex flex-col gap-4 overflow-y-auto">
        {projects.map((project, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-border">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>{project.title}</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="group/btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="group/btn" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
