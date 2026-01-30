import { AnimatedSection } from "@/components/animated-section";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/PrinceD96",
		icon: Github,
		label: "PrinceD96",
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/daniel-morales-s96",
		icon: Linkedin,
		label: "daniel-morales-s96",
	},
	{
		name: "Email",
		url: "mailto:hello@danielmorales.me",
		icon: Mail,
		label: "hello@danielmorales.me",
	},
] as const;

export function Contact() {
	return (
		<section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-muted/30">
			<div className="container mx-auto max-w-3xl text-center">
				<AnimatedSection className="space-y-8">
					{/* Section header */}
					<div className="space-y-4">
						<span className="font-technical text-sm tracking-widest text-accent uppercase">
							Contact
						</span>
						<h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
							Let's connect
						</h2>
						<p className="text-lg text-muted-foreground max-w-xl mx-auto">
							Always interested in hearing about new opportunities, interesting 
							projects, or just connecting with fellow engineers.
						</p>
					</div>

					{/* Social links */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
						{socialLinks.map((link) => {
							const Icon = link.icon;
							return (
								<a
									key={link.name}
									href={link.url}
									target={link.name !== "Email" ? "_blank" : undefined}
									rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
									className="group flex items-center gap-3 px-5 py-3 rounded-lg 
										border border-border bg-card/50 hover:bg-card hover:border-accent/50
										transition-all duration-300"
								>
									<Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
									<span className="text-sm font-medium">{link.name}</span>
									<ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
								</a>
							);
						})}
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
