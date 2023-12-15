import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import HappyCustomers from "../../components/HappyCustomers";
import Heading from "../../components/Heading";
import Clients from "../../components/Testimonials";
import InternationalTours from "../../components/InternationalTours";
import DomesticTours from "../../components/DomesticTours";
import MobileVideoSection from "../../components/MobileVideoSection";
import TourBanner from "../../components/TourBanner";
import { Element } from "react-scroll";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Banner />
      <TourBanner />
      <DomesticTours />
      <InternationalTours />
      <HappyCustomers />
      <Element name="section1">
        <div style={{ padding: "80px 0px" }}>
          <Heading
            title={"About Horizon"}
            bigTitle={"Discover with Horizon Travels"}
            description={`Embark on a journey where every moment is a destination in itself! At Horizon Travels, we don't just offer trips; we curate experiences that become cherished memories. Your smile is our compass, and we believe that travel is more than reaching a place it's about the magic of the entire journey, Its not just a company we're storytellers of adventures waiting to unfold. Our seasoned travel experts are dedicated to sculpting personalized itineraries that resonate with your preferences, interests, and dreams`}
          />
        </div>
      </Element>
      <MobileVideoSection />
      <Cards />
      <Clients />
    </div>
  );
}

export default Home;
