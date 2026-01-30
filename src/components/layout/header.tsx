import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Expertise", href: "#expertise" },
	{ label: "Contact", href: "#contact" },
] as const;

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			
			setScrolled(scrollY > 50);
			setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-background/80 backdrop-blur-md border-b border-border/50"
					: "bg-transparent"
			}`}
		>
			{/* Scroll progress bar */}
			<div
				className="absolute bottom-0 left-0 h-px bg-accent transition-all duration-150"
				style={{ width: `${scrollProgress}%` }}
			/>

			<nav className="container mx-auto px-6 md:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo / Name */}
					<a
						href="#"
						className="font-display text-lg md:text-xl tracking-tight hover:text-accent transition-colors duration-300"
					>
						DM
					</a>

					{/* Navigation Links - Hidden on mobile */}
					<ul className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-sm font-medium text-muted-foreground hover:text-foreground 
										accent-underline transition-colors duration-300"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>

					{/* Right side: Theme toggle */}
					<div className="flex items-center gap-2">
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
}
