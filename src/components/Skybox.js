import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

const Skybox = () => {
  const { scene } = useThree();

  scene.background = new CubeTextureLoader()
    .setPath("resources/skybox/")
    .load([
      "sky_left.jpg",
      "sky_right.jpg",
      "sky_up.jpg",
      "sky_down.jpg",
      "sky_front.jpg",
      "sky_back.jpg",
    ]);
  return null;
};

export default Skybox;
