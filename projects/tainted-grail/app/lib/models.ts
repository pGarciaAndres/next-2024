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

const statusSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  size: {
    type: Number,
    required: true
  },
  counted: {
    type: Boolean,
    default: false
  },
  checked: [String]
})

const statusesSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    statuses: [statusSchema]
  },
  {
    timestamps: true
  }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Statuses =
  mongoose.models?.Statuses || mongoose.model('Statuses', statusesSchema)
export const Status =
  mongoose.models?.Status || mongoose.model('Status', statusSchema)
