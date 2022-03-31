import { fetchData } from "../Utils/Api";

const resource = fetchData();
const Fake = () => {
  resource.fake.read();

  return (
    <>
      <h3 className="suspense_block success">
        컴포넌트가 성공적으로 렌더링 되었습니다.
      </h3>
    </>
  );
};

export default Fake;
