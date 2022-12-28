import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import gsap from "gsap";
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
    window.addEventListener("scroll", () => {
      let scrollPosition = Math.floor(window.scrollY / window.innerHeight + 0.01);
      // console.log(scrollPosition)
      if (scrollPosition == 1 && scrollCount == 0) { // Afghanistan (default height for all is 100vh or 1 scrollposition)
        cameraTime(2, 2);
        scrollCount = 1;
      }
      if (scrollPosition == 2 && scrollCount == 1) { // Iceland
        cameraTime(3, 1);
        scrollCount = 2;
      }
      if (scrollPosition == 3 && scrollCount == 2) { // Argentina - 2 scrollPosition
        cameraTime(6, 3);
        scrollCount = 3;
      }
      if (scrollPosition == 5 && scrollCount == 3) { // Russia
        cameraTime(9, 3);
        scrollCount = 4;
      }
      if (scrollPosition == 6 && scrollCount == 4) { // Australia
        cameraTime(12, 3);
        scrollCount = 5;
      }
      if (scrollPosition == 7 && scrollCount == 5) { // USA
        cameraTime(14, 2);
        scrollCount = 6;
      }
      if (scrollPosition == 8 && scrollCount == 6) { // Egypt
        cameraTime(16, 2);
        scrollCount = 7;
      }
      if (scrollPosition == 9 && scrollCount == 7) { // Pakistan
        cameraTime(18, 2);
        scrollCount = 8;
      }
      if (scrollPosition == 10 && scrollCount == 8) { // India - 2 scrollPosition
        cameraTime(19, 1);
        scrollCount = 9;
      }
      if (scrollPosition == 12 && scrollCount == 9) { // China - 2 scrollPosition
        cameraTime(20, 1);
        scrollCount = 10;
      }
      if (scrollPosition == 14 && scrollCount == 10) { // Africa
        cameraTime(22, 2);
        scrollCount = 11;
      }
      if (scrollPosition == 15 && scrollCount == 11) { // Korea
        cameraTime(24, 2);
        scrollCount = 12;
      }
      if (scrollPosition == 16 && scrollCount == 12) { // Yemen - 2 scrollPosition
        cameraTime(26, 2);
        scrollCount = 13;
      }
      if (scrollPosition == 18 && scrollCount == 13) { // Syria - 2 scrollPosition
        cameraTime(27, 1);
        scrollCount = 14;
      }

      newValue = window.scrollY;
      if (oldValue < newValue) {
        scrollDirection = 'up'
      }
      else if (oldValue > newValue) {
        scrollDirection = 'down'
      }
      oldValue = newValue;
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
