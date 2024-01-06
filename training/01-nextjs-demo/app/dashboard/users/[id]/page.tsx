import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

export default function SigleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='avatar' fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' placeholder='John Doe' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='jPn9m@example.com' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='********' />
          <label htmlFor='phone'>Phone</label>
          <input type='phone' name='phone' placeholder='123-456-789' />
          <label htmlFor='address'>Address</label>
          <input type='text' name='address' placeholder='123 Main St' />
          <label htmlFor='isAdmin'>Is Admin?</label>
          <select name='isAdmin' id='isAdmin'>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
          <label htmlFor='isActive'>Is Active?</label>
          <select name='isActive' id='isActive'>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
          <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  )
}
