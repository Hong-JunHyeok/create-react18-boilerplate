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
        <li>
          <NavItem to="rendering">새로운 클라이언트 및 서버 렌더링 API</NavItem>
        </li>
        <li>
          <NavItem to="strictmode">새로운 Strict Mode동작</NavItem>
        </li>
        <li>
          <NavItem to="newhooks">새로운 Hooks</NavItem>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
