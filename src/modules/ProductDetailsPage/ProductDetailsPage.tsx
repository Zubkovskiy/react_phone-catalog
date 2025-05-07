import { Nesting } from '../shared/components/Nesting/Nesting';

import { Link, useParams } from 'react-router-dom';

import styles from './ProductDetailsPage.module.scss';
import { Loader } from '../shared/components/Loader';
import { Slider } from './components/Slider';
import { SettingsSlider } from './components/SettingsSlider';
import { useEffect, useState } from 'react';
import { goods } from '../../services/goods';
import { Product } from '../../types/Product';
import { Description } from './components/Description';

export const ProductDetailsPage = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    goods
      .productDetailsFetch(category as string)
      .then(data => {
        const foundProduct = data.find(item => item.id === id) as
          | Product
          | undefined;

        if (foundProduct !== undefined) {
          setProduct(foundProduct);
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

  if (loading) {
    return <Loader />;
  }

  if (error && !loading) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
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
    </div>
  );
};
