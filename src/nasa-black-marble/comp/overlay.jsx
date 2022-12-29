import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import Scroll from './scrollStatus'
import "../style/overlay.css";

export default function Overlay() {
  const [year, setYear] = useState('2016')

  useEffect(() => {
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
          opacity: 1 ,
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
      const pin = gsap.utils.toArray('.pin');
      pin.forEach(pin => {
        gsap.to(pin, {
          scrollTrigger : {
            trigger : pin, 
            start : "top top",
            end : "100%",
            pin : true,
          }
        })
      })
    });

    let scroll = new Scroll(50);

    let windowHeight = window.innerHeight
    const windowScrollTo = (number) => {
      gsap.to(window, {duration: 0.5, scrollTo: windowHeight * number, ease: "circ.out"});
    };
    let overlayCount = 0
    const overlayCounter = (number) => {
      setTimeout(() => {
        overlayCount = number
      }, 1000);
    }
    // const overlayScrollLogic = (number) => {
    //   let scrollPosition = Math.floor(window.scrollY / window.innerHeight + 0.01);
    //   console.log(scrollPosition, pagePostion, overlayCount);
    //   if(scrollPosition === number && overlayCount === number){
    //     windowScrollTo(number + 1)
    //     overlayCounter(number + 1)
    //   }
    // }
    let oldValue = 0
    let newValue = 0
    let scrollDirection
    window.addEventListener("scroll", () => {
      newValue = window.pageYOffset;
      if (oldValue < newValue) {
        scrollDirection = 'up';
      } else if (oldValue > newValue) {
        scrollDirection = 'down'
      }
      oldValue = newValue;
    })

    scroll.addEventListener("end", () => {
      let pagePostion = window.scrollY
      let scrollPosition = Math.floor(window.scrollY / window.innerHeight + 0.01);
      // console.log(scrollDirection, scrollPosition, pagePostion, overlayCount);
      // if(scrollPosition === 0 && overlayCount === 0){
      //   windowScrollTo(1)
      //   overlayCounter(1)
      // }
      // if(scrollPosition === 1 && overlayCount === 1){
      //   windowScrollTo(2)
      //   overlayCounter(2)
      // }
      // if(scrollPosition === 2 && overlayCount === 2){
      //   windowScrollTo(3)
      //   overlayCounter(3)
      // }
      // if(scrollPosition === 3 && overlayCount === 3){
      //   windowScrollTo(4)
      //   overlayCounter(4)
      // }
      // if(scrollPosition === 4 && overlayCount === 4){
      //   windowScrollTo(5)
      //   overlayCounter(5)
      // }
      // if(scrollPosition === 5 && overlayCount === 5){
      //   windowScrollTo(6)
      //   overlayCounter(6)
      // }
      // if(scrollPosition === 6 && overlayCount === 6){
      //   windowScrollTo(7)
      //   overlayCounter(7)
      // }
      // if(scrollPosition === 7 && overlayCount === 7){
      //   windowScrollTo(8)
      //   overlayCounter(8)
      // }
      // if(scrollPosition === 8 && overlayCount === 8){
      //   windowScrollTo(9)
      //   overlayCounter(9)
      // }
      // if(scrollPosition === 9 && overlayCount === 9){
      //   windowScrollTo(10)
      //   overlayCounter(10)
      // }
      // if(scrollPosition === 10 && overlayCount === 10){
      //   windowScrollTo(11)
      //   overlayCounter(11)
      // }
      // if(scrollPosition === 11 && overlayCount === 11){
      //   windowScrollTo(12)
      //   overlayCounter(12)
      // }
      // if(scrollPosition === 12 && overlayCount === 12){
      //   windowScrollTo(13)
      //   overlayCounter(13)
      // }
      // if(scrollPosition === 13 && overlayCount === 13){
      //   windowScrollTo(14)
      //   overlayCounter(14)
      // }
      // if(scrollPosition === 14 && overlayCount === 14){
      //   windowScrollTo(15)
      //   overlayCounter(15)
      // }
      // if(scrollPosition === 15 && overlayCount === 15){
      //   windowScrollTo(16)
      //   overlayCounter(16)
      // }
      // if(scrollPosition === 16 && overlayCount === 16){
      //   windowScrollTo(17)
      //   overlayCounter(17)
      // }
      // if(scrollPosition === 17 && overlayCount === 17){
      //   windowScrollTo(18)
      //   overlayCounter(18)
      // }
      // if(scrollPosition === 18 && overlayCount === 18){
      //   windowScrollTo(19)
      //   overlayCounter(19)
      // }
      
    // if(scrollDirection == 'down'){
    //   // console.log('down', scrollPosition, pagePostion, overlayCount)
    //   if(scrollPosition === 18 && overlayCount === 19){
    //     windowScrollTo(18)
    //     overlayCounter(18)
    //   }
    //   if(scrollPosition === 17 && overlayCount === 18){
    //     windowScrollTo(17)
    //     overlayCounter(17)
    //   }
    //   if(scrollPosition === 16 && overlayCount === 17){
    //     windowScrollTo(16)
    //     overlayCounter(16)
    //   }
    //   if(scrollPosition === 15 && overlayCount === 16){
    //     windowScrollTo(15)
    //     overlayCounter(15)
    //   }
    //   if(scrollPosition === 14 && overlayCount === 15){
    //     windowScrollTo(14)
    //     overlayCounter(14)
    //   }
    //   if(scrollPosition === 13 && overlayCount === 14){
    //     windowScrollTo(13)
    //     overlayCounter(13)
    //   }
    //   if(scrollPosition === 12 && overlayCount === 13){
    //     windowScrollTo(12)
    //     overlayCounter(12)
    //   }
    //   if(scrollPosition === 11 && overlayCount === 12){
    //     windowScrollTo(11)
    //     overlayCounter(11)
    //   }
    //   if(scrollPosition === 10 && overlayCount === 11){
    //     windowScrollTo(10)
    //     overlayCounter(10)
    //   }
    //   if(scrollPosition === 9 && overlayCount === 10){
    //     windowScrollTo(9)
    //     overlayCounter(9)
    //   }
    //   if(scrollPosition === 8 && overlayCount === 9){
    //     windowScrollTo(8)
    //     overlayCounter(8)
    //   }
    //   if(scrollPosition === 7 && overlayCount === 8){
    //     windowScrollTo(7)
    //     overlayCounter(7)
    //   }
    //   if(scrollPosition === 6 && overlayCount === 7){
    //     windowScrollTo(6)
    //     overlayCounter(6)
    //   }
    //   if(scrollPosition === 5 && overlayCount === 6){
    //     windowScrollTo(5)
    //     overlayCounter(5)
    //   }
    //   if(scrollPosition === 4 && overlayCount === 5){
    //     windowScrollTo(4)
    //     overlayCounter(4)
    //   }
    //   if(scrollPosition === 3 && overlayCount === 4){
    //     windowScrollTo(3)
    //     overlayCounter(3)
    //   }
    //   if(scrollPosition === 2 && overlayCount === 3){
    //     windowScrollTo(2)
    //     overlayCounter(2)
    //   }
    //   if(scrollPosition === 1 && overlayCount === 2){
    //     windowScrollTo(1)
    //     overlayCounter(1)
    //   }
    //   if(scrollPosition === 0 && overlayCount === 1){
    //     windowScrollTo(0)
    //     overlayCounter(0)
    //   }
    // }

  });
    
    
    return () => {
      ctx.revert();
    };
    
  }, [])
  return (
    <>
      <section className="overlay_wrapper">
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
        <div className="country_section afg">
          <div className="country_name">
            Afghanistan
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/afghanistan_mountain.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              On map, Afghanistan may look like a decent size country but majority of its land is covered by tall mountains in central area, some of them ranging more than 7Km. Cities in Afghanistan mostly form a ring pattern which are connected by highways.
            </div>
          </div>
        </div>
        <div className="country_section ice">
          <div className="country_name">
            Iceland
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/iceland_glacier.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              Similar to Afghanistan, vast area in Iceland are covered by glaciers and Ice caps making it unsuitable for human activity. Majority of Iceland's population live in its capital city Reykjavík.
            </div>
          </div>
        </div>
        <div className="country_section arg pin">
          <div className="country_name">
            Argentina
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/argentina_messi.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              Perhaps you may recognise Argentina by Leonal Messi. The population distribution of Argentines is rather interesting as most of cities and town are situated around the railway station that seems evenly spread out throughout the country.
            </div>
          </div>
        </div>
        <div className="country_section rus">
          <div className="country_name">
            Russia
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/russia_doll.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              If you believe size matters then Russia is of your kind, spanning across 9,000Km and 11 time zones which obviously make it the largest country on our planet. Learn more about it <a href="https://youtu.be/HBlZlmXyR5M" target="_blank" title="
Why is Russia So DAMN BIG?" rel="noopener noreferrer">here</a>.
            </div>
          </div>
        </div>
        <div className="country_section aus">
          <div className="country_name">
            Australia
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/australia_kangaroo.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              For the land as big as Australia, very few people actually live on this continent due to most of it land being a dry desert making it one of the least densely populated country. 90% of Australians live in the costal areas.
            </div>
          </div>
        </div>
        <div className="country_section usa">
          <div className="country_name">
            USA
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/usa_nycStatue.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              In terms of population distribution, USA truly reflect its East vs West divide. The tall rocky mountains in the central region stop the rainy wind travelling war in the West as compared to the East side where land is more fertile thus supporting many lives. 
            </div>
          </div>
        </div>
        <div className="country_section egy">
          <div className="country_name">
            Egypt
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/egypt_pyramid.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              Egypt being situated in amidst of Desert, the river Nile support almost every Egyptian's lifeline as a result almost 90% of Egypt's population live near to the river.
            </div>
          </div>
        </div>
        <div className="country_section pak">
          <div className="country_name">
            Pakistan
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/pakistan_mohenJoDaro.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              Similar to Egypt, most Pakistanis live around the Indus river which carries fresh water from himalyas.
            </div>
          </div>
        </div>
        <div className="country_section ind pin">
          <div className="country_name">
            India <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/india_bharatnatyam.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              India, the land of cultural diversity and also perhaps the most brightest nation in the night. The difference between 2012 and 2016 Nasa's Black Map edition in content to India is shows us the drastic change as just in span of 4 years 100's of Million have got access to electricity which previous they were deprived of. Learn more about it <a href="https://www.macrotrends.net/countries/IND/india/electricity-access-statistics" target='_blank'>here</a>. 
            </div>
          </div>
        </div>
        <div className="country_section cna pin">
          <div className="country_name">
            China <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/china_greatWallOfChina.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              Compared to India, the case for China has been completed opposite. Compared to 2012, The 2016's version of Map appears to be more dimmer as many people in have moved toward the Urban areas in search for jobs.
            </div>
          </div>
        </div>
        <div className="country_section afc">
          <div className="country_name">
            Africa
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/africa_wildlife.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              Country's economic often tell us the living standard of people and normally African aren't that rich compared to other nation and since most of them don't have access to electricity, this picture tells us why Africa is the way it is. 
            </div>
          </div>
        </div>
        <div className="country_section kor">
          <div className="country_name">
            Korea
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/korea_bts.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              In recent times, the korean culture may have got popular of K-POP, films, etc. The effect of cold war with USA and Soviets still reflects till today in form in North and South Korea diving people with same background, language, culture, etc. It also signifies the progress of democratic South Korea as opposed to authoritarian regime in North Korea. Learn more about it <a href="https://youtu.be/Jt7hE12n11s" target="_blank" rel="noopener noreferrer"></a>.
            </div>
          </div>
        </div>
        <div className="country_section yem pin">
          <div className="country_name">
            Yemen <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/yemen_people.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              The middle-East has always been unstable due to its internal conflit. Compared to 2012, the 2016's map show us how Yemenese have been deeply affect as many of property have been succumbed to mass destruction.
            </div>
          </div>
        </div>
        <div className="country_section syr pin">
          <div className="country_name">
            Syria <span className="country_year">{year}</span>
          </div>
          <div className="country_card">
            <div className="country_feature_image">
              <img src="https://static.experientia.in/nasaBlackMarble/syria_war.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
              Similar has been the case for Syrians as many of them have to leave their home in order to survive.
            </div>
          </div>
        </div>
        <div className="country_section_m afg">
          <div className="country_name_m">
            Afghanistan
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/afghanistan_mountain.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            On map, Afghanistan may look like a decent size country but majority of its land is covered by tall mountains in central area, some of them ranging more than 7Km. Cities in Afghanistan mostly form a ring pattern which are connected by highways.
            </div>
          </div>
        </div>
        <div className="country_section_m ice">
          <div className="country_name_m">
            Iceland
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/iceland_glacier.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            Similar to Afghanistan, vast area in Iceland are covered by glaciers and Ice caps making it unsuitable for human activity. Majority of Iceland's population live in its capital city Reykjavík.
            </div>
          </div>
        </div>
        <div className="country_section_m arg pin">
          <div className="country_name_m">
            Argentina
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/argentina_messi.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            Perhaps you may recognise Argentina by Leonal Messi. The population distribution of Argentines is rather interesting as most of cities and town are situated around the railway station that seems evenly spread out throughout the country.
            </div>
          </div>
        </div>
        <div className="country_section_m rus">
          <div className="country_name_m">
            Russia
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/russia_doll.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            If you believe size matters then Russia is of your kind, spanning across 9,000Km and 11 time zones which obviously make it the largest country on our planet. Learn more about it <a href="https://youtu.be/HBlZlmXyR5M" target="_blank" title="
Why is Russia So DAMN BIG?" rel="noopener noreferrer">here</a>.
            </div>
          </div>
        </div>
        <div className="country_section_m aus">
          <div className="country_name_m">
            Australia
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/australia_kangaroo.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            For the land as big as Australia, very few people actually live on this continent due to most of it land being a dry desert making it one of the least densely populated country. 90% of Australians live in the costal areas.
            </div>
          </div>
        </div>
        <div className="country_section_m usa">
          <div className="country_name_m">
            USA
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/usa_nycStatue.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            In terms of population distribution, USA truly reflect its East vs West divide. The tall rocky mountains in the central region stop the rainy wind travelling war in the West as compared to the East side where land is more fertile thus supporting many lives.
            </div>
          </div>
        </div>
        <div className="country_section_m egy">
          <div className="country_name_m">
            Egypt
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/egypt_pyramid.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            In terms of population distribution, USA truly reflect its East vs West divide. The tall rocky mountains in the central region stop the rainy wind travelling war in the West as compared to the East side where land is more fertile thus supporting many lives.
            </div>
          </div>
        </div>
        <div className="country_section_m pak">
          <div className="country_name_m">
            Pakistan
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/pakistan_mohenJoDaro.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            Similar to Egypt, most Pakistanis live around the Indus river which carries fresh water from himalyas.
            </div>
          </div>
        </div>
        <div className="country_section_m ind pin">
          <div className="country_name_m">
            India <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m ind_info">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/india_bharatnatyam.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            India, the land of cultural diversity and also perhaps the most brightest nation in the night. The difference between 2012 and 2016 Nasa's Black Map edition in content to India is shows us the drastic change as just in span of 4 years 100's of Million have got access to electricity which previous they were deprived of. Learn more about it <a href="https://www.macrotrends.net/countries/IND/india/electricity-access-statistics" target='_blank'>here</a>.
            </div>
          </div>
        </div>
        <div className="country_section_m cna pin">
          <div className="country_name_m">
            China <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/china_greatWallOfChina.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            Compared to India, the case for China has been completed opposite. Compared to 2012, The 2016's version of Map appears to be more dimmer as many people in have moved toward the Urban areas in search for jobs.
            </div>
          </div>
        </div>
        <div className="country_section_m afc">
          <div className="country_name_m">
            Africa
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/africa_wildlife.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            Country's economic often tell us the living standard of people and normally African aren't that rich compared to other nation and since most of them don't have access to electricity, this picture tells us why Africa is the way it is.
            </div>
          </div>
        </div>
        <div className="country_section_m kor">
          <div className="country_name_m">
            Korea
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/korea_bts.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            In recent times, the korean culture may have got popular of K-POP, films, etc. The effect of cold war with USA and Soviets still reflects till today in form in North and South Korea diving people with same background, language, culture, etc. It also signifies the progress of democratic South Korea as opposed to authoritarian regime in North Korea. Learn more about it.
            </div>
          </div>
        </div>
        <div className="country_section_m yem pin">
          <div className="country_name_m">
            Yemen <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/yemen_people.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            The middle-East has always been unstable due to its internal conflit. Compared to 2012, the 2016's map show us how Yemenese have been deeply affect as many of property have been succumbed to mass destruction.
            </div>
          </div>
        </div>
        <div className="country_section_m syr pin">
          <div className="country_name_m">
            Syria <span className="country_year">{year}</span>
          </div>
          <div className="country_card_m">
            <div className="country_feature_image_m">
              <img src="https://static.experientia.in/nasaBlackMarble/syria_war.webp" alt="country_image_feature" />
            </div>
            <div className="country_feature_info">
            Simailar has been the case for Syrians as many of them have to leave their home in order to survive.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
