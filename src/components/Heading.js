import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Air from "../Images/svgs/airplane.svg";
import  { createGlobalStyle, keyframes } from 'styled-components';



const Heading = ({ title, description, bigTitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };


  const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
const AnimatedWhatsappLogo = styled.div`
  position: absolute;
  z-index: 20;
  left: -50px;
  top:-20%;
  animation: ${pulse} 4s infinite;
  @media (max-width: 768px) {
        top:-10%
      }
`;

const LogoImage = styled.img`
  width: 300px;
  height: 120px;
  transition: transform 3s;
  @media (max-width: 768px) {
        width:200px;
        height:60px;
      }
`;

  return (
    <div style={{ position: "relative" }}>
    <AnimatedWhatsappLogo>
      <LogoImage 
        src={Air}
  
      />
      </AnimatedWhatsappLogo>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <HeadingContainer>
          <HeadingTitle>{title}</HeadingTitle>
          <CustomerReviewsTitle>{bigTitle}</CustomerReviewsTitle>
          <HeadingText>{description}</HeadingText>
        </HeadingContainer>
      </motion.div>
    </div>
  );
};

const HeadingContainer = styled.div`
  positon: relative;
  margin-top: 70px;
  text-align: center;
  width: 80%;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  z-index: 200;
`;

const HeadingTitle = styled.p`
  color: #074090;
  font-weight: bold;
  font-size: 20px;
`;

const CustomerReviewsTitle = styled.h1`
  padding-top: 0.5rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

const HeadingText = styled.p`
  ${"" /* font-weight: 500; */}
  margin-top: 1rem;
  font-size: 20px;
  line-height:28px;
`;

export default Heading;
