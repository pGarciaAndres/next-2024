import { LoginForm } from '@/app/ui/login/loginForm/loginForm'
import styles from '@/app/ui/login/login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}
