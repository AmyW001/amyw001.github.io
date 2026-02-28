import styles from "./toggle.module.css";
import { Moon, Sun } from "../../assets";
import { useTheme } from "../../ThemeContext";

function Toggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <label className={styles.toggle}>
      <input 
        type="checkbox" 
        checked={isDark}
        onChange={toggleTheme}
      />
      <div className={styles.track}>
        <div className={styles.thumb}>
          <div className={styles.iconOff}>
            <img src={Sun} alt="Sun Icon" className={`${styles.icon} ${styles.sun}`} />
          </div>
          <div className={styles.iconOn}>
            <img src={Moon} alt="Moon Icon" className={`${styles.icon} ${styles.moon}`} />
          </div>
        </div>
      </div>
    </label>
  )
}

export default Toggle