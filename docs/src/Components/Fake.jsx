import { fetchData } from "../Utils/Api";
import { useState } from "react";

const resource = fetchData();
const Fake = () => {
  resource.fake.read();

  return (
    <>
      <h3 className="suspense_block success">
        Component was successfully loaded
      </h3>
    </>
  );
};

export default Fake;
