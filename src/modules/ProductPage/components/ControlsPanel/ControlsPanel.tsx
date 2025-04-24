import React, { FC } from 'react';
import styles from './ControlsPanel.module.scss';
import { useDropdown } from '../../../shared/hooks/useDropdown';

const options1 = ['Newest', 'Alphabetically', 'Cheapest'];
const options2 = ['4', '8', '16', 'all'];

export const ControlsPanel: FC = () => {
  const dropdown1 = useDropdown();
  const dropdown2 = useDropdown();

  const [selected1, setSelected1] = React.useState('Newest');
  const [selected2, setSelected2] = React.useState('16');

  return (
    <div className={styles.panel}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Items on page</p>
        <div className={styles.selectContainer} ref={dropdown1.ref}>
          <button
            className={`${styles.selectButton} ${dropdown1.isOpen ? styles.focus : ''}`}
            onClick={dropdown1.toggle}
          >
            <span>{selected1}</span>
            <div
              className={`${styles.arrow} ${dropdown1.isOpen ? styles.arrow_up : styles.arrow_down}`}
            />
          </button>
          {dropdown1.isOpen && (
            <ul className={styles.optionsList}>
              {options1.map((option, i) => (
                <li
                  key={i}
                  className={styles.option}
                  onClick={() => {
                    setSelected1(option);
                    dropdown1.close();
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.title}>Sort by</p>
        <div className={styles.selectContainer} ref={dropdown2.ref}>
          <button
            className={`${styles.selectButton} ${dropdown2.isOpen ? styles.focus : ''}`}
            onClick={dropdown2.toggle}
          >
            <span>{selected2}</span>
            <div
              className={`${styles.arrow} ${dropdown2.isOpen ? styles.arrow_up : styles.arrow_down}`}
            />
          </button>
          {dropdown2.isOpen && (
            <ul className={styles.optionsList}>
              {options2.map((option, i) => (
                <li
                  key={i}
                  className={styles.option}
                  onClick={() => {
                    setSelected2(option);
                    dropdown2.close();
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
