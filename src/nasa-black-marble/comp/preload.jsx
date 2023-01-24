import { useEffect, useState } from "react";
import lottie from "lottie-web";
import "../style/preload.css";
import lottieFile from "./satelliteLottie.json";
export default function Preload() {
  const [loadertext, setLoadertext] = useState(
    "Getting files from our Satellite, Please wait for few moments..."
  );
  useEffect(() => {
    setTimeout(() => {
      setLoadertext("Processing the data...");
    }, 4000);
    lottie.loadAnimation({
      container: document.querySelector("#lottie"),
      animationData: lottieFile,
    });
  }, []);
  return (
    <div id="preloadContainer">
      <div className="App" id="lottie"></div>
      <div className="loading">{loadertext}</div>
    </div>
  );
}
