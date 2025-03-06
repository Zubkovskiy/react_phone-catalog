import { useEffect, useState } from 'react';

import { CategorySummary } from '../../../../types/CategorySummary';
import { Model } from '../../../../types/Model';

import styles from './Categorys.module.scss';
import globalStyles from '../../../shared/globalStyles.module.scss';

import phones from '/img/category/category-phones.jpg';
import tablests from '/img/category/category-tablets.jpg';
import Accessories from '/img/category/category-accessories.jpg';
import { CategoryCard } from '../CategoryCard';

export const Categorys = () => {
  const [categorySummary, setCategorySummary] = useState<CategorySummary[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categoryImg = [phones, tablests, Accessories];

  useEffect(() => {
    fetch('/api/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data: Model[]) => {
        const summary: Record<string, Set<string>> = {};

        data.forEach(product => {
          if (!summary[product.category]) {
            summary[product.category] = new Set();
          }

          summary[product.category].add(product.name);
        });

        const result = Object.entries(summary).map(([category, models]) => ({
          category,
          total: models.size,
        }));

        const categoryOrder = ['phones', 'tablets', 'accessories'];
        const sortedResult = result.sort(
          (a, b) =>
            categoryOrder.indexOf(a.category) -
            categoryOrder.indexOf(b.category),
        );

        setCategorySummary(sortedResult);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  return (
    <div className={styles.category}>
      <h2 className={`${globalStyles.subtitle} ${styles.category__subtitle}`}>
        Shop by category
      </h2>

      <ul className={styles.category__wrapper}>
        {categorySummary.map(item => {
          const img = categoryImg.shift() || '';

          return <CategoryCard key={item.category} item={item} img={img} />;
        })}
      </ul>
    </div>
  );
};
