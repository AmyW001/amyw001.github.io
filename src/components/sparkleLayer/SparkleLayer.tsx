import { createPortal } from "react-dom";
import { useMemo, useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import { Sparkle } from "..";
import styles from "./sparkleLayer.module.css";

function SparkleLayer() {
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(() => 
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sparkles = useMemo(() => {
    const maxLeft = screenWidth < 768 ? 85 : screenWidth < 1024 ? 92 : 95;
    return Array.from({ length: 17 }, (_, index) => ({
      id: index,
      top: Math.random() * 30 + 2,
      left: Math.random() * maxLeft + 2,
    }));
  }, [screenWidth]);

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
