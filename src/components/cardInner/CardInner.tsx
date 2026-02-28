import styles from "./cardInner.module.css";

function CardInner({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.cardInner} data-testid="card-inner">
      <span className={`${styles.corner} ${styles.cornerTopLeft}`} />
      <span className={`${styles.corner} ${styles.cornerTopRight}`} />
      <span className={`${styles.corner} ${styles.cornerBottomLeft}`} />
      <span className={`${styles.corner} ${styles.cornerBottomRight}`} />
      {children}
    </div>
  );
}

export default CardInner;
