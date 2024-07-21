import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className='container'>
          <div className={styles.navbarItems}>
            <div>
              <NavLink to='/'>
                <h1 className={styles.title}>Rick & Morty</h1>
              </NavLink>
            </div>
            <div className={styles.menu}>
              <ul className={styles.menuItems}>
                <li className={styles.menuItem}>
                  <NavLink activeClassName="active" to='/'>Character</NavLink>
                </li>
                <li className={styles.menuItem}>
                  <NavLink to='/location'>Location</NavLink>
                </li>
                <li className={styles.menuItem}>
                  <NavLink to='/episodes'>Episodes</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
