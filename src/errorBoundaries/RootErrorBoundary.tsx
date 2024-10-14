import { Link, useRouteError } from 'react-router-dom'

export default function RootErrorBoundary() {
  const error = useRouteError() as Error | undefined

  return (
    <div className='h-full w-full'>
      <div className='flex flex-col gap-2 pt-28 text-center'>
        <h1 className='text-3xl font-semibold'>Unexpected error</h1>
        <p className='text-gray-600'>{error?.message}</p>
        <Link to='../' className='text-sm text-indigo-500 underline'>
          Go back
        </Link>
      </div>
    </div>
  )
}
