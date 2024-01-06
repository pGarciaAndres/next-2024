'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import styles from './pagination.module.css'

type Props = {
  count: number
}

export const Pagination = ({ count }: Props) => {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || '1'
  const ITEMS_PER_PAGE = 1

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => replace(`?page=${parseInt(page) - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => replace(`?page=${parseInt(page) + 1}`)}
      >
        Next
      </button>
    </div>
  )
}