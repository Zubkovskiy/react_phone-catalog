import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { ProductCards } from './components/ProductCards/ProductCards';
import { Nesting } from '../shared/components/Nesting/Nesting';
import { Loader } from '../shared/components/Loader';
import { getData } from '../../utils/httpClient';
import { Product } from '../../types/Product';
import { ControlsPanel } from './components/ControlsPanel';

import globalStyles from '../shared/globalStyles.module.scss';
import styles from './ProductPage.module.scss';

export const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { category } = useParams();

  const allowedCategories = React.useMemo(
    () => ['phones', 'tablets', 'accessories'],
    [],
  );

  useEffect(() => {
    setLoading(true);
    getData(`/${category}.json`)
      .then(response => {
        setProduct(response as Product[]);
        setError(null);
      })
      .catch(() => {
        setError('Failed to fetch data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  if (!category || !allowedCategories.includes(category)) {
    return <Navigate to="not-found" replace />;
  }

  if (product.length === 0) {
    return <div className={globalStyles.no_products}>No products</div>;
  }

  if (loading) {
    return <Loader />;
  }

  if (error || (!loading && product.length === 0)) {
    return <div>{error ?? 'No products available'}</div>;
  }

  return (
    <div className={styles.product}>
      <Nesting category={category} />

      {category === 'phones' ? (
        <h1 className={globalStyles.title}>Mobile phones</h1>
      ) : (
        <h1 className={globalStyles.title}>{category}</h1>
      )}

      <div className={styles.product__amount_models}>
        {product.length} models
      </div>

      <ControlsPanel />

      <div className={styles.product__cards}>
        <ProductCards model={product} />
      </div>
    </div>
  );
};
