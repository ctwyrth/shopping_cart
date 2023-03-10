import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Current Inventory</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, idx) => <Product data={product} key={idx} />)}
      </div>
    </div>
  )
}

export default Shop;