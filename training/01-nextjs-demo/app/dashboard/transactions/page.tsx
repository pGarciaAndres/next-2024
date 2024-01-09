import styles from '@/app/ui/dashboard/transactions/transactions.module.css'
import { Transactions } from '@/app/ui/dashboard/transactions/transactions'

export default function TransactionsPage() {
  return (
    <div className={styles.container}>
      <Transactions />
    </div>
  )
}
