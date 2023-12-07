import React from "react";
import MobVideo from "../videos/mobvideo.mp4";
import Fb from "../Images/svgs/fb.svg";
import Insta from "../Images/svgs/insta.svg";
import Whatsapp from "../Images/svgs/whatsapp.svg";
import styled from "styled-components";

function MobileVideoSection() {
 
  

  return (
    <MobileVidMain 
    >
      <MobileWrap>
        <LeftBox>
          <h1>GLIMPSE OF RECENT HUNZA TOUR</h1>
          <SocialMedia>
            <img src={Insta} height={30} width={30} alt="horizon instagaram" />
            <img src={Fb} height={30} width={30} alt="horizon facebook" />
            <img
              src={Whatsapp}
              height={30}
              width={30}
              alt="Whatsapp facebook"
            />
          </SocialMedia>
        </LeftBox>
        <RightBox>
          <video
            // ref={videoRef}
            autoPlay
            // loop
            // muted
            controls
          >
            <source src={MobVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </RightBox>
      </MobileWrap>
    </MobileVidMain>
  );
}

const MobileVidMain = styled.div`
  width: 100%;
  height: 90vh;
  margin-bottom: 100px;
  padding: 40px 0px;
  background-color: black;
  @media (max-width: 768px) {
    height: fit-content;
  }
`;

const MobileWrap = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

const LeftBox = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  h1 {
    width: 80%;
    font-size: 4rem;
    font-weight: bolder;
    color: rgb(214 104 6);
    font-family: ui-monospace;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.8rem;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  gap: 20px;
  img {
    cursor: pointer;
  }
`;

const RightBox = styled.div`
  width: 30%;
  height: 100%;
  background-color: black;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  @media (max-width: 768px) {
    width: 100%;
  }
  video {
    width: 100%;
    height: 100%;
    objectfit: cover;
  }
`;
export default MobileVideoSection;
