import React from 'react';
import { addSpace } from '../../../HomePage/components/utils/addSpace';

import styles from './ProductCard.module.scss';

import { Link } from 'react-router-dom';
import { Model } from '../../../../types/Model';
import { ButtonsCard } from '../ButtonsCard';

type Props = {
  model: Model;
  discount?: boolean;
};

export const ProductCard: React.FC<Props> = ({ model, discount }) => {
  return (
    <div className={styles.model}>
      <Link to={`/${model.category}/${model.itemId || model.id}`}>
        <img src={model.image} alt={model.name} className={styles.img} />
      </Link>

      <div className={styles.down}>
        <Link
          to={`/${model.category}/${model.itemId || model.id}`}
          className={styles.name}
        >
          {model.name}
        </Link>
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

        <ButtonsCard model={model} />
      </div>
    </div>
  );
};
