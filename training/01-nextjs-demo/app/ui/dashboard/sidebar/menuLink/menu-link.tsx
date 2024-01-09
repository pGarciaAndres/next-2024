'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './menu-link.module.css'

export const MenuLink = ({ item }: { item: any }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}
