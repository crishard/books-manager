import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import BookManager from './components/BookManager';
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BookManager />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
