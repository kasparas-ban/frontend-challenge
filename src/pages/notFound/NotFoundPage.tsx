import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

export default function NotFoundPage() {
  return (
    <div className='flex w-full justify-center text-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl'>Page not found</h1>
        <Link
          to={ROUTES.home.path}
          className='text-sm text-indigo-500 underline'
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
