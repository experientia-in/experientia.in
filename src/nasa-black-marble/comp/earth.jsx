import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function Earth(props) {
  const textureRef = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/model/black_marble_no_texture.glb"
  );
  const { actions } = useAnimations(animations, group);
  const mapContainer = document.getElementById("map");
  const mapCanvas = useRef(mapContainer.getElementsByTagName("canvas")[0]);
  if (textureRef.current) {
    textureRef.current.needsUpdate = true;
  }

  if (mapCanvas.current) {
    mapCanvas.current.needsUpdate = true;
  }
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
                image={mapCanvas.current}
                flipY={false}
                clone={true}
              />
            </meshStandardMaterial>
          </mesh>
        </group>
      </group>

      <OrbitControls />
    </>
  );
}
useGLTF.preload("/assets/model/black_marble_no_texture.glb");
