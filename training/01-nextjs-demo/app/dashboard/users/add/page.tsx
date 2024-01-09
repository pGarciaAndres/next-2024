import { addUser } from '@/app/lib/actions'
import styles from '@/app/ui/dashboard/users/add/add.module.css'

export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type='text' placeholder='Username' name='username' required />
        <input type='text' placeholder='Email' name='email' required />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
        />
        <input type='phone' placeholder='Phone' name='phone' />

        <select name='isAdmin' id='isAdmin'>
          <option value='false'>Is Admin?</option>
          <option value='false'>No</option>
          <option value='true'>Yes</option>
        </select>
        <select name='isActive' id='isActive'>
          <option value='true'>Is Active?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <textarea
          name='address'
          id='address'
          rows={2}
          placeholder='Address'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
