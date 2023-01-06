import "./App.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Page/Home";
import { Category } from "./Components/Page/Category";
import { Carrito } from "./Components/carrito/Carrito";
import DataProvider from "./Components/context/DataContex";



function App() {
  return (
    <>
 
        <Header/>
            <Carrito/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Category" element={<Category />} />
             <Route path="/Shopping" element={<Carrito/>} />
            </Routes>
          <Footer/>
   
    </>
  );
}

export default App;
