import md from "../../../posts/startTransition.md";

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
