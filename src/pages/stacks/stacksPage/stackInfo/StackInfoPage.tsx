import { Link, Navigate, useParams } from 'react-router-dom'
import { Skeleton } from '@nextui-org/react'
import dayjs from 'dayjs'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import { ROUTES } from '@/constants/routes'
import { useStack } from '@/hooks/stackHooks'
import { Stack } from '@/types/stack'
import { StackComponentType } from '@/types/stackComponent'

type StackComponentItem = {
  id: string
  type: StackComponentType
  components: string[]
}

export default function StackInfoPage() {
  const { stackId } = useParams()

  if (!stackId) return <Navigate to='../' /> // MARK: need to show an error page

  return <StackInfo stackId={stackId} />
}

function StackInfo({ stackId }: { stackId: string }) {
  const { data: stack, isLoading } = useStack(stackId)

  return (
    <div className='flex flex-col gap-8'>
      <StackInfoSection stack={stack} isLoading={isLoading} />
      <StackComponentsList stack={stack} isLoading={isLoading} />
    </div>
  )
}

function StackInfoSection({
  stack,
  isLoading,
}: {
  stack?: Stack
  isLoading: boolean
}) {
  return (
    <section>
      {isLoading ? (
        <Skeleton className='h-8 w-40 rounded' />
      ) : (
        <h3 className='text-lg font-semibold'>
          {stack?.name || 'Unknown stack'}
        </h3>
      )}

      <div className='flex flex-col gap-2'>
        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Stack ID</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>{stack?.id || '-'}</div>
            )}
          </div>
        </div>

        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Project</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>{stack?.project || '-'}</div>
            )}
          </div>
        </div>

        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Description</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>{stack?.description || '-'}</div>
            )}
          </div>
        </div>

        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Created at</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>
                {stack?.created
                  ? dayjs(stack.created).format('DD/MM/YYYY, HH:mm')
                  : '-'}
              </div>
            )}
          </div>
        </div>

        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Updated at</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>
                {stack?.updated
                  ? dayjs(stack.updated).format('DD/MM/YYYY, HH:mm')
                  : '-'}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function StackComponentsList({
  stack,
  isLoading,
}: {
  stack?: Stack
  isLoading: boolean
}) {
  const groupedComponents = Object.entries(stack?.components || {}).reduce(
    (prev, curr) => {
      const [key, value] = curr
      return [
        ...prev,
        { id: key, type: key as StackComponentType, components: value },
      ]
    },
    [] as StackComponentItem[]
  )

  return (
    <section>
      <h3 className='pb-2 text-lg font-semibold'>Stack components</h3>

      <div className='flex flex-wrap gap-2'>
        {isLoading ? (
          <LoadingSpinner />
        ) : groupedComponents.length ? (
          <>
            {groupedComponents.map(group =>
              group.components.map(componentId => (
                <Link
                  className='cursor-pointer rounded bg-gray-200 px-3 py-2 hover:bg-gray-300'
                  to={`/${ROUTES.stackComponents.path}/${componentId}`}
                >
                  <p>{group.type}</p>
                </Link>
              ))
            )}
          </>
        ) : (
          <p className='text-sm text-gray-500'>No components found</p>
        )}
      </div>
    </section>
  )
}
