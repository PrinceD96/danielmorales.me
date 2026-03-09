import type { ReactNode } from "react";
import { dotGrid } from "./dotGrid";

/**
 * Site-level OG template — dark background with dot grid pattern.
 * Centered name + description. No white card.
 */

const c = {
  bg: "#1a1a1a",
  fg: "#ffffff",
  muted: "#999999",
};

interface SiteTemplateProps {
  name: string;
  description: string;
  siteUrl: string;
}

export function siteTemplate({
  name,
  description,
  siteUrl,
}: SiteTemplateProps): ReactNode {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: c.bg,
        fontFamily: "Geist Mono",
        position: "relative",
      },
      children: [
        // Dot grid background layer
        ...dotGrid(1200, 630),
        // Content layer — centered
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              padding: "60px 64px 52px 64px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            },
            children: [
              // Name
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "72px",
                    fontWeight: 700,
                    color: c.fg,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    textAlign: "center",
                  },
                  children: name,
                },
              },
              // Description
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "22px",
                    color: c.muted,
                    lineHeight: 1.5,
                    textAlign: "center",
                    maxWidth: "640px",
                    marginTop: "28px",
                  },
                  children: description,
                },
              },
              // URL
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "20px",
                    fontWeight: 700,
                    color: c.fg,
                    marginTop: "28px",
                  },
                  children: siteUrl.replace("https://", ""),
                },
              },
            ],
          },
        },
      ],
    },
  } as unknown as ReactNode;
}
