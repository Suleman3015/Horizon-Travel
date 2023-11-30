import React from "react";
import Cards from "../../components/Cards";
import Heading from "../../components/Heading";

export default function AllTour() {
  return (
    <>
      <div style={{ padding: "2rem 0" }}>
        <Heading
          title={"About Horizon"}
          bigTitle={"Discover with Horizon Travels"}
          description={`Horizon Travels is a travel agency or company that provides a range
            of services related to travel and tourism`}
        />
        <Cards />
      </div>
    </>
  );
}
