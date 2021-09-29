import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Scene";
import SphericalSkyBox from "./components/SphericalSkyBox";
import { getPlanetData } from "./scripts/PlanetData";
import AstroBody from "./components/AstroBody";

function App() {
  const data = getPlanetData();
  const sun = React.createRef(null);
  const earth = React.createRef(null);
  const [controlsTarget, setControlsTarget] = useState([0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setControlsTarget(sun.current.position);
    }, 500);
  }, [sun]);

  return (
    <div id="canvas-container" className="vh-100">
      <Suspense fallback={<span>loading...</span>}>
        <Canvas camera={{ position: [0, 5, 50], near: 0.1 }}>
          <SphericalSkyBox texturePath={"resources/textures/background.png"} />
          <Scene>
            <AstroBody
              ref={sun}
              static={true}
              radius={data.Sun.diameter / 10 ** 5}
              position={[0, 0, 0]}
              textures={{
                map: "resources/textures/Sun/sun.png",
              }}
            />
            <AstroBody
              ref={earth}
              static={false}
              radius={data.Earth.diameter / 10 ** 4}
              position={[data.Earth.distanceFromSun.km / 10 ** 7 + 30, 0, 0]}
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
