import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

const SphericalSkyBox = ({ texturePath }) => {
  const textures = useTexture({ map: texturePath });
  return (
    <mesh>
      <sphereGeometry args={[100, 32, 32]} />
      <meshStandardMaterial {...textures} side={BackSide} />
    </mesh>
  );
};

export default SphericalSkyBox;
