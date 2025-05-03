import favorite from '/img/icons/favourites.svg';

import styles from './ButtonsCart.module.scss';

export const ButtonsCart = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.cart}>Add to cart</div>
      <div className={`${styles.button} ${styles.favorite}`}>
        <img src={favorite} alt={favorite} />
      </div>
    </div>
  );
};
