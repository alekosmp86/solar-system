const Scene = ({ children }) => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      {children}
    </>
  );
};

export default Scene;
