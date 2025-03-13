import { Product } from '../../../../types/Product';
import { normalizeProduct } from '../../../shared/utils/normalizeProduct';
import { ProductCard } from '../../../shared/components/ProductCard';

import styles from './ProductCards.module.scss';

type Props = {
  model: Product[];
};

export const ProductCards: React.FC<Props> = ({ model }) => {
  return (
    <div className={styles.cards}>
      {model.map(item => (
        <ProductCard key={item.id} model={normalizeProduct(item)} />
      ))}
    </div>
  );
};
