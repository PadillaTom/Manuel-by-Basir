import './App.css';
import data from './Utils/data';
// Components:
import Product from './Components/Product';

function App() {
  return (
    <>
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
          <div className='row center'>
            {data.products.map((product) => {
              return <Product key={product._id} product={product}></Product>;
            })}
          </div>
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </>
  );
}

export default App;
