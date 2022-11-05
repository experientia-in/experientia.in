import { Canvas } from "@react-three/fiber";
// import Earth from "./component/earth";
import styles from "./styles/main.module.css";
import OpenLayers from "./component/openLayers";
import { OrbitControls, useTexture } from "@react-three/drei";
export default function index() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas>
            <Earth />
          </Canvas>
        </div>
      </section>
      <OpenLayers />
    </>
  );
}
export  function Earth() {
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