import { useQuery } from '@tanstack/react-query'

export function useStackComponents() {
  return useQuery({ queryKey: ['stack-components'] })
}

export function useStackComponent(componentId: string) {
  return useQuery({ queryKey: ['stack-components', { componentId }] })
}
