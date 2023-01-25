import gsap from "gsap";
import { useEffect } from "react";
import { Lethargy } from "lethargy";
export default function Scrollbar() {
  useEffect(() => {
    let lethargy = new Lethargy();
    if (lethargy.check(event) !== false) {
      window.addEventListener("wheel", () => {
        let scrollSection = parseInt(sessionStorage.getItem("scrollSection"));
        let scrollPercent = parseInt((scrollSection / 17) * 100);
        gsap.to("#nbm_scrollbar", {
          height: `${scrollPercent}vh`,
          duration: 1.5,
          ease: "power4.out",
        });
      });
    }
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
