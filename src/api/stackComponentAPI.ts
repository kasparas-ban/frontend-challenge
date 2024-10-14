import { API_URL, CustomError, fetchJSON } from './config/apiConfig'
import { StackComponent } from '@/types/stackComponent'

export function getStackComponents() {
  return fetchJSON<StackComponent[], CustomError>(`${API_URL}/components`, {
    defaultErrMsg: 'Failed to get stack component list',
  })
}

export function getStackComponent(componentId: string) {
  return fetchJSON<StackComponent, CustomError>(
    `${API_URL}/components/${componentId}`,
    {
      defaultErrMsg: 'Failed to get stack component info',
    }
  )
}
