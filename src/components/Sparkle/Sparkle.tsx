import styles from "./Sparkle.module.css";

const Sparkle = ({ top = 0, left = 0 }) => {
  const randomDelay = Math.random() * 1;
  
  return (
    <div
      className={styles.sparkle}
      style={{ 
        top: `${top}%`, 
        left: `${left}%`,
        animationDelay: `${randomDelay}s`
      }}
    ></div>
  );
};

export default Sparkle;
