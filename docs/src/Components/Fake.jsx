import { fetchData } from "../Utils/Api";

const resource = fetchData();

const Fake = () => {
  resource.fake.read();

  return (
    <>
      <h1>Success</h1>
    </>
  );
};

export default Fake;
