import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components:
import MessageBox from '../Components/MessageBox';

// Redux Stuff:
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Actions/cartActions';

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  // Remove From Cart --->
  const RemoveFromCartHandler = (id) => {
    // Delete Action:
    dispatch(removeFromCart(id));
  };
  // Checkout --->
  const checkoutHandler = () => {
    // Push
    props.history.push('/signin?redirect=shipping');
  };

  return (
    <>
      <div className='row top'>
        <div className='col-2'>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is Empty. <Link to='/'>Go Shopping</Link>
            </MessageBox>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className='row'>
                    <div>
                      <img src={item.image} alt={item.name} className='small' />
                    </div>

                    <div className='min-30'>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((item) => (
                          <option key={item + 1} value={item + 1}>
                            {item + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>${item.price}</div>
                    <div>
                      <button
                        type='button'
                        onClick={() => RemoveFromCartHandler(item.product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <h2>
                  Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                  ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h2>
              </li>
              <li>
                <button
                  type='button'
                  onClick={checkoutHandler}
                  className='primary block'
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
