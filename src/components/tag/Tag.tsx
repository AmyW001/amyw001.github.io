import styles from "./tag.module.css";

function Tag({ tagText }: { tagText: string }) {
  return (
    <div className={styles.tag}>
      { tagText }
    </div>
  )
}

export default Tag