import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Actions/userActions';

// Components:
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

const RegisterScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // To redirect after logged in
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  // Get info from Redux:
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  // Redux Stuff:
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // Password Condition:
    if (password !== confirmPassword) {
      alert('Passwords do not Match!');
    } else {
      // Register:
      dispatch(register(name, email, password));
    }
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
          <h1>Create Acount</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Enter Name'
            required
            onChange={(e) => setName(e.target.value)}
          />
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
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Enter Confirm Password'
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label></label>
          <button className='primary' type='submit'>
            Register
          </button>
        </div>
        <div>
          <label></label>
          <div>
            Already Registered ?
            <br />
            <Link to={`/signin?redirect=${redirect}`}>Sign in.</Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterScreen;
