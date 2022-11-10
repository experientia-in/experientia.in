import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { useEffect } from "react";
export default function OpenLayers() {
  useEffect(() => {
    new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://pub-7bcf0427281b46fa9e69d8347eeea435.r2.dev/NasaBlackMarble/XYZ/2016/{z}/{x}/{y}.png",
            crossOrigin: "anonymous",
          }),
        }),
      ],
      view: new View({
        projection: "EPSG:4326",
        extent: [-180, -90, 180, 90],
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return (
    <>
      <div id="container" >
        <div id="map" style={{ height: "500px", width: "1000px"}}></div>
      </div>
    </>
  );
}