import { Transactions } from '@/app/ui/dashboard/transactions/transactions'
import styles from '@/app/ui/dashboard/transactions/transactions.module.css'

export default function TransactionsPage() {
  return (
    <div className={styles.container}>
      <Transactions />
    </div>
  )
}
