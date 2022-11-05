import { Canvas} from "@react-three/fiber";
import Earth from "./component/earth";
import styles from "./styles/main.module.css";
import dynamic from "next/dynamic";
export default function index() {

  const OpenLayers = dynamic(() => import("./component/openLayers"), {ssr: false})
  
  return (
    <>
      <section className={styles.container}>
        <div className={styles.canvas_area}>
          <Canvas camera={[35,0, 0]}>
            <Earth/>
          </Canvas>
        </div>
      </section>
      <OpenLayers/>
    </>
  );
}
