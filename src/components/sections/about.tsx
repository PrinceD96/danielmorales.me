import { AnimatedSection } from "@/components/animated-section";

export function About() {
	return (
		<section id="about" className="py-24 md:py-32 px-6 md:px-8">
			<div className="container mx-auto max-w-6xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
					{/* Pull quote - Editorial style */}
					<AnimatedSection
						className="lg:col-span-5"
						animation="slide-left"
					>
						<blockquote className="pull-quote text-foreground">
							<span className="text-accent">"</span>
							I build software that solves real problems—not just technically 
							elegant solutions, but ones that actually ship and scale.
							<span className="text-accent">"</span>
						</blockquote>
					</AnimatedSection>

					{/* About content */}
					<AnimatedSection
						className="lg:col-span-7 space-y-6"
						animation="slide-right"
						delay={100}
					>
						<div className="flex items-center gap-4 mb-8">
							<span className="font-technical text-sm tracking-widest text-accent uppercase">
								About
							</span>
							<div className="flex-1 h-px bg-border" />
						</div>

						<div className="space-y-5 text-muted-foreground leading-relaxed">
							<p>
								With over a decade in software engineering, I've learned that the best code 
								isn't the cleverest—it's the code that lets teams move fast without breaking things. 
								I specialize in building robust systems and leading engineering teams through 
								complex technical challenges.
							</p>
							<p>
								My approach combines deep technical expertise with a pragmatic focus on 
								business outcomes. Whether it's architecting distributed systems, optimizing 
								performance bottlenecks, or mentoring engineers, I bring the same commitment 
								to excellence and continuous improvement.
							</p>
							<p>
								When I'm not writing code, you'll find me exploring new technologies, 
								contributing to open source, or sharing knowledge with the developer community.
							</p>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
