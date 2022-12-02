import gsap from "gsap";
import { useEffect } from "react";
import "../style/overlay.css";

export default function Overlay() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mapCards", { duration: 0.5, translateX: "0%", stagger: 0.25, ease: 'Power4.out' });
      gsap.to(".mapCards_m", { duration: 0.5, translateY: "0%", stagger: 0.25, ease: 'Power4.out' });
      gsap.to(".info_blur_reveal", {duration: 0.75, clipPath : 'circle(100%)', ease: 'Power4.out' }, '<2')
      gsap.to(".info_data", { duration: 0.3, translateY: "0%", ease: 'Power4.out' }, '<0.25');
      gsap.to(".data_backGround_control", { duration: 0.5, backgroundColor: "rgba(0, 0, 0, 0.5)", ease: 'Power3.inOut' }, '<0.5');
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
          <div className="intro_info_container">
            <div className="info_blur_reveal">
              <div className="info_data">
                <div className="data_backGround_control">
                  <div className="data_grid_holder">
                  <div className="data_heading">
                    Nasa Black Marble
                  </div>
                  <div className="data_paragraph">
                    I'm sure 
                  </div>
                  </div>
                  <div className="scroll_footer_section">
                    scroll down
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
