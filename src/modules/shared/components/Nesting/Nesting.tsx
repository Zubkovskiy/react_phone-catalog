import React from 'react';

import styles from './Nesting.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  category: string;
  name?: string;
};

export const Nesting: React.FC<Props> = ({ category, name }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={'../'} className={styles.home}></Link>
      <div className={styles.arrow}></div>
      <div className={styles.category}>{category}</div>

      {name && (
        <>
          <div className={styles.arrow}></div>
          <div className={styles.name}>{name}</div>
        </>
      )}
    </div>
  );
};
