import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Root from '@src/services/Root'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//This Defines Tanstack Commands 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      onError: (error) => {
        if (error.response && error.response.status === 401) {
          // Handle JWT expiration
        }
      },
    },
    mutations: {
      onError: (error) => {
        if (error.response && error.response.status === 401) {
          // Handle JWT expiration
        }
      },
    },
  },
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Root />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right'/>
    </QueryClientProvider> 
    
  </StrictMode>,
)
