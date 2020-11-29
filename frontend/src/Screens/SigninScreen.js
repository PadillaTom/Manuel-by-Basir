import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Sign In:
  };

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
