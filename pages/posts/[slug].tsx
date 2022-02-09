import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CoverImage } from "../../components/CoverImage";
import { HumanReadableDate } from "../../components/HumanReadableDate";
import { Layout } from "../../components/Layout";
import {
  ContentPost,
  getAllPosts,
  getPost,
  markdownToHtml,
} from "../../core/posts";

interface PostPageProps {
  post: ContentPost;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const date = new Date(post.meta.date);
  return (
    <Layout>
      <Head>
        <title>{post.meta.title} | Gasim</title>
      </Head>
      <div className="sm:w-4/5 md:w-2/3 lg:w-1/2 sm:mx-auto pb-1">
        <div className="mb-2 text-sm">
          <Link href="/posts" passHref>
            <a className="group inline-block">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="mr-2 transition-transform group-hover:-translate-x-1"
                style={{ fontSize: "1em" }}
              />
              Back to all adventures
            </a>
          </Link>
        </div>
        <article>
          <div>
            <CoverImage src={post.meta.cover} alt={post.meta.title} />
            <h1 className="text-3xl font-black my-2">{post.meta.title}</h1>
            <HumanReadableDate date={date} />
          </div>
          <div
            className="prose max-w-none my-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.meta.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: Required<GetStaticPropsContext<{ slug: string }>>) {
  const { meta, content } = getPost(params.slug);

  const post = { meta, content: await markdownToHtml(content) };

  return { props: { post } };
}

export default PostPage;
