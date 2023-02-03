import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Lethargy } from "lethargy";
import Footer from "../../utils/comp/footer";
import "../style/overlay.css";

export default function Overlay() {
  const [year, setYear] = useState("2016");
  const [type, setType] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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
          opacity: 1,
          ease: "Power4.in",
        },
        "<0.5"
      );
      gsap.to(
        ".scroll_footer_section",
        {
          duration: 0.2,
          bottom: 50,
          ease: "Power4.out",
        },
        "<0.5"
      );
      // gsap.from(
      //   ".overlay_wrapper",
      //   {
      //     duration: 0.2,
      //     position: 'fixed',
      //     ease: "Power4.out",
      //   },
      //   "<0.2"
      // );
      // const pin = gsap.utils.toArray(".pin");
      // pin.forEach((pin) => {
      //   gsap.to(pin, {
      //     scrollTrigger: {
      //       trigger: pin,
      //       start: "top top",
      //       end: "100%",
      //       pin: true,
      //     },
      //   });
      // });
    });
    sessionStorage.setItem("scrollSection", 0);
    const windowScrollTo = (number) => {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: window.innerHeight * number,
        ease: "circ.out",
      });

      if (number > 16) {
        sessionStorage.setItem("scrollSection", 17);
      } else {
        sessionStorage.setItem("scrollSection", number);
      }
    };
    const setFeature = (featureName, time) => {
      setTimeout(() => {
        sessionStorage.setItem("feature", featureName);
      }, 1000 * time);
    };

    // const scrollSection = (sectionNumber) => {
    //   sessionStorage.setItem("scrollSection", sectionNumber);
    // };
    const scrollUpLogic = (scrollPosition, glbTime, feature) => {
      if (scrollPosition === 0 && glbTime === 0) {
        windowScrollTo(1);
        // scrollSection(1);
      }
      if ((scrollPosition === 99 || 100) && glbTime === 2) {
        windowScrollTo(2);
        // scrollSection(2);
      }
      if ((scrollPosition === 199 || 200) && glbTime === 3) {
        windowScrollTo(3);
        setType("");
        // scrollSection(3);
      }
      if ((scrollPosition === 299 || 300) && glbTime === 6) {
        setType("Railway");
        setFeature("railway", 0.5);
      }
      if ((scrollPosition === 299 || 300) && feature === "railway" && glbTime === 6) {
        setType("");
        windowScrollTo(4);
        // scrollSection(4);
      }
      if ((scrollPosition === 399 || 400) && (glbTime === 8 || glbTime === 9)) {
        windowScrollTo(5);
        // scrollSection(5);
      }
      if ((scrollPosition === 499 || 500) && glbTime === 12) {
        windowScrollTo(6);
        // scrollSection(6);
      }
      if ((scrollPosition === 599 || 600) && glbTime === 14) {
        windowScrollTo(7);
        // scrollSection(7);
      }
      if ((scrollPosition === 699 || 700) && glbTime === 16) {
        windowScrollTo(8);
        // scrollSection(8);
      }
      if ((scrollPosition === 799 || 800) && glbTime === 18) {
        windowScrollTo(9);
        setFeature("india2012", 0.5);
        // scrollSection(9);
      }
      if ((scrollPosition === 899 || 900) && feature === "india2012" && glbTime === 19) {
        // windowScrollTo(9);
        setYear(2012);
        setFeature("china2016", 0.5);
      }
      if ((scrollPosition === 899 || 900) && feature === "china2016" && glbTime === 19) {
        setYear(2016);
        windowScrollTo(10);
        // setFeature(2012, 0.5);
        // scrollSection(10);
      }
      if ((scrollPosition === 999 || 1000) && glbTime === 20) {
        setYear(2012);
        setFeature("china2012", 0.5);
      }
      if ((scrollPosition === 999 || 1000) && feature === "china2012" && glbTime === 20) {
        setYear(2016);
        windowScrollTo(11);
        // scrollSection(11);
      }
      if ((scrollPosition === 1099 || 1100) && glbTime === 22) {
        windowScrollTo(12);
        // scrollSection(12);
      }
      if (
        (scrollPosition === 1199 || 1200) && glbTime === 24 ||
        feature === "yemen2016"
      ) {
        windowScrollTo(13);
        setFeature("yemen2016", 0.5);
        // scrollSection(13);
      }
      if ((scrollPosition === 1299 || 1300) && feature === "yemen2016" && glbTime === 26) {
        setYear(2012);
        setFeature("yemen2012", 0.5);
      }
      if (
        (scrollPosition === 1299 || 1300) &&
        feature === "yemen2012" &&
        glbTime === 26
      ) {
        setYear(2016);
        windowScrollTo(14);
        // scrollSection(14);
      }
      if ((scrollPosition === 1399 || 1400) && glbTime === 27) {
        setYear(2012);
        setFeature("syria2012", 0.5);
      }
      if (
        (scrollPosition === 1399 || 1400) &&
        feature === "syria2012" &&
        glbTime === 27
      ) {
        windowScrollTo(15);
        setFeature("inspiration", 0.5);
        // scrollSection(15);
      }
      if ((scrollPosition === 1499 || 1500) && feature === "inspiration") {
        windowScrollTo(16);
        setFeature("contribution", 0.5);
        // scrollSection(16);
      }
      if ((scrollPosition === 1599 || 1600) && feature === "contribution") {
        windowScrollTo(16.46);
        setFeature("footer", 0.5);
        // scrollSection(17);
      }
    };

    const scrollDownLogic = (scrollPosition, glbTime, feature) => {
      if (scrollPosition > 1640) {
        windowScrollTo(16);
        setFeature("contribution", 0.5);
        // scrollSection(16);
      }
      if ((scrollPosition === 1599 || 1600) && feature === "contribution") {
        windowScrollTo(15);
        setFeature("inspiration", 0.5);
        // scrollSection(15);
      }
      if ((scrollPosition === 1499 || 1500) && feature === "inspiration") {
        windowScrollTo(14);
        setFeature("syria2012", 0.5);
        // scrollSection(14);
      }
      if (
        (scrollPosition === 1399 || 1400) &&
        feature === "syria2012" &&
        glbTime === 27
      ) {
        setYear(2016);
        setFeature("yemen2012", 0.5);
      }
      if (
        (scrollPosition === 1399 || 1400) &&
        feature === "yemen2012" &&
        glbTime === 27
      ) {
        setYear(2012);
        windowScrollTo(13);
        // scrollSection(13);
      }
      if ((scrollPosition === 1299 || 1300) && glbTime === 26) {
        setYear(2016);
        setFeature("yemen2016", 0.5);
      }
      if (
        (scrollPosition === 1299 || 1300) &&
        feature === "yemen2016" &&
        glbTime === 26
      ) {
        windowScrollTo(12);
        // scrollSection(12);
      }
      if ((scrollPosition === 1199 || 1200) && glbTime === 24) {
        windowScrollTo(11);
        setFeature("", 0.5);
        // scrollSection(11);
      }
      if ((scrollPosition === 1099 || 1100) && glbTime === 22) {
        setYear(2012);
        windowScrollTo(10);
        // scrollSection(10);
      }
      if ((scrollPosition === 999 || 1000) && glbTime === 20) {
        setYear(2016);
        setFeature("china2016", 0.5);
      }
      if ((scrollPosition === 999 || 1000) && feature === "china2016" && glbTime === 20) {
        setYear(2012);
        windowScrollTo(9);
        // scrollSection(9);
      }
      if ((scrollPosition === 899 || 900) && glbTime === 19) {
        setYear(2016);
        setFeature("india2012", 0.5);
      }
      if ((scrollPosition === 899 || 900) && feature === "india2012" && glbTime === 19) {
        windowScrollTo(8);
        // scrollSection(8);
      }
      if ((scrollPosition === 799 || 800) && glbTime === 18) {
        windowScrollTo(7);
        // scrollSection(7);
      }
      if ((scrollPosition === 699 || 700) && glbTime === 16) {
        windowScrollTo(6);
        // scrollSection(6);
      }
      if ((scrollPosition === 599 || 600) && glbTime === 14) {
        windowScrollTo(5);
        // scrollSection(5);
      }
      if ((scrollPosition === 499 || 500) && glbTime === 12) {
        windowScrollTo(4);
        // scrollSection(4);
      }
      if ((scrollPosition === 399 || 400) && (glbTime === 8 || glbTime === 9)) {
        windowScrollTo(3);
        setType("Railway", 0.5);
        // scrollSection(3);
      }
      if ((scrollPosition === 299 || 300) && glbTime === 6) {
        setType("");
        setFeature("", 0.5);
      }
      if ((scrollPosition === 299 || 300) && feature === "" && glbTime === 6) {
        windowScrollTo(2);
        // scrollSection(2);
      }
      if ((scrollPosition === 199 || 200) && glbTime === 3) {
        windowScrollTo(1);
        // scrollSection(1);
      }
      if ((scrollPosition === 99 || 100) && glbTime === 2) {
        windowScrollTo(0);
        // scrollSection(0);
      }
    };

    let scrollDirection;
    let lethargy = new Lethargy();
    window.addEventListener("wheel", (event) => {
      let glbTime = parseInt(sessionStorage.getItem("glbTime"));
      let scrollPosition = Math.floor(
        (window.scrollY / window.innerHeight) * 100
      );
      let feature = sessionStorage.getItem("feature");
      let mapCover = sessionStorage.getItem("mapCover");

      if (event.deltaY < 0) {
        scrollDirection = "down";
      }
      if (event.deltaY > 0) {
        scrollDirection = "up";
      }

      if (
        lethargy.check(event) !== false &&
        sessionStorage.getItem("isGlbReady") === "true" &&
        mapCover === "false"
      ) {
        if (scrollDirection === "up") {
          scrollUpLogic(scrollPosition, glbTime, feature);
        }

        if (scrollDirection === "down") {
          scrollDownLogic(scrollPosition, glbTime, feature);
        }
      }
    });

    window.addEventListener("keyup", (event) => {
      let glbTime = parseInt(sessionStorage.getItem("glbTime"));
      let scrollPosition = Math.floor(
        (window.scrollY / window.innerHeight) * 100
      );
      let feature = sessionStorage.getItem("feature");
      // let mapCover = sessionStorage.getItem("mapCover");
      // console.log(event);
      if (
        event.key === "ArrowDown" &&
        sessionStorage.getItem("isGlbReady") === "true"
      ) {
        scrollUpLogic(scrollPosition, glbTime, feature);
      }
      if (
        event.key === "ArrowUp" &&
        sessionStorage.getItem("isGlbReady") === "true"
      ) {
        scrollDownLogic(scrollPosition, glbTime, feature);
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <section className="overlay_wrapper" id="fullscreen">
        <div className="intro">
          <div className="bigScreen ">
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
                      Nasa Black Marble{" "}
                      <span className="betaMark">Beta Release</span>
                    </div>
                    <div className="data_paragraph">
                      Maps gives us critical awareness about the world that we
                      live in. But, none of them tells us the maginificient
                      story about humanity and where we actually live as what
                      Nasa's Black Marble does.
                    </div>
                    <div className="author_info">
                      Made by{" "}
                      <a href="https://rahulahire.com" target="_blank">
                        Rahul Ahire
                      </a>
                      .
                    </div>
                  </div>
                  <div className="scroll_footer_section">
                    <span>scroll down</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="country_section afg">
          <div className="country_name">Afghanistan</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/afghanistan_mountain.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              On map, Afghanistan may look like a decent size country but
              majority of its land is covered by tall mountains in central area,
              some of them ranging more than 7Km. Cities in Afghanistan mostly
              form a ring pattern which are connected by highways.
            </div>
          </div>
        </div>
        <div className="country_section ice">
          <div className="country_name">Iceland</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/iceland_glacier.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Similar to Afghanistan, vast area in Iceland are covered by
              glaciers and Ice caps making it unsuitable for human activity.
              Majority of Iceland's population live in its capital city
              Reykjavík.
            </div>
          </div>
        </div>
        <div className="country_section arg pin">
          <div className="country_name">
            Argentina <span className="country_year">{type}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/argentina_messi.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Perhaps you may recognise Argentina by Lionel Messi. The
              population distribution of Argentines is rather interesting as
              most of cities and town are situated around the railway station
              that seems evenly spread out throughout the country.
            </div>
          </div>
        </div>
        <div className="country_section rus">
          <div className="country_name">Russia</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/russia_doll.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              If you believe size matters then Russia is of your kind, spanning
              across 9,000Km and 11 time zones which obviously make it the
              largest country on our planet. Learn more about it{" "}
              <a
                href="https://youtu.be/HBlZlmXyR5M"
                target="_blank"
                title="
Why is Russia So DAMN BIG?"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="country_section aus">
          <div className="country_name">Australia</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/australia_kangaroo.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              For the land as big as Australia, very few people actually live on
              this continent due to most of it land being a dry desert making it
              one of the least densely populated country. 90% of Australians
              live in the costal areas.
            </div>
          </div>
        </div>
        <div className="country_section usa">
          <div className="country_name">USA</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/usa_nycStatue.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              In terms of population distribution, USA truly reflect its East vs
              West divide. The tall rocky mountains in the central region stop
              the rainy wind travelling war in the West as compared to the East
              side where land is more fertile thus supporting many lives.
            </div>
          </div>
        </div>
        <div className="country_section egy">
          <div className="country_name">Egypt</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/egypt_pyramid.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Egypt being situated in amidst of Desert, the river Nile support
              almost every Egyptian's lifeline as a result 90% of Egypt's
              population live near to the river.
            </div>
          </div>
        </div>
        <div className="country_section pak">
          <div className="country_name">Pakistan</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/pakistan_mohenJoDaro.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Similar to Egypt, most Pakistanis live around the Indus river
              which carries fresh water from himalyas.
            </div>
          </div>
        </div>
        <div className="country_section ind pin">
          <div className="country_name">
            India <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/india_bharatnatyam.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              India, the land of cultural diversity and also perhaps the most
              brightest nation in the night. The difference between 2012 and
              2016 Nasa's Black Map edition shows us the drastic change as just
              in span of 4 years 100's of Million of Indians have got access to
              electricity which previous they were deprived of. Learn more about
              it{" "}
              <a
                href="https://www.macrotrends.net/countries/IND/india/electricity-access-statistics"
                target="_blank"
              >
                here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="country_section cna pin">
          <div className="country_name">
            China <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/china_greatWallOfChina.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Compared to India, the case for China has been completed opposite.
              Compared to 2012, The 2016's version of Map appears to be more
              dimmer as many people in have moved toward the Urban areas in
              search for jobs.
            </div>
          </div>
        </div>
        <div className="country_section afc">
          <div className="country_name">Africa</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/africa_wildlife.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Country's economic often tell us the living standard of people and
              normally African aren't that rich compared to other nation and
              since most of them don't have access to electricity, this picture
              tells us why Africa is the way it is.
            </div>
          </div>
        </div>
        <div className="country_section kor">
          <div className="country_name">Korea</div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/korea_bts.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              In recent times, the korean culture may have got popular because
              of K-POP, films, etc. The effect of cold war with USA and Soviets
              still reflects till today in form in North and South Korea diving
              people with same background, language, culture, etc. It also
              signifies the progress of democratic South Korea as opposed to
              authoritarian regime in North Korea. Learn more about it{" "}
              <a
                href="https://youtu.be/Jt7hE12n11s"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="country_section yem pin">
          <div className="country_name">
            Yemen <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/yemen_people.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              The middle-East has always been unstable due to its internal
              conflit. Compared to 2012, the 2016's map show us how Yemenese
              have been deeply affect as many of property have been succumbed to
              mass destruction.
            </div>
          </div>
        </div>
        <div className="country_section syr pin">
          <div className="country_name">
            Syria <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img
                src="https://static.experientia.in/nasaBlackMarble/syria_war.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Similar has been the case for Syrians as many of them have to
              leave their home in order to survive.
            </div>
          </div>
        </div>
        <div className="country_section_m afg">
          <div className="country_name_m">Afghanistan</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/afghanistan_mountain.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              On map, Afghanistan may look like a decent size country but
              majority of its land is covered by tall mountains in central area,
              some of them ranging more than 7Km. Cities in Afghanistan mostly
              form a ring pattern which are connected by highways.
            </div>
          </div>
        </div>
        <div className="country_section_m ice">
          <div className="country_name_m">Iceland</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/iceland_glacier.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Similar to Afghanistan, vast area in Iceland are covered by
              glaciers and Ice caps making it unsuitable for human activity.
              Majority of Iceland's population live in its capital city
              Reykjavík.
            </div>
          </div>
        </div>
        <div className="country_section_m arg pin">
          <div className="country_name_m">Argentina</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/argentina_messi.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Perhaps you may recognise Argentina by Lionel Messi. The
              population distribution of Argentines is rather interesting as
              most of cities and town are situated around the railway station
              that seems evenly spread out throughout the country.
            </div>
          </div>
        </div>
        <div className="country_section_m rus">
          <div className="country_name_m">Russia</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/russia_doll.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              If you believe size matters then Russia is of your kind, spanning
              across 9,000Km and 11 time zones which obviously make it the
              largest country on our planet. Learn more about it{" "}
              <a
                href="https://youtu.be/HBlZlmXyR5M"
                target="_blank"
                title="
Why is Russia So DAMN BIG?"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="country_section_m aus">
          <div className="country_name_m">Australia</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/australia_kangaroo.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              For the land as big as Australia, very few people actually live on
              this continent due to most of it land being a dry desert making it
              one of the least densely populated country. 90% of Australians
              live in the costal areas.
            </div>
          </div>
        </div>
        <div className="country_section_m usa">
          <div className="country_name_m">USA</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/usa_nycStatue.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              In terms of population distribution, USA truly reflect its East vs
              West divide. The tall rocky mountains in the central region stop
              the rainy wind travelling war in the West as compared to the East
              side where land is more fertile thus supporting many lives.
            </div>
          </div>
        </div>
        <div className="country_section_m egy">
          <div className="country_name_m">Egypt</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/egypt_pyramid.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Egypt being situated in amidst of Desert, the river Nile support
              almost every Egyptian's lifeline as a result 90% of Egypt's
              population live near to the river.
            </div>
          </div>
        </div>
        <div className="country_section_m pak">
          <div className="country_name_m">Pakistan</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/pakistan_mohenJoDaro.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Similar to Egypt, most Pakistanis live around the Indus river
              which carries fresh water from himalyas.
            </div>
          </div>
        </div>
        <div className="country_section_m ind pin">
          <div className="country_name_m">
            India <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m ind_info">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/india_bharatnatyam.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              India, the land of cultural diversity and also perhaps the most
              brightest nation in the night. The difference between 2012 and
              2016 Nasa's Black Map edition shows us the drastic change as just
              in span of 4 years 100's of Million of Indians have got access to
              electricity which previous they were deprived of. Learn more about
              it{" "}
              <a
                href="https://www.macrotrends.net/countries/IND/india/electricity-access-statistics"
                target="_blank"
              >
                here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="country_section_m cna pin">
          <div className="country_name_m">
            China <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/china_greatWallOfChina.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Compared to India, the case for China has been completed opposite.
              Compared to 2012, The 2016's version of Map appears to be more
              dimmer as many people in have moved toward the Urban areas in
              search for jobs.
            </div>
          </div>
        </div>
        <div className="country_section_m afc">
          <div className="country_name_m">Africa</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/africa_wildlife.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Country's economic often tell us the living standard of people and
              normally African aren't that rich compared to other nation and
              since most of them don't have access to electricity, this picture
              tells us why Africa is the way it is.
            </div>
          </div>
        </div>
        <div className="country_section_m kor">
          <div className="country_name_m">Korea</div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/korea_bts.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              In recent times, the korean culture may have got popular because
              of K-POP, films, etc. The effect of cold war with USA and Soviets
              still reflects till today in form in North and South Korea diving
              people with same background, language, culture, etc. It also
              signifies the progress of democratic South Korea as opposed to
              authoritarian regime in North Korea. Learn more about it.
            </div>
          </div>
        </div>
        <div className="country_section_m yem pin">
          <div className="country_name_m">
            Yemen <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/yemen_people.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              The middle-East has always been unstable due to its internal
              conflit. Compared to 2012, the 2016's map show us how Yemenese
              have been deeply affect as many of property have been succumbed to
              mass destruction.
            </div>
          </div>
        </div>
        <div className="country_section_m syr pin">
          <div className="country_name_m">
            Syria <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img
                src="https://static.experientia.in/nasaBlackMarble/syria_war.webp"
                alt="country_image_feature"
              />
            </div>
            <div className="country_feature_info">
              Simailar has been the case for Syrians as many of them have to
              leave their home in order to survive.
            </div>
          </div>
        </div>
        <div className="inspirationFrom">
          <div className="inspirationFromWrapper">
            <div className="inspirationHead">An Inspiration from...</div>
            <div className="inspirationInfo">
              It was long ago when I had watched this video and was really
              surprised with it. I knew{" "}
              <a
                href="https://threejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Three.js
              </a>{" "}
              since 2019 and the portfolio people created with it was truly
              refreshing and I always wanted to make my own demo. I really like
              the intersection of stats, data and visual representation and this
              demo seemed perfect in my eyes as a beginning step. Starting from
              Sept 2022 I started learning numberous things to make it live and
              after months of trial and error finally I launched it on 27 Jan
              2023. - Rahul Ahire.
            </div>
            <a
              href="https://youtu.be/ki-hoy-3ea8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.experientia.in/nasaBlackMarble/rllNasaBlackMarbleVideo.webp"
                alt=""
                height={300}
              />
            </a>
            <div className="nasaBlackMarblePdf">
              <a
                href="https://static.experientia.in/nasaBlackMarble/earth_at_night_508.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the PDF Report
              </a>
            </div>
          </div>
        </div>
        <div className="contributionCredits">
          <div className="contributionHead">
            Special thanks to these folks who helped me during all these process
          </div>
          <div className="contributionPeopleList">
            <ol>
              <li>
                Paul Henshel{" "}
                <a
                  href="https://twitter.com/0xca0a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @0xca0a
                </a>{" "}
                for answering all my doubts in React Three Fiber Github Repo
                <a
                  href="https://github.com/pmndrs/react-three-fiber/discussions?discussions_q=author:MeRahulAhire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [1]
                </a>
                , Reddit
                <a
                  href="https://www.reddit.com/r/reactjs/comments/z1yxyu/comment/ixdw2ve/?utm_source=share&utm_medium=web2x&context=3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [2]
                </a>{" "}
                and Threejs Discourse
                <a
                  href="https://discourse.threejs.org/t/how-to-preload-the-texture-and-assets-upfront-before-using-it/46802"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [3]
                </a>
                .
              </li>
              <li>
                Don McCurdy{" "}
                <a
                  href="https://twitter.com/donrmccurdy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @donrmccurdy
                </a>{" "}
                for patiently answering all my queries in Discord
                <a
                  href="https://discord.com/channels/685241246557667386/1046483007608987678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [1]
                </a>{" "}
                and Threejs Discourse
                <a
                  href="https://discourse.threejs.org/t/why-doesnt-my-canvas-texture-look-crisper-and-accurate-when-i-zoom-it/46122"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [2]
                </a>
                .
              </li>
              <li>
                Bruno Simons{" "}
                <a
                  href="https://twitter.com/bruno_simon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @bruno_simon
                </a>{" "}
                for his Threejs Journey Course [This is not sponsered].
              </li>
              <li>
                Mike on{" "}
                <a
                  href="https://gis.stackexchange.com/a/444846/213228"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GIS StackExchange
                </a>{" "}
                for helping me with Openlayers.
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/devdattat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Devdetta Tengshe
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/chinmayshaligram/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chinmay Shaligram
                </a>{" "}
                for helping me a bit on Qgis for creating map tiles.
              </li>
              <li>
                My friend Vinayak Thube{" "}
                <a
                  href="http://instagram.com/vindrawins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @vindrawins
                </a>{" "}
                for testing and giving me continuous feedback during the
                development phase.
              </li>
            </ol>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
