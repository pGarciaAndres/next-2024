'use client'

import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export const Search = ({ placeholder }: { placeholder: string }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)
      params.set('page', '1')

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
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  )
}
