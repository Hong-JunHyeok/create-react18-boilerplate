import { fetchData } from "../Utils/Api";
import { useState } from "react";

const resource = fetchData();
const Fake = () => {
  resource.fake.read();

  return (
    <>
      <h1>Component was successfully loaded</h1>
    </>
  );
};

export default Fake;
