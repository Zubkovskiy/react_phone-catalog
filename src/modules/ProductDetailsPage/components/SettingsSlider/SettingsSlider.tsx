import { useSearchParams } from 'react-router-dom';
import styles from './SettingsSlider.module.scss';
import { useEffect, useState } from 'react';

const colors = ['black', 'red', 'blue', 'green', 'yellow', 'purple', 'orange'];

export const SettingsSlider = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentColor = searchParams.get('color') || colors[0];
  const [selectedColor, setSelectedColor] = useState(currentColor);

  useEffect(() => {
    setSearchParams({ color: selectedColor });
  }, [selectedColor, setSearchParams]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Available colors</h3>
      <div className={styles.list}>
        {colors.map(color => (
          <button
            key={color}
            className={`${styles.circle} ${
              selectedColor === color ? styles.active : ''
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
};
