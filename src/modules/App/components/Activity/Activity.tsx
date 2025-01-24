import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import styles from './Activity.module.scss';

import favourites from '/img/icons/favourites.svg';
import cart from '/img/icons/shopping-bag.svg';

export const Activity = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.activity__link, {
      [styles.active]: isActive,
    });

  return (
    <div className={styles.activity}>
      <div className={styles.activity__favourites}>
        <NavLink to="favourites" className={getNavLinkClass}>
          <img src={favourites} alt="favourites" />
        </NavLink>
        <NavLink to="cart" className={getNavLinkClass}>
          <img src={cart} alt="cart" />
        </NavLink>
      </div>
      <div className={styles.activity__cart}></div>
    </div>
  );
};
