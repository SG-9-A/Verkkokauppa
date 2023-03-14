import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </>
  
    );
}

export default App;
