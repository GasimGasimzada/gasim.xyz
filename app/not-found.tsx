import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Gasim",
};

const NotFound = () => (
  <article className="text-center">
    <h1 className="text-2xl font-black">Page not found</h1>
    <p>
      Page you requested does not exist.{" "}
      <Link href="/" passHref className="underline hover:no-underline">
        Go to home
      </Link>
    </p>
  </article>
);

export default NotFound;
