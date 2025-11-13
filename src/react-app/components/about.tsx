import FadeIn from "./magicui/fade-in";

export default function About() {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background p-6">
      <FadeIn>
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-muted-foreground leading-relaxed">
          I'm a passionate full-stack developer with expertise in building modern web applications.
          I love creating seamless user experiences and writing clean, maintainable code.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-sm">Fast learner & problem solver</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            <span className="text-sm">Creative thinker</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤝</span>
            <span className="text-sm">Team player</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
