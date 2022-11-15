import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Earth() {
  const textureRef = useRef();
  const mapContainer = document.getElementById("map");
  const mapCanvas = useRef(mapContainer.getElementsByTagName("canvas")[0]);
  if (textureRef.current) {
    textureRef.current.needsUpdate = true;
  }
useFrame(state => {
  // console.log(state.camera.zoom)
})
  return (
    <>
      <mesh>
        <ambientLight intensity={2} />
        <directionalLight position={[0, 5, 5]} intensity={0.1}/>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color='white'>
          <canvasTexture
          ref={textureRef}
          attach="map"
          image={mapCanvas.current}
          />
        </meshStandardMaterial>
      </mesh>
      <OrbitControls />
    </>
  );
}
