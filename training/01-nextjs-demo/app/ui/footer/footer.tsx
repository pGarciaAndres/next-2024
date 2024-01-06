import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>NextJs</div>
      <div className={styles.text}>&copy; 2024 Rights reserved</div>
    </div>
  )
}
