/**
 * Generates a dot grid pattern as an array of satori-compatible elements.
 * Each dot is a small circle positioned absolutely across the canvas.
 *
 * Used as a subtle background texture in OG images — visible in the
 * dark border area peeking through around the white content card.
 */

interface DotElement {
  type: string;
  props: {
    style: Record<string, string | number>;
  };
}

export function dotGrid(
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
