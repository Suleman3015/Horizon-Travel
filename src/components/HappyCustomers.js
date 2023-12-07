import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import happyClient from "../Images/Kashmir.jpg";

const HappyCustomers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <StyledHappyCustomers
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1>
          Our <span>Tourism</span> Facts
        </h1>
        <p>
          Horizon Travels is a travel agency or company that provides a range of
          services related to travel and tourism, we understand that travel is
          not just about reaching a destination; it's about the journey itself.
          Our team of seasoned travel experts is dedicated to curating bespoke
          itineraries that resonate with your unique preferences, interests, and
          aspirations. Whether you're a leisure seeker, an adventure enthusiast,
          or a business traveler, we have the expertise to tailor each trip to
          suit your individual needs
        </p>
      </div>
    </StyledHappyCustomers>
  );
};

const StyledHappyCustomers = styled(motion.div)`
  background: url(${happyClient}) center fixed no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100vh;
  }
  &::before {
    content: "";
    opacity: 0.3;
    background: black;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .container {
    position: relative;
    padding: 8px 28px;
    text-align: center;
    width: 80%;
    margin: auto;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      font-size: 2.5rem;
      color: black;
      margin-bottom: 15px;
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }

      span {
        color: white;
      }
    }

    p {
      color: white;
      font-style: italic;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 18px;
      margin-top: 10px;
      line-height: 30px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
      @media (max-width: 408px) {
        line-height: 25px;
      }
    }

    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;

      .item {
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        color: white;
      }
    }
  }
`;

export default HappyCustomers;
