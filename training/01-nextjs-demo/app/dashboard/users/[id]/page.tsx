import { updateUser } from '@/app/lib/actions'
import { fetchUserById } from '@/app/lib/data'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

export default async function SigleUserPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  const user = await fetchUserById(id)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={user?.img || '/noavatar.png'}
            alt='avatar'
            className={styles.image}
            fill
          />
        </div>
        {user?.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type='hidden' name='id' value={user?.id} />
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' placeholder={user?.username} />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder={user?.email} />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='********' />
          <label htmlFor='phone'>Phone</label>
          <input type='phone' name='phone' placeholder={user?.phone} />
          <label htmlFor='address'>Address</label>
          <input type='text' name='address' placeholder={user?.address} />
          <label htmlFor='isAdmin'>Is Admin?</label>
          <select name='isAdmin' id='isAdmin'>
            <option value='true' selected={user?.isAdmin}>
              Yes
            </option>
            <option value='false' selected={!user?.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor='isActive'>Is Active?</label>
          <select name='isActive' id='isActive'>
            <option value='true' selected={user?.isActive}>
              Yes
            </option>
            <option value='false' selected={!user?.isActive}>
              No
            </option>
          </select>
          <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  )
}
