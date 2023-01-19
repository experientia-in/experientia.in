import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useLayoutEffect, useEffect } from "react";
import Earth from "./comp/earth";
import OpenLayers from "./comp/openLayers";
import styles from "./style/main.module.css";
import Overlay from "./comp/overlay";
export default function BlackMarble() {
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [earthGlb, setEarthGlb] = useState(null);
  useLayoutEffect(()=>{
    sessionStorage.setItem('glbTime', 0);
    sessionStorage.setItem('feature', '');
    const isMobile = window.innerWidth < 501; 
    setEarthGlb(isMobile ? '/assets/model/nasaBlackMarble/black_marble_no_texture_m.glb' : '/assets/model/nasaBlackMarble/black_marble_no_texture.glb');
  },[])
 
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas flat>
            <Suspense fallback={null}>
              <Earth
                canvasStatus={(canvasLoaded) => {
                  setCanvasLoaded(canvasLoaded);
                }}
                earthGlb={earthGlb}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <Overlay/>
      {/* <OpenLayers /> */}
    </>
  );
}
