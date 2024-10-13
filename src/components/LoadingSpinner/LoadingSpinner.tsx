import { Spinner } from '@nextui-org/react'

export default function LoadingSpinner() {
  return (
    <span className='flex gap-3 text-sm'>
      <Spinner size='sm' />
      Loading
    </span>
  )
}
