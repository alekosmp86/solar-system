import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Scene";
import { getPlanetData } from "./scripts/PlanetData";
import AstroBody from "./components/AstroBody";

function App() {
  const [spaceBodies, setSpaceBodies] = useState([]);
  const [controlsTarget, setControlsTarget] = useState([0, 0, 0]);

  useEffect(() => {
    const data = getPlanetData();
    const dataRef = data.map((elem) => {
      return { ...elem, ref: React.createRef(null) };
    });
    setSpaceBodies(dataRef);

    setTimeout(() => {
      setControlsTarget(dataRef[0].ref.current.position);
    }, 1000);
  }, []);

  return (
    <div id="canvas-container" className="vh-100">
      <Suspense fallback={<span>loading...</span>}>
        <Canvas camera={{ position: [0, 5, 75], near: 0.1, far: 10000 }}>
          <color attach="background" args={["#000"]} />
          <Scene>
            {spaceBodies.map((body) => {
              return (
                <AstroBody
                  key={body.id}
                  ref={body.ref}
                  params={body}
                  position={[0, 0, 0]}
                />
              );
            })}
          </Scene>
          <OrbitControls target={controlsTarget} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
