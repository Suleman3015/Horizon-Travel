import React, { useRef, useState } from "react";
import styled from "styled-components";


import { placesData } from "../static/topAttraction";


const Cards = () => {
  const ref = useRef(null);
  const [hoverStates, setHoverStates] = useState(
    new Array(placesData.length).fill(false)
  );


  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = true;
      return updatedStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  };

  console.log(hoverStates, "hover");
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <span style={{ color: "#074090 ", fontWeight: "bolder" }}>HORIZON's</span>
      <h1 style={{ marginTop: "10px" }}>Top Attractions</h1>
      <StyledSection>
        {placesData.map((place, index) => (
          <StyledArticle
            // onMouseEnter={() => hover = true}
            // onMouseLeave={() => hover = false}
            key={index}
            ref={ref}
          >
            <StyledFigure
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {hoverStates[index] ? (
                <p className="text">{place.text}</p>
              ) : (
                <h1 className="Heading">{place.name}</h1>
              )}
              <StyledImg src={place.image} alt="Cards" />
            </StyledFigure>
          </StyledArticle>
        ))}
      </StyledSection>
    </div>
  );
};

// const Heading = ({ placeName}) => {
//   const [isHovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {isHovered ? (
//         <p>{placeName}</p>
//       ) : (
//         <h1>{placeName}</h1>
//       )}
//     </div>
//   );
// };

const StyledSection = styled.section`
  margin: 0;
  padding: 48px 0;
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  ${"" /* padding-inline: 24px; */}
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  
`;


const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
  &:hover {
    filter: brightness(30%);
  }
`;



const StyledArticle = styled.article`
  position: relative;
  border-radius: 12px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  height: fit-content;
  &:hover {
    ${StyledImg} {
      transform: scale(1, 1.3); /* Adjust the scaling factor to control the height to be filtered */
      filter: brightness(30%);
    }
  }

`;

const StyledFigure = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background:transparent;
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
    font-size: 40px;
    font-family: sans-serif;
    font-weight:bolder
    ${'' /* border: 2px solid white; */}
  }
  .text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    color: white;
    font-size: 15px;
    font-family: sans-serif;
    width:80%;
    background:transparent;
    line-height:20px;
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

// const StyledImg = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.4s ease-in-out;

//   ${StyledArticle}:hover & {
//     transform: scale(1.1);
//     /* Add other hover styles if needed */
//   }
//   &:hover {
//     filter: brightness(30%);
//   }
// `;

export default Cards;
