import md from "../../../posts/hooks.md";

const HooksContent = () => {
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

export default HooksContent;
