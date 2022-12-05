import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useTexture,
} from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

export default function Earth(props) {
  const textureRef = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/model/black_marble_no_texture.glb"
  );
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
        props.canvasStatus(true)
        clearInterval(canvasIntervalCheck);
      }
    }, 10);
  }, []);
  useEffect(() => void (actions["CameraAction.001"].play().paused = true), []);

  useEffect(() => {
    actions["CameraAction.001"].time = 2;
  }, []);

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
