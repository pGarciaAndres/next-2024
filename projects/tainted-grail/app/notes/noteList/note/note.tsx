'use client'

import { toast } from 'react-toastify'
import { ChangeEvent, useState } from 'react'
import {
  FAILED,
  SUCCESS,
  LOC_PLACEHOLDER,
  TEXT_PLACEHOLDER
} from '@/app/utils/constants'
import { Note as NoteModel } from './model'
import { updateNote } from '@/app/lib/actions'
import { NoteButtons as Buttons } from './buttons/noteButtons'
import styles from './note.module.css'

type Props = {
  id: string
  note: NoteModel
}

export const Note = (props: Props) => {
  const { id, note } = props
  const [location, setLocation] = useState(note.location)
  const [text, setText] = useState(note.text)
  const [onEdit, setOnEdit] = useState(false)
  const [doubleCheck, setDoubleCheck] = useState(false)

  const [rollbackLocation, setRollbackLocation] = useState(location)
  const [rollbackText, setRollbackText] = useState(text)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOnEdit(true)
    if (e.target.name === 'location') {
      setLocation(e.target.value)
    } else {
      setText(e.target.value)
    }
  }

  const rollBack = () => {
    setLocation(rollbackLocation)
    setText(rollbackText)
  }

  const animation = () => {
    setDoubleCheck(true)
    setTimeout(() => {
      setDoubleCheck(false)
      setOnEdit(false)
    }, 1500)
  }

  const handleSubmit = async (formData: FormData) => {
    let response = null
    if (onEdit) {
      response = await updateNote(formData)
      animation()

      if (response?.error) {
        rollBack()
        toast.error(<span>{FAILED}</span>, {
          autoClose: 1500,
          hideProgressBar: true,
          style: { backgroundColor: '#b83d3d' }
        })
      } else {
        toast.success(<span>{SUCCESS}</span>, {
          autoClose: 1500,
          hideProgressBar: true,
          style: { backgroundColor: '#4e9e48' }
        })
      }
    } else {
      console.log('delete')
      // response = await removeNote(id)
    }

    // if (response?.error) {
    //   console.error(response.error)
    // }
  }

  return (
    <form action={handleSubmit} className={styles.noteForm}>
      <section className={styles.section}>
        <input type='hidden' name='id' value={id} />
        <input type='hidden' name='noteId' value={note._id} />
        <input
          type='text'
          name='location'
          placeholder={LOC_PLACEHOLDER}
          value={location}
          onChange={handleChange}
          size={1}
        />
        <textarea
          name='text'
          className={styles.text}
          placeholder={TEXT_PLACEHOLDER}
          value={text}
          onChange={handleChange}
          cols={text.length}
        />
      </section>
      <Buttons onEdit={onEdit} doubleCheck={doubleCheck} />
    </form>
  )
}
