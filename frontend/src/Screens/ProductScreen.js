import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../Actions/productActions';
// Utils : Used before REDUX
// import data from '../Utils/data';

// Components:
import Rating from '../Components/Rating';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

const ProductScreen = (props) => {
  // "Hard Coded" before REDUX:
  // const product = data.products.find((x) => x._id === props.match.params.id);
  //
  // Redux STUFF:
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  // const { image, name, description, price } = product;

  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  // Add to cart:
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <div>
            <Link to='/'>Back to Results</Link>
            <div className='row top'>
              <div className='col-2'>
                <img className='large' src={product.image} alt={product.name} />
              </div>
              <div className='col-1'>
                <ul>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <Rating product={product}></Rating>
                  </li>
                  <li>Price: $ {product.price}</li>
                  <li>
                    Description:
                    <p>{product.description}</p>
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body'>
                  <ul>
                    <li>
                      <div className='row'>
                        <div>Price: </div>
                        <div className='price'>${product.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className='row'>
                        <div>Status: </div>
                        <div>
                          {product.countInStock > 0 ? (
                            <span className='success'>In Stock</span>
                          ) : (
                            <span className='danger'>Unavailable</span>
                          )}
                        </div>
                      </div>
                    </li>
                    {product.countInStock > 0 && (
                      <>
                        <li>
                          <div className='row'>
                            <div>Qty</div>
                            <div>
                              <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (item) => (
                                    <option key={item + 1} value={item + 1}>
                                      {item + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                        </li>
                        <li>
                          <button
                            className='primary block'
                            onClick={addToCartHandler}
                          >
                            Add to Cart
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
