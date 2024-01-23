import { Logout } from '../ui/logout/logout'
import { Search } from './search/search'
import { StatusList } from './statusList/statusList'
import { Suspense } from 'react'
import { ThreeDots } from './statusList/skeleton/threeDotsLoader'
import styles from '@/app/ui/statuses/statuses.module.css'

type Props = {
  searchParams: {
    q: string
  }
}

export default async function Statuses({ searchParams }: Props) {
  return (
    <div className={styles.container}>
      <Search />
      <Suspense fallback={<ThreeDots />}>
        <StatusList searchParams={searchParams} />
      </Suspense>
      <Logout />
    </div>
  )
}
