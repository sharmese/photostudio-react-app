import classes from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>АСОРТИМЕНТ</li>
        <li>ПРО МАГАЗИН</li>
        <li>Q&A</li>
        <li>ВІДГУКИ</li>
      </ul>
    </nav>
  );
};
export default Navbar;
