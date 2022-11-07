import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
export default function Earth() {
  // const [colorMap] = useTexture(["img/bhca3.png"]);
  const textureRef = useRef();
  const mapContainer = document.getElementById('map');
  const mapCanvas = useRef(mapContainer.getElementsByTagName('canvas')[0]);

  console.log(mapCanvas.current);
  if (textureRef.current) {
    textureRef.current.needsUpdate = true;
  }
  return (
    <>
      <mesh>
        <ambientLight intensity={10} />
        <directionalLight position={[0, 5, 5]} />
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial>
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
