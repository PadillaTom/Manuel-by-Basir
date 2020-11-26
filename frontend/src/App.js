import './App.css';

function App() {
  return (
    <>
      <div className='grid-container'>
        {/* <!-- Header --> */}
        <header className='row'>
          <div>
            <a href='index.html' className='brand'>
              Manuel
            </a>
          </div>
          <div>
            <a href='cart.html'>Cart</a>
            <a href='signin.html'>Sign In</a>
          </div>
        </header>
        {/* <!-- Main --> */}
        <main>
          <div className='row center'>
            {/* <!-- Single Product --> */}
            <div className='card'>
              <a href='product.html'>
                {/* <!-- Size img: 680px by 830px --> */}
                <img
                  src='./images/product-1.jpg'
                  alt='product'
                  className='medium'
                />
              </a>
              <div className='card-body'>
                <a href='product.html'>
                  <h2>Nike Slim Shirts</h2>
                </a>
                <div className='rating'>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                  <span>
                    <i className='fa fa-star'></i>
                  </span>
                </div>
                <div className='price'>$120</div>
              </div>
            </div>
            {/* <!-- End Single Product --> */}
          </div>
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </>
  );
}

export default App;
