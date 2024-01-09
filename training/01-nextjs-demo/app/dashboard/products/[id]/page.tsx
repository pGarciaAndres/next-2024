import { updateProduct } from '@/app/lib/actions'
import { fetchProductById } from '@/app/lib/data'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

export default async function SingleProductPage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  const product = await fetchProductById(id)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product?.img || '/noproduct.jpg'}
            alt=''
            className={styles.image}
            fill
          />
        </div>
        {product?.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type='text' name='id' value={product?.id} />
          <label>Title</label>
          <input type='text' name='title' placeholder={product?.title} />
          <label>Price</label>
          <input type='number' name='price' placeholder={product?.price} />
          <label>Stock</label>
          <input type='number' name='stock' placeholder={product?.stock} />
          <label>Color</label>
          <input type='text' name='color' placeholder={product?.color} />
          <label>Size</label>
          <input type='text' name='size' placeholder={product?.size} />
          <label>Category</label>
          <select name='category' id='category'>
            <option value='general'>Pick a category</option>
            <option value='smartphones'>Smartphones</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value='men-clothing'>Men clothing</option>
            <option value='women-clothing'>Women clothing</option>
          </select>
          <label>Description</label>
          <textarea
            name='description'
            id='description'
            rows={2}
            placeholder={product?.description}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
