import React from 'react';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="product">
      <div className="image">
        <img src={productImage} alt={productName} />
      </div>
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default Product;