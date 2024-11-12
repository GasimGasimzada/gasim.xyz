import Link from "next/link";
import { CoverImage } from "./CoverImage";
import { HumanReadableDate } from "./HumanReadableDate";

export interface PostItemProps {
  /**
   * Post title
   */
  title: string;

  /**
   * Post cover image
   */
  cover: string;

  /**
   * Post URL
   */
  url: string;

  /**
   * Post published date
   */
  date: Date;
}

export const PostItem = ({ title, cover, url, date }: PostItemProps) => {
  return (
    <article className="group">
      <Link href={url}>
        <CoverImage
          src={cover}
          alt={title}
          className="group-hover:scale-110 transition-transform"
        />
      </Link>
      <h2 className="text-xl font-bold my-1 group-hover:underline">
        <Link href={url}>{title}</Link>
      </h2>
      <HumanReadableDate date={date} />
    </article>
  );
};
