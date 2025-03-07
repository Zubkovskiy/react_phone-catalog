import React from 'react';

import styles from './CategoryCard.module.scss';

type Props = {
  name: string;
  img: string;
  count?: number;
};

export const CategoryCard: React.FC<Props> = ({ name, img, count }) => (
  <li className={styles.category}>
    <a href="#" className={styles.category__wrapper}>
      <img className={styles.category__img} src={img} alt={name} />
      <p className={styles.category__title}>{name}</p>
      <p className={styles.category__subtitle}>
        {count ? `${count} models` : 'Loading...'}
      </p>
    </a>
  </li>
);
