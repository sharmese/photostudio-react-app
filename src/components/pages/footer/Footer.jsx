import classes from './Footer.module.css';
import facebook from '../../../assets/footer/facebook.svg';
import instagram from '../../../assets/footer/instagram.svg';
import telegram from '../../../assets/footer/telegram.svg';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes['header-container']}>
        <h1>ASUNA</h1>
      </div>
      <div className={classes['icon-container']}>
        <img className={classes.icon} src={facebook} alt='facebook' />
        <img className={classes.icon} src={telegram} alt='telegram' />
        <img className={classes.icon} src={instagram} alt='instagram' />
      </div>
      <div className={classes['first-container']}>
        <p>© 2023 RECORD All rights reserved.</p>
        <p className={classes['at-paragraph']}>@asuna_re</p>
      </div>

      <div className={classes['second-container']}>
        <p>Політика конфіденційності</p>
        <p>Договір публічної оферти</p>
      </div>
    </div>
  );
};
export default Footer;
