import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";

const NotFound = () => (
  <Layout>
    <Head>
      <title>404 | Gasim</title>
    </Head>
    <article className="text-center">
      <h1 className="text-2xl font-black">Page not found</h1>
      <p>
        Page you requested does not exist.{" "}
        <Link href="/" passHref className="underline hover:no-underline">
          Go to home
        </Link>
      </p>
    </article>
  </Layout>
);

export default NotFound;
