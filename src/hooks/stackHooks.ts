import { useQuery } from '@tanstack/react-query'

export function useStacks() {
  return useQuery({ queryKey: ['stacks'] })
}

export function useStack(stackId: string) {
  return useQuery({ queryKey: ['stacks', { stackId }] })
}
