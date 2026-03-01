import { useEffect, useState } from "react";
import { Avatar, AvatarTwo, AvatarThree } from "../../../assets";
import styles from "./avatarGif.module.css";

const avatars = [Avatar, AvatarTwo, AvatarThree];

export default function AvatarGif() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    avatars.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % avatars.length);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.avatarGif}>
      <img src={avatars[index]} alt="Avatar" className={styles.avatar} draggable={false} />
    </div>
  );
}
