import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading_wave}>
        <div className={styles.loading_bar} />
        <div className={styles.loading_bar} />
        <div className={styles.loading_bar} />
        <div className={styles.loading_bar} />
      </div>
    </div>
  );
};
