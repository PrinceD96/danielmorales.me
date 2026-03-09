import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Local TTF fonts — deterministic, no network dependency
const fontsDir = join(process.cwd(), "src/assets/fonts");

let fontCache: { regular: ArrayBuffer; bold: ArrayBuffer } | null = null;

function loadFonts() {
  if (fontCache) return fontCache;

  fontCache = {
    regular: readFileSync(join(fontsDir, "GeistMono-Regular.ttf")).buffer as ArrayBuffer,
    bold: readFileSync(join(fontsDir, "GeistMono-Bold.ttf")).buffer as ArrayBuffer,
  };

  return fontCache;
}

export async function generateOgImage(
  element: React.ReactNode
): Promise<Buffer> {
  const fonts = loadFonts();

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Geist Mono",
        data: fonts.regular,
        style: "normal",
        weight: 400,
      },
      {
        name: "Geist Mono",
        data: fonts.bold,
        style: "normal",
        weight: 700,
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });

  return resvg.render().asPng();
}
