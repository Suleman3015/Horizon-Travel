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
            Discover what is untold. We will be your traveling partners in your
            adventure.
          </Description>
          <div style={{ marginTop: "48px" }}>
            <StyledLink to="#">GET IN TOUCH</StyledLink>
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
  @media (max-width: 768px) {
    margin-left: 24px;
  }
  @media (max-width: 1300px) {
    margin-left: 24px;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
  color: white;
  font-weight: medium;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  width: 40%;
  color: #074090;
  font-weight: 500;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1300px) {
    width: 100%;
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

  &:hover {
    background: #df6911;
    color: white;
  }
`;

export default Banner;
