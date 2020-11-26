import React from 'react';
// Utils:
import data from '../Utils/data';
// Components:
import Product from '../Components/Product';
const HomeScreen = () => {
  return (
    <>
      <div className='row center'>
        {data.products.map((product) => {
          return <Product key={product._id} product={product}></Product>;
        })}
      </div>
    </>
  );
};

export default HomeScreen;
