import styles from "./skillBar.module.css";

export type SkillBarProps = {
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
  tooltip?: string;
  value: number;
  max?: number;
};

function SkillBar({ label, iconSrc, iconAlt, tooltip, value, max = 9 }: SkillBarProps) {
  const safeValue = Math.max(0, Math.min(max, value));
  const segments = Array.from({ length: max }, (_, i) => i < safeValue);

  const ariaLabel = label || iconAlt;
  const tooltipText = tooltip || ariaLabel;

  return (
    <div className={styles.skillBarWrapper}>
      <div className={styles.tooltipTarget}>
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={iconAlt || label || ""}
            className={styles.icon}
            title={tooltipText}
          />
        ) : (
          label && <span className={styles.label}>{label}</span>
        )}
        {tooltipText && (
          <span className={styles.tooltip} role="tooltip">
            {tooltipText}
          </span>
        )}
      </div>
      <div className={styles.bar} aria-label={ariaLabel} role="img">
        {segments.map((filled, index) => (
          <div
            key={index}
            className={filled ? styles.segmentFilled : styles.segmentEmpty}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillBar;
