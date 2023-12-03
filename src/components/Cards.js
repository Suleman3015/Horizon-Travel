import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

import { placesData } from "../static/topAttraction";

// const placesData = [
//   { name: "Hunza", image: Hunza },
//   { name: "Islamabad", image: Islamabad },
//   { name: "Kashmir", image: Kashmir },
//   { name: "Swat", image: Swat },
//   { name: "Swat", image: Swat },
//   { name: "Swat", image: Swat },
// ];

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div style={{
      width:"80%",
      margin:"auto"
    }}>
       <span style={{ color: "#074090 ",fontWeight:"bolder", }}>
          HORIZON's
        </span>
        <h1 style={{marginTop:"10px"}}>Top Attractions</h1>
      <StyledSection>
   
        {placesData.map((place, index) => (
          <motion.li
            style={{ listStyle: "none" }}
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.4 }}
          >
            <StyledArticle key={index} ref={ref}>
              <StyledFigure>
                <h1 className="Heading">{place.name}</h1>
                <StyledImg src={place.image} alt="Cards" />
              </StyledFigure>
            </StyledArticle>
          </motion.li>
        ))}
      </StyledSection>
    </div>
  );
};

const StyledSection = styled.section`
  margin: 0;
  padding: 48px 0;
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  ${'' /* padding-inline: 24px; */}
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

const StyledArticle = styled.article`
  position: relative;
  border-radius: 12px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  height:fit-content;

`;

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  height: 0;
  padding-top: 66.6666%; /* You can adjust this value based on your desired aspect ratio */
  
  .Heading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    color: white;
    font-size: 35px;
    font-family: sans-serif;
    border: 2px solid white;
  }
`;

// const StyledImg = styled.img`
//   max-width: 100%;
//   transform-origin: center;
//   object-fit:cover;
//   transform: scale(var(--img-scale));
//   transition: transform 0.4s ease-in-out;



//   ${StyledArticle}:hover & {
//     --img-scale: 1.1;
//     --link-icon-translate: 0;
//     --link-icon-opacity: 1;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
//       rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
//   }
// `;


const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;

  ${StyledArticle}:hover & {
    transform: scale(1.1);
    /* Add other hover styles if needed */
  }
`;

export default Cards;
