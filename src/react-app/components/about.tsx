import FadeIn from "./magicui/fade-in";
import AnimatedGridPattern from "./magicui/animated-grid-pattern";

export default function About() {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background dark:bg-black p-6">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />

      <FadeIn className="z-10 w-full">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tight">About Me</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a passionate full-stack developer with expertise in building modern web applications.
            I love creating seamless user experiences and writing clean, maintainable code.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 group">
              <span className="text-2xl transition-transform group-hover:scale-110">🚀</span>
              <span className="text-sm font-medium">Fast learner & problem solver</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="text-2xl transition-transform group-hover:scale-110">💡</span>
              <span className="text-sm font-medium">Creative thinker</span>
            </div>
            <div className="flex items-center gap-3 group">
              <span className="text-2xl transition-transform group-hover:scale-110">🤝</span>
              <span className="text-sm font-medium">Team player</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
