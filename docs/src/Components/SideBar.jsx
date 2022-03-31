import NavItem from "./NavItem";

const SideBar = () => {
  return (
    <section className="side_bar">
      <ul>
        <li>
          <NavItem to="">시작하기</NavItem>
        </li>
        <li>
          <NavItem to="batch">Batch</NavItem>
        </li>
        <li>
          <NavItem to="suspense">Suspense</NavItem>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
