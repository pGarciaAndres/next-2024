import mongoose from 'mongoose'

const healthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  agression: {
    type: Number,
    required: false,
  },
  courage: {
    type: Number,
    required: false,
  },
  practicality: {
    type: Number,
    required: false,
  },
  empathy: {
    type: Number,
    required: false,
  },
  caution: {
    type: Number,
    required: false,
  },
  spirituality: {
    type: Number,
    required: false,
  },
  energy: {
    type: Number,
    required: false,
  },
  health: {
    type: Number,
    required: false,
  },
  terror: {
    type: Number,
    required: false,
  },
  food: {
    type: Number,
    required: false,
  },
  wealth: {
    type: Number,
    required: false,
  },
  reputation: {
    type: Number,
    required: false,
  },
  experience: {
    type: Number,
    required: false,
  },
  magic: {
    type: Number,
    required: false,
  },
})

const healthsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    healths: [healthSchema],
  },
  {
    timestamps: true,
  }
)

export const Healths =
  mongoose.models?.Healths || mongoose.model('Healths', healthsSchema)
export const Health =
  mongoose.models?.Health || mongoose.model('Health', healthSchema)
