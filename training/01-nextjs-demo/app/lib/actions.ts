'use server'

import bcrypt from 'bcrypt'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { connectToDatabase } from './utils'
import { Product, User } from './models'
import { signIn } from '../auth'

const encryptPwd = (pwd: FormDataEntryValue) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pwd.toString(), salt)
}


export const addUser = async (form: FormData) => {
    const { username, email, password, isAdmin, isActive, phone, address } = Object.fromEntries(form)
    
    try {
        connectToDatabase()
        const pwd = encryptPwd(password)
        const newUser = new User({ username, email, password: pwd, isAdmin, isActive, phone, address })
        await newUser.save()
    } catch (error) {
        console.error(error)
        throw new Error('Failed to add User')
    } finally {
        revalidatePath('/dashboard/users')
        redirect('/dashboard/users')
    }
}

export const updateUser = async (form: FormData) => {
    const { id, username, email, password, isAdmin, isActive, phone, address } = Object.fromEntries(form)
    
    try {
        connectToDatabase()
        const newData = { username, email, password, isAdmin, isActive, phone, address } 
        Object.keys(newData).forEach((key) => (newData[key as keyof typeof newData] === '' || undefined) && delete newData[key as keyof typeof newData])

        await User.findByIdAndUpdate(id, { username, email, password, isAdmin, isActive, phone, address })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to update User')
    } finally {
        revalidatePath('/dashboard/users')
        redirect('/dashboard/users')
    }
}

export const deleteUser = async (form: FormData) => {
    const { id } = Object.fromEntries(form)
    
    try {
        connectToDatabase()
        await User.findOneAndDelete({ _id: id })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to delete User')
    } finally {
        revalidatePath('/dashboard/users')
        redirect('/dashboard/users')
    }
}

export const addProduct = async (form: FormData) => {
    const {  title, description, price, stock, color, size } = Object.fromEntries(form)
    
    try {
        connectToDatabase()
        const newProduct = new Product({  title, description, price, stock, color, size })
        await newProduct.save()
    } catch (error) {
        console.error(error)
        throw new Error('Failed to add Product')
    } finally {
        revalidatePath('/dashboard/products')
        redirect('/dashboard/products')
    }
}

export const updateProduct = async (form: FormData) => {
    const { id, title, description, price, stock, color, size } = Object.fromEntries(form)
    
    try {
        connectToDatabase()
        const newData = { title, description, price, stock, color, size } 
        Object.keys(newData).forEach((key) => (newData[key as keyof typeof newData] === '' || undefined) && delete newData[key as keyof typeof newData])

        await Product.findByIdAndUpdate(id, { title, description, price, stock, color, size })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to update Product')
    } finally {
        revalidatePath('/dashboard/products')
        redirect('/dashboard/products')
    }
}

export const deleteProduct = async (form: FormData) => {
    const { id } = Object.fromEntries(form)
    
    try {
        connectToDatabase()
        await Product.findOneAndDelete({ _id: id })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to delete Product')
    } finally {
        revalidatePath('/dashboard/products')
        redirect('/dashboard/products')
    }
}

export const authenticate = async (loginForm: FormData) => {
    const { username, password } = Object.fromEntries(loginForm)

    try {
        await signIn('credentials', { username, password })
    } catch (error: any) {
        if (error.message.includes("CredentialsSignin")) {
            return { error: "Wrong Credentials" };
        }
        throw error;
    }
}