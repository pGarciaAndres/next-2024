import { Status } from '@/app/statuses/statusList/status/model'
import { Healths, Notes, Statuses } from './models'
import { connect } from './utils'

export const fetchStatuses = async (id: string, query: string) => {
  const regex = new RegExp(query, 'i')
  try {
    connect()
    const result = await Statuses.findById(id)
    const data = result?.statuses ?? []
    const statuses = data.filter((status: Status) => status.title.match(regex))
    return JSON.stringify({ id, statuses })
  } catch (error) {
    throw new Error('Failed to fetch statuses')
  }
}

export const fetchNotes = async (id: string) => {
  try {
    connect()
    const result = await Notes.findById(id)
    const notes = result?.notes ?? []
    return JSON.stringify({ id, notes })
  } catch (error) {
    throw new Error('Failed to fetch notes')
  }
}

export const fetchHealths = async (id: string) => {
  try {
    connect()
    const result = await Healths.findById(id)
    const healths = result?.healths ?? []
    return JSON.stringify({ id, healths })
  } catch (error) {
    throw new Error('Failed to fetch healths')
  }
}
