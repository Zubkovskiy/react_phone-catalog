import { Product } from '../../../../types/Product';
import { normalizeProduct } from '../../../shared/utils/normalizeProduct';
import { ProductCard } from '../../../shared/components/ProductCard';
import { useSearchParams } from 'react-router-dom';

import styles from './ProductCards.module.scss';

type Props = {
  model: Product[];
};

const PRODUCTS_PER_PAGE = 16;

export const ProductCards: React.FC<Props> = ({ model }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromParams = Number(searchParams.get('page')) || 1;

  const totalPages = Math.ceil(model.length / PRODUCTS_PER_PAGE);
  const currentPage = Math.min(Math.max(pageFromParams, 1), totalPages);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const visibleProducts = model.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page: page.toString() });
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <>
      <div className={styles.cards}>
        {visibleProducts.map(item => (
          <ProductCard key={item.id} model={normalizeProduct(item)} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.arrow} ${styles['arrow--left']}`}
        ></button>

        <div className={styles.numbers}>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? styles.active : ''}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.arrow} ${styles['arrow--right']}`}
        ></button>
      </div>
    </>
  );
};
