import type { ReactNode } from "react";
import { dotGrid } from "./dotGrid";

/**
 * Post OG template — dark background with dot grid pattern.
 * Title top-left, footer with author + site URL at bottom.
 * No white card — text sits directly on the dark dot-grid surface.
 */

const c = {
  bg: "#1a1a1a",
  fg: "#ffffff",
  muted: "#999999",
};

interface PostTemplateProps {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  siteUrl: string;
}

export function postTemplate({
  title,
  description,
  date,
  tags = [],
  siteUrl,
}: PostTemplateProps): ReactNode {
  const titleSize = title.length > 80 ? 44 : title.length > 50 ? 54 : 64;

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
        // Content layer
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              padding: "60px 64px 52px 64px",
              position: "relative",
            },
            children: [
              // Title — top-left
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flex: 1,
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: `${titleSize}px`,
                          fontWeight: 700,
                          color: c.fg,
                          lineHeight: 1.18,
                          letterSpacing: "-0.03em",
                        },
                        children: title,
                      },
                    },
                  ],
                },
              },
              // Footer row
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  },
                  children: [
                    // by Author
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "baseline",
                          gap: "10px",
                        },
                        children: [
                          {
                            type: "span",
                            props: {
                              style: {
                                fontSize: "24px",
                                color: c.muted,
                              },
                              children: "by",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              style: {
                                fontSize: "24px",
                                fontWeight: 700,
                                color: c.fg,
                              },
                              children: "Daniel Morales",
                            },
                          },
                        ],
                      },
                    },
                    // Site URL
                    {
                      type: "span",
                      props: {
                        style: {
                          fontSize: "24px",
                          fontWeight: 700,
                          color: c.fg,
                        },
                        children: siteUrl.replace("https://", ""),
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  } as unknown as ReactNode;
}
