import { Link, useRouteError } from 'react-router-dom'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function RouteErrorBoundary() {
  const error = useRouteError() as Error | undefined

  return (
    <div className='flex flex-col gap-1 pt-10 text-center'>
      <h3 className='text-2xl font-semibold'>Unexpected error</h3>
      <p className='mb-4 text-sm text-gray-600'>{error?.message}</p>
      <Link
        to='../'
        className='flex items-center justify-center gap-2 text-sm text-gray-600 hover:underline'
      >
        <ArrowLeftIcon />
        <span>Go back</span>
      </Link>
    </div>
  )
}
