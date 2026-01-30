import { AnimatedSection } from "@/components/animated-section";
import { ArrowUpRight } from "lucide-react";

interface Experience {
	company: string;
	role: string;
	period: string;
	description: string;
	highlights: string[];
	url?: string;
}

const experiences: Experience[] = [
	{
		company: "Tech Company",
		role: "Senior Software Engineer",
		period: "2022 — Present",
		description:
			"Leading development of core platform features serving millions of users. Architecting scalable solutions and mentoring junior engineers.",
		highlights: [
			"Reduced API latency by 60% through strategic caching and query optimization",
			"Led migration to microservices architecture",
			"Established engineering best practices adopted team-wide",
		],
	},
	{
		company: "Startup Inc",
		role: "Full Stack Engineer",
		period: "2019 — 2022",
		description:
			"Built and shipped core product features from zero to one. Worked across the entire stack from infrastructure to user interfaces.",
		highlights: [
			"Shipped MVP in 3 months, acquired first 10k users",
			"Designed and implemented real-time collaboration features",
			"Built CI/CD pipeline reducing deploy time from hours to minutes",
		],
	},
	{
		company: "Agency Co",
		role: "Software Developer",
		period: "2017 — 2019",
		description:
			"Delivered high-quality web applications for diverse clients. Developed expertise in modern frontend frameworks and backend technologies.",
		highlights: [
			"Delivered 15+ client projects on time and under budget",
			"Introduced TypeScript to the team, improving code quality",
			"Mentored 3 junior developers",
		],
	},
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
	return (
		<AnimatedSection
			delay={index * 100}
			animation="fade-up"
			className="group"
		>
			<article className="experience-card p-6 md:p-8 rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-500">
				{/* Header */}
				<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
					<div>
						<h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
							{experience.company}
							{experience.url && (
								<ArrowUpRight className="inline-block w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
							)}
						</h3>
						<p className="text-muted-foreground font-medium">{experience.role}</p>
					</div>
					<span className="font-technical text-sm text-muted-foreground tracking-wide">
						{experience.period}
					</span>
				</div>

				{/* Description */}
				<p className="text-muted-foreground leading-relaxed mb-6">
					{experience.description}
				</p>

				{/* Highlights */}
				<ul className="space-y-2">
					{experience.highlights.map((highlight, i) => (
						<li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
							<span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
							{highlight}
						</li>
					))}
				</ul>
			</article>
		</AnimatedSection>
	);
}

export function Experience() {
	return (
		<section id="experience" className="py-24 md:py-32 px-6 md:px-8 bg-muted/30">
			<div className="container mx-auto max-w-5xl">
				{/* Section header */}
				<AnimatedSection className="mb-16">
					<div className="flex items-center gap-4 mb-4">
						<span className="font-technical text-sm tracking-widest text-accent uppercase">
							Experience
						</span>
						<div className="flex-1 h-px bg-border" />
					</div>
					<h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance">
						Where I've contributed
					</h2>
				</AnimatedSection>

				{/* Experience cards */}
				<div className="space-y-6">
					{experiences.map((experience, index) => (
						<ExperienceCard key={experience.company} experience={experience} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
