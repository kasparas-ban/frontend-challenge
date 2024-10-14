import { Outlet, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

export default function StacksOutlet() {
  const { pathname } = useLocation()
  const currentPath = pathname.split('/')[1] || '/'

  const pageTitle =
    currentPath === ROUTES.stacks.path ? 'Stacks' : 'Stack components'

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold'>{pageTitle}</h1>
      <Outlet />
    </div>
  )
}
