import { useRouteError } from 'react-router-dom'

export default function RouteErrorBoundary() {
  const error = useRouteError() as Error | undefined

  return (
    <div className='flex flex-col gap-1 text-center'>
      <h3 className='text-2xl font-semibold'>Unexpected error</h3>
      <p className='text-sm text-gray-600'>{error?.message}</p>
    </div>
  )
}
