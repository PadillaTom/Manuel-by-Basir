import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Utils:
import data from '../Utils/data';
// Components:
import Product from '../Components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
  }, [products]);

  return (
    <>
      <div className='row center'>
        {products.map((product) => {
          return <Product key={product._id} product={product}></Product>;
        })}
      </div>
    </>
  );
};

export default HomeScreen;
