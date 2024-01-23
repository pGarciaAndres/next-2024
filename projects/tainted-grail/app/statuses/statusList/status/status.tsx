import { garamond } from '@/app/fonts/fonts'
import { Status as StatusModel } from './model'
import styles from './status.module.css'
import { Fragment } from 'react'

type Props = {
  status: StatusModel
  index: number
}

export const Status = (props: Props) => {
  const { status, index } = props
  const cubes = []

  for (let i = 1; i <= status.size ?? 1; i++) {
    cubes.push(
      <Fragment key={`cube${index}${i}`}>
        <input
          type='checkbox'
          id={`cube${index}${i}`}
          name={status.key}
          value={i}
          defaultChecked={status.checked?.includes(i.toString())}
        />
        <label className={garamond.className} htmlFor={`cube${index}${i}`}>
          {status.counted && i}
        </label>
      </Fragment>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <span className={garamond.className}>{status.title}</span>
        <section className={styles.statusForm}>{cubes}</section>
      </div>
      {status.subtitle && (
        <small className={garamond.className}>{status.subtitle}</small>
      )}
    </div>
  )
}
