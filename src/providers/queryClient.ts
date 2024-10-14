import { QueryCache, QueryClient } from '@tanstack/react-query'
import { APIError, CustomError } from '@/api/config/apiConfig'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: APIError<CustomError>) => {
      // TODO: show notification message
      // title: error.message
      // subtitle: error.err?.detail
    },
  }),
})
