import Image from 'next/image'
import { MenuLink } from './menuLink/menu-link'
import styles from './sidebar.module.css'
import { menuItems } from './sidebar-menuItems'
import { MdLogout } from 'react-icons/md'

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.avatar}
          src='/noavatar.png'
          alt='user'
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Pablo</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <span className={styles.item}>{item.title}</span>
            {item.list.map((subItem) => (
              <MenuLink item={subItem} key={subItem.title} />
            ))}
          </li>
        ))}
      </ul>

      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}
