// ! Переробити картинки слайдера, зробити кнопку
// ! Зробити Link
// ! Зробити кнопки активними

import { MainSlider } from './components/MainSlider';
import { Categorys } from './components/Categorys/Categorys';
import { useEffect, useState } from 'react';
import { goods } from '../../services/goods';
import { Model } from '../../types/Model';
import { ProductsSlider } from './components/ProductsSlider';

import global from '../shared/globalStyles.module.scss';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [newModels, setNewModels] = useState<Model[]>([]);
  const [hotPrices, setHotPrices] = useState<Model[]>([]);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const discount = true;
  const titleNewModels = 'Brand new models';
  const titleHotPrices = 'Hot prices';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [newModelsData, hotPricesData] = await Promise.all([
          goods.newModelsFetch(),
          goods.hotPricesFetch(),
        ]);

        setNewModels(newModelsData);
        setHotPrices(hotPricesData);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && errorMessage) {
    return (
      <div>
        <p>{errorMessage}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }

  if (!newModels.length || (!hotPrices.length && !loading && !errorMessage)) {
    return <div>No data</div>;
  }

  return (
    <div className={styles.home}>
      <h1 className={global.title}>Welcome to Nice Gadgets store!</h1>
      <div className={styles.main_slider}>
        <MainSlider />
      </div>

      <div className={styles.new_models}>
        <ProductsSlider models={newModels} title={titleNewModels} />
      </div>
      <div className={styles.category}>
        <Categorys />
      </div>
      <div className={styles.hot_prices}>
        <ProductsSlider
          models={hotPrices}
          title={titleHotPrices}
          discount={discount}
        />
      </div>
    </div>
  );
};
