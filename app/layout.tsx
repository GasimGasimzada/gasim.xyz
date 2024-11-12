import { Layout } from "../components/Layout";
import "../styles/globals.css";
import "../styles/prism.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
