import classes from './Navbar.module.css';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link smooth={true} to='assortment'>
            АСОРТИМЕНТ
          </Link>
        </li>
        <li>
          <Link smooth={true} to='about'>
            ПРО МАГАЗИН
          </Link>
        </li>
        <li>
          <Link smooth={true} to='reviews'>
            ВІДГУКИ
          </Link>
        </li>
        <li>
          <Link smooth={true} to='q&a'>
            Q&A
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
