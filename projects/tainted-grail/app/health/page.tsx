import { Suspense } from 'react'
import { ThreeDots } from '@/app/ui/common/skeleton/threeDotsLoader'
import { HealthList } from './healthList/healthList'
import styles from '@/app/ui/health/health.module.css'

export default async function Health() {
  return (
    <div className={styles.container}>
      <Suspense fallback={<ThreeDots />}>
        <HealthList />
      </Suspense>
    </div>
  )
}
