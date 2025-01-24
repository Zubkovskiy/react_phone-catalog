import { useState } from 'react';

import classNames from 'classnames';

import style from './BurgerMenu.module.scss';
import { NavBar } from '../NavBar';
import { Activity } from '../Activity';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      <button
        className={classNames(style.burger, { [style.open]: isOpen })}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </button>

      <nav
        className={classNames(style.menu, { [style.show]: isOpen })}
        onClick={() => setIsOpen(false)}
      >
        <NavBar />
        <Activity />
      </nav>
    </div>
  );
};
