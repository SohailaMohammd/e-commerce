import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Product';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Home />
            <Products />
          </>} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/product/:productId' element={<Product />} />

          <Route path="*" element={<h2>Page Not Found</h2>} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
