import React from "react";
import { flushSync } from "react-dom";
import md from "../../../posts/batch.md";

const modes = { BATCH: "BATCH", FLUSH: "FLUSH" };

const BatchContent = () => {
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
      <h1 className="post_title">자동 일괄처리</h1>
      <h2 className="post_subtitle">
        이벤트 핸들러 내에서만 일괄처리(Batch)되던 setState가 이제는 모든
        코드에서 적용됩니다.
      </h2>
      <div className="box-container">
        <div className="head">
          <div className="name">Number</div>
          <div className="name">Flag</div>
        </div>
        <div className="body">
          <div className="value">{number}</div>
          <div className="value">{flag ? "True" : "False"}</div>
        </div>
      </div>
      <button onClick={handleChangeMode} className="btn change">
        모드 변경 (현재 모드 : {mode})
      </button>
      <p>
        <b>위 예제의 코드는 </b>
        <a
          href="https://gist.github.com/4468f16d1b59971890b54409fac1cd58.git"
          target="_blank"
        >
          여기
        </a>
        <b>를 참고해주세요.</b>
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: md,
        }}
      ></div>
    </>
  );
};

export default BatchContent;
