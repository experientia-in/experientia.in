import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import gsap from "gsap";
import Scroll from "./scrollStatus";
import { useRef, useEffect, useState } from "react";
export default function Earth(props) {
  let { earthGlb, canvasStatus } = props;
  const textureRef = useRef();
  const group = useRef();

  const { nodes, materials, animations } = useGLTF(earthGlb);
  const { actions } = useAnimations(animations, group);
  if (textureRef.current) {
    textureRef.current.needsUpdate = true;
  }
  const [canvasTexture, setCanvasTexture] = useState(null);
  useEffect(() => {
    const canvasIntervalCheck = setInterval(() => {
      const mapContainer = document.getElementById("map");
      const mapCanvas = mapContainer.getElementsByTagName("canvas")[0];
      if (mapCanvas) {
        setCanvasTexture(mapCanvas);
        canvasStatus(true);
        clearInterval(canvasIntervalCheck);
      }
    }, 1000);
  }, []);

  useEffect(() => void (actions["CameraAction.001"].play().paused = true), []);
  let scrollCount = 0;
  let oldValue = 0;
  let newValue = 0;
  let scrollDirection
  useEffect(() => {
    let scroll = new Scroll(50)
    window.addEventListener('scroll', () => {
      newValue = window.scrollY;
      if (oldValue < newValue) {
        scrollDirection = 'up'
      }
      else if (oldValue > newValue) {
        scrollDirection = 'down'
      }
      oldValue = newValue;
    })

    let afghanistan = true;
    let iceland = true;
    let argentina = true;
    let russia = true;
    let australia = true;
    let usa = true;
    let egypt = true;
    let pakistan = true;
    let india = true;
    let china = true;
    let africa = true;
    let korea = true;
    let yemen = true;
    let syria = true;

    scroll.addEventListener("end", () => {
      let scrollPosition = window.scrollY / window.innerHeight * 100;
      console.log(Math.round(scrollPosition), scrollDirection, `Afghanistan: ${afghanistan}, Iceland: ${iceland}`)

      if(scrollDirection === 'up'){

        if (scrollPosition > 75 && scrollPosition < 175 && afghanistan) { // Afghanistan (default height for all is 100vh or 1 scrollposition)
          cameraTime(2, 2);
          afghanistan = false
        }
        if (scrollPosition > 175 && scrollPosition < 275 && iceland) { // Iceland
          cameraTime(3, 1);
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 275 && scrollPosition < 375 && argentina) { // Argentina - 2 scrollPosition
          cameraTime(6, 3);
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 475 && scrollPosition < 575 && russia) { // Russia
          cameraTime(9, 3);
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 575 && scrollPosition < 675 && australia) { // Australia
          cameraTime(12, 3);
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 675 && scrollPosition < 775 && usa) { // USA
          cameraTime(14, 2);
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 775 && scrollPosition < 875 && egypt) { // Egypt
          cameraTime(16, 2);
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 875 && scrollPosition < 975 && pakistan) { // Pakistan
          cameraTime(18, 2);
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 975 && scrollPosition < 1175 && india) { // India - 2 scrollPosition
          cameraTime(19, 1);
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 1175 && scrollPosition < 1375 && china) { // China - 2 scrollPosition
          cameraTime(20, 1);
          china = false;
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 1375 && scrollPosition < 1475 && africa) { // Africa
          cameraTime(22, 2);
          africa = false;
          china = false;
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 1475 && scrollPosition < 1575 && korea) { // Korea
          cameraTime(24, 2);
          korea = false;
          africa = false;
          china = false;
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 1575 && scrollPosition < 1775 && yemen) { // Yemen - 2 scrollPosition
          cameraTime(26, 2);
          yemen = false;
          korea = false;
          africa = false;
          china = false;
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if (scrollPosition > 1775 && scrollPosition < 2000 && syria) { // Syria - 2 scrollPosition
          cameraTime(27, 1);
          syria = false;
          yemen = false;
          korea = false;
          africa = false;
          china = false;
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
 
        }
      }
      

      if(scrollDirection === 'down'){
        // console.log(`Russia: ${russia}, Argentina : ${argentina}`)
        if (scrollPosition > 1599 && scrollPosition < 1799 && !yemen) { // Yemen - 2 scrollPosition
          cameraTime(26, 1);
          syria = true
        }
        if (scrollPosition > 1499 && scrollPosition < 1599 && !korea) { // Korea
          cameraTime(24, 2);
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 1399 && scrollPosition < 1499 && !africa) { // Africa
          cameraTime(22, 2);
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 1199 && scrollPosition < 1399 && !china) { // China - 2 scrollPosition
          cameraTime(20, 2);
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 999 && scrollPosition < 1199 && !india) { // India - 2 scrollPosition
          cameraTime(19, 1);
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 899 && scrollPosition < 999 && !pakistan) { // Pakistan
          cameraTime(18, 1);
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 799 && scrollPosition < 899 && !egypt) { // Egypt
          cameraTime(16, 2);
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 699 && scrollPosition < 799 && !usa) { // USA
          cameraTime(14, 2);
          egypt = true;
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 599 && scrollPosition < 699 && !australia) { // Australia
          cameraTime(12, 2);
          usa = true;
          egypt = true;
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 499 && scrollPosition < 599 && !russia) { // Russia
          cameraTime(8, 4);
          australia = true;
          usa = true;
          egypt = true;
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 299 && scrollPosition < 499 && !argentina) { // Argentina - 2 scrollPosition
          cameraTime(6, 2);
          russia = true;
          australia = true;
          usa = true;
          egypt = true;
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 199 && scrollPosition < 299 && !iceland) { // Iceland
          cameraTime(3, 3);
          argentina = true;
          russia = true;
          australia = true;
          usa = true;
          egypt = true;
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition > 99 && scrollPosition < 199 && !afghanistan) { // Afghanistan
          cameraTime(2, 1);
          iceland = true;
          argentina = true;
          russia = true;
          australia = true;
          usa = true;
          egypt = true;
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;
        }
        if (scrollPosition < 25) { // Start
          // cameraTime(0, 2);
          afghanistan = true;
          iceland = true;
          argentina = true;
          russia = true;
          australia = true;
          usa = true;
          egypt = true;
          pakistan = true;
          india = true;
          china = true;
          africa = true;
          korea = true;
          yemen = true;
          syria = true;

        }

      }
      
    });
  }, []);
  const cameraTime = (t, d) => {
    gsap.to(actions["CameraAction.001"], {
      time: t,
      duration: d,
    }); 
  };
  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Orbit" />
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={40}
            position={[0, 0, 6.11]}
            rotation={[0.52, 0.49, -0.32]}
          />
          <ambientLight intensity={1.5} />
          <mesh
            name="Sphere"
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            // material={materials["Material.001"]}
          >
            <meshStandardMaterial>
              <canvasTexture
                ref={textureRef}
                attach="map"
                image={canvasTexture}
                flipY={false}
              />
            </meshStandardMaterial>
          </mesh>
        </group>
      </group>

      {/* <OrbitControls /> */}
    </>
  );
}
useGLTF.preload("/assets/model/black_marble_no_texture.glb");
