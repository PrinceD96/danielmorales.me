import { useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="relative w-10 h-10 rounded-full flex items-center justify-center
				text-muted-foreground hover:text-foreground
				hover:bg-secondary/80 transition-all duration-300
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
			aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
		>
			<Sun
				className={`h-5 w-5 absolute transition-all duration-300 ${
					theme === "light"
						? "rotate-0 scale-100 opacity-100"
						: "rotate-90 scale-0 opacity-0"
				}`}
			/>
			<Moon
				className={`h-5 w-5 absolute transition-all duration-300 ${
					theme === "dark"
						? "rotate-0 scale-100 opacity-100"
						: "-rotate-90 scale-0 opacity-0"
				}`}
			/>
		</button>
	);
}
