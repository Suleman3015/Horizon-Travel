import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import HappyCustomers from "../../components/HappyCustomers";
import Heading from "../../components/Heading";
import Clients from "../../components/Testimonials";
import InternationalTours from "../../components/InternationalTours";
import DomesticTours from "../../components/DomesticTours";
import MobileVideoSection from "../../components/MobileVideoSection";
import TourBanner from "../../components/TourBanner";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Banner />
      <InternationalTours />
      <DomesticTours />
      <TourBanner />
      <HappyCustomers />
      <Heading
        title={"About Horizon"}
        bigTitle={"Discover with Horizon Travels"}
        description={`Horizon Travels is a travel agency or company that provides a range
            of services related to travel and tourism, we understand that travel is not just about reaching a destination; it's about the journey itself. Our team of seasoned travel experts is dedicated to curating bespoke itineraries that resonate with your unique preferences, interests, and aspirations. Whether you're a leisure seeker, an adventure enthusiast, or a business traveler, we have the expertise to tailor each trip to suit your individual needs.`}
      />

      <MobileVideoSection />
      {/* <Heading
        title={"More Tours"}
        bigTitle={"Discover with Horizon Travels"}
        description={`Horizon Travels is a travel agency or company that provides a range
            of services related to travel and tourism`}
      /> */}
      <Cards />

      <Clients />
    </div>
  );
}

export default Home;
