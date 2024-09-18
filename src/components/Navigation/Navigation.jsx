import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <header>
      <ul className={css.navLink}>
      <li  >
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={getNavLinkClass}>
          Movie
        </NavLink>
      </li>
    </ul>
    </header>
  );
}