import Map from "ol/Map";
import View from "ol/View";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import { useEffect } from "react";

export default function OpenLayers() {
  useEffect(() => {
    const image_2016 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/2016_nasaBlackMarble_8K_bin.webp",
        interpolate: false,
        imageExtent: [-180, -90, 180, 90],
      }),
    });

    const egypt_middleEast = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/egypt_middleEast_2016.webp",
        interpolate: false,
        imageExtent: [28.000000000, 12.345833333, 61.195833333, 38.212500000],
      }),
    });
    const afghanistan_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/afghanistan_hlg.webp",
        interpolate: false,
        imageExtent: [60.4297440666688814, 26.2130399105978924, 74.9520677286688795, 40.7353635725978975],
      }),
    });
    const argentina_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/argentina_hlg.webp",
        interpolate: false,
        imageExtent: [-81.7322609200979002, -55.8143338331348104, -47.0468499384507126, -21.1289228514876335],
      }),
    });
    const argentinaRailway_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/argentinaRailway_hlg.webp",
        interpolate: false,
        imageExtent: [-73.8762994533019537, -42.3361429230106410, -52.6533259761340986, -21.1131694458428036],
      }),
    });
    const pakistan_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/pakistan_hlg.webp",
        interpolate: false,
        imageExtent: [60.7556024046464955, 22.8215531110754775, 75.4735107148577953, 37.5394614212867808],
      }),
    });
    const syria_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/syria_hlg.webp",
        interpolate: false,
        imageExtent: [35.4206717735448748, 32.1821188349021483, 42.5311890859942991, 39.2926361473515726],
      }),
    });

    const yemen_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/yemen_hlg.webp",
        interpolate: false,
        imageExtent: [41.1914226886210386,8.7137363001016723, 55.9093309988323455,23.4316446103129863],
      }),
    });

    var map = new Map({
      layers : [image_2016, egypt_middleEast, afghanistan_hlg, argentina_hlg, argentinaRailway_hlg, pakistan_hlg, syria_hlg, yemen_hlg],
      target: "map",
      pixelRatio: 1, 
      view: new View({
        projection: "EPSG:4326",
        extent: [-180, -90, 180, 90],
        center: [0, 0],
        zoom: 0,
      }),
    });
    
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
