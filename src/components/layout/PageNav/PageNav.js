import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';


const PageNav = () => {
  return (
    <nav>
      <div>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.navLink}>Logo to hompage</NavLink>
      </div>
      <div>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.navLink}>Login</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/table`} activeClassName='active' className={styles.navLink}>Table</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active' className={styles.navLink}>Waiter</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.navLink}>Kitchen</NavLink>
      </div>
    </nav>
  );
};

export default PageNav;