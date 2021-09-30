const Scene = ({ children }) => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 150, 0]} />
      <pointLight position={[0, -150, 0]} />
      {children}
    </>
  );
};

export default Scene;
