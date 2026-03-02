import type { ReactNode } from "react";
import styles from "./tooltip.module.css";

export type TooltipProps = {
  children: ReactNode;
  text: string;
};

function Tooltip({ children, text }: TooltipProps) {
  return (
    <div className={styles.tooltipTarget}>
      {children}
      <div className={styles.tooltip} role="tooltip">
        {text}
      </div>
    </div>
  );
}

export default Tooltip;
