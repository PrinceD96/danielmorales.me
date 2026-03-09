import type { APIContext } from "astro";
import { generateOgImage } from "@/lib/og/generateOgImage";
import { siteTemplate } from "@/lib/og/siteTemplate";
import { siteConfig } from "@/config/site";

export async function GET(_context: APIContext) {
  const png = await generateOgImage(
    siteTemplate({
      name: siteConfig.name,
      description: siteConfig.description,
      siteUrl: siteConfig.url,
    })
  );

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
