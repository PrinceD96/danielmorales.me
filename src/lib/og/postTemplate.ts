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
  card: "#141414",
  cardBorder: "rgba(255, 255, 255, 0.2)",
  backCard: "rgba(255, 255, 255, 0.03)",
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
  const safeInsetX = 68;
  const safeInsetTop = 52;
  const safeInsetBottom = 62;

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
        // Content layer
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: "100%",
              height: "100%",
              padding: "86px 96px 92px 74px",
              position: "relative",
            },
            children: [
              // Back card
              {
                type: "div",
                props: {
                  style: {
                    position: "absolute",
                    top: "40px",
                    left: "140px",
                    right: "34px",
                    bottom: "126px",
                    borderRadius: "28px",
                    backgroundColor: "transparent",
                    border: `2px solid ${c.cardBorder}`,
                  },
                },
              },
              // Front card
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    padding: `${safeInsetTop}px ${safeInsetX}px ${safeInsetBottom}px ${safeInsetX}px`,
                    position: "relative",
                    borderRadius: "28px",
                    backgroundColor: c.card,
                    border: `2px solid ${c.cardBorder}`,
                    boxShadow: "0 18px 60px rgba(0, 0, 0, 0.28)",
                  },
                  children: [
                    ...dotGrid(1088, 546, {
                      spacing: 24,
                      dotSize: 2,
                      color: "rgba(255, 255, 255, 0.14)",
                      offset: 14,
                    }),
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          flex: 1,
                          position: "relative",
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                fontSize: `${titleSize}px`,
                                fontWeight: 700,
                                color: c.fg,
                                lineHeight: 1.16,
                                letterSpacing: "-0.03em",
                                maxWidth: "860px",
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
                          position: "relative",
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                alignItems: "baseline",
                                gap: "10px",
                                paddingLeft: "10px",
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
                          {
                            type: "span",
                            props: {
                              style: {
                                fontSize: "24px",
                                fontWeight: 700,
                                color: c.fg,
                                paddingRight: "10px",
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
        },
      ],
    },
  } as unknown as ReactNode;
}
