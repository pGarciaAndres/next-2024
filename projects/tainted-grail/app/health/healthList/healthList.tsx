import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, Slide } from 'react-toastify'
import { auth } from '@/app/auth'
import { Session } from 'next-auth'
import { HealthCarousel } from './healthCarousel/healthCarousel'
import { fetchHealths, fetchNotes } from '@/app/lib/data'
import { mockHealths } from './mock'

export const HealthList = async () => {
  const session = await auth()
  const { user } = session as Session
  const userId = user._id ?? user._doc._id

  const response = await fetchHealths(userId)
  const { id, healths } = JSON.parse(response)
  // const healths = mockHealths
  // const id = '123'

  return (
    <>
      <HealthCarousel id={id} healths={healths} />
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
