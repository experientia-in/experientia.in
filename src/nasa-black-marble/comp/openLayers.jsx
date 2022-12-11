import Map from "ol/Map";
import View from "ol/View";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import { useEffect } from "react";

export default function OpenLayers() {
  useEffect(() => {
    var map = new Map({
      target: "map",
      pixelRatio: 1, 
      view: new View({
        projection: "EPSG:4326",
        extent: [-180, -90, 180, 90],
        center: [0, 0],
        zoom: 0,
      }),
    });
    const image_2016 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/2016_nasaBlackMarble_8K_bin.webp",
        interpolate: false,
        imageExtent: [-180, -90, 180, 90],
      }),
    });
    map.addLayer(image_2016)
    const iceland = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/iceland.webp",
        interpolate: false,
        imageExtent: [-24.878805226,62.741177263,-13.066305226,67.298154634],
      }),
    });
    map.addLayer(iceland);
    const egypt_middleEast = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/egypt_middleEast_2016.webp",
        interpolate: false,
        imageExtent: [28.000000000,12.345833333,61.195833333,38.212500000],
      }),
    });
    map.addLayer(egypt_middleEast)
    
  }, []);
  return (
    <>
      <div id="container">
        <div
          id="map"
          style={{
            height: "4096px",
            width: "8192px",
            visibility: "hidden",
            position: "fixed",
          }}
        ></div>
      </div>
    </>
  );
}
