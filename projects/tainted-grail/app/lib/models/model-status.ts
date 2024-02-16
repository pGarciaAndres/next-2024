import mongoose from 'mongoose'

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

export const Statuses =
  mongoose.models?.Statuses || mongoose.model('Statuses', statusesSchema)
export const Status =
  mongoose.models?.Status || mongoose.model('Status', statusSchema)
