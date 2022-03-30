import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="side_bar">
      <ul>
        <li>
          <Link to="batch">Batch</Link>
        </li>
        <li>
          <Link to="suspense">Suspense</Link>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
