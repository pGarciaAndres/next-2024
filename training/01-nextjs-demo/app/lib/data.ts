import { PER_PAGE } from "./constants"
import { Product, User } from "./models"
import { connectToDatabase } from "./utils"

export const fetchUsers = async (query: string, page: number) => {
    const regex = new RegExp(query, 'i')
    const ITEM_PER_PAGE = PER_PAGE

    try {
        connectToDatabase()
        const count = await User.find({username: { $regex: regex }}).countDocuments()
        const users = await User.find({username: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
        return {count, users}
    } catch (error) {
        throw new Error('Failed to fetch users')
    }
}

export const fetchUserById = async (id: string) => {
    try {
        connectToDatabase()
        const user = await User.findById(id)
        return user
    } catch (error) {
        throw new Error(`Failed to fetch user ${id}`)
    }
}

export const fetchProducts = async (query: string, page: number) => {
    const regex = new RegExp(query, 'i')
    const ITEM_PER_PAGE = PER_PAGE

    try {
        connectToDatabase()
        const count = await Product.find({title: { $regex: regex }}).countDocuments()
        const products = await Product.find({title: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
        return {count, products}
    } catch (error) {
        throw new Error('Failed to fetch users')
    }

}

export const fetchProductById = async (id: string) => {
    try {
        connectToDatabase()
        const product = await Product.findById(id)
        return product
    } catch (error) {
        throw new Error(`Failed to fetch product ${id}`)
    }
}