import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `nav_link activated link` : `nav_link link`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
