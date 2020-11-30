import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Screens:
import HomeScreen from './Screens/HomeScreen';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
// Actions:
import { signout } from './Actions/userActions';
import ShippingAdressScreen from './Screens/ShippingAdressScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <>
      <Router>
        <div className='grid-container'>
          {/* <!-- Header --> */}
          <header className='row'>
            <div>
              <Link to='/' className='brand'>
                Manuel
              </Link>
            </div>
            <div>
              <Link to='/cart'>Cart</Link>
              {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}
              {userInfo ? (
                <div className='dropdown'>
                  <Link to='#'>
                    {userInfo.name} <i className='fa fa-caret-down'></i>{' '}
                  </Link>
                  <ul className='dropdown-content'>
                    <Link to='#signout' onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </ul>
                </div>
              ) : (
                <Link to='/signin'>Sign In</Link>
              )}
            </div>
          </header>
          {/* <!-- Main --> */}
          <main>
            <Route path='/' component={HomeScreen} exact></Route>
            <Route path='/signin' component={SigninScreen}></Route>
            <Route path='/register' component={RegisterScreen}></Route>
            <Route path='/product/:id' component={ProductScreen}></Route>
            <Route path='/cart/:id?' component={CartScreen}></Route>
            {/* Payment */}
            <Route path='/shipping' component={ShippingAdressScreen}></Route>
          </main>
          <footer className='row center'>All rights reserved</footer>
        </div>
      </Router>
    </>
  );
}

export default App;
