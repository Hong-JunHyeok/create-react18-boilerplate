import md from "../../../posts/installation.md";

const InstallationContent = () => {
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

export default InstallationContent;
