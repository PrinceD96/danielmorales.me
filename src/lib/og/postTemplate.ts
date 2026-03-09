import type { ReactNode } from "react";

/**
 * Generates a square grid pattern as an array of satori-compatible elements.
 */
interface GridElement {
  type: string;
  props: {
    style: Record<string, string | number>;
  };
}

function squareGrid(
  width: number,
  height: number,
  opts: {
    size?: number;
    color?: string;
    stroke?: number;
    offsetX?: number;
    offsetY?: number;
  } = {}
): GridElement[] {
  const {
    size = 40,
    color = "rgba(67, 82, 103, 0.12)",
    stroke = 1,
    offsetX = 0,
    offsetY = 0,
  } = opts;

  const lines: GridElement[] = [];

  for (let x = offsetX; x <= width; x += size) {
    lines.push({
      type: "div",
      props: {
        style: {
          position: "absolute",
          left: x,
          top: 0,
          width: stroke,
          height,
          backgroundColor: color,
        },
      },
    });
  }

  for (let y = offsetY; y <= height; y += size) {
    lines.push({
      type: "div",
      props: {
        style: {
          position: "absolute",
          left: 0,
          top: y,
          width,
          height: stroke,
          backgroundColor: color,
        },
      },
    });
  }

  return lines;
}

/**
 * Post OG template — clean editorial layout matching site OG style.
 */

const c = {
  bg: "#e9eef5",
  grid: "rgba(73, 88, 110, 0.12)",
  fg: "#132033",
  muted: "#415069",
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
  date,
  tags = [],
  siteUrl,
}: PostTemplateProps): ReactNode {
  const titleSize = title.length > 70 ? 60 : title.length > 40 ? 72 : 84;

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
        overflow: "hidden",
      },
      children: [
        // Background Grid
        ...squareGrid(1200, 630, {
          size: 60,
          color: c.grid,
          stroke: 1,
          offsetX: 30,
          offsetY: 15,
        }),

        // Edge fade overlays
        // Left
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "160px",
              height: "100%",
              backgroundImage: `linear-gradient(to right, ${c.bg}, ${c.bg}00)`,
            },
          },
        },
        // Right
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              right: 0,
              width: "160px",
              height: "100%",
              backgroundImage: `linear-gradient(to left, ${c.bg}, ${c.bg}00)`,
            },
          },
        },
        // Top
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "120px",
              backgroundImage: `linear-gradient(to bottom, ${c.bg}, ${c.bg}00)`,
            },
          },
        },
        // Bottom
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "120px",
              backgroundImage: `linear-gradient(to top, ${c.bg}, ${c.bg}00)`,
            },
          },
        },

        // Top bar
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "12px",
              display: "flex",
            },
            children: [
              { type: "div", props: { style: { flex: 1, backgroundColor: c.fg } } },
              { type: "div", props: { style: { flex: 2, backgroundColor: c.muted } } },
              { type: "div", props: { style: { flex: 1, backgroundColor: c.grid } } },
            ],
          },
        },

        // Content container
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              padding: "100px 100px 80px",
              justifyContent: "space-between",
              position: "relative",
            },
            children: [
              // Top: date + tags
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "26px",
                          fontWeight: 700,
                          color: c.muted,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        },
                        children: date || "LATEST POST",
                      },
                    },
                    tags.length > 0 && {
                      type: "div",
                      props: {
                        style: {
                          width: "2px",
                          height: "24px",
                          backgroundColor: c.muted,
                        },
                      },
                    },
                    ...(tags.length > 0
                      ? tags.slice(0, 3).map((tag) => ({
                          type: "div",
                          props: {
                            style: {
                              fontSize: "24px",
                              fontWeight: 400,
                              color: c.muted,
                              letterSpacing: "0.05em",
                            },
                            children: `#${tag}`,
                          },
                        }))
                      : []),
                  ].filter(Boolean),
                },
              },

              // Middle: title
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "960px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: `${titleSize}px`,
                          fontWeight: 800,
                          color: c.fg,
                          lineHeight: 1.1,
                          letterSpacing: "-0.04em",
                        },
                        children: title,
                      },
                    },
                  ],
                },
              },

              // Bottom: divider + author / url
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  },
                  children: [
                    // Divider
                    {
                      type: "div",
                      props: {
                        style: {
                          width: "60px",
                          height: "6px",
                          backgroundColor: c.fg,
                        },
                      },
                    },
                    // Author + URL row
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              },
                              children: [
                                {
                                  type: "div",
                                  props: {
                                    style: {
                                      fontSize: "28px",
                                      fontWeight: 400,
                                      color: c.muted,
                                    },
                                    children: "by",
                                  },
                                },
                                {
                                  type: "div",
                                  props: {
                                    style: {
                                      fontSize: "28px",
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
                            type: "div",
                            props: {
                              style: {
                                fontSize: "26px",
                                fontWeight: 700,
                                color: c.muted,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
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
