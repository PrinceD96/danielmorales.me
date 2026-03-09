import type { ReactNode } from "react";

/**
 * Generates a dot grid pattern as an array of satori-compatible elements.
 */
interface DotElement {
  type: string;
  props: {
    style: Record<string, string | number>;
  };
}

function dotGrid(
  width: number,
  height: number,
  opts: {
    spacing?: number;
    dotSize?: number;
    color?: string;
    offset?: number;
  } = {}
): DotElement[] {
  const {
    spacing = 24,
    dotSize = 2,
    color = "rgba(255, 255, 255, 0.2)",
    offset = 12,
  } = opts;

  const dots: DotElement[] = [];

  for (let y = offset; y < height; y += spacing) {
    for (let x = offset; x < width; x += spacing) {
      dots.push({
        type: "div",
        props: {
          style: {
            position: "absolute",
            left: x,
            top: y,
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize,
            backgroundColor: color,
          },
        },
      });
    }
  }

  return dots;
}

/**
 * Post OG template — Bold editorial layout.
 */

const c = {
  bg: "#ffffff",
  fg: "#0c0a09",
  primary: "#0069a8",
  muted: "#737373", // A readable dark gray
  card: "#f4f4f5", // Secondary
  cardBorder: "#0c0a09",
  accent: "rgba(0, 105, 168, 0.1)", // Primary with opacity
  grid: "rgba(12, 10, 9, 0.1)",
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
  // We want the title to be massive but safe enough to not overflow.
  const titleSize = title.length > 70 ? 64 : title.length > 40 ? 76 : 90;

  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: c.card, // Secondary color background
        fontFamily: "Geist Mono",
        position: "relative",
        overflow: "hidden",
      },
      children: [
        // Background Grid
        ...dotGrid(1200, 630, {
          spacing: 32,
          dotSize: 3,
          color: c.grid,
          offset: 16,
        }),

        // Massive typographic background watermark
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: "-40px",
              left: "-20px",
              fontSize: "400px",
              fontWeight: 800,
              color: c.accent, // Light primary text
              lineHeight: 0.8,
              letterSpacing: "-0.08em",
              whiteSpace: "nowrap",
            },
            children: "BUILD",
          }
        },

        // Top heavy border
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "32px",
              backgroundColor: c.primary,
            }
          }
        },

        // Main layout container
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: "100%",
              height: "100%",
              padding: "70px 100px", // Reduced padding to give content more room
              position: "relative",
            },
            children: [
        // Left content box
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    height: "100%",
                    backgroundColor: c.bg,
                    border: `4px solid ${c.fg}`,
                    boxShadow: `20px 20px 0px ${c.primary}`, // Hard primary shadow
                    padding: "40px 50px", // Reduced inner padding
                    position: "relative",
                  },
                  children: [
                    // Top row: Date & Tags
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          flexDirection: "row", // Changed to row
                          justifyContent: "space-between", // Spread date and tags
                          alignItems: "center", // Center vertically
                          width: "100%",
                          marginBottom: "auto", 
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                fontSize: "20px",
                                fontWeight: 700,
                                color: c.muted,
                                textTransform: "uppercase",
                                letterSpacing: "0.15em",
                              },
                              children: date || "LATEST POST",
                            }
                          },
                          tags.length > 0 && {
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                gap: "12px",
                              },
                              children: tags.slice(0, 3).map(tag => ({
                                type: "div",
                                props: {
                                    style: {
                                      fontSize: "18px",
                                      fontWeight: 600,
                                      color: c.bg,
                                      padding: "6px 16px",
                                      backgroundColor: c.primary,
                                      borderRadius: 0, // Squared corners
                                    },
                                  children: tag,
                                }
                              }))
                            }
                          }
                        ]
                      }
                    },

                    // Title Container (takes up middle space)
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          flex: 1,
                          paddingTop: "20px",
                          paddingBottom: "20px",
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                fontSize: `${titleSize}px`,
                                fontWeight: 800,
                                color: c.fg,
                                lineHeight: 1.15, // Increased line-height for readability
                                letterSpacing: "-0.04em",
                                display: "flex",
                                flexDirection: "column",
                              },
                              children: title,
                            }
                          }
                        ]
                      }
                    },

                    // Bottom row: Site URL & Author
                    {
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          borderTop: `2px dashed ${c.fg}`, // Changed to dashed
                          paddingTop: "30px",
                          marginTop: "auto",
                        },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: {
                                fontSize: "24px",
                                fontWeight: 800,
                                color: c.fg,
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                              },
                              children: [
                                {
                                  type: "div",
                                  props: {
                                    style: {
                                      color: c.muted,
                                      fontSize: "20px",
                                      fontWeight: 600,
                                      marginRight: "6px",
                                    },
                                    children: "by"
                                  }
                                },
                                "Daniel Morales"
                              ]
                            }
                          },
                          {
                            type: "div",
                            props: {
                                style: {
                                  fontSize: "22px",
                                  fontWeight: 700,
                                  color: c.primary,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                },
                                children: siteUrl.replace("https://", ""),
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
    },
  } as unknown as ReactNode;
}