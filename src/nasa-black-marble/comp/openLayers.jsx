import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection";
import { useEffect } from "react";

export default function OpenLayers() {
  useEffect(() => {
    var map = new Map({
      target: "map",
      view: new View({
        projection: "EPSG:4326",
        extent: [-180, -90, 180, 90],
        center: [0, 0],
        zoom: 0,
        // maxZoom: 10,
      }),
    });
    // const tiles2016 = new TileLayer({
    //   source: new XYZ({
    //     url: "https://carto.experientia.in/NasaBlackMarble/XYZ/2016/{z}/{x}/{y}.png",
    //     crossOrigin: "https://carto.experientia.in",
    //     tileSize: 256,
    //   }),
    // });
    // const tiles2012 = new TileLayer({
    //   source: new XYZ({
    //     url: "https://carto.experientia.in/NasaBlackMarble/XYZ/2012/{z}/{x}/{y}.png",
    //     crossOrigin: "https://carto.experientia.in",
    //     tileSize: 256,
    //   }),
    // });
    const image_2016 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/2016_nasaBlackMarble_8K_bin.webp",
        projection: new Projection({
          code: "BlackMarble_2016",
          units: "pixels",
          extent: [-180, -90, 180, 90],
        }),
        imageExtent: [-180, -90, 180, 90],
      }),
    });
    map.addLayer(image_2016);
    // const image_2012 = new ImageLayer({
    //   source: new Static({
    //     url: "/assets/img/BlackMarble_2012_8k.webp",
    //     projection: new Projection({
    //       code: "BlackMarble_2012",
    //       units: "pixels",
    //       extent: [-180, -90, 180, 90],
    //     }),
    //     imageExtent: [-180, -90, 180, 90],
    //   }),
    // });

    // map.addLayer(tiles2012);
    // map.addLayer(tiles2016);
    // image_2016.on("postrender", (event) => {
    //   event.context.globalCompositeOperation = "destination-over";
    //   event.context.fillStyle = "rgb(4 5 15)";
    //   event.context.fillRect(
    //     0,
    //     0,
    //     event.context.canvas.width,
    //     event.context.canvas.height / 2
    //   );
    //   event.context.fillStyle = "rgb(43 51 85)";
    //   event.context.fillRect(
    //     0,
    //     event.context.canvas.height / 2,
    //     event.context.canvas.width,
    //     event.context.canvas.height / 2
    //   );
    //   event.context.globalCompositeOperation = "source-over";
    // });
    map.on('postrender',  (event) => {
      // event.context.globalCompositeOperation = 'destination-over';
      // event.context.imageSmoothingEnabled = false;
      // event.context.globalCompositeOperation = 'source-over';
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
