import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Scene";
import Planet from "./models/basic/Planet";

function App() {
  return (
    <div id="canvas-container" className="vh-100">
      <Canvas>
        <Suspense fallback={null}>
          <Scene>
            <Planet
              position={[0, 0, -10]}
              textures={{
                map: "resources/textures/Earth/colorMap.jpg",
                normalMap: "resources/textures/Earth/normalMap.png",
              }}
            />
          </Scene>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
