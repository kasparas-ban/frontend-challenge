import { API_URL, CustomError, fetchJSON } from './config/apiConfig'
import { Stack } from '@/types/stack'

export function getStacks() {
  return fetchJSON<Stack[], CustomError>(`${API_URL}/stacks`, {
    defaultErrMsg: 'Failed to get stack list',
  })
}

export function getStack(stackId: string) {
  return fetchJSON<Stack, CustomError>(`${API_URL}/stacks/${stackId}`, {
    defaultErrMsg: 'Failed to get stack info',
  })
}
