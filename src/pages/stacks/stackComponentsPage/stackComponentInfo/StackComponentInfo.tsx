import { useParams } from 'react-router-dom'
import { Skeleton } from '@nextui-org/react'
import dayjs from 'dayjs'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import { useStackComponent } from '@/hooks/stackComponentHooks'
import { StackComponent } from '@/types/stackComponent'

export default function StackComponentInfo() {
  const { componentId } = useParams()

  if (!componentId) throw Error('Stack component ID not found')

  return <ComponentInfo componentId={componentId} />
}

function ComponentInfo({ componentId }: { componentId: string }) {
  const { data: component, isLoading, isError } = useStackComponent(componentId)
  if (isError) throw Error('Stack component not found')

  return (
    <div className='flex flex-col gap-8'>
      <ComponentInfoSection component={component} isLoading={isLoading} />
      <ComponentConfigurations component={component} isLoading={isLoading} />
    </div>
  )
}

function ComponentInfoSection({
  component,
  isLoading,
}: {
  component?: StackComponent
  isLoading: boolean
}) {
  return (
    <section>
      {isLoading ? (
        <Skeleton className='h-8 w-40 rounded' />
      ) : (
        <h3 className='text-lg font-semibold'>
          {component?.name || 'Unknown component'}
        </h3>
      )}

      <div className='flex flex-col gap-2'>
        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Component ID</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>{component?.id || '-'}</div>
            )}
          </div>
        </div>

        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Is shared</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>{component ? component.is_shared.toString() : '-'}</div>
            )}
          </div>
        </div>

        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Type</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>{component?.type || '-'}</div>
            )}
          </div>
        </div>

        <div className='flex h-5 items-center pt-6 text-sm'>
          <div className='w-32 text-gray-600'>
            <p>Flavor</p>
          </div>
          <div>
            {isLoading ? (
              <Skeleton className='h-5 w-40 rounded' />
            ) : (
              <div>{component?.flavor || '-'}</div>
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
                {component?.created
                  ? dayjs(component.created).format('DD/MM/YYYY, HH:mm')
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
                {component?.updated
                  ? dayjs(component.updated).format('DD/MM/YYYY, HH:mm')
                  : '-'}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ComponentConfigurations({
  component,
  isLoading,
}: {
  component?: StackComponent
  isLoading: boolean
}) {
  const isEmpty = !Object.keys(component?.configuration || {}).length

  return (
    <section className='flex flex-col gap-2'>
      <h3 className='text-lg font-semibold'>Component configurations</h3>

      {isLoading ? (
        <LoadingSpinner />
      ) : isEmpty ? (
        <p className='text-sm text-gray-500'>No configurations found</p>
      ) : (
        Object.entries(component?.configuration || {}).map(([key, value]) => (
          <div className='flex h-5 items-center pt-6 text-sm'>
            <div className='w-32 text-gray-600'>
              <p>{key}</p>
            </div>
            <div>
              {isLoading ? (
                <Skeleton className='h-5 w-40 rounded' />
              ) : (
                <div>{value?.toString() || '-'}</div>
              )}
            </div>
          </div>
        ))
      )}
    </section>
  )
}
