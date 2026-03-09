import type { APIContext, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { generateOgImage } from "@/lib/og/generateOgImage";
import { postTemplate } from "@/lib/og/postTemplate";
import { siteConfig } from "@/config/site";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("posts", ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
};

export async function GET({ props }: APIContext) {
  const { post } = props;

  // If post has a manual ogImage, skip generation
  if (post.data.ogImage) {
    return new Response(null, {
      status: 302,
      headers: { Location: post.data.ogImage },
    });
  }

  const date = post.data.publishedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const png = await generateOgImage(
    postTemplate({
      title: post.data.title,
      description: post.data.description,
      date,
      tags: post.data.tags,
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
