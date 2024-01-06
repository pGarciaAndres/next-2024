import { Navbar } from '../ui/dashboard/navbar/navbar'
import { Sidebar } from '../ui/dashboard/sidebar/sidebar'
import styles from '../ui/dashboard/dashboard.module.css'
import { Footer } from '../ui/footer/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}