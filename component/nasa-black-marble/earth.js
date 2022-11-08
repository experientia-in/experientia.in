import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";
export default function Earth() {
  // const [colorMap] = useTexture(["img/bhca3.png"]);
  const textureRef = useRef();
  const mapContainer = document.getElementById('map');
  const mapCanvas = useRef(mapContainer.getElementsByTagName('canvas')[0]);
// try creating div and append element then passing it to useRef()
  if (textureRef.current) {
    textureRef.current.needsUpdate = true ;
  }
  return (
    <>
      <mesh>
        <ambientLight intensity={1} />
        {/* <directionalLight position={[0, 5, 5]} /> */}
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
