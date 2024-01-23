import { MdLogout } from 'react-icons/md'
import { signOut } from '@/app/auth'
import styles from './logout.module.css'

export const Logout = () => {
  return (
    <div className={styles.container}>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  )
}
