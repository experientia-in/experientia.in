import { Canvas } from "@react-three/fiber";
import Earth from "../../component/nasa-black-marble/earth";
import styles from "./styles/main.module.css";
import OpenLayers from "../../component/nasa-black-marble/openLayers";
import { Suspense } from "react";
export default function index() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas linear flat>
          <Suspense fallback={null}>
            <Earth />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <OpenLayers />
    </>
  );
}
