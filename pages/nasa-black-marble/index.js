import { Canvas } from "@react-three/fiber";
import Earth from "./component/earth";
import styles from "./styles/main.module.css";
import OpenLayers from "./component/openLayers";
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
