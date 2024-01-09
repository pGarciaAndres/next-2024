import { Navbar } from '@/app/ui/dashboard/navbar/navbar'
import { Sidebar } from '@/app/ui/dashboard/sidebar/sidebar'
import { Footer } from '@/app/ui/footer/footer'
import styles from '@/app/ui/dashboard/dashboard.module.css'

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
