'use server'

import { Statuses } from '@/app/lib/models'
import { connect } from '@/app/lib/utils'
import { Status } from '@/app/statuses/statusList/status/model'

export const updateStatus = async (updateForm: FormData) => {
  try {
    connect()
    const result = await Statuses.findById(updateForm.get('id'))
    if (!result) return
    const currentStatuses = result?.statuses ?? []
    currentStatuses.map((status: Status) => {
      const newChecked = updateForm.getAll(status.key) as string[]
      status.checked = newChecked
    })

    if (!currentStatuses || !currentStatuses.length) return
    await Statuses.findByIdAndUpdate(result._id, {
      statuses: currentStatuses
    })

    return { error: false }
  } catch (error) {
    return { error: true }
  }
}
