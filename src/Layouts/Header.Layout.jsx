import { Link } from "react-router-dom";
import { routes } from "../Core/Routes";
import { Children, useCallback, useEffect, useState } from "react";

const SCROLL_THRESHOLD = 50;
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
      const diff = window.scrollY - lastScrollY;
      if (diff > SCROLL_THRESHOLD) {
        setShowNavbar(false);
        setLastScrollY(window.scrollY);
      } else if (diff < -SCROLL_THRESHOLD) {
        setShowNavbar(true);
        setLastScrollY(window.scrollY);
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  return (
    <div
      className={`fixed z-10 left-0 w-full px-4 md:px-20 py-4 text-black flex justify-between gap-4 md:gap-10 items-center backdrop-blur-sm transition-all duration-300 ${
        showNavbar ? "top-0" : "-top-20"
      }`}
    >
      <div>
        <Link
          className="text-base md:text-xl px-0 py-1 md:p-2 whitespace-nowrap font-medium"
          to={routes.Home}
        >
          © Code by Lokesh
        </Link>
      </div>
      <ul className="flex gap-4 md:gap-12">
        {Children?.toArray(
          ROUTES?.map(({ name, to }) => (
            <li>
              <Link
                className="text-base md:text-xl px-0 py-1 md:p-2 font-medium"
                to={to}
              >
                {name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
