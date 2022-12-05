import gsap from "gsap";
import { useLayoutEffect } from "react";
import "../style/overlay.css";

export default function Overlay() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mapCards", {
        duration: 0.5,
        translateX: "0%",
        stagger: 0.25,
        ease: "Power4.out",
      });
      gsap.to(".mapCards_m", {
        duration: 0.5,
        translateY: "0%",
        stagger: 0.25,
        ease: "Power4.out",
      });
      gsap.to(
        ".info_blur_reveal",
        { duration: 0.75, clipPath: "circle(100%)", ease: "Power4.out" },
        "<2"
      );
      gsap.to(
        ".info_data",
        { duration: 0.3, translateY: "0%", ease: "Power4.out" },
        "<0.25"
      );
      gsap.to(
        ".data_backGround_control",
        {
          duration: 0.5,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          ease: "Power3.inOut",
        },
        "<0.5"
      );
      gsap.to(
        ".data_grid_holder",
        {
          duration: 0.4,
          opacity: 1 ,
          ease: "Power4.in",
        },
        "<0.5"
      );
      gsap.from(
        ".scroll_footer_section",
        {
          duration: 0.2,
          bottom: -100,
          ease: "Power4.out",
        },
        "<0.5"
      );
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
                    <div className="data_heading">Nasa Black Marble</div>
                    <div className="data_paragraph">
                      Maps gives us critical awareness about the world that we live in.
                      But, none of them tells us the maginificient story about
                      humanity and where we actually live as what Nasa's Black
                      Marble does.
                    </div>
                    <div className="author_info">
                      Made by{" "}
                      <a href="https://rahulahire.com" target="_blank">
                        Rahul Ahire
                      </a>.
                    </div>
                  </div>
                  <div className="scroll_footer_section"><span>scroll down</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="country_section">
          <div className="country_name">
            Afghanistan
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/afghanistan_mountain.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              On map, Afghanistan may look like a decent size country but majority of its land is covered by tall mountains in central area some of them ranging more than 7Km. Cities in Afghanistan mostly form a ring pattern which are connected by highways.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
