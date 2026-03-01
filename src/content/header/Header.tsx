import { useEffect, useState } from "react";
import { Card, Toggle } from "../../components";
import AvatarGIF from "./avatarGIF/AvatarGIF";
import styles from "./header.module.css";

type TypewriterProps = {
  text: string;
  speed?: number;
};

function Typewriter({ text, speed = 55 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <div className={styles.typewriterWrapper}>
      <p className={styles.typewriterGhost}>{text}</p>
      <p className={styles.typewriter}>
        {displayed}
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.toggleWrapper}>
        <Toggle />
      </div>
      <header className={styles.headerContent}>
        <h1 className={styles.title} data-text="Amy Welch">
          <span className={styles.titleShadow}>Amy Welch</span>
          <span className={styles.titleFill}>Amy Welch</span>
        </h1>
        <h2 className={styles.title}>
          <span className={styles.titleShadow}>Fullstack Developer</span>
          <span className={styles.titleFill}>Fullstack Developer</span>
        </h2>
      </header>
      <section className={styles.intro}>
        <Card>
          <div className={styles.speechBox}>
            <AvatarGIF />
            <Typewriter text="Welcome to my portfolio!" />
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Header;
