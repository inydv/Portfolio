import { Link } from "react-router-dom";
import { routes } from "../Core/Routes";
import { Children, useCallback, useEffect, useState } from "react";

const ROUTES = [
  { name: "Work", to: routes.Home },
  { name: "About", to: routes.About },
  { name: "Contact", to: routes.Contact },
];

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNavbar(false);
      } else {
        // if scroll up show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  return (
    <div
      className={`fixed z-50 left-0 w-full px-20 py-4 text-black flex justify-between gap-10 items-center backdrop-blur-sm ${
        showNavbar ? "top-0" : "-top-20"
      }`}
    >
      <div>
        <Link className="text-xl p-2 inline-block string_text" to={routes.Home}>
          © Code by Lokesh Yadav
        </Link>
      </div>
      <ul className="flex gap-12">
        {Children?.toArray(
          ROUTES?.map(({ name, to }) => (
            <li>
              <Link className="text-xl p-2 inline-block string_text" to={to}>
                {name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
