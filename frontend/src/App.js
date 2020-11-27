import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Screens:
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
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
              <Link to='/signin'>Sign In</Link>
            </div>
          </header>
          {/* <!-- Main --> */}
          <main>
            <Route path='/product/:id' component={ProductScreen}></Route>
            <Route path='/' component={HomeScreen} exact></Route>
            <Route path='/cart/:id?' component={CartScreen}></Route>
          </main>
          <footer className='row center'>All rights reserved</footer>
        </div>
      </Router>
    </>
  );
}

export default App;
