import { useSearchParams } from 'react-router-dom';
import styles from './SettingsSlider.module.scss';
import React, { useEffect, useState } from 'react';
import { Product } from '../../../../types/Product';
import { ButtonsCart } from '../../../shared/components/ButtonsCart';

type Props = {
  product: Product;
  colors: string[];
  capacities: string[];
};

export const SettingsSlider: React.FC<Props> = ({
  product,
  colors,
  capacities,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentColor = searchParams.get('color') || colors[0];
  const currentCapacity = searchParams.get('capacity') || capacities[0];

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
      <h3 className={styles.title}>Available colors</h3>
      <div className={styles.list}>
        {colors.map(color => (
          <button
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
        {capacities.map(capacity => (
          <button
            key={capacity}
            className={`${styles.capacity} ${selectedCapacity === capacity ? styles.active : ''}`}
            onClick={() => setSelectedCapacity(capacity)}
          >
            {capacity}
          </button>
        ))}
      </div>
      <div className={styles.line}></div>

      <div className={styles.price}>
        <div className={styles.price__discount}>${product.priceDiscount}</div>
        <div className={styles.price__regular}>${product.priceRegular}</div>
      </div>

      <ButtonsCart />
    </div>
  );
};
