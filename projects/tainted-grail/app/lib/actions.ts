'use server'

import { signIn } from '../auth'
import { Status } from '../statuses/statusList/status/model'
import { Statuses } from './models'
import { connect } from './utils'

export const authenticate = async (loginForm: FormData) => {
  const { username, password } = Object.fromEntries(loginForm)

  try {
    await signIn('credentials', { username, password })
  } catch (error: any) {
    if (error.message.includes('credentialssignin')) {
      return { error: 'Incorrect username or password' }
    }

    if (error.message.includes('error')) {
      return { error: 'Something went wrong' }
    }

    throw error
  }
}

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
