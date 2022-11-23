import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useTexture,
} from "@react-three/drei";
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
    mapCanvas.current.needsUpdate = true;
  }
  // useEffect(() => void (actions["CameraAction.001"].play().paused = true), [])
  let scrollCount = 0;
  
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
                image={mapCanvas.current} flipY={false}
              />
            </meshStandardMaterial> */}
          </mesh>
        </group>
      </group>

      <OrbitControls />
    </>
  );
}
useGLTF.preload("model/Black_marble_final_v1.glb");
export default forwardRef(Earth);
