import { AllRoutes } from "./routes/AllRoutes"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {  

  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location])

  return (
    <>
      <Header/>
        <AllRoutes/>
        <div className="whatsapp-icon">
          <FaWhatsapp />
        </div>
      <Footer/>
    </>
  )
}

export default App
