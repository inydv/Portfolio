import { Link } from "react-router-dom";
import { routes } from "../Core/Routes";

export default function Header() {
  // HTML
  return (
    <div className="h-24 bg-customBlack">
      <div className="flex justify-between items-center h-full px-16">
        <div>
          <Link className="text-xl text-white p-2" to={routes.Home}>
            © Code by Lokesh Yadav
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link className="text-xl text-white p-2" to={routes.Work}>
              Work
            </Link>
          </li>
          <li>
            <Link className="text-xl text-white p-2" to={routes.About}>
              About
            </Link>
          </li>
          <li>
            <Link className="text-xl text-white p-2" to={routes.Contact}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
