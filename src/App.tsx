import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/providers/queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </QueryClientProvider>
  )
}

export default App
