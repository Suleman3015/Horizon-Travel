import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InternationalToursStatic } from "../static/internationTour";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function InternationalTours() {
  // const [defaultImage, setDefaultImage] = useState({});

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  // const handleErrorImage = (data) => {
  //   setDefaultImage((prev) => ({
  //     ...prev,
  //     [data.target.alt]: data.target.alt,
  //     linkDefault: ErrorImg,
  //   }));
  // };

  return (
    <TourParent>
      <Fade>
        <RecommendedTour>
          <h1>International Tours</h1>
        </RecommendedTour>
        <StyledCardSlider>
          <Carousel responsive={responsive}>
            {InternationalToursStatic.map((item) => {
              if (item.feature) {
                const message = `Hi i am interested in ${item.days} ${item.title} Tour.`;
                const msg = `https://api.whatsapp.com/send?phone=923122975541&text=${message}`;
                return (
                  <Card
                    style={{
                      margin: "30px 0px",
                    }}
                    key={item.id}
                  >
                    <div className="productsPageSavings">
                      <p>Hot</p>
                    </div>
                    <div className="card-top">
                      <img
                        src={item.img}
                        alt={item.title}
                        // onError={handleErrorImage}
                      />
                      <div
                        style={{
                          display: "flex",
                          width: "95%",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0px 10px",
                          marginTop: "10px",
                        }}
                      >
                        <TextStyle>{item.title}</TextStyle>
                        {/* <TextPrice>{item.price}</TextPrice> */}
                      </div>
                    </div>
                    <div className="card-bottom">
                      <TextSpan className="category">{item.days}</TextSpan>
                      <a href={msg}>
                        <ButtonTheme>Query?</ButtonTheme>
                      </a>
                    </div>
                  </Card>
                );
              } else {
                return null;
              }
            })}
          </Carousel>
          <TourButton>
            <ViewButton to="/international">View More</ViewButton>
          </TourButton>
        </StyledCardSlider>
      </Fade>
    </TourParent>
  );
}

const RecommendedTour = styled.div`
  z-index: 3;
  color: #03367e;
  margin-top: 20px;
  margin-bottom: -50px;
  h1 {
    @media (max-width: 768px) {
      text-align: center;
      font-size:1.8rem;
    }
  }
`;

const TourParent = styled.div`
  width: 80%;
  margin: 100px auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledCardSlider = styled.div`
  margin: 70px 0px;
  position: relative;
`;

const Card = styled.div`
  border: 1px solid #fff;
  background: white;
  border-radius: 18px;
  display:flex;
  flex-direction:column;
  border-bottom:7px solid #03367e;
  border-top:none;
  border-left:none;
  border-right:none;
  justify-content:space-between;
  overflow: hidden;
  ${"" /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */}
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 500px;
  margin: 20px !important;
  ${"" /* color: #fff; */}
  cursor: pointer;
  .productsPageSavings {
    width: 80px;
    height: 25px;
    position: absolute;
    z-index: 2;
    background: linear-gradient(
      257deg,
      rgb(2, 11, 59) 0%,
      rgb(9, 19, 160) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 18px;
    border-bottom-right-radius: 30px;
    color: white;
    letter-spacing: 2px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    p {
      font-size: 12px;
    }
  }

  .card-top {
    h1 {
      font-size: 1.5rem;
      margin: 20px;
    }

    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      background: black;
    }
  }

  .card-bottom {
    margin: 10px 10px;
    width:100;
    display:flex;
    justify-content:space-between;
    .category {
      position: relative;

      }
    }
  }
`;

const TourButton = styled.div`
  position: absolute;
  bottom: -60px;
  right: 30px;
  background-color: #f2892c;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  outline: 0;
  padding: 10px 20px;
  border: 0;
  transition: box-shadow 0.2s, color 0.2s;
`;

const ViewButton = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
`;

const TextStyle = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TextPrice = styled.h3`
  color: #03367e;
  @media (max-width: 768px) {
    font-size: 16px !important;
  }
`;

const TextSpan = styled.span`
 color: gray,
 font-weight: bold,
 @media (max-width: 768px) {
   font-size:16px
  }
`;

const ButtonTheme = styled.button`
  background-color: #050f6b;
  padding: 6px 20px;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default InternationalTours;
