import { Outlet } from 'react-router-dom'
import Header from '@/components/Header/Header'
import NavDrawer from '@/components/NavDrawer/NavDrawer'

export default function RootLayout() {
  return (
    <div className='flex justify-center px-2'>
      <div className='w-full max-w-4xl pt-2'>
        <Header />
        <div className='flex gap-8 pt-10'>
          <NavDrawer />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
