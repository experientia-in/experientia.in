import { OrbitControls, useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
export default function Earth(props) {
  const textureRef = useRef();
  const animateRef = useRef(false)
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/model/Black _marble_final_v1.glb");
  const { actions } = useAnimations(animations, group);
  const mapContainer = document.getElementById("map");
  const mapCanvas = useRef(mapContainer.getElementsByTagName("canvas")[0]);
  if (textureRef.current) {
    textureRef.current.needsUpdate = true;
  }
  useEffect(() => void (actions["CameraAction.001"].play().paused = true), [])
  useFrame((state)=>{
    // actions['CameraAction.001'].time = state.clock.elapsedTime * 0.1
  // console.log(actions['CameraAction.001'].time)
  })
  
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
          fov={22.9}
          position={[0, 0, 6.11]}
          // aspect={window.innerWidth/window.innerHeight}
          rotation={[0.52, 0.49, -0.32]}
        />
        <ambientLight intensity={2}/>
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
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
      
      <OrbitControls />
    </>
  );
}
useGLTF.preload("/assets/model/Black _marble_final_v1.glb")