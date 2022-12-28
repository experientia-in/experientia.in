import Map from "ol/Map";
import View from "ol/View";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import GeoJSON from "ol/format/GeoJSON.js";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Stroke } from "ol/style";
import { useEffect } from "react";

export default function OpenLayers() {
  useEffect(() => {
    // Base layer
    const image_2016 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/2016_nasaBlackMarble_8K_bin.webp",
        interpolate: false,
        imageExtent: [-180, -90, 180, 90],
      }),
    });
    
    // Additional feature layers for highlighting the difference between 2012 and 2016
    const indPakAfg2012 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/ind_pak_afg_2012.webp",
        interpolate: false,
        imageExtent: [61.229166667,4.983333333,95.216666667,34.704166667],
      }),
    });
    indPakAfg2012.setOpacity(0)
    
    const china2012 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/china2012.webp",
        interpolate: false,
        imageExtent: [96.445833333,18.741666667,123.125000000,41.041666667],
      }),
    });
    china2012.setOpacity(0)

    const yemen2012 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/yemen2012.webp",
        interpolate: false,
        imageExtent: [42.0416666670000012, 12.5250000000000004, 52.4791666670000012,16.3958333329999988],
      }),
    });
    yemen2012.setOpacity(0)

    const syria2012 = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/syriaIraq2012.webp",
        interpolate: false,
        imageExtent: [33.820833333,27.800000000,49.250000000,37.425000000],
      }),
    });
    syria2012.setOpacity(0)

    
    // country political border and argentina railway
    const argentina_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/argentina_hlg.webp",
        interpolate: false,
        imageExtent: [
          -81.7322609200979002, -55.8143338331348104, -47.0468499384507126,
          -21.1289228514876335,
        ],
      }),
    });
    argentina_hlg.setOpacity(0)

    const argentinaRailway_hlg = new ImageLayer({
      source: new Static({
        url: "/assets/img/nasaBlackMarble/argentinaRailway_hlg.webp",
        interpolate: false,
        imageExtent: [
          -73.8762994533019537, -42.336142923010641, -52.6533259761340986,
          -21.1131694458428036,
        ],
      }),
    });
    argentinaRailway_hlg.setOpacity(0)

    const vectorStroke = new Stroke({
      color: [247, 247, 247, 1],
      width: 1,
    });
    const afghanistan_hlg = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "/data/afghanistan.geojson",
        
      }),
      style : new Style({
        stroke: vectorStroke
      })
    });
    afghanistan_hlg.setOpacity(1)

    const pakistan_hlg = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "/data/pakistan.geojson",
        
      }),
      style : new Style({
        stroke: vectorStroke
      })
    });
    pakistan_hlg.setOpacity(0)

    const russia_hlg = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "/data/russia.geojson",
        
      }),
      style : new Style({
        stroke: vectorStroke
      })
    });
    russia_hlg.setOpacity(0)

    const yemen_hlg = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "/data/yemen.geojson",
        
      }),
      style : new Style({
        stroke: vectorStroke
      })
    });
    yemen_hlg.setOpacity(0)

    const syria_hlg = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "/data/syria.geojson",
        
      }),
      style : new Style({
        stroke: vectorStroke
      })
    });
    syria_hlg.setOpacity(0)

    var map = new Map({
      layers: [
        image_2016,
        indPakAfg2012,
        china2012,
        yemen2012,
        syria2012,
        afghanistan_hlg,
        argentina_hlg,
        argentinaRailway_hlg,
        pakistan_hlg,
        syria_hlg,
        yemen_hlg,
        russia_hlg,
      ],
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
