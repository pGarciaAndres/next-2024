import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const notesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  notes: [noteSchema]
})

export const Notes =
  mongoose.models?.Notes || mongoose.model('Notes', notesSchema)
export const Note = mongoose.models?.Note || mongoose.model('Note', noteSchema)
