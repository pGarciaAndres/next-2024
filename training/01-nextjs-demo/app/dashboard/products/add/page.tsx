import { addProduct } from '@/app/lib/actions'
import styles from '@/app/ui/dashboard/products/add/add.module.css'

export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type='text' placeholder='Title' name='title' required />
        <select name='category' id='category'>
          <option value='general'>Pick a category</option>
          <option value='smartphones'>Smartphones</option>
          <option value='electronics'>Electronics</option>
          <option value='jewelery'>Jewelery</option>
          <option value='men-clothing'>Men clothing</option>
          <option value='women-clothing'>Women clothing</option>
        </select>
        <input type='number' placeholder='Price' name='price' />
        <input type='number' placeholder='Stock' name='stock' />
        <input type='text' placeholder='Color' name='color' />
        <input type='text' placeholder='Size' name='size' />
        <textarea
          name='description'
          id='description'
          rows={5}
          placeholder='Description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
