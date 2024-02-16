import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
