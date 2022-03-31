import NavItem from "./NavItem";

const SideBar = () => {
  return (
    <section className="side_bar">
      <ul>
        <li>
          <NavItem to="">시작하기</NavItem>
        </li>
        <li>
          <NavItem to="batch">Automatic Batch</NavItem>
        </li>
        <li>
          <NavItem to="suspense">Suspense</NavItem>
        </li>
        <li>
          <NavItem to="transition">Transition</NavItem>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
