import { useState, useEffect } from "react";
import { ArrowUp, ArrowUpBrown } from "../../assets";
import { useTheme } from "../../ThemeContext";
import styles from "./backToTop.module.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
      onClick={scrollUp}
      aria-label="Back to top"
      aria-hidden={!visible}
    >
      <img src={theme === 'light' ? ArrowUpBrown : ArrowUp} alt="Arrow pointing up" />
    </button>
  );
}

export default BackToTop;
