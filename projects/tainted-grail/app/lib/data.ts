import { Status } from '../statuses/statusList/status/model'
import { Statuses } from './models'
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
