import styles from './spinner.module.css';
const Spinner = () => {
  return (
    <div className={styles.force_field}>
      <div className={styles.sword}>
        <div className={styles.grip}></div>
        <div className={styles.beam}></div>
      </div>
    </div>
  );
};
export default Spinner;
