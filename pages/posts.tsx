import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { PostItem } from "../components/PostItem";
import { ContentPost, getAllPosts } from "../core/posts";

interface BlogProps {
  posts: ContentPost[];
}

const Home: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Engineering Adventures | Gasim</title>
      </Head>
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
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}

export default Home;
