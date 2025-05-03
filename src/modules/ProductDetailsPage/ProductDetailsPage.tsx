import { Nesting } from '../shared/components/Nesting/Nesting';

import { Link, useParams } from 'react-router-dom';

import styles from './ProductDetailsPage.module.scss';
import { Loader } from '../shared/components/Loader';
import { Slider } from './components/Slider';
import { SettingsSlider } from './components/SettingsSlider';
import { useProductDetails } from '../shared/hooks/useProductDetails';

export const ProductDetailsPage = () => {
  const { category, id } = useParams();
  const { product, colors, capacities, loading, error } = useProductDetails(
    category,
    id,
  );

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
        <SettingsSlider
          product={product}
          colors={colors}
          capacities={capacities}
        />
      </div>
    </div>
  );
};
