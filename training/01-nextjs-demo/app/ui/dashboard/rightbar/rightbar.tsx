import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md'

export const Rightbar = () => {
  return (
    <div className={styles.container}>
      {/* Item 1 */}
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src='/astronaut.png'
            alt='astronaut'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes just 5 minutes</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      {/* Item 2 */}
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Read
          </button>
        </div>
      </div>
    </div>
  )
}
