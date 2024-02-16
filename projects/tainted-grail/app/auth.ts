import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './authconfig'
import { User } from './lib/models'
import { connect } from './lib/utils'

const login = async (credentials: any) => {
  try {
    connect()
    const user = await User.findOne({
      username: credentials.username.toLowerCase()
    })
    if (!user || !user.isAdmin) throw new Error('Invalid username')

    const isPasswordValid = await bcrypt.compare(
      credentials.password.toLowerCase(),
      user.password
    )
    if (!isPasswordValid) throw new Error('Invalid password')

    return user
  } catch (error) {
    console.error(error)
    throw new Error('Failed to login')
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const result = await login(credentials)
          return result
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }: any) {
      token && (session = token)
      return session
    }
  }
})
