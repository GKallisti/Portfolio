import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
<mesh>
 <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[0, 0, 0]}
        angle={1}
        penumbra={0.5}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={7} />
    <primitive object={earth.scene} 
    scale={0.9} position-y={-1} rotation-y={0} />
    </mesh>
    )
}

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45,
      near:0.1, far:200, position: [-4, 3, 6] }}>
    
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} />
        <Earth />

      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;