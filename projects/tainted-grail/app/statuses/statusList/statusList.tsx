import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, Slide } from 'react-toastify'
import { StatusForm } from './form/statusForm'
import { Session } from 'next-auth'
import { auth } from '@/app/auth'
import { EMPTY_STRING } from '@/app/utils/constants'
import { fetchStatuses } from '@/app/lib/data'
import { mockStatuses } from './mock'
type Props = {
  searchParams: {
    q: string
  }
}

export const StatusList = async ({ searchParams }: Props) => {
  const session = await auth()
  const { user } = session as Session
  const { q = EMPTY_STRING } = searchParams
  const response = await fetchStatuses(user._doc._id, q)
  const { id, statuses } = JSON.parse(response)
  // const statuses = mockStatuses
  // const id = '1'

  return (
    <>
      <StatusForm id={id} statuses={statuses} />
      <ToastContainer
        limit={1}
        position='top-center'
        autoClose={false}
        closeOnClick={false}
        theme='colored'
        toastStyle={{ backgroundColor: '#777777' }}
        transition={Slide}
      />
    </>
  )
}
