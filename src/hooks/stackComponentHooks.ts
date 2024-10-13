import { useQuery } from '@tanstack/react-query'
import { getStackComponent, getStackComponents } from '@/api/stackComponentAPI'

export function useStackComponents() {
  return useQuery({
    queryFn: getStackComponents,
    queryKey: ['stack-components'],
  })
}

export function useStackComponent(componentId: string) {
  return useQuery({
    queryFn: () => getStackComponent(componentId),
    queryKey: ['stack-components', { componentId }],
  })
}
