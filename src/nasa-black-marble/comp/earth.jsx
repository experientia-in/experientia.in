import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useKTX2,
} from "@react-three/drei";
import gsap from "gsap";
import { Lethargy } from "lethargy";
import { useRef, useEffect, useState } from "react";
export default function Earth(props) {
  let { earthGlb, glbStatus } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(earthGlb);
  const { actions } = useAnimations(animations, group);

  const china2012 = "assets/img/nasaBlackMarble/2012_china.ktx2";
  const egypt2012 = "assets/img/nasaBlackMarble/2012_egyptMiddleEast.ktx2";
  const india2012 = "assets/img/nasaBlackMarble/2012_india.ktx2";
  const nasaBlackMarble2016 =
    "assets/img/nasaBlackMarble/2016_nasaBlackMarble_16K_bin.ktx2";
  const nasaBlackMarble2012 =
    "assets/img/nasaBlackMarble/2012_nasaBlackMarble_16K_bin.ktx2";
  const afg_hlg = "assets/img/nasaBlackMarble/afghanistan_hlg.ktx2";
  const arg_hlg = "assets/img/nasaBlackMarble/argentina_hlg.ktx2";
  const argRailway_hlg = "assets/img/nasaBlackMarble/argentinaRailway_hlg.ktx2";
  const pak_hlg = "assets/img/nasaBlackMarble/pakistan_hlg.ktx2";
  const rus_hlg = "assets/img/nasaBlackMarble/russia_hlg.ktx2";
  const syr_hlg = "assets/img/nasaBlackMarble/syria_hlg.ktx2";
  const yem_hlg = "assets/img/nasaBlackMarble/yemen_hlg.ktx2";

  const [
    nasa2016,
    afgTexture,
    argTexture,
    argRailwayTexture,
    rusTexture,
    pakTexture,
    syrTexture,
    yemTexture,
    china2012Texture,
    india2012Texture,
    egypt2012Texture,
    nasa2012,
  ] = useKTX2([
    nasaBlackMarble2016,
    afg_hlg,
    arg_hlg,
    argRailway_hlg,
    rus_hlg,
    pak_hlg,
    syr_hlg,
    yem_hlg,
    china2012,
    india2012,
    egypt2012,
    nasaBlackMarble2012,
  ]);
  const [baseLayer, setBaseLayer] = useState(nasa2016);
  const [topLayer, setTopLayer] = useState(afgTexture);
  const [topLayerOpacity, setTopLayerOpacity] = useState(0);

  useEffect(() => void (actions["CameraAction.001"].play().paused = true), []);

  useEffect(() => {
    glbStatus(true)
    sessionStorage.setItem("isGlbReady", true);
    const cameraTime = (t, d) => {
      gsap.to(actions["CameraAction.001"], {
        time: t,
        duration: d,
        snap: 0.01,
        onStart: () => {
          sessionStorage.setItem("isGlbReady", false);
        },
        onComplete: () => {
          sessionStorage.setItem("glbTime", actions["CameraAction.001"].time);
          sessionStorage.setItem("isGlbReady", true);
        },
      });
    };
    const topLayerOpacityController = (opacity, time, delay) => {
      setTimeout(() => {
        let sample = { value: 0 };
        gsap.to(sample, {
          value: opacity,
          snap: 0.1,
          duration: time,
          ease: "power4.out",
          onUpdate: () => {
            setTopLayerOpacity(sample.value);
          },
        });
      }, delay * 1000);
    };

    const scrollUpLogic = (scrollPosition, glbTime, feature) => {
      if (scrollPosition === 0 && glbTime === 0) {
        // windowScrollTo(1)
        cameraTime(2, 2);
        topLayerOpacityController(1, 0.5, 2);
      }
      if (scrollPosition === 99 && glbTime === 2) {
        cameraTime(3, 1);
        topLayerOpacityController(0, 0.25, 0);
      }
      if (scrollPosition === 199 && glbTime === 3) {
        cameraTime(6, 3);
        setTopLayer(argTexture);
        topLayerOpacityController(1, 0.5, 3);
      }
      if (scrollPosition === 299 && glbTime === 6) {
        setTopLayer(argRailwayTexture);
        topLayerOpacityController(0, 0.25, 0);
        topLayerOpacityController(1, 0.25, 0);
      }
      if (scrollPosition === 299 && feature === "railway" && glbTime === 6) {
        cameraTime(9, 3);
        setTopLayer(rusTexture);
      }
      if (scrollPosition === 399 && (glbTime === 8 || glbTime === 9)) {
        cameraTime(12, 3);
        topLayerOpacityController(0, 0.5, 0);
      }
      if (scrollPosition === 499 && glbTime === 12) {
        cameraTime(14, 2);
      }
      if (scrollPosition === 599 && glbTime === 14) {
        cameraTime(16, 2);
      }
      if (scrollPosition === 699 && glbTime === 16) {
        cameraTime(18, 2);
        setTopLayer(pakTexture);
        topLayerOpacityController(1, 0.5, 2);
      }
      if (scrollPosition === 799 && glbTime === 18) {
        cameraTime(19, 1);
        topLayerOpacityController(0, 0.5, 0);
      }
      if (scrollPosition === 899 && feature === "india2012" && glbTime === 19) {
        setTopLayer(india2012Texture);
        topLayerOpacityController(1, 0.5, 0);
      }
      if (scrollPosition === 899 && feature === "china2016" && glbTime === 19) {
        cameraTime(20, 1);
        // console.log("india 2012");
        // setTopLayer(india2012Texture);
      }
      if (scrollPosition === 999 && glbTime === 20) {
        setBaseLayer(nasa2012);
        setTopLayer(china2012Texture);
        topLayerOpacityController(0, 0, 0);
        topLayerOpacityController(1, 0.5, 0);
      }
      if (scrollPosition === 999 && feature === "china2012" && glbTime === 20) {
        cameraTime(22, 2);
        setBaseLayer(nasa2016);
        topLayerOpacityController(0, 0.5, 2);
      }
      if (scrollPosition === 1099 && glbTime === 22) {
        cameraTime(24, 2);
      }
      if (
        (scrollPosition === 1199 && glbTime === 24) ||
        feature === "yemen2016"
      ) {
        cameraTime(26, 2);
        setTopLayer(yemTexture);
        topLayerOpacityController(1, 0.5, 2);
      }
      if (scrollPosition === 1299 && glbTime === 26) {
        setBaseLayer(nasa2012);
      }
      if (
        scrollPosition === 1299 &&
        feature === "yemen2012" &&
        glbTime === 26
      ) {
        cameraTime(27, 1);
        setTopLayer(syrTexture);
        setBaseLayer(nasa2016);
        topLayerOpacityController(0, 0, 0);
        topLayerOpacityController(1, 0.5, 1);
      }
      if (scrollPosition === 1399 && glbTime === 27) {
        setBaseLayer(nasa2012);
      }
      if (
        scrollPosition === 1299 &&
        feature === "syria2012" &&
        glbTime === 26
      ) {
        // setBaseLayer(nasa2016);
        setBaseLayer(nasa2012);
      }
    };

    const scrollDownLogic = (scrollPosition, glbTime, feature) => {
      if (
        scrollPosition === 1399 &&
        feature === "syria2012" &&
        glbTime === 27
      ) {
        setBaseLayer(nasa2016);
      }
      if (
        scrollPosition === 1399 &&
        feature === "yemen2012" &&
        glbTime === 27
      ) {
        cameraTime(26, 1);
        setBaseLayer(nasa2012);
        setTopLayer(yemTexture);
        topLayerOpacityController(0, 0, 0);
        topLayerOpacityController(1, 0.5, 1);
      }
      if (scrollPosition === 1299 && glbTime === 26) {
        setBaseLayer(nasa2016);
        // windowScrollTo(13);
      }
      if (
        scrollPosition === 1299 &&
        feature === "yemen2016" &&
        glbTime === 26
      ) {
        cameraTime(24, 2);
        topLayerOpacityController(0, 0.5, 0);
      }
      if (scrollPosition === 1199 && glbTime === 24) {
        cameraTime(22, 2);
      }
      if (scrollPosition === 1099 && glbTime === 22) {
        cameraTime(20, 2);
        setBaseLayer(nasa2012);
        setTopLayer(china2012Texture);
        topLayerOpacityController(1, 0, 0);
      }
      if (scrollPosition === 999 && glbTime === 20) {
        setBaseLayer(nasa2016);
        setTopLayer(india2012Texture);
      }
      if (scrollPosition === 999 && feature === "china2016" && glbTime === 20) {
        cameraTime(19, 1);
      }
      if (scrollPosition === 899 && glbTime === 19) {
        topLayerOpacityController(0, 0.5, 0);
      }
      if (scrollPosition === 899 && feature === "india2012" && glbTime === 19) {
        cameraTime(18, 1);
        setTopLayer(pakTexture);
        topLayerOpacityController(1, 0.5, 1);
      }
      if (scrollPosition === 799 && glbTime === 18) {
        cameraTime(16, 2);
        topLayerOpacityController(0, 0.5, 0);
      }
      if (scrollPosition === 699 && glbTime === 16) {
        cameraTime(14, 2);
      }
      if (scrollPosition === 599 && glbTime === 14) {
        cameraTime(12, 2);
      }
      if (scrollPosition === 499 && glbTime === 12) {
        cameraTime(8, 4);
        setTopLayer(rusTexture);
        topLayerOpacityController(1, 0.5, 2);
      }
      if (scrollPosition === 399 && (glbTime === 8 || glbTime === 9)) {
        cameraTime(6, 2);
        setTopLayer(argRailwayTexture);
        topLayerOpacityController(0, 0, 0);
        topLayerOpacityController(1, 0.5, 2);
      }
      if (scrollPosition === 299 && feature === "railway" && glbTime === 6) {
        setTopLayer(argTexture);
        topLayerOpacityController(0, 0, 0);
        topLayerOpacityController(1, 0.5, 0);
      }
      if (scrollPosition === 299 && feature === "" && glbTime === 6) {
        cameraTime(3, 3);
        topLayerOpacityController(0, 0.5, 0);
      }
      if (scrollPosition === 199 && glbTime === 3) {
        cameraTime(2, 1);
        setTopLayer(afgTexture);
        topLayerOpacityController(1, 0.5, 1);
      }
      if (scrollPosition === 99 && glbTime === 2) {
        cameraTime(0, 2);
        topLayerOpacityController(0, 0.5, 0);
      }
    };

    let scrollDirection;
    let lethargy = new Lethargy();
    window.addEventListener("wheel", (event) => {
      let scrollPosition = Math.floor(
        (window.scrollY / window.innerHeight) * 100
      );
      let glbTime = parseInt(sessionStorage.getItem("glbTime"));
      let feature = sessionStorage.getItem("feature");
      let mapCover = sessionStorage.getItem("mapCover");

      if (event.deltaY < 0) {
        scrollDirection = "down";
      }
      if (event.deltaY > 0) {
        scrollDirection = "up";
      }
      if (
        lethargy.check(event) !== false &&
        sessionStorage.getItem("isGlbReady") === "true" &&
        mapCover === "false"
      ) {
        if (scrollDirection === "up") {
          scrollUpLogic(scrollPosition, glbTime, feature);
        }
        if (scrollDirection === "down") {
          scrollDownLogic(scrollPosition, glbTime, feature);
        }
      }
    });
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
            name="base2016"
            geometry={nodes.base2016.geometry}
            // material={materials["Material.001"]}
          >
            <meshStandardMaterial
              map={baseLayer}
              map-flipY={false}
              needsUpdate={true}
            />
          </mesh>
          {/* <mesh
            name="mid"
            geometry={nodes.mid.geometry}
            // material={materials.mid}
          >
            <meshStandardMaterial
              map={midLayer}
              map-flipY={false}
              needsUpdate={true}
              transparent={true}
              opacity={midLayerOpacity}
            />
          </mesh> */}
          <mesh
            name="top"
            geometry={nodes.top.geometry}
            // material={materials.top}
          >
            <meshStandardMaterial
              map={topLayer}
              map-flipY={false}
              needsUpdate={true}
              transparent={true}
              opacity={topLayerOpacity}
            />
          </mesh>
        </group>
      </group>

      {/* <OrbitControls /> */}
    </>
  );
}
useGLTF.preload("/assets/model/nasaBlackMarble/black_marble_no_texture.glb");
