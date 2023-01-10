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

    window.addEventListener('resize', () => {
      windowHeight = window.innerHeight;
      console.log(windowHeight)
    })
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
    let afghanistan = true;
    let iceland = true;
    let argentina = true;
    let argentina2 = true
    let russia = true;
    let australia = true;
    let usa = true;
    let egypt = true;
    let pakistan = true;
    let india = true;
    let india2 = true
    let china = true;
    let china2 = true
    let africa = true;
    let korea = true;
    let yemen = true;
    let yemen2 = true
    let syria = true;
    let syria2 = true;
    scroll.addEventListener("end", () => {
      
      let scrollPosition = window.scrollY / windowHeight * 100

      if(scrollDirection === 'up'){
        if(scrollPosition > 25 && scrollPosition < 125 && afghanistan){
          windowScrollTo(1);
          afghanistan = false;
        }
        if(scrollPosition > 125 && scrollPosition < 225 && iceland){
          windowScrollTo(2)
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 225 && scrollPosition < 325 && argentina){
          windowScrollTo(3)
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 325 && scrollPosition < 425 && argentina2){
          windowScrollTo(4);
          argentina2 = false;
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 425 && scrollPosition < 525 && russia){
          windowScrollTo(5)
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 525 && scrollPosition < 625 && australia){
          windowScrollTo(6);
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 625 && scrollPosition < 725 && usa){
          windowScrollTo(7);
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 725 && scrollPosition < 825 && egypt){
          windowScrollTo(8);
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 825 && scrollPosition < 925 && pakistan){
          windowScrollTo(9);
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 925 && scrollPosition < 1025 && india){
          windowScrollTo(10);
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
          
        }
        if(scrollPosition > 1025 && scrollPosition < 1125 && india2){
          windowScrollTo(11);
          setYear(2012);
          india2 = false;
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
          
        }
        if(scrollPosition > 1125 && scrollPosition < 1225 && china){
          windowScrollTo(12);
          setYear(2016);
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
          
        }
        if(scrollPosition > 1225 && scrollPosition < 1325 && china2){
          windowScrollTo(13);
          setYear(2012);
          china2 = false
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
          
        }
        if(scrollPosition > 1325 && scrollPosition < 1425 && africa){
          windowScrollTo(14);
          setYear(2016);
          africa = false;
          china2 = false
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;

          
        }
        if(scrollPosition > 1425 && scrollPosition < 1525 && korea){
          windowScrollTo(15);
          korea = false;
          africa = false;
          china2 = false
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;

        }
        if(scrollPosition > 1525 && scrollPosition < 1625 && yemen){
          windowScrollTo(16);
          yemen = false;
          korea = false;
          africa = false;
          china2 = false
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
          
        }
        if(scrollPosition > 1625 && scrollPosition < 1725 && yemen2){
          windowScrollTo(17);
          setYear(2012);
          yemen2 = false
          yemen = false;
          korea = false;
          africa = false;
          china2 = false
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
          
        }
        if(scrollPosition > 1725 && scrollPosition < 1825 && syria){
          windowScrollTo(18);
          setYear(2016);
          syria = false;
          yemen2 = false
          yemen = false;
          korea = false;
          africa = false;
          china2 = false
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
        }
        if(scrollPosition > 1825 && scrollPosition < 1925 && syria2){
          windowScrollTo(19);
          setYear(2012);
          syria2 = false
          syria = false;
          yemen2 = false
          yemen = false;
          korea = false;
          africa = false;
          china2 = false
          china = false;
          india2 = false
          india = false;
          pakistan = false;
          egypt = false;
          usa = false;
          australia = false;
          russia = false;
          argentina2 = false
          argentina = false;
          iceland = false;
          afghanistan = false;
          
        }

      }

      
      
    if(scrollDirection == 'down'){
      if(scrollPosition > 1799 && scrollPosition < 1899 && !syria2){ // go to syria
        windowScrollTo(18);
        setYear(2016);
        syria2 = true
      }
      if(scrollPosition > 1699 && scrollPosition < 1799 && !syria){  
        windowScrollTo(17);
        setYear(2012);
        syria = true;
        syria2 = true
      }
      if(scrollPosition > 1599 && scrollPosition < 1699 && !yemen2){ 
        windowScrollTo(16);
        setYear(2016);
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 1499 && scrollPosition < 1599 && !yemen){ 
        windowScrollTo(15);
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 1399 && scrollPosition < 1499 && !korea){ 
        windowScrollTo(14);
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 1299 && scrollPosition < 1399 && !africa){ 
        windowScrollTo(13);
        setYear(2012);
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
        
      }
      if(scrollPosition > 1199 && scrollPosition < 1299 && !china2){ 
        windowScrollTo(12);
        setYear(2016);
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
        
      }
      if(scrollPosition > 1099 && scrollPosition < 1199 && !china){ 
        windowScrollTo(11);
        setYear(2012);
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
        
      }
      if(scrollPosition > 999 && scrollPosition < 1099 && !india2){ 
        windowScrollTo(10);
        setYear(2016);
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 899 && scrollPosition < 999 && !india){ 
        windowScrollTo(9);
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 799 && scrollPosition < 899 && !pakistan){ 
        windowScrollTo(8);
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 699 && scrollPosition < 799 && !egypt){ 
        windowScrollTo(7);
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 599 && scrollPosition < 699 && !usa){ 
        windowScrollTo(6);
        usa = true;
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 499 && scrollPosition < 599 && !australia){ 
        windowScrollTo(5);
        australia = true;
        usa = true;
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 399 && scrollPosition < 499 && !russia){ 
        windowScrollTo(4);
        russia = true;
        australia = true;
        usa = true;
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 299 && scrollPosition < 399 && !argentina2){ 
        windowScrollTo(3);
        argentina2 = true
        russia = true;
        australia = true;
        usa = true;
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 199 && scrollPosition < 299 && !argentina){ 
        windowScrollTo(2);
        argentina = true;
        argentina2 = true
        russia = true;
        australia = true;
        usa = true;
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition > 99 && scrollPosition < 199 && !iceland){ 
        windowScrollTo(1);
        iceland = true;
        argentina = true;
        argentina2 = true
        russia = true;
        australia = true;
        usa = true;
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
      if(scrollPosition < 99 && !afghanistan){ 
        windowScrollTo(0);
        afghanistan = true;
        iceland = true;
        argentina = true;
        argentina2 = true
        russia = true;
        australia = true;
        usa = true;
        egypt = true;
        pakistan = true;
        india = true;
        india2 = true
        china = true;
        china2 = true
        africa = true;
        korea = true;
        yemen = true;
        yemen2 = true
        syria = true;
        syria2 = true;
      }
    }

  });
    
    
    return () => {
      ctx.revert();
    };
    
  }, [])
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
              Egypt being situated in amidst of Desert, the river Nile support almost every Egyptian's lifeline as a result 90% of Egypt's population live near to the river.
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
              India, the land of cultural diversity and also perhaps the most brightest nation in the night. The difference between 2012 and 2016 Nasa's Black Map edition shows us the drastic change as just in span of 4 years 100's of Million of Indians have got access to electricity which previous they were deprived of. Learn more about it <a href="https://www.macrotrends.net/countries/IND/india/electricity-access-statistics" target='_blank'>here</a>. 
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
              In recent times, the korean culture may have got popular because of K-POP, films, etc. The effect of cold war with USA and Soviets still reflects till today in form in North and South Korea diving people with same background, language, culture, etc. It also signifies the progress of democratic South Korea as opposed to authoritarian regime in North Korea. Learn more about it <a href="https://youtu.be/Jt7hE12n11s" target="_blank" rel="noopener noreferrer">here</a>.
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
            Egypt being situated in amidst of Desert, the river Nile support almost every Egyptian's lifeline as a result 90% of Egypt's population live near to the river.
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
            India, the land of cultural diversity and also perhaps the most brightest nation in the night. The difference between 2012 and 2016 Nasa's Black Map edition shows us the drastic change as just in span of 4 years 100's of Million of Indians have got access to electricity which previous they were deprived of. Learn more about it <a href="https://www.macrotrends.net/countries/IND/india/electricity-access-statistics" target='_blank'>here</a>.
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
            In recent times, the korean culture may have got popular because of K-POP, films, etc. The effect of cold war with USA and Soviets still reflects till today in form in North and South Korea diving people with same background, language, culture, etc. It also signifies the progress of democratic South Korea as opposed to authoritarian regime in North Korea. Learn more about it.
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
