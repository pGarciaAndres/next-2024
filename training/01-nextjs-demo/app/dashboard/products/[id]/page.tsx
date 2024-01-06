import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noproduct.jpg' alt='' fill />
        </div>
        Product
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type='hidden' name='id' />
          <label>Title</label>
          <input type='text' name='title' placeholder='Iphone 15' />
          <label>Price</label>
          <input type='number' name='price' placeholder='$999' />
          <label>Stock</label>
          <input type='number' name='stock' placeholder='99' />
          <label>Color</label>
          <input type='text' name='color' placeholder='White' />
          <label>Size</label>
          <textarea name='size' placeholder='6,12in' />
          <label>Category</label>
          <select name='category' id='category'>
            <option value='smartphones'>Smartphones</option>
          </select>
          <label>Description</label>
          <textarea
            name='description'
            id='description'
            rows={2}
            placeholder='Description'
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
