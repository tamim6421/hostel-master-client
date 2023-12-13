import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <HelmetProvider>
      <QueryClientProvider client={queryClient}>

<AuthProvider>
<Toaster />
<RouterProvider router={router} />
</AuthProvider>
</QueryClientProvider>
  </HelmetProvider>


)
