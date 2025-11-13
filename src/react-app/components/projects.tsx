import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./magicui/fade-in";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1.com",
  },
  {
    title: "Project Two",
    description: "E-commerce platform with real-time inventory management",
    tags: ["Next.js", "TypeScript", "Stripe"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2.com",
  },
];

export default function Projects() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg border bg-background p-6">
      <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
      <div className="flex flex-col gap-4 overflow-y-auto">
        {projects.map((project, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
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
