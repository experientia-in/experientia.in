import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { useEffect } from "react";

export default function OpenLayers() {
  useEffect(() => {
    const layer = new TileLayer({
        source: new XYZ({
          url : "https://carto.experientia.in/NasaBlackMarble/XYZ/2016/{z}/{x}/{y}.png",
          crossOrigin: "https://carto.experientia.in",
          tileSize: 256
        })
      });
      new Map({
        layers: [layer],
        target: 'map',
        view: new View({
          projection: 'EPSG:4326',
          extent: [-180, -90, 180, 90],
          center: [0, 0],
          zoom: 2,
          maxZoom: 10,
        }),
      });
      layer.on('postrender',  (event) => {
        event.context.globalCompositeOperation = 'destination-over';
        event.context.fillStyle = 'rgb(4 5 15)';
        event.context.fillRect(
          0,
          0,
          event.context.canvas.width,
          event.context.canvas.height / 2
        );
        event.context.fillStyle = 'rgb(43 51 85)';
        event.context.fillRect(
          0,
          event.context.canvas.height / 2,
          event.context.canvas.width,
          event.context.canvas.height / 2
        );
        event.context.globalCompositeOperation = 'source-over';
      });
  }, []);
  return (
    <>
      <div id="container" style={{height: '0', overflow: 'hidden'}}>
        <div id="map" style={{ height: "500px", width: "1000px" }}></div>
      </div>
    </>
  );
}
