import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Layout';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import SupplementList from './components/SupplementList';
import SupplementDetails from './components/SupplementDetails';
import Payment from './components/Payment';
import Cart from './components/Cart';
import RewardPage from './components/RewardPage';
import { CartProvider } from './components/CartContext';

function App() {
  // const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // const addToCart = () => {
  //   setCartCount(cartCount + 1);
  //   setCartTotal(cartTotal + 50); 
  // };

  // const removeFromCart = () => {
  //   if (cartCount > 0) {
  //     setCartCount(cartCount - 1);
  //     setCartTotal(cartTotal - 50);
  //   }
  // };

  const handleRedeem = (points) => {
    setCartTotal(cartTotal - points);
  };
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/supplement/:id' element={<SupplementDetails />} />
          <Route path='/supplement' element={<SupplementList/>}/>
          <Route path="/rewards" element={<RewardPage handleRedeem={handleRedeem} />} />

        </Routes>
      </CartProvider>
      </BrowserRouter>
  );
}

export default App;
