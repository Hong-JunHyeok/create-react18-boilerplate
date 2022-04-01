import md from "../../../posts/strictMode.md";

const StrictModeContent = () => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: md,
        }}
      />
    </>
  );
};

export default StrictModeContent;
