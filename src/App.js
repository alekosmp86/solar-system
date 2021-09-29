import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Scene";
import Planet from "./components/Planet";
import Skybox from "./components/Skybox";

function App() {
  const planet = React.createRef(null);
  const [controlsTarget, setControlsTarget] = useState([0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setControlsTarget(planet.current.position);
    }, 500);
  }, [planet]);

  return (
    <div id="canvas-container" className="vh-100">
      <Suspense fallback={<span>loading...</span>}>
        <Canvas camera={{ position: [0, 5, 15], near: 0.1 }}>
          <Skybox />
          <Scene>
            <Planet
              ref={planet}
              position={[0, 0, 0]}
              textures={{
                map: "resources/textures/Earth/colorMap.jpg",
                normalMap: "resources/textures/Earth/normalMap.png",
              }}
            />
          </Scene>
          <OrbitControls target={controlsTarget} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
