import type { Metadata } from "next";
import { PostItem } from "../../components/PostItem";
import { getAllPosts } from "../../core/posts";

export const metadata: Metadata = {
  title: "Engineering Adventures | Gasim",
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <>
      <h1 className="text-3xl font-black mb-8">Engineering Adventures</h1>
      <div className="grid grid-flow-row grid-cols sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 my-2">
        {posts.map(({ meta }) => (
          <PostItem
            key={meta.slug}
            title={meta.title}
            cover={meta.cover}
            url={`/posts/${meta.slug}`}
            date={new Date(meta.date)}
          />
        ))}
      </div>
    </>
  );
}
