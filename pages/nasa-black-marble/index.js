import { Canvas } from "@react-three/fiber";
import Earth from "../../component/nasa-black-marble/earth";
import styles from "./styles/main.module.css";
import OpenLayers from "../../component/nasa-black-marble/openLayers";
export default function index() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas linear flat>
            <Earth />
          </Canvas>
        </div>
      </section>
      <OpenLayers />
    </>
  );
}
