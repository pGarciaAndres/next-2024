'use client'

import { useState } from 'react'
import { authenticate } from '@/app/lib/actions'
import styles from './loginForm.module.css'

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (formData: FormData) => {
    const data = await authenticate(formData)
    data?.error && setError(data.error)
  }

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type='text' name='username' placeholder='Username' />
      <input type='password' name='password' placeholder='Password' />
      <button type='submit'>Login</button>
      {error && <p>{error}</p>}
    </form>
  )
}
