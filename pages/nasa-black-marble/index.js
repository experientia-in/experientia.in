import { Canvas } from "@react-three/fiber";
// import Earth from "../../component/nasa-black-marble/earth";
import styles from "./styles/main.module.css";
// import OpenLayers from "../../component/nasa-black-marble/openLayers";
import { Suspense } from "react";
import dynamic from "next/dynamic";
export default function index() {
  const OpenLayers = dynamic(() => import('../../component/nasa-black-marble/openLayers'), {
    ssr: false,
  })
  const Earth = dynamic(() => import('../../component/nasa-black-marble/earth'), {
    ssr: false,
  })
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
