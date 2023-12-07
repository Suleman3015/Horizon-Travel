import React, { useState, useEffect } from "react";
import { TourBannerStatic } from "../static/tourBanner.static";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
function TourBanner() {
  const [turn, setTurn] = useState([]);

  useEffect(() => {
    const run = TourBannerStatic.reduce((condition, item) => {
      condition[item.id] = false;
      return condition;
    }, {});

    setTurn(run);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2300 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2300, min: 1400 },
      items: 3,
    },
    smalldesktop: {
      breakpoint: { max: 1400, min: 1250 },
      items: 3,
    },
  
    tablet: {
      breakpoint: { max: 1250, min: 700},
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <TourBannerSection>
      <Carousel
        infinite={true}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "smalldesktop",
          "superLargeDesktop",
        ]}
        autoPlay="true"
        autoPlaySpeed={3000}
        responsive={responsive}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {turn &&
          TourBannerStatic.map((items, index) => {
            return (
              <BannerMain
                key={index}
                onMouseOver={() => setTurn({ ...turn, [index]: true })}
                onMouseOut={() => setTurn({ ...turn, [index]: false })}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transform: turn[index] ? "rotateY(180deg)" : "rotateY(0)",
                    transition: "transform 0.6s",
                  }}
                >
                  <img
                    src={items.frontImage}
                    alt={items.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      // minHeight:"500px",
                      // maxHeight:"800px",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      borderRadius: "15px",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  />
                  <img
                    src={items.backImage}
                    alt={items.alt}
                    style={{
                      width: "100%",
                      height:"100%",
                      // minHeight:"500px",
                      // maxHeight:"800px",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      borderRadius: "15px",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  />
                </div>
              </BannerMain>
            );
          })}
      </Carousel>
    </TourBannerSection>
  );
}

const TourBannerSection = styled.div`
  width: 80%;
  margin: 100px auto 100px auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const BannerMain = styled.div`
  perspective: 1000px;
  height: 550px;
  margin: 20px;
`;



export default TourBanner;
