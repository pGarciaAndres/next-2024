'use client'

import { Status as StatusModel } from '@/app/statuses/statusList/status/model'
import { Status } from '@/app/statuses/statusList/status/status'
import { changeForm, submitForm } from '@/app/utils/utils'
import styles from './statusForm.module.css'

type Props = {
  id: string
  statuses: StatusModel[]
}

export const StatusForm = async (props: Props) => {
  const { id, statuses } = props

  return (
    <form
      id='statusForm'
      action={submitForm}
      onChange={() => changeForm('statusForm')}
      className={styles.statusForm}
    >
      <input type='hidden' name='id' value={id} />
      <input type='hidden' name='formName' value={'statusForm'} />
      {statuses?.map((status: StatusModel, index: number) => (
        <Status status={status} index={index} key={status._id} />
      ))}
    </form>
  )
}
