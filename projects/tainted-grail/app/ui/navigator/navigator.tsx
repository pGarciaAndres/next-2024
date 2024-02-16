'use client'

import { Dock } from 'primereact/dock'
import useMenuItems from './useMenuItems'

export const Navigator = () => {
  const items = useMenuItems()
  return (
    <div className='fixed bottom-0 left-0 right-0'>
      <Dock model={items} position={'bottom'} />
    </div>
  )
}
