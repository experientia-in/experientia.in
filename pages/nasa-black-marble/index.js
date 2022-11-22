import { Canvas } from "@react-three/fiber";
import Earth from "../../component/nasa-black-marble/earth";
import styles from "./styles/main.module.css";
import OpenLayers from "../../component/nasa-black-marble/openLayers";
import { Suspense, useRef } from "react";
export default function index() {
  const animateRef = useRef(true)
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas>
          <Suspense fallback={null}>
            <Earth ref={animateRef} />
            </Suspense>
          </Canvas>
        </div>
        <button style={{position: 'absolute', top : '50%'}} onClick={() => {animateRef.current = !animateRef.current; console.log(animateRef.current)}}>Play pause</button>
      </section>
      <OpenLayers />
    </>
  );
}
