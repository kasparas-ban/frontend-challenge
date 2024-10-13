import { Avatar } from '@nextui-org/react'

export default function Header() {
  return (
    <header className='flex h-14 w-full items-center justify-between py-2'>
      <div className='h-full w-[140px] rounded bg-gray-200' />
      <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
    </header>
  )
}
