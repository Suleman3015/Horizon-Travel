import Home from "./pages/Home/Home";
import AllTour from "./pages/AllTours/AllTour";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./Images/svgs/whatsapp.svg";
import styled, { keyframes } from "styled-components";
import InternationalTours from "./pages/International/InternationalTous";

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
  position: fixed;
  z-index: 20;
  right: 20px;
  bottom: 20px;
  animation: ${pulse} 1.5s infinite;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  transition: transform 0.2s;
`;

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tour" element={<AllTour />} />
          <Route exact path="/international" element={<InternationalTours />} />
        </Routes>
        <Footer />
      </Router>
      {/* <GlobalStyle /> */}

      <AnimatedWhatsappLogo>
        <a
          href={`https://api.whatsapp.com/send?phone=923122975541`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImage src={Whatsapp} alt="horizon whatsapp" />
        </a>
      </AnimatedWhatsappLogo>
    </div>
  );
}

export default App;
