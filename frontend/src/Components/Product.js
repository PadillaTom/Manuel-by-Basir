import React from 'react';
// Components:
import Rating from './Rating';

const Product = ({ product }) => {
  const { _id, image, name, price } = product;

  return (
    <>
      <div className='card' key={product._id}>
        <a href={`/product/${_id}`}>
          {/* <!-- Size img: 680px by 830px --> */}
          <img src={image} alt='product' className='medium' />
        </a>
        <div className='card-body'>
          <a href={`/product/${_id}`}>
            <h2>{name}</h2>
          </a>
          <Rating product={product}></Rating>
          <div className='price'>${price}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
