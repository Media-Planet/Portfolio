import WebDev from "./pages/services/webDevelopment/webDev";
import BoardG from "./pages/services/boardGames/borderG";
import DigitalMarketing from "./pages/services/digitalMarketing/digitalMarketing";
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/board-games" element={<BoardG />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
