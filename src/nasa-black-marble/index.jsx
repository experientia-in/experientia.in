import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Earth from "./comp/earth";
import OpenLayers from "./comp/openLayers";
import styles from "./style/main.module.css";
import Overlay from "./comp/overlay";
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
      <Overlay/>
      <OpenLayers />
    </>
  );
}
