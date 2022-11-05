import { OrbitControls, useTexture } from "@react-three/drei";
export default function Earth() {
    const [colorMap] = useTexture(['img/bhca3.png'])
  return (
    <>
      <mesh>
        <ambientLight intensity={1}/>
        <directionalLight position={[0,5,5]}/>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial color={0xffffae} map={colorMap}/>
      </mesh>
      <OrbitControls/>
    </>
  );
}
