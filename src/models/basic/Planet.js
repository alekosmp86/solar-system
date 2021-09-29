import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Planet = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const textures = useTexture({
    ...props.textures,
    /*map: `${textureUrl}/${props.textures.colorMap}`,
    displacementMap: `${textureUrl}/${props.textures.displacementMap}` ?? "",
    normalMap: `${textureUrl}/${props.textures.normalMap}`,
    roughnessMap: "PavingStones092_1K_Roughness.jpg",
    aoMap: "PavingStones092_1K_AmbientOcclusion.jpg",*/
  });

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += 0.001));

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
};

export default Planet;
