'use client'

import Image from 'next/image'
import { linkTo, logout } from '@/app/lib/actions'
import { usePathname } from 'next/navigation'

export default function useMenuItems() {
  const pathname = usePathname()

  const items = [
    {
      label: 'Notes',
      icon: () => (
        <Image
          className={`cursor-pointer hue-rotate-30 ease-in-out duration-300 hover:hue-rotate-30 hover:grayscale-0 ${
            pathname === '/notes' ? 'hue-rotate-30' : 'grayscale'
          }`}
          alt='Notes'
          src='/buttons/notes.png'
          width='56'
          height='56'
          priority
        />
      ),
      command: () => {
        linkTo('/notes')
      }
    },
    {
      label: 'Health',
      icon: () => (
        <Image
          className={`cursor-pointer hue-rotate-30 ease-in-out duration-300 hover:hue-rotate-30 hover:grayscale-0 ${
            pathname === '/health' ? 'hue-rotate-30' : 'grayscale'
          }`}
          alt='Health'
          src='/buttons/health.png'
          width='56'
          height='56'
        />
      ),
      command: () => {
        linkTo('/health')
      }
    },
    {
      label: 'Statuses',
      icon: () => (
        <Image
          className={`cursor-pointer ease-in-out duration-300 hover:invert-0 hover:brightness-100 ${
            pathname === '/statuses'
              ? 'invert-0 brightness-100'
              : 'invert brightness-75 '
          }`}
          alt='Statuses'
          src='/buttons/status.png'
          width='56'
          height='56'
        />
      ),
      command: () => {
        linkTo('/statuses')
      }
    },
    {
      label: 'Logout',
      icon: () => (
        <Image
          className={`cursor-pointer invert grayscale brightness-75 ease-in-out duration-300 hover:hue-rotate-180 hover:grayscale-0`}
          alt='logout'
          src='/buttons/logout.png'
          width='56'
          height='56'
        />
      ),
      command: () => {
        logout()
      }
    }
  ]

  return items
}
