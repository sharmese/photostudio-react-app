import classes from './Main.module.css';
import basket from '../../assets/basket.svg';
import heart from '../../assets/heart.svg';
import profile from '../../assets/profile.svg';
import search from '../../assets/search.svg';

const Main = () => {
  return (
    <div className={classes.main}>
      <ul className={classes.icons}>
        <li>
          <img src={search} alt='basket' />
        </li>
        <li>
          <img src={heart} alt='basket' />
        </li>
        <li>
          <img src={profile} alt='basket' />
        </li>
        <li>
          <img src={basket} alt='basket' />
        </li>
      </ul>
      <div className={classes.block}>
        <h1>ASUNA</h1>
      </div>
      <button className={classes.btn}>ДО ПОКУПОК</button>
    </div>
  );
};
export default Main;
