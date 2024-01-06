import Image from 'next/image'
import styles from './transactions.module.css'

export const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {/* Transaction 1 */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt='avatar'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cangelled
              </span>
            </td>
            <td>13.02.2024</td>
            <td>$3.000</td>
          </tr>
          {/* Transaction 2 */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt='avatar'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>13.02.2024</td>
            <td>$3.000</td>
          </tr>
          {/* Transaction 3 */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src='/noavatar.png'
                  alt='avatar'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jhon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>13.02.2024</td>
            <td>$3.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
