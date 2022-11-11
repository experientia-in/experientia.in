import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
export default function Earth() {
  const colorMap = useTexture("img/BlackMarble_2016.jpg");
  const textureRef = useRef();
  const mapContainer = document.getElementById("map");
  const mapCanvas = useRef(mapContainer.getElementsByTagName("canvas")[0]);
  if (textureRef.current) {
    textureRef.current.needsUpdate = true;
  }
  return (
    <>
      <mesh>
        <ambientLight intensity={1} />
        {/* <directionalLight position={[0, 5, 5]} intensity={0.1}/> */}
        <sphereGeometry args={[2, 64, 64]} />
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
