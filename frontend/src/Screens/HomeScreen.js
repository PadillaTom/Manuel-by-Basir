import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

// Utils:
// import data from '../Utils/data';

// Components:
import Product from '../Components/Product';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

// Redux STUFF:
import { listProducts } from '../Actions/productActions';

const HomeScreen = () => {
  // "Hard coded" hasta usar REDUX
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // REDUX:
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // "Hard Coded" before REDUX
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get('/api/products');
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();

    // REDUX:
    dispatch(listProducts());
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
