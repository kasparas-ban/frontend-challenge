import { Link, useLocation } from 'react-router-dom'
import { cn } from '@nextui-org/react'
import { HomeIcon, StackIcon } from '@radix-ui/react-icons'
import { ROUTES } from '@/constants/routes'

const NAV_ROUTES = [
  {
    name: 'Home',
    path: ROUTES.home.path,
    activePaths: [ROUTES.home.path],
    icon: HomeIcon,
  },
  {
    name: 'Stacks',
    path: ROUTES.stacks.path,
    activePaths: [ROUTES.stacks.path, ROUTES.stackComponents.path],
    icon: StackIcon,
  },
] as const

export default function NavDrawer() {
  const { pathname } = useLocation()
  const currentPath = pathname.split('/')[1] || '/'

  const isItemActive = (item: (typeof NAV_ROUTES)[number]) =>
    item.activePaths.find(path => path === currentPath)

  return (
    <nav>
      <ol className='flex flex-col gap-[6px] text-sm font-semibold'>
        {NAV_ROUTES.map(link => (
          <Link to={link.path} key={link.path}>
            <li
              className={cn(
                'flex w-32 items-center gap-2 rounded px-3 py-2 transition-colors duration-300 hover:bg-gray-200',
                isItemActive(link) && 'text-indigo-600'
              )}
            >
              <link.icon />
              {link.name}
            </li>
          </Link>
        ))}
      </ol>
    </nav>
  )
}
