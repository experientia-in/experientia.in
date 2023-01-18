import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useKTX2,
} from "@react-three/drei";
import gsap from "gsap";
// import Scroll from "./scrollStatus";
import { Lethargy } from "lethargy";
import { useRef, useEffect, useState } from "react";
export default function Earth(props) {
  let { earthGlb, canvasStatus } = props;
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

  // const [preload, setPreLoad] = useState({afg: afg_hlg, arg: arg_hlg})
  // const [topLayer, setTopLayer] = useState(afg_hlg);

  // useKTX2.preload(afg_hlg);
  // useKTX2.preload(arg_hlg);
  // useKTX2.preload(argRailway_hlg);
  // useKTX2.preload(rus_hlg);
  // useKTX2.preload(pak_hlg);
  // useKTX2.preload(syr_hlg);
  // useKTX2.preload(yem_hlg);
  // useKTX2.preload(china2012);
  // useKTX2.preload(egypt2012);
  // useKTX2.preload(india2012);
  // useKTX2.preload(nasaBlackMarble2012);

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
  const [topLayerOpacity, setTopLayerOpacity] = useState(1);

  // const [midLayer, setMidLayer] = useState(india2012Texture);
  // const [midLayerOpacity, setMidLayerOpacity] = useState(0);

  // if (textureRef.current) {
  //   textureRef.current.needsUpdate = true;
  // }
  // const [canvasTexture, setCanvasTexture] = useState(null);
  // useEffect(() => {
  //   const canvasIntervalCheck = setInterval(() => {
  //     const mapContainer = document.getElementById("map");
  //     const mapCanvas = mapContainer.getElementsByTagName("canvas")[0];
  //     if (mapCanvas) {
  //       setCanvasTexture(mapCanvas);
  //       canvasStatus(true);
  //       clearInterval(canvasIntervalCheck);
  //     }
  //   }, 1000);
  // }, []);

  useEffect(() => void (actions["CameraAction.001"].play().paused = true), []);

  useEffect(() => {
    let scrollDirection;
    console.log("loaded");
    // sessionStorage.setItem('glbTime', 0);
    // let scroll = new Scroll(50);
    // window.addEventListener("scroll", () => {
    //   newValue = window.scrollY;
    //   if (oldValue < newValue) {
    //     scrollDirection = "up";
    //   } else if (oldValue > newValue) {
    //     scrollDirection = "down";
    //   }
    //   oldValue = newValue;
    // });

    const cameraTime = (t, d) => {
      gsap.to(actions["CameraAction.001"], {
        time: t,
        duration: d,
        // snap: 0.01,
        onComplete: () => {
          sessionStorage.setItem("glbTime", actions["CameraAction.001"].time);
        },
      });
    };
    const topLayerOpacityController = (opacity, time) => {
      setTimeout(() => {
        setTopLayerOpacity(opacity);
      }, time * 1000);
    };

    const scrollUpLogic = () => {
      let scrollPosition = Math.floor(
        (window.scrollY / window.innerHeight) * 100
      );
      let glbTime = parseInt(sessionStorage.getItem("glbTime"));
      let feature = sessionStorage.getItem("feature");
      if (scrollPosition === 0 && glbTime === 0) {
        // windowScrollTo(1)
        cameraTime(2, 2);
      }
      if (scrollPosition === 99 && glbTime === 2) {
        cameraTime(3, 1);
      }
      if (scrollPosition === 199 && glbTime === 3) {
        cameraTime(6, 3);
        setTopLayer(argTexture);
      }
      if (scrollPosition === 299 && glbTime === 6) {
        // cameraTime(6, 3)
        setTopLayer(argRailwayTexture);
      }
      if (scrollPosition === 299 && feature === "railway" && glbTime === 6) {
        cameraTime(9, 3);
        setTopLayer(rusTexture);
      }
      if (scrollPosition === 399 && glbTime === 9) {
        cameraTime(12, 3);
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
      }
      if (scrollPosition === 799 && glbTime === 18) {
        cameraTime(19, 1);
      }
      if (scrollPosition = 899 && feature === "2012" && glbTime === 19) {
        setTopLayer(india2012Texture);
      }
      if ((scrollPosition = 899 && feature === "2016" && glbTime === 19)) {
        cameraTime(20, 1);
        console.log("india 2012");
        setTopLayer(india2012Texture);
      }
      if ((scrollPosition = 999 && glbTime === 20)) {
        setBaseLayer(nasa2012);
        setTopLayer(china2012Texture);
      }
      if ((scrollPosition = 999 && feature === "2012" && glbTime === 20)) {
        cameraTime(22, 2);
        setBaseLayer(nasa2016);
      }
      if ((scrollPosition = 1099 && glbTime === 22)) {
        cameraTime(24, 2);
      }
      if ((scrollPosition = 1199 && glbTime === 24)) {
        cameraTime(26, 2);
        setTopLayer(yemTexture);
      }
      if ((scrollPosition = 1299 && glbTime === 26)) {
        setBaseLayer(nasa2012)
      }
      if ((scrollPosition = 1299 && feature === "2016" && glbTime === 26)) {
        cameraTime(27, 1);
        setTopLayer(syrTexture);
        setBaseLayer(nasa2016)
      }
      if ((scrollPosition = 1399 && glbTime === 27)) {
        setBaseLayer(nasa2012)
      }
    };

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

    // scroll.addEventListener("end", () => {
    //   let scrollPosition = (window.scrollY / window.innerHeight) * 100;
    //   // console.log(Math.round(scrollPosition), scrollDirection, `Afghanistan: ${afghanistan}, Iceland: ${iceland}`)

    //   if (scrollDirection === "up") {
    //     if (scrollPosition > 75 && scrollPosition < 175 && afghanistan) {
    //       // Afghanistan (default height for all is 100vh or 1 scrollposition)
    //       cameraTime(2, 2);
    //       topLayerOpacityController(1, 2.5)
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 175 && scrollPosition < 275 && iceland) {
    //       // Iceland
    //       cameraTime(3, 1);
    //       topLayerOpacityController(0, 1)
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 275 && scrollPosition < 475 && argentina) {
    //       // Argentina - 2 scrollPosition
    //       cameraTime(6, 3);
    //       setTopLayer(argTexture);
    //       topLayerOpacityController(1, 3.5)
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 375 && scrollPosition < 475 && !argentina) {
    //       setTopLayer(argRailwayTexture);
    //     }
    //     if (scrollPosition > 475 && scrollPosition < 575 && russia) {
    //       // Russia
    //       cameraTime(9, 3);
    //       setTopLayer(rusTexture);
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 575 && scrollPosition < 675 && australia) {
    //       // Australia
    //       cameraTime(12, 3);
    //       topLayerOpacityController(0, 0)
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 675 && scrollPosition < 775 && usa) {
    //       // USA
    //       cameraTime(14, 2);
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 775 && scrollPosition < 875 && egypt) {
    //       // Egypt
    //       cameraTime(16, 2);
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 875 && scrollPosition < 975 && pakistan) {
    //       // Pakistan
    //       cameraTime(18, 2);
    //       setTopLayer(pakTexture);
    //       topLayerOpacityController(1, 2.5)
    //       pakistan = false;
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 975 && scrollPosition < 1175 && india) {
    //       // India - 2 scrollPosition
    //       cameraTime(19, 1);
    //       topLayerOpacityController(0, 0)
    //       india = false;
    //       pakistan = false;
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 1075 && scrollPosition < 1175 && !india) {
    //       setTopLayer(india2012Texture);
    //       topLayerOpacityController(1, 0)
    //     }
    //     if (scrollPosition > 1175 && scrollPosition < 1375 && china) {
    //       // China - 2 scrollPosition
    //       cameraTime(20, 1);
    //       china = false;
    //       india = false;
    //       pakistan = false;
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 1275 && scrollPosition < 1375 && !china) {
    //       setBaseLayer(nasa2012);
    //       setTopLayer(china2012Texture);
    //     }
    //     if (scrollPosition > 1375 && scrollPosition < 1475 && africa) {
    //       // Africa
    //       cameraTime(22, 2);
    //       setBaseLayer(nasa2016);
    //       topLayerOpacityController(0, 2);
    //       africa = false;
    //       china = false;
    //       india = false;
    //       pakistan = false;
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 1475 && scrollPosition < 1575 && korea) {
    //       // Korea
    //       cameraTime(24, 2);
    //       korea = false;
    //       africa = false;
    //       china = false;
    //       india = false;
    //       pakistan = false;
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 1575 && scrollPosition < 1775 && yemen) {
    //       // Yemen - 2 scrollPosition
    //       cameraTime(26, 2);
    //       setTopLayer(yemTexture);
    //       topLayerOpacityController(1, 2.5)
    //       yemen = false;
    //       korea = false;
    //       africa = false;
    //       china = false;
    //       india = false;
    //       pakistan = false;
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 1675 && scrollPosition < 1775 && !yemen) {
    //       setBaseLayer(nasa2012);
    //     }
    //     if (scrollPosition > 1775 && scrollPosition < 2000 && syria) {
    //       // Syria - 2 scrollPosition
    //       cameraTime(27, 1);
    //       setBaseLayer(nasa2016);
    //       setTopLayer(syrTexture);
    //       syria = false;
    //       yemen = false;
    //       korea = false;
    //       africa = false;
    //       china = false;
    //       india = false;
    //       pakistan = false;
    //       egypt = false;
    //       usa = false;
    //       australia = false;
    //       russia = false;
    //       argentina = false;
    //       iceland = false;
    //       afghanistan = false;
    //     }
    //     if (scrollPosition > 1875 && scrollPosition < 1975 && !syria) {
    //       setBaseLayer(nasa2012);
    //     }
    //   }

    //   if (scrollDirection === "down") {
    //     if (scrollPosition > 1799 && scrollPosition < 1899) {
    //       setBaseLayer(nasa2016);
    //     }
    //     if (scrollPosition > 1599 && scrollPosition < 1799 && !yemen) {
    //       // Yemen - 2 scrollPosition
    //       cameraTime(26, 1);
    //       setBaseLayer(nasa2012);
    //       setTopLayer(yemTexture);
    //       syria = true;
    //     }
    //     if (scrollPosition > 1599 && scrollPosition < 1699){
    //       setBaseLayer(nasa2016)
    //     }
    //     if (scrollPosition > 1499 && scrollPosition < 1599 && !korea) {
    //       // Korea
    //       cameraTime(24, 2);
    //       topLayerOpacityController(0, 2)
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 1399 && scrollPosition < 1499 && !africa) {
    //       // Africa
    //       cameraTime(22, 2);
    //       setTopLayer(china2012Texture);
    //       topLayerOpacityController(1, 0);
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 1199 && scrollPosition < 1399 && !china) {
    //       // China - 2 scrollPosition
    //       cameraTime(20, 2);
    //       setBaseLayer(nasa2012);
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 1199 && scrollPosition < 1299){
    //       setTopLayer(india2012Texture)
    //       setBaseLayer(nasa2016)

    //     }
    //     if (scrollPosition > 999 && scrollPosition < 1199 && !india) {
    //       // India - 2 scrollPosition
    //       cameraTime(19, 1);
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 999 && scrollPosition < 1099){
    //       topLayerOpacityController(0, 0);
    //       setTopLayer(pakTexture)
    //     }
    //     if (scrollPosition > 899 && scrollPosition < 999 && !pakistan) {
    //       // Pakistan
    //       cameraTime(18, 1);
    //       topLayerOpacityController(1, 1.5);
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 799 && scrollPosition < 899 && !egypt) {
    //       // Egypt
    //       cameraTime(16, 2);
    //       topLayerOpacityController(0, 2);
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 699 && scrollPosition < 799 && !usa) {
    //       // USA
    //       cameraTime(14, 2);
    //       egypt = true;
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 599 && scrollPosition < 699 && !australia) {
    //       // Australia
    //       cameraTime(12, 2);
    //       usa = true;
    //       egypt = true;
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 499 && scrollPosition < 599 && !russia) {
    //       // Russia
    //       cameraTime(8, 4);
    //       setTopLayer(rusTexture);
    //       topLayerOpacityController(1, 3.5);
    //       australia = true;
    //       usa = true;
    //       egypt = true;
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 299 && scrollPosition < 499 && !argentina) {
    //       // Argentina - 2 scrollPosition
    //       cameraTime(6, 2);
    //       setTopLayer(argRailwayTexture);
    //       russia = true;
    //       australia = true;
    //       usa = true;
    //       egypt = true;
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 299 && scrollPosition < 399){
    //       setTopLayer(argTexture)
    //     }
    //     if (scrollPosition > 199 && scrollPosition < 299 && !iceland) {
    //       // Iceland
    //       cameraTime(3, 3);
    //       topLayerOpacityController(0, 3);
    //       argentina = true;
    //       russia = true;
    //       australia = true;
    //       usa = true;
    //       egypt = true;
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition > 99 && scrollPosition < 199 && !afghanistan) {
    //       // Afghanistan
    //       cameraTime(2, 1);
    //       setTopLayer(afgTexture);
    //       topLayerOpacityController(1, 1.5);
    //       iceland = true;
    //       argentina = true;
    //       russia = true;
    //       australia = true;
    //       usa = true;
    //       egypt = true;
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //     if (scrollPosition < 25) {
    //       // Start
    //       cameraTime(2, 0);
    //       setTopLayer(afgTexture);
    //       afghanistan = true;
    //       iceland = true;
    //       argentina = true;
    //       russia = true;
    //       australia = true;
    //       usa = true;
    //       egypt = true;
    //       pakistan = true;
    //       india = true;
    //       china = true;
    //       africa = true;
    //       korea = true;
    //       yemen = true;
    //       syria = true;
    //     }
    //   }
    // });

    // scroll.addEventListener('end', () => {
    //   let scrollPosition = Math.floor(window.scrollY / window.innerHeight * 100)

    //   // if(scrollDirection === 'up'){
    //     // if(scrollPosition == 0){
    //     //   cameraTime(2, 2);
    //     // }
    //     if(scrollPosition === 99){
    //       // windowScrollTo(2)
    //       cameraTime(2, 2);
    //     }
    //     if(scrollPosition === 199){
    //       // windowScrollTo(3)
    //       cameraTime(3, 1);
    //     }
    //   // }
    //   // if(scrollDirection === 'down'){
    //   //   if(scrollPosition > 299 && scrollPosition < 300){
    //   //     windowScrollTo(2)
    //   //   }
    //   //   if(scrollPosition > 199 && scrollPosition < 200){
    //   //     windowScrollTo(1)
    //   //   }
    //   //   if(scrollPosition > 99 && scrollPosition < 100){
    //   //     windowScrollTo(0)
    //   //   }
    //   // }

    // })

    let lethargy = new Lethargy();
    window.addEventListener("wheel", (event) => {
      let glbTime = parseInt(sessionStorage.getItem("glbTime"));
      // console.log(event.wheelDelta)
      if (event.deltaY < 0) {
        scrollDirection = "down";
      }
      if (event.deltaY > 0) {
        scrollDirection = "up";
      }
      // let scrollPosition = Math.floor(window.scrollY / window.innerHeight * 100);
      if (scrollDirection === "up") {
        if (lethargy.check(event) !== false) {
          scrollUpLogic();
        }
      }
      // if(scrollDirection === 'down'){
      //       if(scrollPosition > 299 && scrollPosition < 300){
      //         windowScrollTo(2)
      //       }
      //       if(scrollPosition > 199 && scrollPosition < 200){
      //         windowScrollTo(1)
      //       }
      //       if(scrollPosition > 99 && scrollPosition < 100){
      //         windowScrollTo(0)
      //       }
      // }
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
