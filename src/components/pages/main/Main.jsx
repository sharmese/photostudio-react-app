import React from 'react';
import { useState } from 'react';
import classes from './Main.module.css';
import heart from '../../../assets/main/heart.svg';
import profile from '../../../assets/main/profile.svg';
import search from '../../../assets/main/search.svg';
import basket from '../../../assets/main/basket.svg';

import SignUp from '../../UI/sign-up/SignUp';
import SignIn from '../../UI/sign-up/SignIn';

const Main = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  const showSignup = React.useCallback(() => {
    setIsSignup(true);
    setIsSignin(false);
  }, []);

  const showSignin = React.useCallback(() => {
    setIsSignin(true);
    setIsSignup(false);
  }, []);

  const hideSign = React.useCallback(() => {
    setIsSignup(false);
    setIsSignin(false);
  }, []);

  const showContent = React.useCallback(() => {
    if (isSignup === true) {
      return <SignUp onClose={hideSign} onChangeSign={showSignin} />;
    }
    if (isSignin === true) {
      return <SignIn onClose={hideSign} onChangeSign={showSignup} />;
    }
  }, [hideSign, isSignin, isSignup, showSignin, showSignup]);

  return (
    <div className={classes.main}>
      <ul className={classes.icons}>
        <li>
          <img src={search} alt='search' />
        </li>
        <li>
          <img src={heart} alt='heart' />
        </li>
        <li>
          <img onClick={showSignup} src={profile} alt='profile' />
        </li>
        <li>
          <img src={basket} alt='basket' />
        </li>
      </ul>
      <div className={classes.block}>
        <h1>ASUNA</h1>
      </div>
      {showContent()}
      <button className={classes.btn}>ДО ПОКУПОК</button>
    </div>
  );
};
export default Main;
