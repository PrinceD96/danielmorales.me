import type { ReactNode } from "react";

/**
 * Site-level OG template — dark text on light background.
 * Astonishing editorial layout.
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

const c = {
  bg: "#e9eef5",
  panel: "rgba(73, 88, 110, 0.05)",
  panelStrong: "rgba(73, 88, 110, 0.08)",
  grid: "rgba(73, 88, 110, 0.12)",
  fg: "#132033",
  muted: "#415069",
};

interface SiteTemplateProps {
  name: string;
  description: string;
  siteUrl: string;
  portraitDataUrl?: string;
}

export function siteTemplate({
  name,
  description,
  siteUrl,
  portraitDataUrl,
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
        
        // Framed portrait panel
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: "54px",
              right: "72px",
              width: "410px",
              height: "510px",
              backgroundColor: c.bg,
              border: `2px solid ${c.fg}`,
              boxShadow: `22px 22px 0 ${c.panelStrong}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "18px",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: "100%",
                    height: "100%",
                    border: `1px solid ${c.grid}`,
                    overflow: "hidden",
                    backgroundColor: c.panel,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: portraitDataUrl
                    ? {
                        type: "img",
                        props: {
                          src: portraitDataUrl,
                          width: "374",
                          height: "474",
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          },
                        },
                      }
                    : {
                        type: "div",
                        props: {
                          style: {
                            width: "220px",
                            height: "220px",
                            borderRadius: "110px",
                            backgroundColor: c.panelStrong,
                            border: `1px solid ${c.grid}`,
                          },
                        },
                      },
                },
              },
            ],
          },
        },

        // Floating overlapping rectangles
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              right: "38px",
              bottom: "32px",
              width: "240px",
              height: "96px",
              backgroundColor: c.panel,
              border: `1px solid ${c.grid}`,
            }
          }
        },
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              right: "0px",
              bottom: "0px",
              width: "240px",
              height: "96px",
              backgroundColor: c.bg,
              border: `1px solid ${c.grid}`,
              boxShadow: `16px 16px 0px ${c.panelStrong}`,
              display: "flex",
              alignItems: "center",
              paddingLeft: "28px",
              fontSize: "20px",
              color: c.muted,
              letterSpacing: "0.2em",
            },
            children: "EST. 2024"
          }
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
            ]
          }
        },

        // Content Container
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              padding: "100px 80px",
              justifyContent: "center",
              position: "relative",
            },
            children: [
              // Pre-title (URL)
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "24px",
                    fontWeight: 700,
                    color: c.muted,
                    marginBottom: "40px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "flex",
                    alignItems: "center",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          width: "40px",
                          height: "2px",
                          backgroundColor: c.muted,
                          marginRight: "20px",
                        }
                      }
                    },
                    siteUrl.replace("https://", ""),
                  ],
                },
              },
              
              // Name (Massive, multi-line if needed)
              {
                type: "div",
                props: {
                  style: {
                     fontSize: "98px",
                     fontWeight: 800,
                     color: c.fg,
                     letterSpacing: "-0.05em",
                     lineHeight: 0.9,
                     maxWidth: "620px",
                     display: "flex",
                     flexDirection: "column",
                   },
                  children: name,
                },
              },
              
              // Divider
              {
                type: "div",
                props: {
                  style: {
                    width: "80px",
                    height: "8px",
                    backgroundColor: c.fg,
                    marginTop: "50px",
                    marginBottom: "50px",
                  }
                }
              },

              // Description
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "36px",
                    fontWeight: 400,
                    color: c.muted,
                    lineHeight: 1.4,
                     maxWidth: "560px",
                   },
                   children: description,
                 },
              },
            ],
          },
        },
      ],
    },
  } as unknown as ReactNode;
}
