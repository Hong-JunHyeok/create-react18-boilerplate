import { Link } from "react-router-dom";
import ReactIcon from "../../assets/react-logo.svg";

const NavBar = () => {
  return (
    <header className="nav_bar">
      <span className="title">
        <ReactIcon />
        <h1>
          <Link to="" className="link">
            React 18 BoilerPlate
          </Link>
        </h1>
      </span>
    </header>
  );
};

export default NavBar;
