import Link from 'next/link'
import Image from 'next/image'
import { Search } from '@/app/dashboard/search/search'
import { Pagination } from '@/app/ui/dashboard/pagination/pagination'
import styles from '@/app/ui/dashboard/users/users.module.css'
import { fetchUsers } from '@/app/lib/data'
import { INIT_PAGE } from '@/app/lib/constants'
import { deleteUser } from '@/app/lib/actions'

type Props = {
  searchParams: {
    q: string
    page: number
  }
}

export default async function UsersPage({ searchParams }: Props) {
  const { q = '', page = INIT_PAGE } = searchParams
  const { count, users } = await fetchUsers(q, page)

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
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'Active' : 'Inactive'}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type='hidden' name='id' value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}
