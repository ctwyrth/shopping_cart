import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import './cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const subTotal = getTotalCartAmount();

  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      { subTotal > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${subTotal}</p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
      ) : (
        <h1>Your cart is empty.</h1>
      )}
    </div>
  )
}

export default Cart;