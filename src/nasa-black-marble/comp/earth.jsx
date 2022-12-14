import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import gsap from "gsap";
import { useRef, useEffect, useState} from "react";
export default function Earth(props) {
  
  let {earthGlb, scrollDirection} =  props
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
        props.canvasStatus(true);
        clearInterval(canvasIntervalCheck);
      }
    }, 10);
  }, []);

  useEffect(() => void (actions["CameraAction.001"].play().paused = true), []);
  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      let scrollPosition = Math.floor((window.scrollY / window.innerHeight) + 0.01) 
      console.log(window.scrollY / window.innerHeight, scrollPosition)
      // if (scrollPosition > 0.99 && scrollPosition < 2){
      //   cameraTime(2, 2)
      //   if(cameraTime(2,2)){
      //     console.log(cameraTime(2,2))
      //   }
      // }
      // if (scrollPosition > 1.99 && scrollPosition < 3){
      //   cameraTime(3, 1)
      // }
      // if (scrollPosition > 2.99 && scrollPosition < 4){
        
      //   cameraTime(6, 3)
      // }
      switch (scrollPosition) {
        case 1:
          cameraTime(2, 2)
          break;
        case 2:
          cameraTime(3,1)
          break;
          case 3:
            cameraTime(6,3)
            break;   
      
        default:
          break;
      }
    })
  }, []);
const cameraTime = (t, d) => {
  gsap.to(actions["CameraAction.001"], {
    time : t,
    duration: d
  })
}
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
