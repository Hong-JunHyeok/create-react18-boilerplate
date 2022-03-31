import { Suspense } from "react";
import Fake from "../Fake";
import ErrorBoundary from "../ErrorBoundary";
import SectionSpinner from "../Loader/SectionSpinner";
import { useNavigate } from "react-router-dom";

const SuspenseContent = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="post_title">개선된 기능 : Suspense</h1>

      <h2 className="post_subtitle">
        데이터를 가져오기 위한 Suspense는 &lt;Suspense&gt;를 사용하여 선언적으로
        데이터를 비롯한 무엇이든 “기다릴” 수 있도록 해주는 새로운 기능입니다. 이
        기능은 이미지, 스크립트, 그 밖의 비동기 작업을 기다리는 데에도 사용될 수
        있습니다.
      </h2>

      <Suspense fallback={<SectionSpinner />}>
        <ErrorBoundary>
          <Fake />
        </ErrorBoundary>
        <button onClick={() => navigate(0)} className="btn">
          Reload
        </button>
      </Suspense>
    </>
  );
};

export default SuspenseContent;
