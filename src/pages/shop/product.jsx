import React from 'react';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="product">
      <div className="image">
        <img src={productImage} alt={productName} />
      </div>
      <div className="info">
        <div className="description">
          <p><b>{productName}</b></p>
          <p>${price}</p>
        </div>
        <button className="addToCartBttn">Add To Cart</button>
      </div>
    </div>
  )
};