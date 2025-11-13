import IconCloud from "./magicui/icon-cloud";

const iconSlugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "python",
  "mongodb",
  "express",
  "graphql",
  "prisma",
  "mysql",
  "redis",
  "nginx",
  "ubuntu",
  "cloudflare",
  "svelte",
  "vue-dot-js",
  "nuxt-dot-js",
  "astro",
];

export default function Technologies() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background dark:bg-black">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-2xl font-bold mb-4 text-center px-4">Technologies</h3>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </div>
  );
}
