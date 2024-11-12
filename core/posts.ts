import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const markdownToHtml = async (content: string): Promise<string> => {
  const parser = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify);
  const result = await parser.process(content);
  return result.toString();
};

const POSTS_DIRECTORY = path.resolve(process.cwd(), "content/posts");

export interface ContentPost {
  meta: {
    title: string;

    date: string;

    slug: string;

    cover: string;
  };
  content: string;
}

export const getAllPostSlugs = (): string[] => {
  return fs.readdirSync(POSTS_DIRECTORY);
};

export async function getPost(slug: string): Promise<ContentPost> {
  const postPath = path.resolve(POSTS_DIRECTORY, slug, "post.md");
  const rawFile = fs.readFileSync(postPath, "utf-8");

  const gm = matter(rawFile);

  const meta: ContentPost["meta"] = {
    ...(gm.data as ContentPost["meta"]),
    slug,
  };

  const content = await markdownToHtml(gm.content);

  return { meta, content };
}

export async function getAllPosts(): Promise<ContentPost[]> {
  const slugs = await Promise.all(getAllPostSlugs().map(getPost));
  slugs.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  return slugs;
}
