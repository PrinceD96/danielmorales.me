import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Hero from "./hero";
import Technologies from "./technologies";
import About from "./about";
import Projects from "./projects";

export default function Bento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      <BentoGridItem
        className="md:col-span-3"
        header={<Hero />}
      />
      <BentoGridItem
        className="md:col-span-2"
        header={<About />}
      />
      <BentoGridItem
        className="md:col-span-1"
        header={
          <div className="flex h-full items-center justify-center rounded-lg border bg-gradient-to-br from-primary/20 to-primary/5 p-8">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                5+
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Years of Experience
              </div>
            </div>
          </div>
        }
      />
      <BentoGridItem
        className="md:col-span-3"
        header={<Technologies />}
      />
      <BentoGridItem
        className="md:col-span-3 md:row-span-2"
        header={<Projects />}
      />
    </BentoGrid>
  );
}
