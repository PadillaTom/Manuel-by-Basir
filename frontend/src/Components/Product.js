import React from 'react';
import { Link } from 'react-router-dom';
// Components:
import Rating from './Rating';

const Product = ({ product }) => {
  const { _id, image, name, price } = product;

  return (
    <>
      <div className='card' key={product._id}>
        <Link to={`/product/${_id}`}>
          {/* <!-- Size img: 680px by 830px --> */}
          <img src={image} alt='product' className='medium' />
        </Link>
        <div className='card-body'>
          <Link to={`/product/${_id}`}>
            <h2>{name}</h2>
          </Link>
          <Rating product={product}></Rating>
          <div className='price'>${price}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
