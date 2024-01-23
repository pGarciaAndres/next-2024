import Image from 'next/image'
import { Slide, ToastContainer } from 'react-toastify'
import { LoginForm } from '@/app/ui/login/loginForm/loginForm'
import styles from '@/app/ui/login/login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Image
        src='/logo.png'
        alt='Tainted Grail Logo'
        width={500}
        height={24}
        priority
      />
      <LoginForm />
      <ToastContainer
        position='top-center'
        autoClose={2000}
        closeButton={false}
        closeOnClick={true}
        theme='light'
        transition={Slide}
        hideProgressBar={true}
      />
    </div>
  )
}
