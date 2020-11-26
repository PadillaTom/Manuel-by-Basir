import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Utils:
import data from '../Utils/data';
// Components:
import Product from '../Components/Product';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div className='row center'>
          {products.map((product) => {
            return <Product key={product._id} product={product}></Product>;
          })}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
