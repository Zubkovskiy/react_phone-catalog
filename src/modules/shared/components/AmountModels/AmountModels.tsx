import { Model } from '../../../../types/Model';
import styles from './AmountModels.module.scss';

type Props = {
  models: Model[];
  totalPrice?: boolean;
};

export const AmountModels: React.FC<Props> = ({ models, totalPrice }) => {
  return totalPrice ? (
    <p className={`${styles.amount_models} ${styles.total}`}>
      Total for {models.length} items
    </p>
  ) : (
    <p className={styles.amount_models}>{models.length} models</p>
  );
};
