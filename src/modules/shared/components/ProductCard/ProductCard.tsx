import React from 'react';
import { addSpace } from '../../../HomePage/components/utils/addSpace';
import { NormalizedProduct } from '../../../../types/NormalizedProduct';

import styles from './ProductCard.module.scss';

import favorite from '/img/icons/favourites.svg';

type Props = {
  model: NormalizedProduct;
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
