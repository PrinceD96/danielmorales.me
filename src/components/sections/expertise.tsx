import { AnimatedSection } from "@/components/animated-section";

interface SkillCategory {
	name: string;
	skills: string[];
}

const skillCategories: SkillCategory[] = [
	{
		name: "Languages",
		skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
	},
	{
		name: "Frontend",
		skills: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"],
	},
	{
		name: "Backend",
		skills: ["Node.js", "Hono", "Express", "GraphQL", "REST APIs"],
	},
	{
		name: "Infrastructure",
		skills: ["AWS", "Cloudflare", "Docker", "Kubernetes", "Terraform"],
	},
	{
		name: "Data",
		skills: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"],
	},
	{
		name: "Practices",
		skills: ["CI/CD", "TDD", "Agile", "System Design", "Code Review"],
	},
];

function SkillColumn({ category, index }: { category: SkillCategory; index: number }) {
	return (
		<AnimatedSection
			delay={index * 80}
			animation="fade-up"
			className="space-y-4"
		>
			<h3 className="font-technical text-xs tracking-widest text-accent uppercase">
				{category.name}
			</h3>
			<ul className="space-y-2.5">
				{category.skills.map((skill) => (
					<li
						key={skill}
						className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
					>
						{skill}
					</li>
				))}
			</ul>
		</AnimatedSection>
	);
}

export function Expertise() {
	return (
		<section id="expertise" className="py-24 md:py-32 px-6 md:px-8">
			<div className="container mx-auto max-w-5xl">
				{/* Section header */}
				<AnimatedSection className="mb-16">
					<div className="flex items-center gap-4 mb-4">
						<span className="font-technical text-sm tracking-widest text-accent uppercase">
							Expertise
						</span>
						<div className="flex-1 h-px bg-border" />
					</div>
					<h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-balance">
						Technologies I work with
					</h2>
				</AnimatedSection>

				{/* Skills grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
					{skillCategories.map((category, index) => (
						<SkillColumn key={category.name} category={category} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
