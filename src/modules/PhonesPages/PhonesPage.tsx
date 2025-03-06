import { Nesting } from '../shared/components/Nesting/Nesting';
import globalStyles from '../shared/globalStyles.module.scss';
// import styles from './PhonesPage.module.scss';

export const PhonesPage = () => {
  return (
    <>
      <Nesting category="Phones" />

      <h1 className={globalStyles.title}>Mobile phones</h1>
    </>
  );
};
