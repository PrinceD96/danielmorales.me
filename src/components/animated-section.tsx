import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
}

export function AnimatedSection({
	children,
	className = "",
	delay = 0,
	animation = "fade-up",
}: AnimatedSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(element);
				}
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	const animationClass = {
		"fade-up": "animate-fade-in-up",
		"fade-in": "animate-fade-in",
		"slide-left": "animate-slide-in-left",
		"slide-right": "animate-slide-in-right",
	}[animation];

	return (
		<div
			ref={ref}
			className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
			style={{
				animationDelay: isVisible ? `${delay}ms` : "0ms",
				animationFillMode: "both",
			}}
		>
			{children}
		</div>
	);
}
