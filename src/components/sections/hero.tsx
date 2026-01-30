import { ChevronDown } from "lucide-react";

export function Hero() {
	return (
		<section className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 pt-20">
			{/* Background decorative element */}
			<div className="absolute top-1/4 right-8 md:right-16 lg:right-24 w-32 h-32 md:w-48 md:h-48 opacity-[0.03] pointer-events-none">
				<svg viewBox="0 0 100 100" className="w-full h-full animate-float">
					<circle
						cx="50"
						cy="50"
						r="45"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<circle
						cx="50"
						cy="50"
						r="30"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<circle
						cx="50"
						cy="50"
						r="15"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
				</svg>
			</div>

			<div className="container mx-auto max-w-5xl">
				{/* Main content */}
				<div className="space-y-6 md:space-y-8">
					{/* Overline */}
					<p
						className="font-technical text-sm tracking-widest text-accent uppercase
							opacity-0 animate-fade-in"
						style={{ animationDelay: "200ms", animationFillMode: "both" }}
					>
						Software Engineer
					</p>

					{/* Name - Oversized editorial typography */}
					<h1 className="space-y-2">
						<span
							className="block font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
								tracking-tight leading-[0.9] opacity-0 animate-fade-in-up"
							style={{ animationDelay: "300ms", animationFillMode: "both" }}
						>
							Daniel
						</span>
						<span
							className="block font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
								tracking-tight leading-[0.9] opacity-0 animate-fade-in-up"
							style={{ animationDelay: "400ms", animationFillMode: "both" }}
						>
							Morales
						</span>
					</h1>

					{/* Tagline */}
					<p
						className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed
							opacity-0 animate-fade-in-up"
						style={{ animationDelay: "500ms", animationFillMode: "both" }}
					>
						Building systems that scale, teams that ship, and products that
						matter. Currently crafting digital experiences at the intersection
						of performance and design.
					</p>

					{/* Accent line */}
					<div
						className="w-24 h-0.5 bg-accent opacity-0 animate-draw-line"
						style={{ animationDelay: "700ms", animationFillMode: "both" }}
					/>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
				<span
					className="text-xs font-technical tracking-widest text-muted-foreground uppercase
						opacity-0 animate-fade-in"
					style={{ animationDelay: "1000ms", animationFillMode: "both" }}
				>
					Scroll
				</span>
				<ChevronDown
					className="w-5 h-5 text-muted-foreground animate-scroll-hint opacity-0 animate-fade-in"
					style={{ animationDelay: "1100ms", animationFillMode: "both" }}
				/>
			</div>
		</section>
	);
}
