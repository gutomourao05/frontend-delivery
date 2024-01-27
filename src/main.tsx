import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './routes/index.tsx'
import { QueryClientProvider } from 'react-query'
import queryClient from './services/queryClient.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>,
)
