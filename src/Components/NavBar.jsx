import { Link } from "react-router-dom";
import ReactIcon from "../../assets/react-icon.svg";

const NavBar = () => {
  return (
    <header className="nav_bar">
      <span className="title">
        <ReactIcon />
        <h1>
          <Link to="">React 18 BoilerPlate</Link>
        </h1>
      </span>
    </header>
  );
};

export default NavBar;
