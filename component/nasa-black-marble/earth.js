import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, forwardRef } from "react";
import gsap from "gsap";
function Earth(props, animateRef) {
  const textureRef = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/model/Black_marble_final_v1.glb"
  );
  const { actions } = useAnimations(animations, group);
  const mapContainer = document.getElementById("map");
  const mapCanvas = useRef(mapContainer.getElementsByTagName("canvas")[0]);
  if (textureRef.current) {
    textureRef.current.needsUpdate = true;
  }
  // useEffect(() => void (actions["CameraAction.001"].play().paused = true), [])
  let scrollCount = 0;
  // useFrame(({ clock }) => {
  //   // console.log(animateRef.current, actions["CameraAction.001"].getClip().duration );
  //   const time = Math.floor(clock.elapsedTime);
  //   if (time > 0) {
  //     actions["CameraAction.001"].play();
  //     // actions["CameraAction.001"].time = 3
  //   }
  //   if (time > 6) {
  //     actions["CameraAction.001"].time = 6;
  //     // actions["CameraAction.001"].stop()
  //     actions["CameraAction.001"].play().paused = true;
  //     // console.log(time)
  //   }
  // });
  useEffect(()=>{
    actions["CameraAction.001"].play()
    window.addEventListener('mouseup', ()=>{
      actions["CameraAction.001"].play().paused = true
      console.log('mouse down')
    })
  }, [])

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
            // aspect={window.innerWidth/window.innerHeight}
            // rotation={[0.52, 0.49, -0.32]}
          />
          <ambientLight intensity={2} />
          <mesh
            name="Sphere"
            // castShadow
            // receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials["Material.001"]}
          >
            {/* <meshStandardMaterial>
          <canvasTexture
          ref={textureRef}
          attach="map"
          image={mapCanvas.current}
          />
        </meshStandardMaterial> */}
          </mesh>
        </group>
      </group>

      {/* <OrbitControls /> */}
    </>
  );
}
useGLTF.preload("model/Black_marble_final_v1.glb");
export default forwardRef(Earth);
