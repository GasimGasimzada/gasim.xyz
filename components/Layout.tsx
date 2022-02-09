import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import links from "../content/links.yml";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="border border-indigo-601 h-12 flex flex-col justify-center">
        <div className="container px-5 mx-auto flex flex-row text-lg">
          <div>
            <h1 className="font-bold">Gasim</h1>
          </div>
          <nav className="grow text-right">
            <ul>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="external nofollow noreferrer"
                  className="inline-block transition-transform hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ fontSize: "1em" }}
                  />
                  <span className="sr-only">Github</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="grow">
        <div className="container px-5 mx-auto my-4">{children}</div>
      </main>
      <footer className="h-8 text-center">
        <small className="text-xs font-semibold">
          &copy; {new Date().getFullYear()} Gasim
        </small>
      </footer>
    </>
  );
};
