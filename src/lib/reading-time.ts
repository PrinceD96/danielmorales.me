const WORDS_PER_MINUTE = 238;

/** Strip MDX/markdown syntax to get plain word count */
function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1") // links → text
    .replace(/#{1,6}\s/g, "") // headings
    .replace(/[*_~]+/g, "") // bold/italic/strike
    .replace(/>\s/g, "") // blockquotes
    .replace(/---/g, "") // horizontal rules
    .replace(/<[^>]*>/g, "") // html tags
    .replace(/import\s.*?from\s.*?;?\n/g, "") // esm imports
    .replace(/export\s.*?\n/g, ""); // esm exports
}

export function wordCount(content: string): number {
  return stripMarkdown(content).split(/\s+/).filter(Boolean).length;
}

export function readingTime(content: string): number {
  const words = wordCount(content);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function readingTimeText(content: string): string {
  const minutes = readingTime(content);
  return `${minutes} min read`;
}
