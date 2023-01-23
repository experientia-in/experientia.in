import "../style/openlayers.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import gsap from "gsap";
import { useEffect } from "react";
export default function OpenLayers() {
  useEffect(() => {
    sessionStorage.setItem("mapCover", false);
    const nasa2016Layer = new TileLayer({
      source: new XYZ({
        url: "https://carto.experientia.in/NasaBlackMarble/XYZ/2016/{z}/{x}/{y}.png",
        crossOrigin: "anonymous",
      }),
    });
    nasa2016Layer.setZIndex(1);
    nasa2016Layer.setOpacity(1);
    const nasa2012Layer = new TileLayer({
      source: new XYZ({
        url: "https://carto.experientia.in/NasaBlackMarble/XYZ/2012/{z}/{x}/{y}.png",
        crossOrigin: "anonymous",
      }),
    });
    nasa2012Layer.setZIndex(2);
    nasa2012Layer.setOpacity(0);
    const osmLayer = new TileLayer({
      source: new XYZ({
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        crossOrigin: "anonymous",
      }),
    });
    osmLayer.setZIndex(3);
    osmLayer.setOpacity(0);

    var map = new Map({
      layers: [nasa2016Layer, nasa2012Layer, osmLayer],
      target: "map",
      // pixelRatio: 1,
      view: new View({
        projection: "EPSG:4326",
        extent: [-180, -90, 180, 90],
        center: [0, 0],
        zoom: 3,
        maxZoom: 10,
      }),
      controls: [],
    });

    const mapOpener = document.getElementById("mapOpener");
    mapOpener.addEventListener("click", () => {
      let mapCover = sessionStorage.getItem("mapCover");

      if (mapCover === "false") {
        gsap.to("#mapContainer", {
          clipPath: "circle(100% at 50% 50%)",
          duration: 1,
          ease: "power4.out",
          onStart: () => {
            sessionStorage.setItem("mapCover", true);
          },
        });
        gsap.to("#mapOpener", {
          background: "linear-gradient(42deg,#c0114e, #e13974)",
          // boxShadow: "20px 20px 60px #a30e42, -20px -20px 60px #dd145a",
          duration: 1,
          ease: "power4.out",
        });
      }
      if (mapCover === "true") {
        gsap.to("#mapContainer", {
          clipPath: "circle(0% at 100% 100%)",
          duration: 1,
          ease: "power4.out",
          onStart: () => {
            sessionStorage.setItem("mapCover", false);
          },
        });
        gsap.to("#mapOpener", {
          background: "linear-gradient(145deg, #1e1e1e, #232323)",
          boxShadow: "20px 20px 60px #1d1d1d, -20px -20px 60px #252525",
          duration: 1,
          ease: "power4.out",
        });
      }
    });

    const sliderBoxOpener = document.getElementById("sliderBoxOpener");
    sessionStorage.setItem("isLayerBoxOpen", true);

    sliderBoxOpener.addEventListener("click", () => {
      let isLayerBoxOpen = sessionStorage.getItem("isLayerBoxOpen");
      if (isLayerBoxOpen === "true") {
        gsap.to(".mapLayerController", {
          right: "-500px",
          duration: 0.5,
          ease: "power4.out",
          onComplete: () => {
            sessionStorage.setItem("isLayerBoxOpen", false);
          },
        });
        gsap.to("#sliderBoxOpener", {
          opacity: 0.5,
          duration: 1,
          ease: "power4.out",
        });
      }
      if (isLayerBoxOpen === "false") {
        gsap.to(".mapLayerController", {
          right: "25px",
          duration: 0.5,
          ease: "power4.out",
          onComplete: () => {
            sessionStorage.setItem("isLayerBoxOpen", true);
          },
        });
        gsap.to("#sliderBoxOpener", {
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        });
      }
    });

    const osmSlider = document.getElementById("osmSlider");
    osmSlider.value = 0;

    osmSlider.addEventListener("input", (event) => {
      let osmInputvalue = parseFloat(event.target.value);
      const osmValue = document.getElementById('osmValue');
      osmSlider.style.backgroundImage =
        `linear-gradient(to right,#30cfd0 0%, #330867 ${osmInputvalue * 100}%,#7b7b7b 0%,#7b7b7b 100%)`;
      osmValue.textContent = parseInt(osmInputvalue * 100); 
      
      osmLayer.setOpacity(osmInputvalue);
    });


    const nasa2012 = document.getElementById("nasa2012");
    nasa2012.value = 0;

    nasa2012.addEventListener("input", (event) => {
      let nasa2012Inputvalue = parseFloat(event.target.value);
      const nasa2012Value = document.getElementById('nasa2012Value');
      nasa2012.style.backgroundImage =
        `linear-gradient(to right,#30cfd0 0%, #330867 ${nasa2012Inputvalue * 100}%,#7b7b7b 0%,#7b7b7b 100%)`;
      nasa2012Value.textContent = parseInt(nasa2012Inputvalue * 100); 
      
      nasa2012Layer.setOpacity(nasa2012Inputvalue);
    });


    const nasa2016 = document.getElementById("nasa2016");
    nasa2016.value = 100;
    nasa2016.style.backgroundImage =
        `linear-gradient(to right,#30cfd0 0%, #330867 100%,#7b7b7b 0%,#7b7b7b 100%)`;
    nasa2016.addEventListener("input", (event) => {
      let nasa2016Inputvalue = parseFloat(event.target.value);
      const nasa2016Value = document.getElementById('nasa2016Value');
      nasa2016.style.backgroundImage =
        `linear-gradient(to right,#30cfd0 0%, #330867 ${nasa2016Inputvalue * 100}%,#7b7b7b 0%,#7b7b7b 100%)`;
      nasa2016Value.textContent = parseInt(nasa2016Inputvalue * 100); 
      
      nasa2016Layer.setOpacity(nasa2016Inputvalue);
    });
  }, []);

  return (
    <>
      <div id="mapContainer">
        <div id="map"></div>
        <div className="mapLayerController">
          <div className="headTitle">Adjust Layer Opacity</div>
          <div className="sliderBox">
            <div className="layer">Open Street Maps</div>
            <div className="sliderInput">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                name=""
                id="osmSlider"
                className="inputRange"
              />
              <div className="rangeValue" id="osmValue">
                0
              </div>
            </div>
          </div>
          <div className="sliderBox">
            <div className="layer">Nasa Black Marble 2012</div>
            <div className="sliderInput">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                name=""
                id="nasa2012"
                className="inputRange"
              />
              <div className="rangeValue" id="nasa2012Value">
                0
              </div>
            </div>
          </div>
          <div className="sliderBox lastbox">
            <div className="layer">Nasa Black Marble 2016</div>
            <div className="sliderInput">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                name=""
                id="nasa2016"
                className="inputRange"
              />
              <div className="rangeValue" id="nasa2016Value">
                100
              </div>
            </div>
          </div>
        </div>
        <div className="sliderBoxOpener" id="sliderBoxOpener">
          <img
            src="/assets/img/nasaBlackMarble/listMenuIcon.svg"
            alt="compass-icon"
          />
        </div>
      </div>
      <div className="compassIcon" id="mapOpener">
        <img src="/assets/img/nasaBlackMarble/compass.svg" alt="compass-icon" />
      </div>
    </>
  );
}
