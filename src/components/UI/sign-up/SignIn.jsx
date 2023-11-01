import React from 'react';
import Modal from '../Modal';
import { useRef } from 'react';
import classes from './Sign.module.css';

const SignIn = (props) => {
  // const usernameInputRef = useRef();
  // const passwordInputRef = useRef();
  const loginHandler = React.useCallback(async (event) => {
    event.preventDefault();

    //   const enteredUsername = usernameInputRef.current.value;
    //   const enteredPassword = passwordInputRef.current.value;
  }, []);
  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form} onSubmit={loginHandler}>
        <div>
          <p>Log in</p>
        </div>
        <div className={classes['input-container']}>
          <label htmlFor='username'>Username</label>
          <input
            className={classes.input}
            type='username'
            id='username'
            // ref={usernameInputRef}
          />
          <label htmlFor='password'>Password</label>
          <input
            className={classes.input}
            type='password'
            id='password'
            //ref={passwordInputRef}
          />
        </div>
        <div className={classes['button-container']}>
          <button className={classes.button} type='submit'>
            Log in
          </button>
          <button
            className={classes.button}
            type='button'
            onClick={props.onChangeSign}
          >
            Sign up
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default SignIn;
