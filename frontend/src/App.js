import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
              <a href='/' className='brand'>
                Manuel
              </a>
            </div>
            <div>
              <a href='/cart'>Cart</a>
              <a href='/signin'>Sign In</a>
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
