import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

let clients = [
  {
    name: "Suleman Ahmed",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 3,
    disc: `Absolutely loved the tour! The destinations were breathtaking, and the attention to detail from your team made the experience seamless. Can't wait for my next adventure with your company!`,
  },
  {
    name: "Abdul Rehman",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `Exceptional service! From booking to the actual trip, everything was well-organized. The tour guides were knowledgeable and friendly. Highly recommend this tourism company.`,
  },
  {
    name: "Shaaz Fahmid",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Had an amazing time exploring with your company. The itinerary was diverse, and I appreciated the flexibility. Great customer service throughout. Thank you for the unforgettable memories!`,
  },
  {
    name: "Yasir Khan",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Fantastic tour! The accommodations were top-notch, and the local experiences were authentic. Kudos to the team for creating a memorable journey. Will definitely travel with you again`,
  },
  {
    name: "Raahym Mughal",
    position: "web developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Professionalism at its best! Your team goes above and beyond to ensure travelers have a smooth and enjoyable trip. The destinations chosen were stunning, and I felt well taken care of.`,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green" style={{ color: "#074090 " }}>
          testimonials
        </span>
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #f48431;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #f48431;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
