import { Navigator } from '@/app/ui/navigator/navigator'
import styles from '@/app/ui/common/layout/layout.module.css'

export default function CommonLayout({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.layout}>
      <Navigator />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>
  )
}
