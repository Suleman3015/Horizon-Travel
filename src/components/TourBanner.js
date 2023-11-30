import React, { useState } from "react";
import Dubai from "../Images/postBanner/dubai.png";
import DubaiBack from "../Images/postBanner/dubaiBack.png";
import Azerbaijan from "../Images/postBanner/azerbaijan.png";
import AzerbaijanBack from "../Images/postBanner/azerbaijanBack.png";
import Hunza from "../Images/postBanner/hunza.png";
import { TourBannerStatic } from "../static/tourBanner.static";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
function TourBanner() {
  const [isFlipped, setIsFlipped] = useState({
    image1: false,
    image2: false,
    image3: false,
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2300 },
      items: 3,
    },
    smalldesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2300, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 1024 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <TourBannerSection>
      {/* <TbSemi
      > */}
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
          //   display: "flex",
          // justifyContent: "space-around",
          width: "100%",
          height: "100%",
        }}
      >
        <BannerMain
          onMouseOver={() => setIsFlipped({ ...isFlipped, image1: true })}
          onMouseOut={() => setIsFlipped({ ...isFlipped, image1: false })}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transform: isFlipped.image1 ? "rotateY(180deg)" : "rotateY(0)",
              transition: "transform 0.6s",
            }}
          >
            <img
              src={Dubai}
              alt= "horizon travels,tours,paksitan tours,tourism,tourism company,travel pakistan,tours,pakistan tour,pakistan tours "
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                borderRadius: "15px",
                // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
            />
            <img
              src={DubaiBack}
              alt= "horizon travels,tours,paksitan tours,tourism,tourism company,travel pakistan,tours,pakistan tour,pakistan tours "
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            />
          </div>
        </BannerMain>

        <BannerMain
          onMouseOver={() => setIsFlipped({ ...isFlipped, image2: true })}
          onMouseOut={() => setIsFlipped({ ...isFlipped, image2: false })}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transform: isFlipped.image2 ? "rotateY(180deg)" : "rotateY(0)",
              transition: "transform 0.6s",
            }}
          >
            <img
              src={Azerbaijan}
              alt= "horizon travels,tours,paksitan tours,tourism,tourism company,travel pakistan,tours,pakistan tour,pakistan tours "
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            />
            <img
              src={AzerbaijanBack}
              alt= "horizon travels,tours,paksitan tours,tourism,tourism company,travel pakistan,tours,pakistan tour,pakistan tours "
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            />
          </div>
        </BannerMain>

        <BannerMain

          onMouseOver={() => setIsFlipped({ ...isFlipped, image3: true })}
          onMouseOut={() => setIsFlipped({ ...isFlipped, image3: false })}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transform: isFlipped.image3 ? "rotateY(180deg)" : "rotateY(0)",
              transition: "transform 0.6s",
            }}
          >
            <img
              src={Hunza}
              alt= "horizon travels,tours,paksitan tours,tourism,tourism company,travel pakistan,tours,pakistan tour,pakistan tours "
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            />
            <img
              src={Hunza}
              alt= "horizon travels,tours,paksitan tours,tourism,tourism company,travel pakistan,tours,pakistan tour,pakistan tours "
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            />
          </div>
        </BannerMain>
      </Carousel>
      {/* </TbSemi> */}
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

const TbSemi = styled.div`
  width: 100%;
  height: 100%;
`;

const BannerMain = styled.div`
  perspective: 1000px;
  height: 500px;
  margin: 30px;
`;


export default TourBanner;
