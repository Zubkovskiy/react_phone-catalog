import React from 'react';

import styles from './Nesting.module.scss';

type Props = {
  category: string;
  name?: string;
};

export const Nesting: React.FC<Props> = ({ category, name }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}></div>
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
