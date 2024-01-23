'use client'
import { toast } from 'react-toastify'
import { Status as StatusModel } from '../status/model'
import { ACCEPT, FAILED, SAVE_CHANGES, SUCCESS } from '@/app/utils/constants'
import { updateStatus } from '@/app/lib/actions'
import { Status } from '@/app/statuses/statusList/status/status'
import styles from './statusForm.module.css'

export const StatusForm = async ({
  id,
  statuses
}: {
  id: string
  statuses: StatusModel[]
}) => {
  const hangleChange = () => {
    if (!!document.querySelector('button[type="submit"]')) {
      return
    }

    toast.info(
      <div className={styles.toast}>
        <span>{SAVE_CHANGES}</span>
        <button
          type='submit'
          form='statusesForm'
          onClick={() => toast.dismiss()}
          className={styles.toastButton}
        >
          {ACCEPT}
        </button>
      </div>,
      {
        autoClose: false,
        closeButton: false
      }
    )
  }

  const handleSubmit = async (updateForm: FormData) => {
    debugger
    const response = await updateStatus(updateForm)
    if (response?.error) {
      toast.error(<span>{FAILED}</span>, {
        autoClose: 2000,
        hideProgressBar: true,
        style: { backgroundColor: '#b83d3d' }
      })
    }

    toast.success(<span>{SUCCESS}</span>, {
      autoClose: 2000,
      hideProgressBar: true,
      style: { backgroundColor: '#4e9e48' }
    })
  }

  return (
    <form
      id='statusesForm'
      action={handleSubmit}
      onChange={hangleChange}
      className={styles.form}
    >
      <input type='hidden' name='id' value={id} />
      {statuses?.map((status: StatusModel, index: number) => (
        <Status status={status} index={index} key={status._id} />
      ))}
    </form>
  )
}
