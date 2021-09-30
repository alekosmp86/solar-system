import React from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

const AstroBody = React.forwardRef((props, ref) => {
  const {
    distanceFromSun,
    diameter,
    selfRotation,
    orbitAround,
    orbitSpeed,
    textures,
    hasRing,
  } = props.params;
  const rotationAccel = 10;
  const reducedDiameter = diameter / 10 ** 4;
  const distanceDeduction = 10 ** 6.2;
  let time = 0;
  const images = useTexture({
    ...textures,
  });

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (selfRotation) {
      ref.current.rotation.y -= 0.005;
    }
    if (orbitAround) {
      ref.current.position.x =
        (distanceFromSun.km / distanceDeduction) * Math.cos(time);
      ref.current.position.z =
        (distanceFromSun.km / distanceDeduction) * Math.sin(time);
      time = time > 360 ? 0 : time + delta * orbitSpeed * rotationAccel;
    }
  });

  return (
    <>
      <mesh {...props} ref={ref} onPointerEnter={(e) => console.log("enter")}>
        <sphereGeometry args={[reducedDiameter / 2, 64, 64]} />
        <meshStandardMaterial {...images} />
        {hasRing && (
          <mesh rotation={[45, 0, 0]}>
            <ringGeometry
              args={[reducedDiameter / 1.5, reducedDiameter + 2, 32]}
            ></ringGeometry>
            <meshStandardMaterial map={images.ringMap} side={DoubleSide} />
          </mesh>
        )}
      </mesh>
    </>
  );
});

export default AstroBody;
