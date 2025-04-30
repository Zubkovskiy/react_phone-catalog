import { Nesting } from '../shared/components/Nesting/Nesting';

import { Link, useParams } from 'react-router-dom';

import styles from './ProductDetailsPage.module.scss';
import { useEffect, useState } from 'react';
import { goods } from '../../services/goods';
import { Loader } from '../shared/components/Loader';
import { Product } from '../../types/Product';

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { category, id } = useParams();

  useEffect(() => {
    setLoading(true);
    goods
      .productDetailsFetch(category as string, id as string)
      .then(data => {
        setProduct(data);
        setError(null);
      })
      .catch(() => {
        setError('Failed to load product');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, id, setProduct]);

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
      <Nesting category={category as string} name={id} />

      <Link to={`/${category}`} className={styles.back}>
        Back
      </Link>

      <h1 className={styles.name}>{product.name}</h1>
    </div>
  );
};
