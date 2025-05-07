import { useSearchParams } from 'react-router-dom';
import styles from './SettingsSlider.module.scss';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../../types/Product';
import { ButtonsCart } from '../../../shared/components/ButtonsCart';
import classNames from 'classnames';

type Props = {
  product: Product;
};

export const SettingsSlider: React.FC<Props> = ({ product }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentColor = searchParams.get('color') || product.colorsAvailable[0];
  const currentCapacity =
    searchParams.get('capacity') || product.capacityAvailable[0];

  const [selectedColor, setSelectedColor] = useState(currentColor);
  const [selectedCapacity, setSelectedCapacity] = useState(currentCapacity);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('color', selectedColor);
    newParams.set('capacity', selectedCapacity);
    setSearchParams(newParams);
  }, [selectedColor, selectedCapacity, setSearchParams, searchParams]);

  useEffect(() => {
    setSelectedColor(currentColor);
  }, [currentColor]);

  useEffect(() => {
    setSelectedCapacity(currentCapacity);
  }, [currentCapacity]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Available colors</h2>
      <div className={styles.list}>
        {product.colorsAvailable.map(color => (
          <div
            key={color}
            className={`${styles.circle} ${selectedColor === color ? styles.active : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <div className={styles.line}></div>

      <h3 className={styles.title}>Select capacity</h3>
      <div className={styles.list}>
        {product.capacityAvailable.map(capacity => (
          <div
            key={capacity}
            className={classNames(styles.capacity, {
              [styles.active]: selectedCapacity === capacity,
            })}
            onClick={() => setSelectedCapacity(capacity)}
          >
            {capacity}
          </div>
        ))}
      </div>
      <div className={styles.line}></div>

      <div className={styles.price}>
        <div className={styles.price__discount}>${product.priceDiscount}</div>
        <div className={styles.price__regular}>${product.priceRegular}</div>
      </div>

      <ButtonsCart />

      <div className={styles.characteristics}>
        <div className={styles.characteristics__items}>
          <div className={styles.characteristics__left}>Screen</div>
          <div className={styles.characteristics__right}>{product.screen}</div>
        </div>
        <div className={styles.characteristics__items}>
          <div className={styles.characteristics__left}>Resolution</div>
          <div className={styles.characteristics__right}>
            {product.resolution}
          </div>
        </div>
        <div className={styles.characteristics__items}>
          <div className={styles.characteristics__left}>Processor</div>
          <div className={styles.characteristics__right}>
            {product.processor}
          </div>
        </div>
        <div className={styles.characteristics__items}>
          <div className={styles.characteristics__left}>RAM</div>
          <div className={styles.characteristics__right}>{product.ram}</div>
        </div>
      </div>
    </div>
  );
};
