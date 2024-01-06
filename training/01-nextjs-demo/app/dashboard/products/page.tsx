import Link from 'next/link'
import Image from 'next/image'
import { Search } from '../search/search'
import { Pagination } from '@/app/ui/dashboard/pagination/pagination'
import styles from '@/app/ui/dashboard/products/products.module.css'

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product' />
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src='/noproduct.jpg'
                  alt=''
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                IPhone 15
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>2022-01-01</td>
            <td>99</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/dashboard/products/test'>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
