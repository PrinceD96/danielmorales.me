export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-8 px-6 md:px-8 border-t border-border">
			<div className="container mx-auto max-w-5xl">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-sm text-muted-foreground">
						© {currentYear} Daniel Morales
					</p>
					<p className="text-sm text-muted-foreground">
						Built with{" "}
						<span className="font-technical">React</span>,{" "}
						<span className="font-technical">Vite</span>, and{" "}
						<span className="font-technical">Cloudflare Workers</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
