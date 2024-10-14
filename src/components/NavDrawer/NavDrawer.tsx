import { ForwardRefExoticComponent, RefAttributes, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, cn } from '@nextui-org/react'
import {
  ChevronDownIcon,
  Component1Icon,
  HomeIcon,
  StackIcon,
} from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import { ROUTES } from '@/constants/routes'

type NavRoute = {
  name: string
  path: string
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  childRoutes?: NavRoute[]
}

const NAV_ROUTES: NavRoute[] = [
  {
    name: 'Home',
    path: ROUTES.home.path,
    icon: HomeIcon,
  },
  {
    name: 'Stacks',
    path: ROUTES.stacks.path,
    icon: StackIcon,
    childRoutes: [
      {
        name: 'Stack list',
        path: ROUTES.stacks.path,
        icon: StackIcon,
      },
      {
        name: 'Stack components',
        path: ROUTES.stackComponents.path,
        icon: Component1Icon,
      },
    ],
  },
]

export default function NavDrawer() {
  const { pathname } = useLocation()
  const currentPath = pathname.split('/')[1] || '/'

  const isItemActive = (item: NavRoute) =>
    item.path === currentPath ||
    !!item.childRoutes?.find(childRoute => childRoute.path === currentPath)

  return (
    <nav>
      <ol className='flex flex-col gap-[6px] text-sm font-semibold'>
        {NAV_ROUTES.map(link =>
          link.childRoutes ? (
            <NavDropdown link={link} isItemActive={isItemActive} />
          ) : (
            <li className='flex w-48 items-center gap-1'>
              <Link
                to={link.path}
                key={link.path}
                className={cn(
                  'flex w-full items-center gap-2 rounded px-3 py-2 transition-colors duration-300 hover:bg-gray-200',
                  isItemActive(link) && 'text-indigo-600'
                )}
              >
                <link.icon />
                {link.name}
              </Link>
            </li>
          )
        )}
      </ol>
    </nav>
  )
}

function NavDropdown({
  link,
  isItemActive,
}: {
  link: NavRoute
  isItemActive: (item: NavRoute) => boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(prev => !prev)

  const isRouteActive = isItemActive(link)

  return (
    <>
      <li className='flex w-48 items-center gap-1'>
        <Link
          to={link.path}
          key={link.path}
          className={cn(
            'flex w-full items-center gap-2 rounded px-3 py-2 transition-colors duration-300 hover:bg-gray-200',
            isRouteActive && 'text-indigo-600'
          )}
          onClick={isRouteActive ? toggleDropdown : () => setIsOpen(true)}
        >
          <link.icon />
          {link.name}
        </Link>
        {!!link.childRoutes?.length && (
          <Button
            isIconOnly
            aria-label='Expand stacks menu'
            className='max-h-9 min-w-7 rounded bg-transparent hover:bg-gray-200'
            disableAnimation
            onClick={toggleDropdown}
          >
            <ChevronDownIcon
              className={cn(
                'transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
            />
          </Button>
        )}
      </li>

      {isOpen &&
        link.childRoutes?.map(childLink => (
          <Link to={childLink.path} key={childLink.path}>
            <li
              className={cn(
                'ml-4 flex w-44 items-center gap-2 rounded px-3 py-2 transition-colors duration-300 hover:bg-gray-200',
                isItemActive(childLink) && 'text-indigo-600'
              )}
            >
              <childLink.icon />
              {childLink.name}
            </li>
          </Link>
        ))}
    </>
  )
}
