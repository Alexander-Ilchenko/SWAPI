import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/heroes">Heroes</Link>
        </li>

        <li>
          <Link to="/planets">Planets</Link>
        </li>

        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
};
