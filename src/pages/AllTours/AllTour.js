import React,{useEffect} from "react";
import Heading from "../../components/Heading";
import styled from "styled-components";
import { DomesticTourStatic } from "../../static/domesticTour";

export default function AllTour() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount


  return (
    <>
      <div style={{ padding: "2rem 0" }}>
        <Heading
          title={"National Tours"}
          bigTitle={"Discover with Horizon Travels"}
          description={``}
        />
        {/* <Cards /> */}
        <BoxMain>
          {DomesticTourStatic.map((item) => {
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
                  <p>30% Off</p>
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
                    <p
                      style={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </p>
                    <h3 style={{ color: "#03367e" }}>{item.price}</h3>
                  </div>
                </div>
                <div className="card-bottom">
                  <span
                    style={{ color: "gray", fontWeight: "Bold" }}
                    className="category"
                  >
                    {item.days}
                  </span>
                  <div style={{ display: "flex" }}>
                    <a href={msg}>
                      <button
                        style={{
                          backgroundColor: "#050f6b",
                          padding: "10px 25px",
                          borderRadius: "5px",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Query?
                      </button>
                    </a>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        style={{
                          backgroundColor: "#f2892c",
                          padding: "10px 25px",
                          borderRadius: "5px",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Plan?
                      </button>
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </BoxMain>
      </div>
    </>
  );
}

const BoxMain = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  @media (max-width: 1250px) {
    grid-template-columns: 50% 50%;

  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;

  }
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
