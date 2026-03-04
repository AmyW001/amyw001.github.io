import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Created by Amy Welch, inspired by Stardew Valley.{" "}
        <a href="https://github.com/AmyW001/amyw001.github.io" target="_blank" rel="noopener noreferrer">View the code here</a>
      </p>
    </div>
  );
}

export default Footer