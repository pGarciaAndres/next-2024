import { Suspense } from 'react'
import { ThreeDots } from '@/app/ui/common/skeleton/threeDotsLoader'
import styles from '@/app/ui/notes/notes.module.css'
import Image from 'next/image'

export default async function Health() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<ThreeDots />}>
        <div className={styles.container}>
          <Image src='/health.png' alt='' width={500} height={24} />
        </div>
      </Suspense>
    </div>
  )
}
