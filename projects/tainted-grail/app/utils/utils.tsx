import { toast } from 'react-toastify'
import { ACCEPT, FAILED, SAVE_CHANGES, SUCCESS } from './constants'
import { updateStatus, updateHealth } from '../lib/actions'
import styles from './utils.module.css'

export const changeForm = (formName: string) => {
  const hasToast = !!document.querySelector('button[type="submit"]')

  if (hasToast) {
    if (!formName) {
      toast.dismiss()
    }
    return
  }

  if (!formName) {
    return
  }

  toast.info(
    <div className={styles.toast}>
      <span>{SAVE_CHANGES}</span>
      <button
        type='submit'
        form={formName}
        onClick={() => toast.dismiss()}
        className={styles.toastButton}
      >
        {ACCEPT}
      </button>
    </div>,
    {
      autoClose: false,
      closeButton: false,
    }
  )
}

export const submitForm = async (updateForm: FormData) => {
  let response = undefined

  switch (updateForm.get('formName')) {
    case 'statusForm':
      response = await updateStatus(updateForm)
      break
    case 'healthForm':
      response = await updateHealth(updateForm)
      break
    default:
      break
  }

  if (response?.error) {
    toast.error(<span>{FAILED}</span>, {
      autoClose: 1500,
      hideProgressBar: true,
      style: { backgroundColor: '#b83d3d' },
    })
  } else {
    toast.success(<span>{SUCCESS}</span>, {
      autoClose: 1500,
      hideProgressBar: true,
      style: { backgroundColor: '#4e9e48' },
    })
  }
}
