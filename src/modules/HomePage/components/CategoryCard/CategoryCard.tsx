import React from 'react';

import { CategorySummary } from '../types/CategorySummary';

import styles from './CategoryCard.module.scss';

type Props = {
  item: CategorySummary;
  img: string;
};

export const CategoryCard: React.FC<Props> = ({ item, img }) => (
  <li key={item.category} className={styles.category}>
    <a href="#" className={styles.category__wrapper}>
      <img className={styles.category__img} src={img} alt={item.category} />
      <p className={styles.category__title}>{item.category}</p>
      <p className={styles.category__subt_itle}>{item.total} models</p>
    </a>
  </li>
);
