import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

function App() {
	const skills = [
		"React",
		"TypeScript",
		"Node.js",
		"Vite",
		"Tailwind CSS",
		"Cloudflare Workers",
		"Hono",
		"shadcn/ui",
	];

	const projects = [
		{
			title: "E-Commerce Platform",
			description:
				"A full-stack e-commerce solution with payment integration and real-time inventory management.",
			tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
			link: "#",
		},
		{
			title: "Task Management App",
			description:
				"Collaborative task management tool with real-time updates and team workspaces.",
			tech: ["React", "TypeScript", "Firebase", "Tailwind"],
			link: "#",
		},
		{
			title: "Analytics Dashboard",
			description:
				"Real-time analytics dashboard with interactive charts and data visualizations.",
			tech: ["React", "D3.js", "Node.js", "MongoDB"],
			link: "#",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
			{/* Hero Section */}
			<section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
				<div className="max-w-3xl mx-auto text-center space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
						Hi, I'm{" "}
						<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							Daniel Morales
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground">
						Full Stack Developer
					</p>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						I build modern web applications with cutting-edge technologies.
						Passionate about creating seamless user experiences and scalable
						solutions.
					</p>
					<div className="flex flex-wrap gap-4 justify-center pt-4">
						<Button size="lg" asChild>
							<a href="#projects">View Projects</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a href="#contact">Contact Me</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="container mx-auto px-4 py-16" id="skills">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Skills & Technologies
					</h2>
					<div className="flex flex-wrap gap-3 justify-center">
						{skills.map((skill) => (
							<Badge
								key={skill}
								variant="secondary"
								className="text-base px-4 py-2"
							>
								{skill}
							</Badge>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="container mx-auto px-4 py-16" id="projects">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project) => (
							<Card
								key={project.title}
								className="hover:shadow-lg transition-shadow"
							>
								<CardHeader>
									<CardTitle className="flex items-center justify-between">
										{project.title}
										<ExternalLink className="w-5 h-5 text-muted-foreground" />
									</CardTitle>
									<CardDescription>{project.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<Badge key={tech} variant="outline">
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="container mx-auto px-4 py-16 pb-24" id="contact">
				<div className="max-w-2xl mx-auto text-center space-y-8">
					<h2 className="text-3xl font-bold">Get In Touch</h2>
					<p className="text-lg text-muted-foreground">
						I'm always open to discussing new projects, creative ideas, or
						opportunities to be part of your visions.
					</p>
					<div className="flex gap-4 justify-center">
						<Button size="lg" variant="outline" asChild>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="mr-2 h-5 w-5" />
								GitHub
							</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="mr-2 h-5 w-5" />
								LinkedIn
							</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a href="mailto:your.email@example.com">
								<Mail className="mr-2 h-5 w-5" />
								Email
							</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t">
				<div className="container mx-auto px-4 py-8">
					<p className="text-center text-sm text-muted-foreground">
						© 2024 Daniel Morales. Built with React, Vite, and shadcn/ui.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
