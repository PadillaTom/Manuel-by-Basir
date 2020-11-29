import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../Actions/userActions';

const SigninScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // To redirect after logged in
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  // Get info from Redux:
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // Redux Stuff:
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // Sign In:
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);
  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor='email'>Email Adress</label>
          <input
            type='email'
            id='email'
            placeholder='Enter Email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter Password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label></label>
          <button className='primary' type='submit'>
            Sign In
          </button>
        </div>
        <div>
          <label></label>
          <div>
            New Customer ?<Link to='/register'>Create your account.</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SigninScreen;
