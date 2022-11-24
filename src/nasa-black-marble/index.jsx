import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Earth from "./comp/earth";
import OpenLayers from "./comp/openLayers";
import styles from "./style/main.module.css";
export default function BlackMarble() {
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
