import { Link } from "react-router-dom";
import { routes } from "../Core/Routes";

export default function Header() {
  return (
    <div className="h-28 bg-banner">
      <div className="flex justify-between items-center h-full px-20">
        <div>
          <Link className="text-xl" to={routes.Home}>
            © Code by Lokesh Yadav
          </Link>
        </div>
        <ul className="flex gap-12">
          <li className="text-xl">
            <Link to={routes.Work}>Work</Link>
          </li>
          <li className="text-xl">
            <Link to={routes.About}>About</Link>
          </li>
          <li className="text-xl">
            <Link to={routes.Contact}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
