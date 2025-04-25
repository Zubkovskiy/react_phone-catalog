import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './ControlsPanel.module.scss';
import { CustomSelect } from '../CustomSelect';

const options1 = ['Newest', 'Alphabetically', 'Cheapest'];
const options2 = ['4', '8', '16', 'all'];

export const ControlsPanel: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selected, setSelected] = useState('Newest');
  const [numberOfPages, setNumberOfPages] = useState('16');

  useEffect(() => {
    const sortParam = searchParams.get('sort');
    const perPageParam = searchParams.get('perPage');

    if (sortParam && options1.includes(sortParam)) {
      setSelected(sortParam);
    }

    if (perPageParam && options2.includes(perPageParam)) {
      setNumberOfPages(perPageParam);
    }
  }, [searchParams]);

  const updateSearchParam = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.panel}>
      <CustomSelect
        title="Sort by"
        options={options1}
        selected={selected}
        onSelect={value => {
          setSelected(value);
          updateSearchParam('sort', value);
        }}
      />
      <CustomSelect
        title="Items on page"
        options={options2}
        selected={numberOfPages}
        onSelect={value => {
          setNumberOfPages(value);
          updateSearchParam('perPage', value);
        }}
      />
    </div>
  );
};
