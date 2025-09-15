import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import { ThemeProvider } from "./context/ThemeContext";
import DarkModeToggle from './components/DarkModeToggle';
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "../src/components/Categories";
import Footer from './components/Footer';
import "../src/styles/footer.css";
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';



function App() {
  return (
    <BrowserRouter> 
    <ThemeProvider>

      <Navbar/>
      <div className="app">
       <Routes> 
      <Route path='/' 
      element={<div>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      </div>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
       <Route path='/cart' element={<CartPage/>}/>
       <Route path='/products' element={<ProductPage/>}/>
     </Routes>
     <DarkModeToggle />
     <ToastContainer
   
     />
      </div>
       <Footer/>
     </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
