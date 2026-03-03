import { useEffect, useRef, useState } from "react";
import styles from "./skillBar.module.css";
import { Tooltip } from "../../components";

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

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold: 0.4 },
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`${styles.skillBarWrapper} ${isVisible ? styles.animate : ""}`}>
      {tooltipText ? (
        <Tooltip text={tooltipText}>
          {iconSrc ? (
            <img src={iconSrc} alt={iconAlt || label || ""} className={styles.icon} title={tooltipText} />
          ) : (
            label && <span className={styles.label}>{label}</span>
          )}
        </Tooltip>
      ) : iconSrc ? (
        <img src={iconSrc} alt={iconAlt || label || ""} className={styles.icon} />
      ) : (
        label && <span className={styles.label}>{label}</span>
      )}

      <div className={styles.bar} aria-label={ariaLabel} role="img">
        {segments.map((filled, index) => (
          <div
            key={index}
            className={`${styles.segment} ${filled ? styles.segmentFilled : ""}`}
            style={{
              animationDelay: filled ? `${index * 0.15}s` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillBar;
