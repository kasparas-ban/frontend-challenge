import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/providers/queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <></>
      </NextUIProvider>
    </QueryClientProvider>
  )
}

export default App
