export const siteConfig = {
  name: "Daniel Morales",
  title: "Daniel Morales",
  description:
    "I build software products and write about what I learn along the way.",
  url: "https://danielmorales.me",
  author: {
    name: "Daniel Morales",
    email: "hello@danielmorales.me",
    url: "https://danielmorales.me",
  },
  social: {
    github: "https://github.com/PrinceD96",
    x: "https://x.com/Princedany96",
    linkedin: "https://linkedin.com/in/daniel-morales-s96",
    email: "hello@danielmorales.me",
  },
  currentlyBuilding: {
    name: "Something new",
    description: "Details coming soon.",
    status: "in-progress" as const,
    url: undefined as string | undefined,
  },
  ogImage: "/og.png",
  ogImageVersion: "2026-03-09",
  dynamicOgImage: true,
  nav: [
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
