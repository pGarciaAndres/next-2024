'use server'

import { signIn, signOut } from '@/app/auth'
import { redirect } from 'next/navigation'

export const authenticate = async (loginForm: FormData) => {
  const { username, password } = Object.fromEntries(loginForm)

  try {
    await signIn('credentials', { username, password, redirectTo: '/notes' })
    return { error: false }
  } catch (error: any) {
    if (error.message.includes('credentialssignin')) {
      return { error: 'Incorrect username or password' }
    }

    if (error.message.includes('error')) {
      return { error: 'Something went wrong' }
    }

    throw error
  }
}

export const logout = async () => {
  await signOut()
}

export const linkTo = (url: string) => {
  redirect(url)
}
