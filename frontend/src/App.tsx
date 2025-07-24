import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Services from './pages/services/services';

function App() {

  return (
    <>
      <Navbar/>
        <Home/>
        <Services/>
      <Footer/>
    </>
  )
}

export default App
