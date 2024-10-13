import { useQuery } from '@tanstack/react-query'
import { getStack, getStacks } from '@/api/stackAPI'

export function useStacks() {
  return useQuery({ queryFn: getStacks, queryKey: ['stacks'] })
}

export function useStack(stackId: string) {
  return useQuery({
    queryFn: () => getStack(stackId),
    queryKey: ['stacks', { stackId }],
  })
}
