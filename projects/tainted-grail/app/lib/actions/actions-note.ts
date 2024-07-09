'use server'

import { connect } from '@/app/lib/utils'
import { Notes } from '../models'
import { Note } from '@/app/notes/noteList/note/model'

export const updateNote = async (updateForm: FormData) => {
  try {
    connect()
    const result = await Notes.findById(updateForm.get('id'))
    if (!result) return
    const currentNotes = result?.notes ?? []
    const newNote: Note = {
      _id: updateForm.get('noteId') as string,
      location: updateForm.get('location') as string,
      text: updateForm.get('text') as string,
      completed: updateForm.get('completed') === 'true',
    }
    const index = currentNotes.findIndex(
      (note: Note) => note._id == newNote._id
    )
    let newNotes = currentNotes
    if (index > -1) {
      newNotes = [
        ...currentNotes.slice(0, index),
        newNote,
        ...currentNotes.slice(index + 1),
      ]
    }

    await Notes.findByIdAndUpdate(result._id, {
      notes: newNotes,
    })

    return { error: false }
  } catch (error) {
    return { error: true }
  }
}

export const removeNote = async (id: string) => {
  console.log('remove note')
}
