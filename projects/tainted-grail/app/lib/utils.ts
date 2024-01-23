import mongoose from 'mongoose'

const connection = {
  isConnected: 0
}

export const connect = async () => {
  try {
    if (connection.isConnected) return
    const db = await mongoose.connect(process.env.MONGO ?? '')
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.error(error)
    throw new Error('Failed to connect to database')
  }
}
