import { createPortal } from "react-dom";
import { useMemo } from "react";
import { useTheme } from "../../ThemeContext";
import { Sparkle } from "..";
import styles from "./sparkleLayer.module.css";

function SparkleLayer() {
  const { theme } = useTheme();

  const sparkles = useMemo(() => {
    return Array.from({ length: 17 }, (_, index) => ({
      id: index,
      top: Math.random() * 30 + 2,
      left: Math.random() * 95 + 2,
    }));
  }, []);

  if (theme !== "dark") {
    return null;
  }

  return createPortal(
    <div className={styles.layer}>
      <div className={styles.star}></div>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} top={sparkle.top} left={sparkle.left} />
      ))}
    </div>,
    document.body
  );
}

export default SparkleLayer;
