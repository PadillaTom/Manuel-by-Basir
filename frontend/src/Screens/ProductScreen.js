import React from 'react';
// Utils
import data from '../Utils/data';
// Components:
import Rating from '../Components/Rating';

const ProductScreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    <h2>Product not found</h2>;
  }
  const { image, name, rating, numReviews, description, price } = product;
  return (
    <>
      <div className='row top'>
        <div className='col-2'>
          <img src={image} alt={name} />
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1>{name}</h1>
            </li>
            <li>
              <Rating product={product}></Rating>
            </li>
            <li>Price: $ {price}</li>
            <li>
              Description:
              <p>{description}</p>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>Price</div>
                  <div className='price'>{price}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className='success'>In Stock</span>
                    ) : (
                      <span className='error'>Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className='primary block'>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
