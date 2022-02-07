import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkPrism from "remark-prism";

export const markdownToHtml = async (content: string): Promise<string> => {
  const parser = remark()
    .use(remarkHtml, { sanitize: false })
    .use(remarkPrism as any);
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

export const getPost = (slug: string): ContentPost => {
  const postPath = path.resolve(POSTS_DIRECTORY, slug, "post.md");
  const rawFile = fs.readFileSync(postPath, "utf-8");

  const gm = matter(rawFile);

  const meta: ContentPost["meta"] = {
    ...(gm.data as ContentPost["meta"]),
    slug,
  };

  return { meta, content: gm.content };
};

export const getAllPosts = (): ContentPost[] => {
  const slugs = getAllPostSlugs().map(getPost);

  return slugs;
};
