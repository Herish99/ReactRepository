import React from 'react';
import { useState } from 'react';

const Aboutus = () => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { name: 'Fruits', price: 100 },
    { name: 'Vegetables', price: 250 },
    { name: 'Pulses', price: 100 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };
  return (
    <>
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
      

    </>
  );
};

export default Aboutus;