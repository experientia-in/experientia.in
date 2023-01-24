import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useLayoutEffect, useEffect } from "react";
import Earth from "./comp/earth";
import OpenLayers from "./comp/openLayers";
import styles from "./style/main.module.css";
import Overlay from "./comp/overlay";
import Preload from "./comp/preload";
export default function BlackMarble() {
  const [glbLoaded, setGlbLoaded] = useState(false);
  const [earthGlb, setEarthGlb] = useState(null);
  const [showOpenLayer, setShowOpenLayer] = useState(false)
  useLayoutEffect(() => {
    sessionStorage.setItem("glbTime", 0);
    sessionStorage.setItem("feature", "");
    const isMobile = window.innerWidth < 501;
    setEarthGlb(
      isMobile
        ? "/assets/model/nasaBlackMarble/black_marble_no_texture_m.glb"
        : "/assets/model/nasaBlackMarble/black_marble_no_texture.glb"
    );
  }, []);

  useEffect(() => {
    if(glbLoaded === true){
      setTimeout(() => {
        setShowOpenLayer(true);
      }, 4000);
    }
  },[glbLoaded])
  
  return (
    <>
    {!glbLoaded &&<Preload/>}
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas flat>
            <Suspense fallback={null}>
              <Earth
                glbStatus={(glbLoaded) => {
                  setGlbLoaded(glbLoaded);
                }}
                earthGlb={earthGlb}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      {glbLoaded && <Overlay />}
      {showOpenLayer && <OpenLayers />}
    </>
  );
}
