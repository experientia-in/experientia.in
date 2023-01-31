import gsap from "gsap";
import { useEffect } from "react";
import { Lethargy } from "lethargy";
export default function Scrollbar() {
  useEffect(() => {
    let lethargy = new Lethargy();

    const mouseWheelScroll = (event) => {
      if (lethargy.check(event) !== false) {
        let scrollSection = parseInt(sessionStorage.getItem("scrollSection"));
        let scrollPercent = parseInt((scrollSection / 17) * 100);
        gsap.to("#nbm_scrollbar", {
          height: `${scrollPercent}vh`,
          duration: 1,
          ease: "power4.out",
        });
      }
    };

    const keyPressScroll = () => {
      setTimeout(() => {
        let scrollSection = parseInt(sessionStorage.getItem("scrollSection"));
        let scrollPercent = parseInt((scrollSection / 17) * 100);
        gsap.to("#nbm_scrollbar", {
          height: `${scrollPercent}vh`,
          duration: 1,
          ease: "power4.out",
        });
      }, 50);
    };

    window.addEventListener("wheel", mouseWheelScroll);
    window.addEventListener("keyup", keyPressScroll);

    return () => {
      window.removeEventListener("wheel", mouseWheelScroll);
      window.removeEventListener("keyup", keyPressScroll);
    };
  }, []);
  return (
    <div
      id="nbm_scrollbar"
      style={{
        position: "fixed",
        zIndex: 21,
        width: "2.5px",
        background: "linear-gradient(to bottom, #3984d9, #90D5EC)",
        borderRadius: "2px",
      }}
    ></div>
  );
}
