import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = ({ title, description, bigTitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
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
  );
};

const HeadingContainer = styled.div`
  margin-top: 70px;
  text-align: center;
  width: 80%;
  margin-top:100px;
  margin-bottom:100px;
  margin-left:auto;
  margin-right:auto;
`;

const HeadingTitle = styled.p`
  color: #074090;
  font-weight: bold;
  font-size:20px;
`;

const CustomerReviewsTitle = styled.h1`
  padding-top: 0.5rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

const HeadingText = styled.p`
  ${'' /* font-weight: 500; */}
  margin-top: 1rem;
  font-size:20px;
`;

export default Heading;
