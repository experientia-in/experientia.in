import { Canvas } from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei'
import styles from "./styles/main.module.css";
export default function index() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas>
          <ambientLight scale={0.5} />
            <mesh>
              <sphereBufferGeometry />
              <meshStandardMaterial />
            </mesh>
              <OrbitControls />
          </Canvas>
        </div>
      </section>
    </>
  );
}
