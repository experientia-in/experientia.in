import gsap from "gsap";
import { useLayoutEffect } from "react";
import "../style/overlay.css";

export default function Overlay() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mapCards", { duration: 0.5, translateX: "0%", stagger: 0.25, ease: 'Power4.out' });
      gsap.to(".mapCards_m", { duration: 0.3, translateY: "0%", stagger: 0.2, ease: 'Power4.out' });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <section className="overlay_wrapper">
        <div className="intro">
          <div className="bigScreen">
            <div className="streetMap mapCards"></div>
            <div className="basicMap mapCards"></div>
            <div className="outdoorMap mapCards"></div>
            <div className="darkMonoChromeMap mapCards"></div>
            <div className="physicalMap mapCards"></div>
            <div className="whiteMonoChromeMap mapCards"></div>
            <div className="winterMap mapCards"></div>
          </div>
          <div className="smallScreen">
            <div className="streetMap_m mapCards_m"></div>
            <div className="basicMap_m mapCards_m"></div>
            <div className="outdoorMap_m mapCards_m"></div>
            <div className="darkMonoChromeMap_m mapCards_m"></div>
            <div className="physicalMap_m mapCards_m"></div>
            <div className="whiteMonoChromeMap_m mapCards_m"></div>
            <div className="winterMap_m mapCards_m"></div>
          </div>
        </div>
      </section>
    </>
  );
}
