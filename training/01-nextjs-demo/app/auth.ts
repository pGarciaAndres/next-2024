import bcrypt from 'bcrypt'
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from "./authconfig";
import { connectToDatabase } from "./lib/utils";
import { User } from "./lib/models";


const login = async (credentials: any) => {
    try {
        connectToDatabase()
        const user = await User.findOne({username: credentials.username})

        if (!user || !user.isAdmin) throw new Error('Invalid username')
        
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordValid) throw new Error('Invalid password')

        return user
    } catch (error) {
        console.error(error)
        throw new Error('Failed to login')
    }
}

export const {signIn, signOut, auth } = NextAuth({
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
          if (user) {
            token.username = user?.username;
            token.img = user.img;
          }
          return token;
        },
        async session({ session, token }: any) {
          if (token) {
            session.user.username = token.username;
            session.user.img = token.img;
          }
          return session;
        },
    }
})


