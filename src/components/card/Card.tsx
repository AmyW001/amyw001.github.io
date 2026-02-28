import styles from './card.module.css'

function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles.card} data-testid="card">{
      children}
    </div>
  )
}

export default Card