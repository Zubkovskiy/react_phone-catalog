import { addSpace } from '../utils/addSpace';

import styles from './ProductCard.module.scss';

import { Model } from '../types/Model';

import favorite from '/img/icons/favourites.svg';
import React from 'react';

type Props = {
  model: Model;
  discount?: boolean;
};

export const ProductCard: React.FC<Props> = ({ model, discount }) => {
  return (
    <div className={styles.model}>
      <img src={model.image} alt={model.name} className={styles.img} />

      <div className={styles.down}>
        <p className={styles.name}>{model.name}</p>
        <div className={styles.price_wrap}>
          {discount ? (
            <>
              <div className={styles.price}>${model.price}</div>
              <div className={styles.discount}>${model.fullPrice}</div>
            </>
          ) : (
            <div className={styles.price}>${model.fullPrice}</div>
          )}
        </div>

        <div className={styles.characteristics}>
          <div className={styles.wrap}>
            <div className={styles.left}>Screen</div>
            <div className={styles.right}>{model.screen}</div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.left}>Capacity</div>
            <div className={styles.right}>{addSpace(model.capacity)}</div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.left}>RAM</div>
            <div className={styles.right}>{addSpace(model.ram)}</div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.cart}>Add to cart</div>
          <div className={`${styles.button} ${styles.favorite}`}>
            <img src={favorite} alt="add to favorite" />
          </div>
        </div>
      </div>
    </div>
  );
};
