import WebDev from "./pages/services/webDevelopment/webDev";
import BoardG from "./pages/services/boardGames/borderG";
import DigitalMarketing from "./pages/services/digitalMarketing/digitalMarketing";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Navbar />
      {/* <WebDev /> */}
      {/* <BoardG /> */}
      {/* <DigitalMarketing /> */}
      <Home />
      {/* <About /> */}
      <Footer />
    </>
  );
}

export default App;
