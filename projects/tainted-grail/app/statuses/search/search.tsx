'use client'

import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SEARCH_PLACEHOLDER } from '@/app/utils/constants'
import styles from './search.module.css'

export const Search = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)
      if (e.target.value) {
        e.target.value.length > 2 && params.set('q', e.target.value)
      } else {
        params.delete('q')
      }
      replace(`${pathname}?${params.toString()}`)
    },
    400
  )

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type='text'
        placeholder={SEARCH_PLACEHOLDER}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}
