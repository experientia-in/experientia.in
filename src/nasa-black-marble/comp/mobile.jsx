import OpenLayers from "./openLayers";
import "../style/mobile.css";
export default function Mobile() {
  return (
    <>
      <OpenLayers />
      <div id="mobileLogo">Experientia</div>
      <section className="mobileContainer">
        <div className="mobileMessage">
          <div className="mobileMessageWrap">
            <img
              src="https://static.experientia.in/nasaBlackMarble/desktopMonitor.webp"
              alt="desktop-icon" height={100}
            />
            <p>
              As a part of Beta release, this page is not supported for Mobile
              devices. To view it properly, please open this site on your Desktop or Laptop.
              But, you  can still access the Map in the down right icon.
              <br /><br />We regret the inconvenience 🙏.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
