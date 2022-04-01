import md from "../../../posts/renderingAPI.md";

const Transition = () => {
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

export default Transition;
