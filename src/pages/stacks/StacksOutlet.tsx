import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Tab, Tabs } from '@nextui-org/react'
import { ROUTES } from '@/constants/routes'

export default function StacksOutlet() {
  const { pathname } = useLocation()
  const currentPath = pathname.split('/')[1] || '/'
  const navigate = useNavigate()

  const pageTitle =
    currentPath === ROUTES.stacks.path ? 'Stacks' : 'Stack components'

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-semibold'>{pageTitle}</h1>

      <div className='flex flex-col gap-2'>
        <Tabs
          variant='underlined'
          aria-label='Stack list and stack component list tabs'
          selectedKey={currentPath}
          onSelectionChange={path => navigate(path as string)}
        >
          <Tab key={ROUTES.stacks.path} title='Stacks' />
          <Tab key={ROUTES.stackComponents.path} title='Stack components' />
        </Tabs>

        <Outlet />
      </div>
    </div>
  )
}
