import styles from "./linkButton.module.css";

type LinkButtonProps = {
  buttonText: string;
  colorVariant?: string;
  href: string;
  disabled?: boolean;
  icon?: string;
  iconAlt?: string;
};

function LinkButton({
  buttonText,
  colorVariant = "primary",
  href,
  disabled = false,
  icon,
  iconAlt,
}: LinkButtonProps) {
  const buttonClasName = `${styles.button} ${styles[colorVariant]} ${disabled ? styles.disabled : ""}`;
  return (
    <a href={href} className={buttonClasName} target="_blank" rel="noopener noreferrer">
      {icon && <img src={icon} alt={iconAlt || buttonText} className={styles.icon} />}
      {buttonText}
    </a>
  );
}

export default LinkButton