import { User } from "./models"
import { connectToDatabase } from "./utils"

export const fetchUsers = async () => {
    try {
        connectToDatabase()
        const res = await User.find()
        return res
    } catch (error) {
        throw new Error('Failed to fetch users')
    }
}