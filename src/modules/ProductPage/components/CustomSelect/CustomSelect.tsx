import { FC } from 'react';
import styles from './CustomSelect.module.scss';
import { useDropdown } from '../../../shared/hooks/useDropdown';

interface CustomSelectProps {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  title,
  options,
  selected,
  onSelect,
}) => {
  const dropdown = useDropdown();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <div className={styles.selectContainer} ref={dropdown.ref}>
        <div
          className={`${styles.selectButton} ${dropdown.isOpen ? styles.focus : ''}`}
          onClick={dropdown.toggle}
        >
          <span className={styles.text}>{selected}</span>
          <div
            className={`${styles.arrow} ${
              dropdown.isOpen ? styles.arrow_up : styles.arrow_down
            }`}
          />
        </div>

        <ul
          className={`${styles.optionsList} ${
            dropdown.isOpen ? styles.optionsListVisible : ''
          }`}
        >
          {options.map((option, i) => (
            <li
              key={i}
              className={styles.option}
              onClick={() => {
                onSelect(option);
                dropdown.close();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
