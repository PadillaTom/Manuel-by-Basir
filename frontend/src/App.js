import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Screens:
import HomeScreen from './Screens/HomeScreen';
import SigninScreen from './Screens/SigninScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
              <Link to='/signin'>Sign In</Link>
            </div>
          </header>
          {/* <!-- Main --> */}
          <main>
            <Route path='/' component={HomeScreen} exact></Route>
            <Route path='/signin' component={SigninScreen}></Route>
            <Route path='/product/:id' component={ProductScreen}></Route>
            <Route path='/cart/:id?' component={CartScreen}></Route>
          </main>
          <footer className='row center'>All rights reserved</footer>
        </div>
      </Router>
    </>
  );
}

export default App;
