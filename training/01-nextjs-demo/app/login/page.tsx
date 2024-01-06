import styles from '@/app/ui/login/login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <h1>Login</h1>
        <input type='text' name='username' placeholder='Username' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
