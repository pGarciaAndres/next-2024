import { STATUSES_TITLE } from '@/app/utils/constants'
import styles from '@/app/ui/statuses/statuses.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>{STATUSES_TITLE}</h1>
      <div>{children}</div>
    </div>
  )
}
