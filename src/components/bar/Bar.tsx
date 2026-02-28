import styles from "./bar.module.css";

function Bar() {
  return (
    <div className={styles.bar} data-testid="bar"></div>
  )
}

export default Bar