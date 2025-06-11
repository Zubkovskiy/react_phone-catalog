import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Nesting } from '../shared/components/Nesting/Nesting';
import { Slider } from './components/Slider';
import { SettingsSlider } from './components/SettingsSlider';
import { Description } from './components/Description';
import { ProductsSlider } from '../shared/components/ProductsSlider';

import styles from './ProductDetailsPage.module.scss';

import { goods } from '../../services/goods';
import { Product } from '../../types/Product';
import { Model } from '../../types/Model';
import { Loader } from '../shared/components/Loader';
import { ErrorMessage } from '../shared/components/ErrorMessage';

export const ProductDetailsPage = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [randomProducts, setRandomProducts] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    goods
      .productDetailsFetch(category as string)
      .then(data => {
        const found = data.find(item => item.id === id);

        if (found) {
          setProduct(found);
        } else {
          setError('Product not found');
        }
      })
      .catch(() => {
        setError('Failed to load product details');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, id]);

  useEffect(() => {
    if (!product) {
      return;
    }

    goods
      .getSuggestedProducts()
      .then(setRandomProducts)
      .catch(() => {
        setError('Failed to load suggestions');
      });
  }, [product]);

  if (loading) {
    return <Loader />;
  }

  if (error && !loading) {
    return <ErrorMessage error={error} />;
  }

  if (!product) {
    return <ErrorMessage error="Unknown error" />;
  }

  return (
    <div>
      <Nesting category={category as string} name={product.name} />

      <Link to={`/${category}`} className={styles.back}>
        Back
      </Link>

      <h1 className={styles.name}>{product.name}</h1>

      <div className={styles.slider_wrapper}>
        <Slider product={product} />
        <SettingsSlider product={product} />
      </div>

      <Description product={product} />

      <div className={styles.products_slider}>
        <ProductsSlider
          models={randomProducts}
          title="You may also like"
          discount
        />
      </div>
    </div>
  );
};
