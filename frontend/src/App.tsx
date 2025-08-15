// import WebDev from "./pages/services/webDevelopment/webDev";
// import BoardG from "./pages/services/boardGames/borderG";
// import DigitalMarketing from "./pages/services/digitalMarketing/digitalMarketing";
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
        <Navbar /> 
        {/*<DigitalMarketing />
        <BoardG />
        <WebDev /> */}
        <Home />
        <Footer />
    </>
  )
}

export default App
