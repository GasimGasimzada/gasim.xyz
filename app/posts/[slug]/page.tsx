import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { CoverImage } from "../../../components/CoverImage";
import { HumanReadableDate } from "../../../components/HumanReadableDate";
import { getAllPosts, getPost } from "../../../core/posts";
import { notFound } from "next/navigation";

type SinglePostPageParams = {
  params: Promise<{ slug: string }>;
};

export default async function SinglePostPage({ params }: SinglePostPageParams) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const post = await getPost(slug);
  const date = new Date(post.meta.date);

  return (
    <div className="sm:w-4/5 md:w-2/3 lg:w-1/2 sm:mx-auto pb-1">
      <div className="mb-2 text-sm">
        <Link href="/posts" className="group inline-block">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="mr-2 transition-transform group-hover:-translate-x-1 text-base"
          />
          Back to all adventures
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
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.meta.slug,
  }));
}

export async function generateMetadata({ params }: SinglePostPageParams) {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: `${post.meta.title} | Gasim`,
  };
}
