import React from "react";
import { flushSync } from "react-dom";

const modes = { BATCH: "BATCH", FLUSH: "FLUSH" };
const Batch = () => {
  const [mode, setMode] = React.useState(modes.BATCH);
  const [number, setNumber] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  function handleChangeMode() {
    if (mode === modes.BATCH) {
      setMode(modes.FLUSH);
    } else {
      setMode(modes.BATCH);
    }
  }

  React.useEffect(() => {
    if (mode === "BATCH") {
      const timeoutId = setTimeout(() => {
        // NOTE
        // eact will only re-render once at the end
        setNumber((c) => c + 1);
        setFlag((f) => !f);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else if (mode === "FLUSH") {
      const timeoutId = setTimeout(() => {
        // NOTE
        // React will render twice, once for each state update
        flushSync(() => {
          setNumber((c) => c + 1);
          setFlag((f) => !f);
        });
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else {
      throw new Error(`Unhandled mode type (${mode})`);
    }
  });

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <td>Number</td>
            <td>Flag</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{number}</td>
            <td>{flag ? "true" : "false"}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleChangeMode}>
        Change Mode (Current Mode : {mode})
      </button>
    </>
  );
};

export default Batch;
