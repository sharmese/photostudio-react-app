import classes from './Sign.module.css';
import Modal from '../Modal';
import { useRef } from 'react';

const SignUp = (props) => {
  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const registerHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    await fetch(
      'https://photostudio-react-app-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          username: enteredUsername,
          password: enteredPassword,
        }),
      }
    );
  };
  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form} onSubmit={registerHandler}>
        <div>
          <p>Log in</p>
        </div>
        <div className={classes['input-container']}>
          <label htmlFor='email'>Email</label>
          <input
            className={classes.input}
            type='email'
            id='email'
            ref={emailInputRef}
          />
          <label htmlFor='username'>Username</label>
          <input
            className={classes.input}
            type='username'
            id='username'
            ref={usernameInputRef}
          />
          <label htmlFor='password'>Password</label>
          <input
            className={classes.input}
            type='password'
            id='password'
            ref={passwordInputRef}
          />
        </div>
        <div className={classes['button-container']}>
          <button className={classes.button} type='submit'>
            Sign up
          </button>

          <button
            className={classes.button}
            type='button'
            onClick={props.onChangeSign}
          >
            Log in
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default SignUp;
