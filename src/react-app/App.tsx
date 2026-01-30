import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

function App() {
	return (
		<ThemeProvider>
			{/* Grain texture overlay */}
			<div className="grain" />

			{/* Sticky header with navigation */}
			<Header />

			{/* Main content */}
			<main>
				<Hero />
				<About />
				<Experience />
				<Expertise />
				<Contact />
			</main>

			<Footer />
		</ThemeProvider>
	);
}

export default App;
