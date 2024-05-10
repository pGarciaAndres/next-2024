import { mockNotes } from './mock'
import { fetchNotes } from '@/app/lib/data'
import { Note } from './note/note'
import { auth } from '@/app/auth'
import { Session } from 'next-auth'
import { Note as NoteModel } from './note/model'

export const NoteList = async () => {
  const session = await auth()
  const { user } = session as Session
  const userId = user._id ?? user._doc._id
  const response = await fetchNotes(userId)
  const { id, notes } = JSON.parse(response)
  // const notes = mockNotes
  // const id = '2'

  return (
    <div>
      {notes.map((note: NoteModel) => (
        <Note key={note._id} id={id} note={note} />
      ))}
    </div>
  )
}
