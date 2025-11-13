import { Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import WordPullUp from "./magicui/word-pull-up";
import BlurIn from "./magicui/blur-in";
import FadeIn from "./magicui/fade-in";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl">
      <div className="z-10 flex w-3/4 sm:w-2/3 flex-col items-center text-center">
        <WordPullUp
          words="Daniel Morales"
          className="text-4xl font-bold tracking-[-0.02em] text-foreground md:text-5xl md:leading-[4rem]"
        />

        <BlurIn>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Full-stack developer crafting elegant, scalable solutions that users love and developers enjoy expanding.
          </p>
        </BlurIn>

        <FadeIn delay={0.4} className="mt-6 flex gap-4">
          <Button
            variant="default"
            size="lg"
            className="group"
            asChild
          >
            <a
              href="https://github.com/PrinceD96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact
            </a>
          </Button>
        </FadeIn>
      </div>
    </div>
  );
}
