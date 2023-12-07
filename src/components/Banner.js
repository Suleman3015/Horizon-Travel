import React from "react";
import styled from "styled-components";
import banner from "../Images/Islamabad.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <StyledBanner>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <Container>
          <Title>
            HORIZON TRAVELS
            {/* Discover what is untold. */}
          </Title>
          <Description>
          WE TREAT OUR GUESTS AS A FAMILY MEMBERS,EVERY HORIZON ENVEILS A NEW CHAPTER IN YOUR TRAVELS NARRATIVE. 
            {/* Welcome to Horizon Travels, where your dreams meet horizons. Our commitment is not just to take you places but to
            weave stories of unforgettable moments. Join us on a voyage where
            every journey is an emotion, and every horizon unveils a new chapter
            in your travel narrative. */}
          </Description>
          <div style={{ marginTop: "28px" }}>
            <a
              href={`https://api.whatsapp.com/send?phone=923122975541`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledLink>Make Your Own Trip</StyledLink>
            </a>
          </div>
        </Container>
      </motion.div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  background: url(${banner}) no-repeat center center fixed;
  background-size: cover;
  height: 70vh;
  display: flex;
  ${"" /* justify-content: center; */}
  align-items: center;
  padding: 8rem 0;
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 1300px) {
    height: 50vh;
  }
`;

const Container = styled.div`
  max-width: 960px;
  margin-left: 100px;
  display:flex;
  flex-direction:column;
  gap:0px;
  @media (max-width: 768px) {
    margin-left: 24px;
  }
  @media (max-width: 1300px) {
    margin-left: 24px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  color: white;
  font-weight: medium;
  margin-bottom: 10px;
  
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  width:70%;
  color: lightgray;
  font-weight: 500;
  fontWeight:bolder;
  ${'' /* line-height: 25px; */}
  font-size: 1.2rem;
  line-height:22px;
  ${'' /* background: rgba(110, 105, 105, 0.22);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.1px);
-webkit-backdrop-filter: blur(7.1px); */}

  @media (max-width: 768px) {
    font-size:0.8rem
  }
`;

const StyledLink = styled.a`
  cursor: pointer;
  background: #f48431;
  color: #fff;
  padding: 1rem 1.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: background 0.3s, color 0.3s;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }

  &:hover {
    background: #df6911;
    color: white;
  }
`;

export default Banner;
