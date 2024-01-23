'use client'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { authenticate } from '@/app/lib/actions'
import { EMPTY_STRING } from '@/app/utils/constants'
import styles from './loginForm.module.css'

export const LoginForm = () => {
  const handleLogin = async (formData: FormData) => {
    const data = await authenticate(formData)
    data?.error && toast.error(data.error)

    const username = document.getElementById('username') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement
    username.value = EMPTY_STRING
    password.value = EMPTY_STRING
  }

  return (
    <form action={handleLogin} className={styles.form}>
      <input
        type='text'
        id='username'
        name='username'
        placeholder='Username'
        autoComplete='off'
      />
      <input
        type='password'
        id='password'
        name='password'
        placeholder='Password'
      />

      <button type='submit'>Login</button>
    </form>
  )
}
