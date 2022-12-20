import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useLayoutEffect, useEffect } from "react";
import Earth from "./comp/earth";
import OpenLayers from "./comp/openLayers";
import styles from "./style/main.module.css";
import Overlay from "./comp/overlay";
export default function BlackMarble() {
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [earthGlb, setEarthGlb] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('')
  useLayoutEffect(()=>{
    const isMobile = window.innerWidth < 501; 
    setEarthGlb(isMobile ? '/assets/model/black_marble_no_texture_m.glb' : '/assets/model/black_marble_no_texture.glb');
  },[])
  let oldValue = 0;
  let newValue = 0;
  // let scrollDirection = 'up'
  useEffect(() => {
    window.addEventListener("scroll", () => {
      newValue = window.pageYOffset;
      if (oldValue < newValue) {
        setScrollDirection('up')
      }
      else if (oldValue > newValue) {
        setScrollDirection('down')
      }
      oldValue = newValue;
    });
  }, [scrollDirection]);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas linear flat>
            <Suspense fallback={null}>
              <Earth
                canvasStatus={(canvasLoaded) => {
                  setCanvasLoaded(canvasLoaded);
                }}
                earthGlb={earthGlb}
                scrollDirection={scrollDirection}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      {canvasLoaded && <Overlay />}
      <OpenLayers />
    </>
  );
}
