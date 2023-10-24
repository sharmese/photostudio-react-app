import classes from './Navbar.module.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <Link smooth={true} to='assortment'>
          <li>АСОРТИМЕНТ</li>
        </Link>
        <Link smooth={true} to='about'>
          <li>ПРО МАГАЗИН</li>
        </Link>
        <Link smooth={true} to='q&a'>
          <li>Q&A</li>
        </Link>
        <Link smooth={true} to='reviews'>
          <li>ВІДГУКИ</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
