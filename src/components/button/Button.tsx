import styles from "./button.module.css";

type ButtonProps = {
  buttonText: string;
  colorVariant?: string;
  disabled?: boolean;
  icon?: string;
  iconAlt?: string;
  buttonType?: "button" | "submit" | "reset";
  onClick?: () => void;
};

function Button({
  buttonText,
  colorVariant = "primary",
  disabled = false,
  icon,
  iconAlt,
  buttonType = "button",
  onClick,
}: ButtonProps) {
  const buttonComponent = `${styles.buttonComponent} ${styles[colorVariant]} ${disabled ? styles.disabled : ""}`;
  
  return (
    <button className={buttonComponent} disabled={disabled} type={buttonType} onClick={onClick}>
      {icon && <img src={icon} alt={iconAlt || buttonText} className={styles.icon} />}
      {buttonText}
    </button>
  );
}

export default Button