import Link from 'next/link'
import { Search } from '../search/search'
import { Pagination } from '@/app/ui/dashboard/pagination/pagination'
import styles from '@/app/ui/dashboard/users/users.module.css'
import { fetchUsers } from '@/app/lib/data'
import Image from 'next/image'

export default async function UsersPage() {
  const users = await fetchUsers()

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user' />
        <Link href='/dashboard/users/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt={user.username}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'Active' : 'Inactive'}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
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
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
