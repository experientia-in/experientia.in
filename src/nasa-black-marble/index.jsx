import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState} from "react";
import Earth from "./comp/earth";
import OpenLayers from "./comp/openLayers";
import styles from "./style/main.module.css";
import Overlay from "./comp/overlay";
import Loader from "./comp/loader";
export default function BlackMarble() {
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  
  return (
    <>
    {!canvasLoaded && <Loader/>}
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas linear flat>
            <Suspense fallback={null}>
              <Earth canvasStatus={canvasLoaded => {setCanvasLoaded(canvasLoaded)}}/>
            </Suspense>
          </Canvas>
        </div>
      </section>
      { canvasLoaded && <Overlay />}
      <OpenLayers />
    </>
  );
}
