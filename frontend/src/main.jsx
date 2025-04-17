import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {GoogleOAuthProvider} from "@react-oauth/google";

const queryClient = new QueryClient()



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <GoogleOAuthProvider>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </GoogleOAuthProvider>
      </QueryClientProvider>
  </StrictMode>,
)
