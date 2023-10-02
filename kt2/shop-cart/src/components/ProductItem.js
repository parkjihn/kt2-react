

import React from 'react';

const ProductItem = ({ product, onIncrement, onDecrement }) => {
  return (


    <div className="product-item">
        <h3>{product.name}</h3>
      <p>Цена: {product.price}</p>
        <div>
         <button onClick={() => onDecrement(product)} disabled={product.count === 0}>
            -
            </button>
        {product.count}

        <button onClick={() => onIncrement(product)} disabled={product.count >= 25}>
            +
            </button>
      </div>
    </div>
  );
};

export default ProductItem;
