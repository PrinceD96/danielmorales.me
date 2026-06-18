export const siteConfig = {
  name: "Daniel Morales",
  title: "Daniel Morales",
  description:
    "I'm a lead software engineer and entrepreneur building software products, and I write about SaaS, mobile apps, AI, and engineering decisions.",
  url: "https://danielmorales.me",
  author: {
    name: "Daniel Morales",
    email: "hello@danielmorales.me",
    url: "https://danielmorales.me",
  },
  social: {
    github: "https://github.com/PrinceD96",
    x: "https://x.com/Princedany96",
    linkedin: "https://www.linkedin.com/in/daniel-morales-eng/",
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
