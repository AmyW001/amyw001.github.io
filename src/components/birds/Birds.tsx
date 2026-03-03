import styles from "./birds.module.css";

function Birds() {
  return (
    <div className={styles.birdContainer}>
      <div className={`${styles.bird} ${styles.bird1}`}></div>
      <div className={`${styles.bird} ${styles.bird2}`}></div>
      <div className={`${styles.bird} ${styles.bird3}`}></div>
      <div className={`${styles.bird} ${styles.bird4}`}></div>
      <div className={`${styles.bird} ${styles.bird5}`}></div>
    </div>
  );
}

export default Birds;
