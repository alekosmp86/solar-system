import React from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Planet = React.forwardRef((props, ref) => {
  const textures = useTexture({
    ...props.textures,
  });

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (props.static) {
      return;
    }
    ref.current.rotation.y += 0.001;
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[props.radius, 64, 64]} />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
});

export default Planet;
