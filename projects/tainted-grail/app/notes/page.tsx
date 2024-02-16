import 'react-toastify/dist/ReactToastify.css'
import { Slide, ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import { ThreeDots } from '@/app/ui/common/skeleton/threeDotsLoader'
import { NoteList } from './noteList/noteList'
import { Frame } from '@/app/ui/common/frame/frame'
import styles from '@/app/ui/notes/notes.module.css'

export default async function Notes() {
  return (
    <div className={styles.container}>
      <Frame>
        <Suspense fallback={<ThreeDots />}>
          <NoteList />
        </Suspense>
      </Frame>
      <ToastContainer
        limit={1}
        position='top-center'
        autoClose={false}
        closeOnClick={false}
        theme='colored'
        toastStyle={{ backgroundColor: '#777777' }}
        transition={Slide}
      />
    </div>
  )
}
