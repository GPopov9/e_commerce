import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const hadndleAddtoCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }



  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(process.env.REACT_APP_CHEC_PUBLIC_KEY);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={hadndleAddtoCart} />
    </div>
  )
}

export default App
