import type { APIContext } from "astro";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { generateOgImage } from "@/lib/og/generateOgImage";
import { siteTemplate } from "@/lib/og/siteTemplate";
import { siteConfig } from "@/config/site";

const portraitPath = join(process.cwd(), "src/assets/daniel-morales.webp");

export async function GET(_context: APIContext) {
  const portrait = await readFile(portraitPath);
  const portraitJpeg = await sharp(portrait)
    .resize(560, 560, {
      fit: "cover",
      position: "attention",
    })
    .jpeg({ quality: 90 })
    .toBuffer();

  const portraitDataUrl = `data:image/jpeg;base64,${portraitJpeg.toString("base64")}`;
  const png = await generateOgImage(
    siteTemplate({
      name: siteConfig.name,
      description: siteConfig.description,
      siteUrl: siteConfig.url,
      portraitDataUrl,
    })
  );

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
